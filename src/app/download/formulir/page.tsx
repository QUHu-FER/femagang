'use client';

import { motion } from 'framer-motion';
import { 
  DocumentArrowDownIcon,
  ArrowDownTrayIcon,
  CalendarDaysIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function FormulirLayananPage() {
  const formulirLayanan = [
    {
      id: 1,
      judul: "Formulir Permohonan Izin Usaha Pertambangan (IUP)",
      deskripsi: "Formulir untuk mengajukan izin usaha pertambangan di wilayah Sumatera Barat",
      kategori: "Pertambangan",
      ukuran: "1.2 MB",
      tanggal: "10 Februari 2024",
      download: 2150,
      tipe: "DOC"
    },
    {
      id: 2,
      judul: "Formulir Permohonan Izin Usaha Jasa Pertambangan (IUJP)",
      deskripsi: "Formulir untuk pengajuan izin usaha jasa pertambangan",
      kategori: "Pertambangan",
      ukuran: "1.1 MB",
      tanggal: "10 Februari 2024",
      download: 1680,
      tipe: "DOC"
    },
    {
      id: 3,
      judul: "Formulir Permohonan Izin Usaha Perdagangan (SIUP) Energi",
      deskripsi: "Formulir untuk izin usaha perdagangan di bidang energi",
      kategori: "Energi",
      ukuran: "950 KB",
      tanggal: "15 Januari 2024",
      download: 1240,
      tipe: "DOC"
    },
    {
      id: 4,
      judul: "Formulir Pengaduan Masyarakat",
      deskripsi: "Formulir untuk menyampaikan pengaduan terkait layanan ESDM",
      kategori: "Umum",
      ukuran: "850 KB",
      tanggal: "25 Januari 2024",
      download: 1100,
      tipe: "DOC"
    },
    {
      id: 5,
      judul: "Formulir Permohonan Informasi Publik",
      deskripsi: "Formulir untuk mengajukan permohonan informasi publik sesuai UU KIP",
      kategori: "PPID",
      ukuran: "720 KB",
      tanggal: "5 Maret 2024",
      download: 890,
      tipe: "PDF"
    },
    {
      id: 6,
      judul: "Formulir Keberatan Informasi Publik",
      deskripsi: "Formulir untuk mengajukan keberatan atas penolakan informasi publik",
      kategori: "PPID",
      ukuran: "680 KB",
      tanggal: "5 Maret 2024",
      download: 456,
      tipe: "PDF"
    }
  ];

  const getKategoriColor = (kategori: string) => {
    const colors: { [key: string]: string } = {
      "Pertambangan": "bg-orange-100 text-orange-800",
      "Energi": "bg-green-100 text-green-800",
      "Umum": "bg-blue-100 text-blue-800",
      "PPID": "bg-purple-100 text-purple-800"
    };
    return colors[kategori] || "bg-gray-100 text-gray-800";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
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
              <DocumentArrowDownIcon className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Formulir Layanan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Download formulir untuk berbagai layanan Dinas ESDM Provinsi Sumatera Barat
            </p>
          </motion.div>
        </div>
      </section>

      {/* Forms List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formulirLayanan.map((formulir, index) => (
              <motion.div
                key={formulir.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                        <DocumentArrowDownIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getKategoriColor(formulir.kategori)}`}>
                          {formulir.kategori}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      <p>{formulir.ukuran}</p>
                      <p>{formulir.download} downloads</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {formulir.judul}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {formulir.deskripsi}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <CalendarDaysIcon className="w-4 h-4 mr-2" />
                    {formulir.tanggal}
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center text-sm">
                      <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                      Download {formulir.tipe}
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
