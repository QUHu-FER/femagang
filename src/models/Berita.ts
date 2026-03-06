import mongoose, { Document, Schema } from 'mongoose';

export interface IBerita extends Document {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    image: string;
    category: string;
    tags: string[];
    author: string;
    views: number;
    featured: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const BeritaSchema = new Schema<IBerita>(
    {
        title: {
            type: String,
            required: [true, 'Judul berita wajib diisi'],
            trim: true,
            maxlength: [200, 'Judul maksimal 200 karakter'],
        },
        slug: {
            type: String,
            required: [true, 'Slug wajib diisi'],
            unique: true,
            lowercase: true,
            trim: true,
        },
        content: {
            type: String,
            required: [true, 'Konten berita wajib diisi'],
        },
        excerpt: {
            type: String,
            required: [true, 'Ringkasan berita wajib diisi'],
            maxlength: [500, 'Ringkasan maksimal 500 karakter'],
        },
        image: {
            type: String,
            default: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800',
        },
        category: {
            type: String,
            required: [true, 'Kategori berita wajib diisi'],
            enum: ['energi-terbarukan', 'pertambangan', 'kebijakan', 'pengumuman', 'kegiatan', 'migas'],
            default: 'kegiatan',
        },
        tags: {
            type: [String],
            default: [],
        },
        author: {
            type: String,
            required: [true, 'Penulis berita wajib diisi'],
            default: 'Tim ESDM Sumbar',
        },
        views: {
            type: Number,
            default: 0,
            min: 0,
        },
        featured: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

// Auto-generate slug dari title jika belum ada
BeritaSchema.pre('save', async function () {
    if (!this.slug && this.title) {
        this.slug = this.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    }
});

// Index untuk pencarian dan sorting (slug sudah terindex via unique:true di field definition)
BeritaSchema.index({ category: 1 });
BeritaSchema.index({ createdAt: -1 });
BeritaSchema.index({ featured: 1 });
BeritaSchema.index({ title: 'text', content: 'text' });

// Guard pattern untuk hot reload Next.js
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Berita = (mongoose.models.Berita as mongoose.Model<IBerita>) ||
    mongoose.model<IBerita>('Berita', BeritaSchema);

export default Berita;
