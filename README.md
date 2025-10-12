# 🏛️ Website Dinas ESDM Sumatera Barat - UPDATED Sept 2025

Website resmi Dinas Energi dan Sumber Daya Mineral (ESDM) Provinsi Sumatera Barat yang dibangun dengan teknologi modern Next.js dan Tailwind CSS.

## ⚡ Fitur Utama (Updated)

- Modern & Responsif — Desain elegan dan mobile-friendly
- Interactive Hero Section — Slider otomatis dengan efek particles dan animasi typing
- Glassmorphism Design — Efek kaca modern pada komponen
- Animated Statistics — Counter animasi untuk data statistik
- News Management — Sistem berita dengan kategori dan preview
- Google Maps Integration — Lokasi kantor terintegrasi dengan Google Maps

## 🛠️ Teknologi yang Digunakan

- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Animasi: Framer Motion
- Icons: Heroicons
- Font: Inter
- Maps: Google Maps Embed

## 🚀 Getting Started

### Prasyarat
- Node.js v18+
- Package manager (npm, yarn, pnpm, atau bun)

### Instalasi
$ npm install

### Menjalankan Development Server
$ npm run dev
# atau
$ yarn dev
# atau
$ pnpm dev
# atau
$ bun dev

Buka http://localhost:3000 di browser.

## 📁 Struktur Project

```bash
src/
├── app/                    # App Router pages
│   ├── berita/             # Halaman berita
│   ├── galeri/             # Halaman galeri
│   ├── kontak/             # Halaman kontak
│   ├── layanan/            # Halaman layanan
│   ├── profil/             # Halaman profil
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/             # Komponen reusable
│   ├── AnimatedCounter.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── NewsCard.tsx
│   ├── ParticlesBackground.tsx
│   └── TypewriterText.tsx
└── hooks/                  # Custom hooks
    └── useIntersectionObserver.ts
```
## 🎯 Halaman yang Tersedia

- /           → Beranda
- /profil     → Profil dinas, visi & misi
- /berita     → Daftar berita & artikel
- /layanan    → Daftar layanan yang disediakan
- /galeri     → Galeri foto & video
- /kontak     → Informasi kontak & lokasi

## 📞 Kontak

Dinas ESDM Sumatera Barat  
📧 Email: esdm@sumbarprov.go.id  
📞 Telepon: (0751) 7053781  
📍 Alamat: Jalan Jend. Sudirman No. 2, Padang

⚡ Powered by ESDM Sumatera Barat — Energi Berkelanjutan untuk Masa Depan

## 🚀 Deployment

### Deploy ke Vercel
1. Push code ke GitHub repository
2. Connect repository ke Vercel
3. Deploy otomatis akan berjalan

### Deploy Manual
$ npm run build  
$ npm start
