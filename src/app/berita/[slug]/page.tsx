'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Eye, User, Tag, Share2, Clock } from 'lucide-react';
import Layout from '@/components/Layout';

interface BeritaDetail {
    _id: string;
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
    createdAt: string;
    updatedAt: string;
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
    'energi-terbarukan': 'bg-emerald-100 text-emerald-800',
    pertambangan: 'bg-amber-100 text-amber-800',
    kebijakan: 'bg-purple-100 text-purple-800',
    pengumuman: 'bg-red-100 text-red-800',
    kegiatan: 'bg-blue-100 text-blue-800',
    migas: 'bg-orange-100 text-orange-800',
};

export default function BeritaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const [berita, setBerita] = useState<BeritaDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [slug, setSlug] = useState('');
    const [relatedNews, setRelatedNews] = useState<BeritaDetail[]>([]);

    // Resolve params
    useEffect(() => {
        params.then((p) => setSlug(p.slug));
    }, [params]);

    useEffect(() => {
        if (!slug) return;
        const fetchBerita = async () => {
            try {
                const res = await fetch(`/api/berita/${slug}`);
                const data = await res.json();
                if (data.success) {
                    setBerita(data.data);
                    // Fetch related news from same category
                    const relRes = await fetch(`/api/berita?category=${data.data.category}&limit=3`);
                    const relData = await relRes.json();
                    if (relData.success) {
                        setRelatedNews(relData.data.filter((n: BeritaDetail) => n.slug !== slug).slice(0, 2));
                    }
                } else {
                    setNotFound(true);
                }
            } catch {
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        };
        fetchBerita();
    }, [slug]);

    const formatDate = (dateString: string) =>
        new Date(dateString).toLocaleDateString('id-ID', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        });

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({ title: berita?.title, url: window.location.href });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link disalin ke clipboard!');
        }
    };

    if (loading) {
        return (
            <Layout>
                <div className="min-h-screen bg-gray-50 pt-20">
                    <div className="max-w-4xl mx-auto px-4 py-12">
                        <div className="animate-pulse space-y-6">
                            <div className="h-8 bg-gray-200 rounded w-3/4" />
                            <div className="h-64 bg-gray-200 rounded-2xl" />
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-200 rounded" />
                                <div className="h-4 bg-gray-200 rounded w-5/6" />
                                <div className="h-4 bg-gray-200 rounded w-4/6" />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

    if (notFound || !berita) {
        return (
            <Layout>
                <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
                    <div className="text-center px-4">
                        <div className="text-6xl mb-4">📰</div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Berita Tidak Ditemukan</h1>
                        <p className="text-gray-500 mb-6">Berita yang Anda cari tidak ada atau telah dihapus.</p>
                        <Link href="/berita" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Berita
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }

    // Estimate read time
    const wordCount = berita.content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    return (
        <Layout>
            <div className="min-h-screen bg-gray-50">
                {/* Hero image */}
                <div className="relative h-56 sm:h-72 md:h-96 w-full bg-gray-800 overflow-hidden">
                    <Image
                        src={berita.image}
                        alt={berita.title}
                        fill
                        className="object-cover opacity-80"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Back button */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-8">
                        <Link
                            href="/berita"
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all"
                        >
                            <ArrowLeft className="w-4 h-4" /> Kembali
                        </Link>
                    </div>

                    {/* Category badge on hero */}
                    <div className="absolute bottom-6 left-4 sm:left-8">
                        <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full ${CATEGORY_COLORS[berita.category] || 'bg-blue-100 text-blue-800'}`}>
                            {CATEGORY_LABELS[berita.category] || berita.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl -mt-8 relative z-10 p-6 sm:p-8 md:p-10 mb-10">
                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                            {berita.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-100 mb-6">
                            <span className="flex items-center gap-1.5">
                                <User className="w-4 h-4 text-blue-500" />
                                {berita.author}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-blue-500" />
                                {formatDate(berita.createdAt)}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Eye className="w-4 h-4 text-blue-500" />
                                {berita.views.toLocaleString('id-ID')} tayangan
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-blue-500" />
                                ±{readTime} menit baca
                            </span>

                            <button
                                onClick={handleShare}
                                className="ml-auto flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
                            >
                                <Share2 className="w-3.5 h-3.5" /> Bagikan
                            </button>
                        </div>

                        {/* Excerpt */}
                        <p className="text-lg text-gray-600 italic mb-8 leading-relaxed border-l-4 border-blue-500 pl-5 bg-blue-50/50 py-3 rounded-r-lg">
                            {berita.excerpt}
                        </p>

                        {/* Article body */}
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {berita.content}
                        </div>

                        {/* Tags */}
                        {berita.tags?.length > 0 && (
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <div className="flex flex-wrap items-center gap-2">
                                    <Tag className="w-4 h-4 text-gray-400" />
                                    {berita.tags.map((tag) => (
                                        <span key={tag} className="bg-gray-100 hover:bg-blue-100 hover:text-blue-700 text-gray-600 text-sm px-3 py-1 rounded-full transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Related News */}
                    {relatedNews.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-xl font-bold text-gray-900 mb-5">Berita Terkait</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {relatedNews.map((item) => (
                                    <Link key={item._id} href={`/berita/${item.slug}`} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                                        <div className="relative h-36 overflow-hidden bg-gray-200">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                unoptimized
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm group-hover:text-blue-600 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-500 text-xs mt-2">
                                                {new Date(item.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Back to all news */}
                    <div className="text-center pb-12">
                        <Link
                            href="/berita"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                        >
                            <ArrowLeft className="w-4 h-4" /> Lihat Semua Berita
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
