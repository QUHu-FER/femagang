'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
    Save,
    ArrowLeft,
    Loader2,
    AlertCircle,
    CheckCircle,
    Star,
    Image as ImageIcon,
    FileText,
    User,
    Tag,
} from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
    { value: 'energi-terbarukan', label: 'Energi Terbarukan', color: 'text-emerald-400' },
    { value: 'pertambangan', label: 'Pertambangan', color: 'text-amber-400' },
    { value: 'kebijakan', label: 'Kebijakan', color: 'text-purple-400' },
    { value: 'pengumuman', label: 'Pengumuman', color: 'text-red-400' },
    { value: 'kegiatan', label: 'Kegiatan', color: 'text-blue-400' },
    { value: 'migas', label: 'Migas', color: 'text-orange-400' },
];

const SUGGESTED_TAGS = [
    'Solar Panel', 'Geothermal', 'Biomassa', 'Hidroelektrik',
    'Izin Tambang', 'Regulasi', 'Investasi', 'Teknologi',
    'Sosialisasi', 'Lingkungan', 'PLTS', 'Keselamatan',
];

interface BeritaFormProps {
    mode: 'create' | 'edit';
    initialData?: {
        title: string;
        slug: string;
        content: string;
        excerpt: string;
        image: string;
        category: string;
        tags: string[];
        author: string;
        featured: boolean;
    };
    onSubmit: (data: {
        title: string;
        content: string;
        excerpt: string;
        image: string;
        category: string;
        tags: string[];
        author: string;
        featured: boolean;
    }) => Promise<{ success: boolean; error?: string; slug?: string }>;
}

