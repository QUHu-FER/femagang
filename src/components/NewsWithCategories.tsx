'use client';

import { useState, useEffect, useCallback } from 'react';
import { FaCalendarAlt, FaTag, FaEye, FaArrowRight, FaSearch, FaTimes } from 'react-icons/fa';
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from '@/components/Pagination';

interface NewsItem {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  createdAt: string;
  author: string;
  views: number;
  image: string;
  tags: string[];
  featured: boolean;
}

interface PaginationData {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface NewsWithCategoriesProps {
  className?: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  'all': 'Semua Berita',
  'energi-terbarukan': 'Energi Terbarukan',
  'pertambangan': 'Pertambangan',
  'kebijakan': 'Kebijakan',
  'pengumuman': 'Pengumuman',
  'kegiatan': 'Kegiatan',
  'migas': 'Migas',
};

export default function NewsWithCategories({ className = '' }: NewsWithCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const itemsPerPage = 6;

  const [news, setNews] = useState<NewsItem[]>([]);
  const [pagination, setPagination] = useState<PaginationData>({ total: 0, page: 1, limit: 6, totalPages: 1 });
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams({
        page: String(currentPage),
        limit: String(itemsPerPage),
        sortBy: sortBy === 'latest' ? 'createdAt' : sortBy === 'oldest' ? 'oldest' : sortBy === 'most-viewed' ? 'views' : 'createdAt',
        ...(selectedCategory !== 'all' && { category: selectedCategory }),
        ...(search && { search }),
      });

      const res = await fetch(`/api/berita?${params}`);
      if (!res.ok) throw new Error('Gagal mengambil data');
      const data = await res.json();

      if (data.success) {
        setNews(data.data);
        setPagination(data.pagination);
      }
    } catch {
      setError('Gagal memuat berita. Coba muat ulang halaman.');
    } finally {
      setLoading(false);
    }
  }, [currentPage, selectedCategory, sortBy, search, itemsPerPage]);

  // Single request gets ALL counts (total + all categories) via $facet aggregation
  const fetchCategoryCounts = useCallback(async () => {
    try {
      const res = await fetch('/api/berita/stats');
      const data = await res.json();
      if (data.success) {
        setCategoryCounts({
          all: data.data.total,
          ...data.data.categoryCounts,   // { 'kegiatan': 166, 'migas': 166, ... }
        });
      }
    } catch { /* silent */ }
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  useEffect(() => {
    fetchCategoryCounts();
  }, [fetchCategoryCounts]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchInput('');
    setSearch('');
    setCurrentPage(1);
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const categories = Object.entries(CATEGORY_LABELS).map(([id, name]) => ({
    id,
    name,
    count: categoryCounts[id] ?? 0,
  }));

  return (
    <div className={`bg-gradient-to-b from-blue-600 via-blue-500 to-white ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 pt-12">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-md">
            Berita &amp; Informasi ESDM
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow">
            Dapatkan informasi terbaru tentang energi, sumber daya mineral, dan kegiatan Dinas ESDM Sumatera Barat
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 mb-8 shadow-lg">
          {/* Search bar */}
          <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-6">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Cari berita..."
                className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm"
              />
              {searchInput && (
                <button type="button" onClick={handleClearSearch} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <FaTimes className="w-3 h-3" />
                </button>
              )}
            </div>
            <button type="submit" className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors">
              Cari
            </button>
          </form>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Kategori Berita</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                    }`}
                >
                  {category.name}{category.count > 0 ? ` (${category.count})` : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Urutkan:</label>
            <select
              value={sortBy}
              onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
              className="px-3 py-2 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm"
            >
              <option value="latest">Terbaru</option>
              <option value="oldest">Terlama</option>
              <option value="most-viewed">Paling Banyak Dilihat</option>
            </select>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            {loading
              ? 'Memuat...'
              : `Menampilkan ${news.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}–${Math.min(currentPage * itemsPerPage, pagination.total)} dari ${pagination.total} berita`}
          </p>
          {(selectedCategory !== 'all' || search) && (
            <button
              onClick={() => { setSelectedCategory('all'); setSearch(''); setSearchInput(''); setCurrentPage(1); }}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
            >
              <FaTimes className="w-3 h-3" /> Hapus Filter
            </button>
          )}
        </div>

        {/* News Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-48 bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <MdOutlineEnergySavingsLeaf className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">{error}</p>
          </div>
        ) : news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {news.map((item) => (
              <article key={item._id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative">
                {item.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
                      ⭐ Unggulan
                    </span>
                  </div>
                )}

                {/* Thumbnail */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src={item.image || 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800'}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800';
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                      {CATEGORY_LABELS[item.category] || item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{item.excerpt}</p>

                  {/* Tags */}
                  {item.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs flex items-center gap-1">
                          <FaTag className="w-2.5 h-2.5" />{tag}
                        </span>
                      ))}
                      {item.tags.length > 2 && (
                        <span className="text-gray-400 text-xs">+{item.tags.length - 2}</span>
                      )}
                    </div>
                  )}

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-blue-400" />
                      {formatDate(item.createdAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaEye className="text-blue-400" />
                      {item.views?.toLocaleString('id-ID') || 0}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">{item.author}</span>
                    <Link
                      href={`/berita/${item.slug}`}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                    >
                      Baca Selengkapnya
                      <FaArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <MdOutlineEnergySavingsLeaf className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada berita ditemukan</h3>
            <p className="text-gray-500 text-sm">Coba ubah filter atau kata kunci pencarian Anda</p>
          </div>
        )}

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={pagination.totalPages}
            onPageChange={(p) => { setCurrentPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="mt-4 mb-12"
          />
        )}
      </div>
    </div>
  );
}