'use client';

import { useState } from 'react';
import { FaCalendarAlt, FaTag, FaEye, FaArrowRight } from 'react-icons/fa';
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  views: number;
  thumbnail: string;
  tags: string[];
  featured: boolean;
}

interface NewsWithCategoriesProps {
  className?: string;
}

export default function NewsWithCategories({ className = "" }: NewsWithCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock data untuk demo
  const categories = [
    { id: 'all', name: 'Semua Berita', count: 24 },
    { id: 'energi-terbarukan', name: 'Energi Terbarukan', count: 8 },
    { id: 'pertambangan', name: 'Pertambangan', count: 6 },
    { id: 'kebijakan', name: 'Kebijakan', count: 5 },
    { id: 'pengumuman', name: 'Pengumuman', count: 3 },
    { id: 'kegiatan', name: 'Kegiatan', count: 2 }
  ];

  const allTags = [
    'Solar Panel', 'Geothermal', 'Izin Tambang', 'Regulasi', 'Sosialisasi', 
    'Biomassa', 'Hidroelektrik', 'Lingkungan', 'Investasi', 'Teknologi'
  ];

  const newsData: NewsItem[] = [
    {
      id: '1',
      title: 'Sumbar Targetkan 30% Energi Terbarukan pada 2030',
      excerpt: 'Pemerintah Provinsi Sumatera Barat menargetkan kontribusi energi terbarukan mencapai 30 persen dari total konsumsi energi pada tahun 2030.',
      category: 'energi-terbarukan',
      date: '2024-01-20',
      author: 'Tim ESDM Sumbar',
      views: 1250,
      thumbnail: '/api/placeholder/400/250',
      tags: ['Solar Panel', 'Geothermal', 'Biomassa'],
      featured: true
    },
    {
      id: '2',
      title: 'Revisi Peraturan Pertambangan Mendukung Investasi',
      excerpt: 'Dinas ESDM Sumbar melakukan revisi peraturan pertambangan untuk menarik investasi sambil menjaga kelestarian lingkungan.',
      category: 'pertambangan',
      date: '2024-01-18',
      author: 'Humas ESDM',
      views: 890,
      thumbnail: '/api/placeholder/400/250',
      tags: ['Izin Tambang', 'Regulasi', 'Investasi'],
      featured: false
    },
    {
      id: '3',
      title: 'Sosialisasi Program Hemat Energi di Sekolah-Sekolah',
      excerpt: 'Dinas ESDM mengadakan program sosialisasi hemat energi untuk meningkatkan kesadaran siswa tentang penggunaan energi yang efisien.',
      category: 'kegiatan',
      date: '2024-01-15',
      author: 'Bidang Energi',
      views: 650,
      thumbnail: '/api/placeholder/400/250',
      tags: ['Sosialisasi', 'Lingkungan'],
      featured: false
    },
    {
      id: '4',
      title: 'Pembangunan PLTS Rooftop di Gedung Pemerintahan',
      excerpt: 'Inisiatif pemasangan panel surya di atap gedung-gedung pemerintahan untuk mengurangi konsumsi listrik dari PLN.',
      category: 'energi-terbarukan',
      date: '2024-01-12',
      author: 'Bidang Energi',
      views: 1120,
      thumbnail: '/api/placeholder/400/250',
      tags: ['Solar Panel', 'Teknologi'],
      featured: true
    },
    {
      id: '5',
      title: 'Pengumuman Hasil Tender Konsultan Teknis',
      excerpt: 'Hasil seleksi tender untuk konsultan teknis proyek pengembangan energi terbarukan di kawasan pesisir Sumbar.',
      category: 'pengumuman',
      date: '2024-01-10',
      author: 'Bagian Pengadaan',
      views: 445,
      thumbnail: '/api/placeholder/400/250',
      tags: ['Regulasi'],
      featured: false
    },
    {
      id: '6',
      title: 'Potensi Energi Panas Bumi Sumbar Capai 835 MW',
      excerpt: 'Studi terbaru menunjukkan potensi energi panas bumi di Sumatera Barat mencapai 835 MW yang dapat dikembangkan.',
      category: 'energi-terbarukan',
      date: '2024-01-08',
      author: 'Tim Penelitian',
      views: 980,
      thumbnail: '/api/placeholder/400/250',
      tags: ['Geothermal', 'Teknologi'],
      featured: false
    }
  ];

  const filteredNews = newsData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesTag = !selectedTag || item.tags.includes(selectedTag);
    return matchesCategory && matchesTag;
  });

  const sortedNews = [...filteredNews].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'most-viewed':
        return b.views - a.views;
      case 'alphabetical':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = sortedNews.slice(startIndex, startIndex + itemsPerPage);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`bg-white dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Berita & Informasi ESDM
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Dapatkan informasi terbaru tentang energi, sumber daya mineral, dan kegiatan Dinas ESDM Sumatera Barat
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Kategori Berita
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Tags and Sort */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Tags Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Filter berdasarkan Tag
              </label>
              <select
                value={selectedTag}
                onChange={(e) => {
                  setSelectedTag(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Semua Tag</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Urutkan berdasarkan
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="latest">Terbaru</option>
                <option value="oldest">Terlama</option>
                <option value="most-viewed">Paling Banyak Dilihat</option>
                <option value="alphabetical">A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Menampilkan {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedNews.length)} dari {sortedNews.length} berita
          </p>
          {(selectedCategory !== 'all' || selectedTag) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTag('');
                setCurrentPage(1);
              }}
              className="text-blue-500 hover:text-blue-600 text-sm font-medium"
            >
              Hapus Filter
            </button>
          )}
        </div>

        {/* News Grid */}
        {paginatedNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedNews.map((news) => (
              <article key={news.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Featured Badge */}
                {news.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Unggulan
                    </span>
                  </div>
                )}

                {/* Thumbnail */}
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                  <img
                    src={news.thumbnail}
                    alt={news.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,' + encodeURIComponent(`
                        <svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#f3f4f6"/>
                          <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="18">No Image</text>
                        </svg>
                      `);
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                      {categories.find(cat => cat.id === news.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {news.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                      >
                        <FaTag className="inline w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                    {news.tags.length > 2 && (
                      <span className="text-gray-500 text-xs">
                        +{news.tags.length - 2} lainnya
                      </span>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="w-3 h-3" />
                        {formatDate(news.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaEye className="w-3 h-3" />
                        {news.views.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {news.author}
                    </span>
                    <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium">
                      Baca Selengkapnya
                      <FaArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <MdOutlineEnergySavingsLeaf className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Tidak ada berita ditemukan
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Coba ubah filter atau kata kunci pencarian Anda
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Sebelumnya
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Selanjutnya
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