export default function BeritaForm({ mode, initialData, onSubmit }: BeritaFormProps) {
    const router = useRouter();
    const [form, setForm] = useState({
        title: initialData?.title || '',
        content: initialData?.content || '',
        excerpt: initialData?.excerpt || '',
        image: initialData?.image || '',
        category: initialData?.category || 'kegiatan',
        tags: initialData?.tags || [],
        author: initialData?.author || 'Tim ESDM Sumbar',
        featured: initialData?.featured || false,
    });
    const [tagInput, setTagInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [imageError, setImageError] = useState(false);

    const handleAddTag = (tag: string) => {
        const trimmed = tag.trim();
        if (trimmed && !form.tags.includes(trimmed)) {
            setForm({ ...form, tags: [...form.tags, trimmed] });
        }
        setTagInput('');
    };

    const handleRemoveTag = (tag: string) => {
        setForm({ ...form, tags: form.tags.filter((t) => t !== tag) });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.title || !form.content || !form.excerpt || !form.category) {
            setError('Judul, ringkasan, konten, dan kategori wajib diisi.');
            return;
        }
        setLoading(true);
        setError('');
        setSuccess('');

        const result = await onSubmit(form);
        if (result.success) {
            setSuccess(mode === 'create' ? 'Berita berhasil ditambahkan!' : 'Berita berhasil diperbarui!');
            setTimeout(() => router.push('/admin'), 1500);
        } else {
            setError(result.error || 'Terjadi kesalahan');
        }
        setLoading(false);
    };

    const previewImage = form.image && !imageError ? form.image : null;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    href="/admin"
                    className="p-2 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        {mode === 'create' ? 'Tambah Berita Baru' : 'Edit Berita'}
                    </h1>
                    <p className="text-slate-400 text-sm mt-0.5">
                        {mode === 'create' ? 'Buat dan publikasikan berita baru' : 'Perbarui informasi berita'}
                    </p>
                </div>
            </div>

            {/* Alerts */}
            {error && (
                <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    {error}
                </div>
            )}
            {success && (
                <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl p-4 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Main Column */}
                    <div className="xl:col-span-2 space-y-5">
                        {/* Title */}
                        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                            <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-blue-400" />
                                Judul Berita <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                                placeholder="Masukkan judul berita yang menarik..."
                                required
                                className="w-full bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-sm"
                            />
                            <p className="text-slate-500 text-xs mt-2">{form.title.length}/200 karakter</p>
                        </div>

                        {/* Excerpt */}
                        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                            <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-blue-400" />
                                Ringkasan / Excerpt <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                value={form.excerpt}
                                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                                placeholder="Tulis ringkasan singkat berita (ditampilkan di kartu berita)..."
                                rows={3}
                                required
                                maxLength={500}
                                className="w-full bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-sm resize-none"
                            />
                            <p className="text-slate-500 text-xs mt-2">{form.excerpt.length}/500 karakter</p>
                        </div>

                        {/* Content */}
                        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                            <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-blue-400" />
                                Konten Lengkap <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                value={form.content}
                                onChange={(e) => setForm({ ...form, content: e.target.value })}
                                placeholder="Tulis isi berita lengkap di sini..."
                                rows={14}
                                required
                                className="w-full bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-sm font-mono resize-none"
                            />
                            <p className="text-slate-500 text-xs mt-2">{form.content.length} karakter</p>
                        </div>
                    </div>

                    {/* Side Column */}
                    <div className="space-y-5">
                        {/* Publish Button - Sticky */}
                        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                            <h3 className="text-sm font-semibold text-slate-300 mb-4">Publikasi</h3>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:from-blue-900 disabled:to-blue-900 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:cursor-not-allowed text-sm"
                            >
                                {loading ? (
                                    <><Loader2 className="w-4 h-4 animate-spin" /> Menyimpan...</>
                                ) : (
                                    <><Save className="w-4 h-4" /> {mode === 'create' ? 'Publikasikan Berita' : 'Simpan Perubahan'}</>
                                )}
                            </button>

                            {/* Featured toggle */}
                            <div className="mt-4 flex items-center justify-between pt-4 border-t border-white/10">
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-amber-400" />
                                    <span className="text-sm text-slate-300">Berita Unggulan</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setForm({ ...form, featured: !form.featured })}
                                    className={`relative w-10 h-6 rounded-full transition-colors duration-200 focus:outline-none ${form.featured ? 'bg-amber-500' : 'bg-slate-700'
                                        }`}
                                >
                                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${form.featured ? 'translate-x-4' : 'translate-x-0'}`} />
                                </button>
                            </div>
                        </div>

                        {/* Category */}
                        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                            <label className="block text-sm font-semibold text-slate-300 mb-3">
                                Kategori <span className="text-red-400">*</span>
                            </label>
                            <div className="space-y-2">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat.value}
                                        type="button"
                                        onClick={() => setForm({ ...form, category: cat.value })}
                                        className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all duration-150 flex items-center gap-2 ${form.category === cat.value
                                                ? 'bg-blue-600/20 border border-blue-500/40 text-white'
                                                : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
                                            }`}
                                    >
                                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${form.category === cat.value ? 'bg-blue-400' : 'bg-slate-600'
                                            }`} />
                                        <span className={form.category === cat.value ? cat.color : ''}>{cat.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                            <label className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                                <ImageIcon className="w-4 h-4 text-blue-400" />
                                URL Gambar
                            </label>
                            <input
                                type="url"
                                value={form.image}
                                onChange={(e) => { setForm({ ...form, image: e.target.value }); setImageError(false); }}
                                placeholder="https://example.com/gambar.jpg"
                                className="w-full bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-sm"
                            />

                            {/* Image preview */}
                            {previewImage && (
                                <div className="mt-3 relative h-32 rounded-xl overflow-hidden bg-slate-800">
                                    <Image
                                        src={previewImage}
                                        alt="Preview"
                                        fill
                                        className="object-cover"
                                        onError={() => setImageError(true)}
                                        unoptimized
                                    />
                                </div>
                            )}
                            {!previewImage && (
                                <div className="mt-3 h-24 rounded-xl bg-slate-800/50 border border-dashed border-white/10 flex items-center justify-center">
                                    <div className="text-center">
                                        <ImageIcon className="w-8 h-8 text-slate-600 mx-auto mb-1" />
                                        <p className="text-slate-500 text-xs">Preview gambar</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Author */}
                        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                            <label className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                                <User className="w-4 h-4 text-blue-400" />
                                Penulis
                            </label>
                            <input
                                type="text"
                                value={form.author}
                                onChange={(e) => setForm({ ...form, author: e.target.value })}
                                placeholder="Nama penulis"
                                className="w-full bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-sm"
                            />
                        </div>

                        {/* Tags */}
                        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                            <label className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                                <Tag className="w-4 h-4 text-blue-400" />
                                Tags
                            </label>

                            {/* Tag input */}
                            <div className="flex gap-2 mb-3">
                                <input
                                    type="text"
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') { e.preventDefault(); handleAddTag(tagInput); }
                                    }}
                                    placeholder="Tambah tag baru..."
                                    className="flex-1 bg-slate-800/80 border border-white/10 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleAddTag(tagInput)}
                                    className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm transition-colors"
                                >
                                    +
                                </button>
                            </div>

                            {/* Current tags */}
                            {form.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {form.tags.map((tag) => (
                                        <span key={tag} className="inline-flex items-center gap-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs px-2.5 py-1 rounded-full">
                                            {tag}
                                            <button type="button" onClick={() => handleRemoveTag(tag)} className="hover:text-red-400 transition-colors ml-0.5">×</button>
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Suggested tags */}
                            <div>
                                <p className="text-xs text-slate-500 mb-2">Saran tag:</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {SUGGESTED_TAGS.filter((t) => !form.tags.includes(t)).slice(0, 8).map((tag) => (
                                        <button
                                            key={tag}
                                            type="button"
                                            onClick={() => handleAddTag(tag)}
                                            className="text-xs px-2 py-1 rounded-full bg-slate-700/80 text-slate-400 hover:bg-slate-600 hover:text-white transition-colors border border-white/5"
                                        >
                                            + {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
