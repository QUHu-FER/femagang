'use client';

import { motion } from 'framer-motion';
import { NewspaperIcon, MegaphoneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

const pressReleases = [
  {
    title: "ESDM Sumbar Luncurkan Program Energi Terbarukan 2025",
    date: "28 Juli 2025",
    summary: "Dinas ESDM Sumatera Barat resmi meluncurkan program strategis pengembangan energi terbarukan untuk mendukung target nasional Net Zero Emission.",
    link: "#"
  },
  {
    title: "Sosialisasi Perizinan Pertambangan Online",
    date: "15 Juli 2025",
    summary: "Dinas ESDM mengadakan sosialisasi sistem perizinan pertambangan berbasis digital untuk meningkatkan transparansi dan efisiensi layanan publik.",
    link: "#"
  },
  {
    title: "Penghargaan Subroto untuk Dinas ESDM Sumbar",
    date: "1 Juni 2025",
    summary: "Dinas ESDM Sumatera Barat meraih penghargaan Subroto atas inovasi pelayanan publik di bidang energi dan sumber daya mineral.",
    link: "#"
  }
];

export default function SiaranPersPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
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
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm"
            >
              <MegaphoneIcon className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Siaran Pers
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Informasi resmi, pengumuman, dan berita terbaru dari Dinas Energi dan Sumber Daya Mineral Provinsi Sumatera Barat
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Release List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Daftar Siaran Pers Terbaru
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan pengumuman resmi, berita, dan update program Dinas ESDM Sumatera Barat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <NewspaperIcon className="w-8 h-8 text-blue-600 mr-3" />
                  <span className="text-sm text-gray-500 flex items-center">
                    <CalendarDaysIcon className="w-5 h-5 mr-1" />
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{item.summary}</p>
                <a
                  href={item.link}
                  className="inline-block text-blue-600 font-semibold hover:underline"
                >
                  Baca Selengkapnya →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
