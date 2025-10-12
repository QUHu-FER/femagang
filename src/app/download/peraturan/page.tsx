'use client';

import { motion } from 'framer-motion';
import { 
  ScaleIcon,
  ArrowDownTrayIcon,
  CalendarDaysIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function PeraturanPage() {
  const peraturan = [
    {
      id: 1,
      judul: "Peraturan Daerah ESDM No. 5 Tahun 2023",
      deskripsi: "Peraturan daerah tentang pengelolaan energi dan sumber daya mineral di Sumatera Barat",
      kategori: "Perda",
      ukuran: "2.1 MB",
      tanggal: "12 September 2023",
      download: 1580,
      tipe: "PDF"
    },
    {
      id: 2,
      judul: "Peraturan Gubernur No. 42 Tahun 2024",
      deskripsi: "Pergub tentang tata cara perizinan usaha pertambangan mineral dan batubara",
      kategori: "Pergub",
      ukuran: "1.8 MB",
      tanggal: "15 Juni 2024",
      download: 1245,
      tipe: "PDF"
    },
    {
      id: 3,
      judul: "Peraturan Menteri ESDM No. 7 Tahun 2024",
      deskripsi: "Permen tentang standar teknis keselamatan pertambangan mineral dan batubara",
      kategori: "Permen",
      ukuran: "3.2 MB",
      tanggal: "8 April 2024",
      download: 967,
      tipe: "PDF"
    },
    {
      id: 4,
      judul: "Undang-Undang No. 3 Tahun 2020",
      deskripsi: "UU tentang perubahan atas UU No. 4 Tahun 2009 tentang Pertambangan Mineral dan Batubara",
      kategori: "UU",
      ukuran: "4.5 MB",
      tanggal: "12 Maret 2020",
      download: 2340,
      tipe: "PDF"
    },
    {
      id: 5,
      judul: "Keputusan Gubernur No. 188 Tahun 2024",
      deskripsi: "Kepgub tentang penetapan wilayah pertambangan rakyat di Sumatera Barat",
      kategori: "Kepgub",
      ukuran: "1.6 MB",
      tanggal: "20 Juli 2024",
      download: 789,
      tipe: "PDF"
    },
    {
      id: 6,
      judul: "Standar Operasional Prosedur (SOP) Perizinan",
      deskripsi: "SOP untuk pengurusan berbagai izin di bidang energi dan sumber daya mineral",
      kategori: "SOP",
      ukuran: "2.3 MB",
      tanggal: "10 Januari 2024",
      download: 1567,
      tipe: "PDF"
    }
  ];

  const getKategoriColor = (kategori: string) => {
    const colors: { [key: string]: string } = {
      "Perda": "bg-red-100 text-red-800",
      "Pergub": "bg-blue-100 text-blue-800",
      "Permen": "bg-green-100 text-green-800",
      "UU": "bg-purple-100 text-purple-800",
      "Kepgub": "bg-orange-100 text-orange-800",
      "SOP": "bg-indigo-100 text-indigo-800"
    };
    return colors[kategori] || "bg-gray-100 text-gray-800";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-red-900 to-orange-900 text-white py-20 overflow-hidden">
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
              <ScaleIcon className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Peraturan & Regulasi
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
              Kumpulan peraturan perundang-undangan terkait energi dan sumber daya mineral
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regulations List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {peraturan.map((reg, index) => (
              <motion.div
                key={reg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-red-600 rounded-xl flex items-center justify-center mr-3">
                        <ScaleIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getKategoriColor(reg.kategori)}`}>
                          {reg.kategori}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      <p>{reg.ukuran}</p>
                      <p>{reg.download} downloads</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {reg.judul}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {reg.deskripsi}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <CalendarDaysIcon className="w-4 h-4 mr-2" />
                    {reg.tanggal}
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center text-sm">
                      <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                      Download {reg.tipe}
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
