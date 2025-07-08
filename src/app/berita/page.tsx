'use client';

import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  EyeIcon,
  TagIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import Layout from '@/components/Layout';
import NewsCard from '@/components/NewsCard';

export default function BeritaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['Semua', 'Program', 'Pengumuman', 'Kegiatan', 'Berita Utama'];
  
  const newsData = [
    {
      id: 1,
      title: "Renstra Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana 2021-2026",
      date: "13 Juni 2025",
      category: "Program",
      views: 380,
      excerpt: "Rencana strategis untuk pemberdayaan perempuan dan perlindungan anak dalam periode 2021-2026 yang mencakup berbagai program inovatif dan berkelanjutan untuk meningkatkan kualitas hidup masyarakat Sumatera Barat."
    },
    {
      id: 2,
      title: "PERJANJIAN KINERJA DP3AP2KB TAHUN 2024",
      date: "13 Juni 2025",
      category: "Program",
      views: 351,
      excerpt: "Komitmen kinerja dinas untuk tahun 2024 dalam melaksanakan berbagai program pemberdayaan perempuan, perlindungan anak, dan keluarga berencana dengan target-target yang telah ditetapkan."
    },
    {
      id: 3,
      title: "Rencana Aksi DP3AP2KB Tahun 2024",
      date: "13 Juni 2025",
      category: "Program",
      views: 348,
      excerpt: "Rencana aksi strategis untuk implementasi program-program prioritas dalam bidang pemberdayaan perempuan dan perlindungan anak serta pengendalian penduduk dan keluarga berencana."
    },
    {
      id: 4,
      title: "Sosialisasi Sistem Informasi Gender dan Anak",
      date: "10 Juli 2025",
      category: "Kegiatan",
      views: 245,
      excerpt: "Kegiatan sosialisasi sistem informasi gender dan anak kepada stakeholder terkait untuk meningkatkan koordinasi dan sinergi dalam implementasi program."
    },
    {
      id: 5,
      title: "Workshop Perlindungan Anak dari Kekerasan Online",
      date: "08 Juli 2025",
      category: "Kegiatan",
      views: 423,
      excerpt: "Workshop untuk meningkatkan awareness dan kapasitas dalam melindungi anak-anak dari berbagai bentuk kekerasan di dunia maya yang semakin mengkhawatirkan."
    },
    {
      id: 6,
      title: "Pengumuman Seleksi Calon Konselor KB Tingkat Desa",
      date: "05 Juli 2025",
      category: "Pengumuman",
      views: 567,
      excerpt: "Pengumuman terkait seleksi calon konselor KB tingkat desa untuk memperkuat jaringan pelayanan keluarga berencana di seluruh Sumatera Barat."
    }
  ];

  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const newsPerPage = 6;
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);
  const startIndex = (currentPage - 1) * newsPerPage;
  const currentNews = filteredNews.slice(startIndex, startIndex + newsPerPage);

  const featuredNews = newsData.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Berita & Informasi
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Update terkini seputar program dan kegiatan DP3AP2KB Sumatera Barat
          </motion.p>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Berita Utama</h2>
            <p className="text-lg text-gray-600">Berita dan informasi penting terbaru</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center">
                  <CalendarDaysIcon className="w-20 h-20 text-white/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredNews[0].category}
                    </span>
                    <span className="text-gray-500 text-sm ml-3">{featuredNews[0].date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {featuredNews[0].title}
                  </h3>
                  <p className="text-gray-600 mb-4">{featuredNews[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <EyeIcon className="w-4 h-4 mr-1" />
                      {featuredNews[0].views} views
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Baca Selengkapnya
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Side Featured */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {featuredNews.slice(1).map((news, index) => (
                <div key={news.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {news.category}
                    </span>
                    <span className="text-gray-400 text-xs ml-2">{news.date}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                    {news.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-2">{news.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-xs">
                      <EyeIcon className="w-3 h-3 mr-1" />
                      {news.views}
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                      Baca
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <NewsCard {...news} />
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              className="flex justify-center items-center mt-12 space-x-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* No Results */}
          {filteredNews.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <MagnifyingGlassIcon className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak ada berita ditemukan</h3>
              <p className="text-gray-600">Coba ubah kata kunci pencarian atau filter kategori</p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
