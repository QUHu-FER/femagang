'use client';

import { motion } from 'framer-motion';
import { 
  DocumentChartBarIcon,
  ArrowDownTrayIcon,
  CalendarDaysIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function LaporanPage() {
  const laporan = [
    {
      id: 1,
      judul: "Laporan Kinerja Instansi Pemerintah (LAKIP) 2023",
      deskripsi: "Laporan pencapaian kinerja dan akuntabilitas penyelenggaraan pemerintahan tahun 2023",
      kategori: "LAKIP",
      ukuran: "4.8 MB",
      tanggal: "20 Maret 2024",
      download: 890,
      tipe: "PDF"
    },
    {
      id: 2,
      judul: "Laporan Keuangan Dinas ESDM 2023",
      deskripsi: "Laporan realisasi anggaran dan keuangan Dinas ESDM Sumatera Barat tahun 2023",
      kategori: "Keuangan",
      ukuran: "3.2 MB",
      tanggal: "15 April 2024",
      download: 567,
      tipe: "PDF"
    },
    {
      id: 3,
      judul: "Laporan Tahunan Sektor Energi 2023",
      deskripsi: "Laporan perkembangan sektor energi di Sumatera Barat tahun 2023",
      kategori: "Sektoral",
      ukuran: "5.1 MB",
      tanggal: "10 Mei 2024",
      download: 743,
      tipe: "PDF"
    },
    {
      id: 4,
      judul: "Laporan Tahunan Sektor Pertambangan 2023",
      deskripsi: "Laporan perkembangan sektor pertambangan di Sumatera Barat tahun 2023",
      kategori: "Sektoral",
      ukuran: "4.7 MB",
      tanggal: "12 Mei 2024",
      download: 685,
      tipe: "PDF"
    },
    {
      id: 5,
      judul: "Laporan Survei Kepuasan Masyarakat 2023",
      deskripsi: "Hasil survei kepuasan masyarakat terhadap pelayanan publik Dinas ESDM",
      kategori: "SKM",
      ukuran: "2.3 MB",
      tanggal: "25 Februari 2024",
      download: 456,
      tipe: "PDF"
    },
    {
      id: 6,
      judul: "Laporan Capaian IKU (Indikator Kinerja Utama) 2023",
      deskripsi: "Laporan pencapaian indikator kinerja utama Dinas ESDM tahun 2023",
      kategori: "IKU",
      ukuran: "1.9 MB",
      tanggal: "30 Maret 2024",
      download: 623,
      tipe: "PDF"
    },
    {
      id: 7,
      judul: "Laporan Evaluasi Kinerja Pegawai 2023",
      deskripsi: "Laporan hasil evaluasi kinerja pegawai Dinas ESDM tahun 2023",
      kategori: "SDM",
      ukuran: "2.8 MB",
      tanggal: "5 April 2024",
      download: 234,
      tipe: "PDF"
    },
    {
      id: 8,
      judul: "Laporan Monitoring dan Evaluasi Program 2023",
      deskripsi: "Laporan hasil monitoring dan evaluasi pelaksanaan program tahun 2023",
      kategori: "Monev",
      ukuran: "3.5 MB",
      tanggal: "18 April 2024",
      download: 389,
      tipe: "PDF"
    }
  ];

  const getKategoriColor = (kategori: string) => {
    const colors: { [key: string]: string } = {
      "LAKIP": "bg-blue-100 text-blue-800",
      "Keuangan": "bg-green-100 text-green-800",
      "Sektoral": "bg-purple-100 text-purple-800",
      "SKM": "bg-orange-100 text-orange-800",
      "IKU": "bg-red-100 text-red-800",
      "SDM": "bg-indigo-100 text-indigo-800",
      "Monev": "bg-teal-100 text-teal-800"
    };
    return colors[kategori] || "bg-gray-100 text-gray-800";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-green-900 to-emerald-900 text-white py-20 overflow-hidden">
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
              <DocumentChartBarIcon className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Laporan
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Kumpulan laporan kinerja, keuangan, dan evaluasi program Dinas ESDM Provinsi Sumatera Barat
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reports List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laporan.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl flex items-center justify-center mr-3">
                        <DocumentChartBarIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getKategoriColor(report.kategori)}`}>
                          {report.kategori}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      <p>{report.ukuran}</p>
                      <p>{report.download} downloads</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {report.judul}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {report.deskripsi}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <CalendarDaysIcon className="w-4 h-4 mr-2" />
                    {report.tanggal}
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-teal-600 to-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-teal-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center text-sm">
                      <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                      Download {report.tipe}
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
