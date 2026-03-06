// scripts/importNews.js
// Run with: npm run seed
// Fetches 1000 news from external API and imports to MongoDB Atlas.

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const mongoose = require('mongoose');

// ─── Load .env.local ──────────────────────────────────────────────────────────
function loadEnv() {
    const envPath = path.resolve(process.cwd(), '.env.local');
    if (!fs.existsSync(envPath)) {
        console.error('❌  .env.local tidak ditemukan');
        process.exit(1);
    }
    for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
        const t = line.trim();
        if (!t || t.startsWith('#')) continue;
        const idx = t.indexOf('=');
        if (idx === -1) continue;
        const key = t.slice(0, idx).trim();
        const val = t.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
        if (!process.env[key]) process.env[key] = val;
    }
}

loadEnv();

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    console.error('❌  MONGODB_URI belum diset di .env.local');
    process.exit(1);
}

// ─── Mongoose Schema (mirror dari Berita.ts) ──────────────────────────────────
const BeritaSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true, maxlength: 200 },
        slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
        content: { type: String, required: true },
        excerpt: { type: String, required: true, maxlength: 500 },
        image: { type: String },
        category: {
            type: String,
            required: true,
            enum: ['energi-terbarukan', 'pertambangan', 'kebijakan', 'pengumuman', 'kegiatan', 'migas'],
            default: 'kegiatan',
        },
        tags: { type: [String], default: [] },
        author: { type: String, default: 'Tim ESDM Sumbar' },
        views: { type: Number, default: 0 },
        featured: { type: Boolean, default: false },
    },
    { timestamps: true }
);

// ─── Fetch helper (pakai built-in http/https tanpa axios) ─────────────────────
function fetchJSON(url) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        let raw = '';
        const req = client.get(url, { timeout: 30000 }, (res) => {
            res.setEncoding('utf-8');
            res.on('data', (chunk) => (raw += chunk));
            res.on('end', () => {
                try { resolve(JSON.parse(raw)); }
                catch (e) { reject(new Error('JSON parse error: ' + e.message)); }
            });
        });
        req.on('error', reject);
        req.on('timeout', () => { req.destroy(); reject(new Error('Request timeout')); });
    });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const CATEGORIES = ['energi-terbarukan', 'pertambangan', 'kebijakan', 'pengumuman', 'kegiatan', 'migas'];

const PLACEHOLDER_IMAGES = [
    'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800',
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800',
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800',
    'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800',
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
];

function makeSlug(title, index) {
    const base = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
        .slice(0, 70);
    return `${base}-${index}`;
}

function parseCreatedAt(date, time) {
    try {
        // date = "8/28/2025", time = "9:12 AM"
        const d = new Date(`${date} ${time}`);
        if (!isNaN(d.getTime())) return d;
    } catch (_) { /* fall through */ }
    return new Date();
}

function transformRecord(item, index) {
    const title = (item.judul_berita || `Berita ESDM #${index + 1}`).trim().slice(0, 199);
    const content = (item.deskripsi || '').trim() || 'Konten berita tidak tersedia.';
    const excerpt = content.slice(0, 497).trimEnd() + (content.length > 497 ? '...' : '');

    return {
        title,
        slug: makeSlug(title, index + 1),
        content,
        excerpt,
        category: CATEGORIES[index % CATEGORIES.length],   // distribusi merata
        image: PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length],
        tags: [],
        author: 'Tim ESDM Sumbar',
        views: Math.floor(Math.random() * 800),
        featured: index < 6,                               // 6 berita unggulan
        createdAt: parseCreatedAt(item.date, item.time),
    };
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
    // 1. Fetch dari API
    const API_URL = 'https://beritabe.onrender.com/berita';
    console.log(`🌐  Mengambil data dari ${API_URL} ...`);
    const apiData = await fetchJSON(API_URL);

    const records = Array.isArray(apiData) ? apiData : apiData.data ?? [];
    console.log(`📦  Total data diterima : ${records.length} artikel`);

    if (records.length === 0) {
        console.error('❌  API tidak mengembalikan data. Coba lagi nanti.');
        process.exit(1);
    }

    // 2. Koneksi MongoDB
    console.log('🔌  Menghubungkan ke MongoDB...');
    await mongoose.connect(MONGODB_URI, {
        serverSelectionTimeoutMS: 10000,
        connectTimeoutMS: 10000,
    });
    console.log('✅  Terhubung ke MongoDB');

    const Berita = mongoose.models.Berita || mongoose.model('Berita', BeritaSchema);

    // 3. Hapus data lama
    const deleted = await Berita.deleteMany({});
    console.log(`🗑️   Data lama dihapus   : ${deleted.deletedCount} dokumen`);

    // 4. Transform + insert
    const docs = records.map(transformRecord);

    console.log(`📝  Menyimpan ${docs.length} artikel ke MongoDB...`);
    const result = await Berita.insertMany(docs, { ordered: false });
    console.log(`\n🎉  ${result.length} news articles imported successfully\n`);

    // 5. Ringkasan per kategori
    const summary = {};
    for (const d of docs) summary[d.category] = (summary[d.category] || 0) + 1;
    console.log('📊  Distribusi kategori:');
    for (const [cat, count] of Object.entries(summary)) {
        console.log(`   ${String(cat).padEnd(22)}: ${count} artikel`);
    }

    await mongoose.disconnect();
    console.log('\n🔌  Koneksi ditutup. Import selesai!');
}

main().catch((err) => {
    console.error('\n❌  Error:', err.message);
    process.exit(1);
});
