'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarDaysIcon,
  UserGroupIcon,
  DocumentTextIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import KegiatanList from '@/components/KegiatanList';
import Layout from '@/components/Layout';

export default function KegiatanDinasPage() {
  // Add more items to demonstrate pagination
  const generateKegiatanBulk = () => {
    const baseKegiatan = [
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

    // Define the type for Kegiatan
    type Kegiatan = {
      id: number;
      judul: string;
      tanggal: string;
      waktu: string;
      lokasi: string;
      kategori: string;
      peserta: string;
      deskripsi: string;
      status: string;
      gambar: string;
      highlight?: boolean;
    };

    // Generate more items by modifying the base items
    const extraKegiatan: Kegiatan[] = [];
    for (let i = 1; i <= 3; i++) {
      baseKegiatan.forEach((kegiatan, index) => {
        extraKegiatan.push({
          ...kegiatan,
          id: baseKegiatan.length * i + index + 1,
          judul: `${kegiatan.judul} - Sesi ${i + 1}`,
          tanggal: new Date(new Date(kegiatan.tanggal).getTime() + i * 30 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        });
      });
    }

    return [...baseKegiatan, ...extraKegiatan];
  };

  const kegiatanTerbaru = generateKegiatanBulk();

  // Stats Section Colors

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

      {/* Kegiatan List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <KegiatanList kegiatan={kegiatanTerbaru} />
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
