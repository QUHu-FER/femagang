'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    PlusCircle,
    Edit,
    Trash2,
    Eye,
    Newspaper,
    TrendingUp,
    Star,
    Search,
    Filter,
    ChevronLeft,
    ChevronRight,
    Loader2,
    AlertCircle,
    CheckCircle,
    Tag,
    Calendar,
    User,
    RefreshCw,
} from 'lucide-react';

interface NewsItem {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    image: string;
    author: string;
    views: number;
    featured: boolean;
    createdAt: string;
}

const CATEGORY_LABELS: Record<string, string> = {
    'energi-terbarukan': 'Energi Terbarukan',
    pertambangan: 'Pertambangan',
    kebijakan: 'Kebijakan',
    pengumuman: 'Pengumuman',
    kegiatan: 'Kegiatan',
    migas: 'Migas',
};

const CATEGORY_COLORS: Record<string, string> = {
    'energi-terbarukan': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    pertambangan: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    kebijakan: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    pengumuman: 'bg-red-500/20 text-red-400 border-red-500/30',
    kegiatan: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    migas: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
};

export default function AdminDashboardPage() {
    const [berita, setBerita] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [total, setTotal] = useState(0);
    const [deleting, setDeleting] = useState<string | null>(null);
    const [toast, setToast] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);
    const [stats, setStats] = useState({ total: 0, featured: 0, totalViews: 0 });

    const showToast = (type: 'success' | 'error', msg: string) => {
        setToast({ type, msg });
        setTimeout(() => setToast(null), 3500);
    };

    const fetchBerita = useCallback(async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page: String(page),
                limit: '8',
                ...(search && { search }),
                ...(category && { category }),
            });
            const res = await fetch(`/api/berita?${params}`, { credentials: 'include' });
            const data = await res.json();
            if (data.success) {
                setBerita(data.data);
                setTotalPages(data.pagination.totalPages);
                setTotal(data.pagination.total);
            }
        } catch {
            showToast('error', 'Gagal mengambil data berita');
        } finally {
            setLoading(false);
        }
    }, [page, search, category]);

    const fetchStats = useCallback(async () => {
        try {
            const res = await fetch('/api/berita/stats', { credentials: 'include' });
            const data = await res.json();
            if (data.success) {
                setStats({
                    total: data.data.total,
                    featured: data.data.featured,
                    totalViews: data.data.totalViews,
                });
            }
        } catch { /* silent */ }
    }, []);

    useEffect(() => {
        fetchBerita();
        fetchStats();
    }, [fetchBerita, fetchStats]);

    const handleDelete = async (slug: string, title: string) => {
        if (!confirm(`Hapus berita "${title}"?\n\nTindakan ini tidak dapat dibatalkan.`)) return;
        setDeleting(slug);
        try {
            const res = await fetch(`/api/berita/${slug}`, {
                method: 'DELETE',
                credentials: 'include',
            });
            const data = await res.json();
            if (data.success) {
                showToast('success', 'Berita berhasil dihapus');
                fetchBerita();
                fetchStats();
            } else {
                showToast('error', data.error || 'Gagal menghapus berita');
            }
        } catch {
            showToast('error', 'Terjadi kesalahan jaringan');
        } finally {
            setDeleting(null);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPage(1);
        fetchBerita();
    };

    return (
        <div className="space-y-6">
            {/* Toast Notification */}
            {toast && (
                <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border text-sm font-medium transition-all duration-300 ${toast.type === 'success'
                    ? 'bg-emerald-900/90 border-emerald-500/40 text-emerald-300'
                    : 'bg-red-900/90 border-red-500/40 text-red-300'
                    } backdrop-blur-md`}>
                    {toast.type === 'success'
                        ? <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
                    {toast.msg}
                </div>
            )}

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Dashboard Berita</h1>
                    <p className="text-slate-400 text-sm mt-1">Kelola semua berita ESDM Sumbar</p>
                </div>
                <Link
                    href="/admin/berita/baru"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                    <PlusCircle className="w-4 h-4" />
                    Tambah Berita
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                    {
                        label: 'Total Berita',
                        value: stats.total,
                        icon: Newspaper,
                        color: 'from-blue-600 to-blue-500',
                        glow: 'shadow-blue-500/20',
                        bg: 'bg-blue-500/10 border-blue-500/20',
                    },
                    {
                        label: 'Berita Unggulan',
                        value: stats.featured,
                        icon: Star,
                        color: 'from-amber-500 to-amber-400',
                        glow: 'shadow-amber-500/20',
                        bg: 'bg-amber-500/10 border-amber-500/20',
                    },
                    {
                        label: 'Total Tayangan',
                        value: stats.totalViews.toLocaleString('id-ID'),
                        icon: TrendingUp,
                        color: 'from-emerald-500 to-emerald-400',
                        glow: 'shadow-emerald-500/20',
                        bg: 'bg-emerald-500/10 border-emerald-500/20',
                    },
                ].map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.label} className={`relative overflow-hidden bg-slate-900/80 border ${stat.bg} rounded-2xl p-5 backdrop-blur-sm`}>
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">{stat.label}</p>
                                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                                </div>
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg ${stat.glow}`}>
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <div className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full opacity-10 blur-xl`} />
                        </div>
                    );
                })}
            </div>

            {/* Filters */}
            <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Cari judul, konten, atau penulis..."
                            className="w-full bg-slate-800/80 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                        />
                    </div>
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        <select
                            value={category}
                            onChange={(e) => { setCategory(e.target.value); setPage(1); fetchBerita(); }}
                            className="bg-slate-800/80 border border-white/10 rounded-xl pl-10 pr-8 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
                        >
                            <option value="">Semua Kategori</option>
                            {Object.entries(CATEGORY_LABELS).map(([val, label]) => (
                                <option key={val} value={val}>{label}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-xl transition-colors"
                    >
                        <Search className="w-4 h-4" />
                        Cari
                    </button>
                    <button
                        type="button"
                        onClick={() => { setSearch(''); setCategory(''); setPage(1); fetchBerita(); }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-xl transition-colors"
                    >
                        <RefreshCw className="w-4 h-4" />
                    </button>
                </form>
            </div>

            {/* Table */}
            <div className="bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                    <p className="text-white font-medium text-sm">
                        {total > 0 ? `${total} berita ditemukan` : 'Daftar Berita'}
                    </p>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-3">
                        <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
                        <p className="text-slate-400 text-sm">Memuat data berita...</p>
                    </div>
                ) : berita.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-3">
                        <Newspaper className="w-12 h-12 text-slate-600" />
                        <p className="text-slate-400 font-medium">Belum ada berita</p>
                        <Link href="/admin/berita/baru" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                            <PlusCircle className="w-4 h-4" /> Tambah berita pertama
                        </Link>
                    </div>
                ) : (
                    <div className="divide-y divide-white/5">
                        {berita.map((item) => (
                            <div key={item._id} className="flex items-start gap-4 p-4 hover:bg-white/5 transition-colors group">
                                {/* Thumbnail */}
                                <div className="flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden bg-slate-800 relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        unoptimized
                                    />
                                    {item.featured && (
                                        <div className="absolute top-1 left-1">
                                            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="text-white font-medium text-sm leading-snug line-clamp-2 group-hover:text-blue-300 transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2 mt-2">
                                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[item.category] || 'bg-slate-500/20 text-slate-400 border-slate-500/30'}`}>
                                            <Tag className="w-2.5 h-2.5" />
                                            {CATEGORY_LABELS[item.category] || item.category}
                                        </span>

                                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(item.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </span>

                                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                                            <User className="w-3 h-3" />
                                            {item.author}
                                        </span>

                                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                                            <Eye className="w-3 h-3" />
                                            {item.views.toLocaleString('id-ID')}
                                        </span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Link
                                        href={`/berita/${item.slug}`}
                                        target="_blank"
                                        title="Lihat di website"
                                        className="p-2 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                                    >
                                        <Eye className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href={`/admin/berita/edit/${item.slug}`}
                                        title="Edit berita"
                                        className="p-2 rounded-lg hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 transition-colors"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(item.slug, item.title)}
                                        disabled={deleting === item.slug}
                                        title="Hapus berita"
                                        className="p-2 rounded-lg hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors disabled:opacity-50"
                                    >
                                        {deleting === item.slug
                                            ? <Loader2 className="w-4 h-4 animate-spin" />
                                            : <Trash2 className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-between px-5 py-4 border-t border-white/10">
                        <p className="text-slate-400 text-xs">
                            Halaman {page} dari {totalPages}
                        </p>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setPage(p => Math.max(1, p - 1))}
                                disabled={page === 1}
                                className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                const pg = page <= 3 ? i + 1 : page + i - 2;
                                if (pg < 1 || pg > totalPages) return null;
                                return (
                                    <button
                                        key={pg}
                                        onClick={() => setPage(pg)}
                                        className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${pg === page
                                            ? 'bg-blue-600 text-white'
                                            : 'text-slate-400 hover:bg-white/10 hover:text-white'
                                            }`}
                                    >
                                        {pg}
                                    </button>
                                );
                            })}
                            <button
                                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                                className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
