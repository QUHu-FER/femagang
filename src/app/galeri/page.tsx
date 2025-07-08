'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '@/components/Layout';
import { EyeIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline';

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    { id: 'semua', name: 'Semua' },
    { id: 'kegiatan', name: 'Kegiatan' },
    { id: 'sosialisasi', name: 'Sosialisasi' },
    { id: 'pelatihan', name: 'Pelatihan' },
    { id: 'seminar', name: 'Seminar' },
    { id: 'workshop', name: 'Workshop' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Sosialisasi Program KB di Kecamatan Padang Utara",
      category: "sosialisasi",
      date: "2024-01-15",
      views: 245,
      likes: 32,
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Pelatihan Keterampilan Perempuan Mandiri",
      category: "pelatihan",
      date: "2024-01-20",
      views: 189,
      likes: 28,
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Seminar Perlindungan Anak dari Kekerasan",
      category: "seminar",
      date: "2024-01-25",
      views: 156,
      likes: 21,
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Workshop Parenting untuk Keluarga Harmonis",
      category: "workshop",
      date: "2024-02-01",
      views: 203,
      likes: 35,
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Kegiatan Posyandu di Desa Binaan",
      category: "kegiatan",
      date: "2024-02-05",
      views: 167,
      likes: 19,
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Sosialisasi Pencegahan Stunting",
      category: "sosialisasi",
      date: "2024-02-10",
      views: 234,
      likes: 41,
      image: "/api/placeholder/400/300"
    },
    {
      id: 7,
      title: "Pelatihan Usaha Mikro untuk Perempuan",
      category: "pelatihan",
      date: "2024-02-15",
      views: 178,
      likes: 26,
      image: "/api/placeholder/400/300"
    },
    {
      id: 8,
      title: "Seminar Kesehatan Reproduksi Remaja",
      category: "seminar",
      date: "2024-02-20",
      views: 198,
      likes: 33,
      image: "/api/placeholder/400/300"
    }
  ];

  const filteredItems = selectedCategory === 'semua' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Galeri Kegiatan
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Dokumentasi kegiatan dan program DP3AP2KB Sumatera Barat
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filter Categories */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700">
                  <div className="absolute inset-0 bg-blue-600 opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <EyeIcon className="w-8 h-8" />
                      </div>
                      <p className="text-sm font-medium">Lihat Gambar</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {new Date(item.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <EyeIcon className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <HeartIcon className="w-4 h-4" />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {galleryItems.length}
              </div>
              <div className="text-gray-600">Total Dokumentasi</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {galleryItems.reduce((sum, item) => sum + item.views, 0)}
              </div>
              <div className="text-gray-600">Total Dilihat</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {galleryItems.reduce((sum, item) => sum + item.likes, 0)}
              </div>
              <div className="text-gray-600">Total Disukai</div>
            </div>
          </div>
        </div>

        {/* Modal for Image Preview */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-500 to-blue-700">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <EyeIcon className="w-12 h-12" />
                    </div>
                    <p className="text-lg font-medium">Gambar Dokumentasi</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedImage.title}
                </h2>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600">
                    {new Date(selectedImage.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <EyeIcon className="w-4 h-4" />
                      <span>{selectedImage.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <HeartIcon className="w-4 h-4" />
                      <span>{selectedImage.likes}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <HeartIcon className="w-4 h-4" />
                    <span>Suka</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    <ShareIcon className="w-4 h-4" />
                    <span>Bagikan</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
