'use client';

import { motion } from 'framer-motion';
import { PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function GaleriPage() {
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
            Galeri Dokumentasi
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dokumentasi kegiatan dan program Dinas Energi dan Sumber Daya Mineral Provinsi Sumatera Barat
          </motion.p>
        </div>
      </section>

      {/* Gallery Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Photo Gallery */}
            <motion.div
              className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 hover:shadow-xl transition-all cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => window.location.href = '/galeri/foto'}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-6 group-hover:bg-blue-700 transition-colors">
                  <PhotoIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Galeri Foto</h3>
                  <p className="text-blue-600 font-semibold">Dokumentasi kegiatan dalam foto</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kumpulan foto dokumentasi kegiatan, program, dan acara yang dilaksanakan oleh 
                Dinas ESDM Provinsi Sumatera Barat. Temukan momen-momen penting dalam perjalanan 
                kami melayani masyarakat di bidang energi dan sumber daya mineral.
              </p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">100+ Foto</span>
                </div>
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Lihat Foto →
                </div>
              </div>
            </motion.div>

            {/* Video Gallery */}
            <motion.div
              className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200 hover:shadow-xl transition-all cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => window.location.href = '/galeri/video'}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-6 group-hover:bg-green-700 transition-colors">
                  <VideoCameraIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Galeri Video</h3>
                  <p className="text-green-600 font-semibold">Dokumentasi kegiatan dalam video</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Koleksi video dokumentasi kegiatan, seminar, workshop, dan program unggulan 
                Dinas ESDM Provinsi Sumatera Barat. Saksikan secara langsung berbagai inisiatif 
                dan pencapaian kami dalam membangun sektor energi dan pertambangan.
              </p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">50+ Video</span>
                </div>
                <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  Tonton Video →
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sorotan Terbaru</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dokumentasi kegiatan dan program terbaru dari Dinas ESDM Provinsi Sumatera Barat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497436072909-f5e4be843c96?w=800" 
                alt="Workshop Energi Terbarukan"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Workshop</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">
                  Workshop Energi Terbarukan 2024
                </h3>
                <p className="text-gray-600 text-sm">
                  Workshop pengembangan energi terbarukan untuk masa depan berkelanjutan
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800" 
                alt="Kunjungan PLTA"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Kunjungan</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">
                  Kunjungan ke PLTA Singkarak
                </h3>
                <p className="text-gray-600 text-sm">
                  Field trip ke PLTA Singkarak bersama FTI Universitas Bung Hatta
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800" 
                alt="Perjanjian Kerjasama"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Kerjasama</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">
                  Perjanjian Kerjasama FTI UBH
                </h3>
                <p className="text-gray-600 text-sm">
                  Penandatanganan perjanjian kerjasama strategis dengan universitas
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
