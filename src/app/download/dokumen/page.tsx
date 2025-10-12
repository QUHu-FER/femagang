'use client';

import { motion } from 'framer-motion';
import { 
  DocumentTextIcon,
  ArrowDownTrayIcon,
  CalendarDaysIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function DokumenPublikPage() {
  const dokumenPublik = [
    {
      id: 1,
      judul: "Rencana Strategis ESDM Sumbar 2024-2029",
      deskripsi: "Dokumen perencanaan strategis jangka menengah sektor energi dan sumber daya mineral",
      kategori: "Perencanaan",
      ukuran: "2.5 MB",
      tanggal: "15 Juni 2024",
      download: 1250,
      tipe: "PDF"
    },
    {
      id: 2,
      judul: "Laporan Kinerja Instansi Pemerintah (LAKIP) 2023",
      deskripsi: "Laporan pencapaian kinerja dan akuntabilitas penyelenggaraan pemerintahan",
      kategori: "Laporan",
      ukuran: "4.8 MB",
      tanggal: "20 Maret 2024",
      download: 890,
      tipe: "PDF"
    },
    {
      id: 3,
      judul: "Profil Dinas ESDM Sumatera Barat",
      deskripsi: "Dokumen profil lengkap organisasi, tugas, dan fungsi dinas ESDM",
      kategori: "Profil",
      ukuran: "3.2 MB",
      tanggal: "10 Februari 2024",
      download: 567,
      tipe: "PDF"
    },
    {
      id: 4,
      judul: "Data Potensi Energi Terbarukan Sumbar",
      deskripsi: "Database potensi energi terbarukan di seluruh kabupaten/kota",
      kategori: "Data",
      ukuran: "5.1 MB",
      tanggal: "5 Mei 2024",
      download: 743,
      tipe: "XLSX"
    }
  ];

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
              <DocumentTextIcon className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Dokumen Publik
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Akses dokumen resmi, laporan, dan informasi publik Dinas ESDM Provinsi Sumatera Barat
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documents List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dokumenPublik.map((dokumen, index) => (
              <motion.div
                key={dokumen.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3">
                        <DocumentTextIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                          {dokumen.kategori}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      <p>{dokumen.ukuran}</p>
                      <p>{dokumen.download} downloads</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {dokumen.judul}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {dokumen.deskripsi}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <CalendarDaysIcon className="w-4 h-4 mr-2" />
                    {dokumen.tanggal}
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center text-sm">
                      <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                      Download {dokumen.tipe}
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors">
                      <EyeIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
