'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarDaysIcon,
  UserGroupIcon,
  DocumentTextIcon,
  MapPinIcon,
  ClockIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function KegiatanDinasPage() {
  const kegiatanTerbaru = [
    {
      id: 1,
      judul: "Workshop Energi Terbarukan 2024",
      tanggal: "15 Desember 2024",
      waktu: "08:00 - 16:00 WIB",
      lokasi: "Auditorium Dinas ESDM Sumbar",
      kategori: "Workshop",
      peserta: "150 orang",
      deskripsi: "Workshop pengembangan teknologi energi terbarukan untuk mendukung target net zero emission di Sumatera Barat",
      status: "Selesai",
      gambar: "https://images.unsplash.com/photo-1497436072909-f5e4be843c96?w=800",
      highlight: true
    },
    {
      id: 2,
      judul: "Sosialisasi Perizinan Online",
      tanggal: "28 November 2024",
      waktu: "09:00 - 12:00 WIB",
      lokasi: "Hotel Pangeran City Padang",
      kategori: "Sosialisasi",
      peserta: "200 orang",
      deskripsi: "Sosialisasi sistem perizinan pertambangan dan energi berbasis digital kepada pelaku usaha",
      status: "Selesai",
      gambar: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"
    },
    {
      id: 3,
      judul: "Monitoring Tambang Berkelanjutan",
      tanggal: "10 November 2024",
      waktu: "07:00 - 17:00 WIB",
      lokasi: "Kabupaten Tanah Datar",
      kategori: "Monitoring",
      peserta: "25 orang",
      deskripsi: "Kegiatan monitoring dan evaluasi implementasi pertambangan ramah lingkungan",
      status: "Selesai",
      gambar: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=800"
    },
    {
      id: 4,
      judul: "Forum Diskusi Energi Daerah",
      tanggal: "5 Januari 2025",
      waktu: "13:00 - 17:00 WIB",
      lokasi: "Gedung Daerah Padang",
      kategori: "Forum",
      peserta: "100 orang",
      deskripsi: "Forum diskusi multi-stakeholder membahas strategi pengembangan energi berkelanjutan",
      status: "Akan Datang",
      gambar: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800"
    },
    {
      id: 5,
      judul: "Pelatihan Teknis Geothermal",
      tanggal: "20 Januari 2025",
      waktu: "08:00 - 16:00 WIB",
      lokasi: "Laboratorium ESDM",
      kategori: "Pelatihan",
      peserta: "50 orang",
      deskripsi: "Pelatihan teknis pengembangan energi panas bumi untuk SDM daerah",
      status: "Akan Datang",
      gambar: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800"
    },
    {
      id: 6,
      judul: "Sidak SPBU se-Sumbar",
      tanggal: "2 Februari 2025",
      waktu: "08:00 - 17:00 WIB",
      lokasi: "Seluruh Wilayah Sumbar", 
      kategori: "Pengawasan",
      peserta: "30 orang",
      deskripsi: "Operasi inspeksi mendadak untuk memastikan kualitas dan ketersediaan BBM",
      status: "Akan Datang",
      gambar: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800"
    }
  ];

  const filterKategori = ["Semua", "Workshop", "Sosialisasi", "Monitoring", "Forum", "Pelatihan", "Pengawasan"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Selesai":
        return "bg-green-100 text-green-800";
      case "Akan Datang":
        return "bg-blue-100 text-blue-800";
      case "Berlangsung":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getKategoriColor = (kategori: string) => {
    const colors: { [key: string]: string } = {
      "Workshop": "bg-purple-100 text-purple-800",
      "Sosialisasi": "bg-blue-100 text-blue-800",
      "Monitoring": "bg-orange-100 text-orange-800",
      "Forum": "bg-green-100 text-green-800",
      "Pelatihan": "bg-indigo-100 text-indigo-800",
      "Pengawasan": "bg-red-100 text-red-800"
    };
    return colors[kategori] || "bg-gray-100 text-gray-800";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8 backdrop-blur-sm"
            >
              <CalendarDaysIcon className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Kegiatan Dinas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Berbagai program, kegiatan, dan acara yang dilaksanakan oleh Dinas Energi dan Sumber Daya Mineral Provinsi Sumatera Barat
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {filterKategori.map((kategori, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-sm border border-gray-200'
                }`}
              >
                {kategori}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Kegiatan List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {kegiatanTerbaru.map((kegiatan, index) => (
              <motion.div
                key={kegiatan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
                  kegiatan.highlight ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={kegiatan.gambar} 
                    alt={kegiatan.judul}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(kegiatan.status)}`}>
                      {kegiatan.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getKategoriColor(kegiatan.kategori)}`}>
                      {kegiatan.kategori}
                    </span>
                  </div>
                  {kegiatan.highlight && (
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {kegiatan.judul}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {kegiatan.deskripsi}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarDaysIcon className="w-4 h-4 mr-2 text-blue-500" />
                      {kegiatan.tanggal}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="w-4 h-4 mr-2 text-green-500" />
                      {kegiatan.waktu}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPinIcon className="w-4 h-4 mr-2 text-red-500" />
                      {kegiatan.lokasi}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <UserGroupIcon className="w-4 h-4 mr-2 text-purple-500" />
                      {kegiatan.peserta}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center">
                    <EyeIcon className="w-4 h-4 mr-2" />
                    Lihat Detail
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Statistik Kegiatan 2024
            </h2>
            <p className="text-lg text-gray-600">
              Ringkasan pencapaian kegiatan Dinas ESDM Sumatera Barat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { judul: "Total Kegiatan", nilai: "125", icon: CalendarDaysIcon, color: "bg-blue-500" },
              { judul: "Peserta Terlayani", nilai: "8,500+", icon: UserGroupIcon, color: "bg-green-500" },
              { judul: "Workshop & Pelatihan", nilai: "45", icon: DocumentTextIcon, color: "bg-purple-500" },
              { judul: "Monitoring Lapangan", nilai: "80", icon: MapPinIcon, color: "bg-orange-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(stat.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.nilai}</h3>
                <p className="text-gray-600">{stat.judul}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
