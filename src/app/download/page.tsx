'use client';

import { motion } from 'framer-motion';
import { 
  DocumentArrowDownIcon,
  FolderIcon,
  CalendarDaysIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function DownloadPage() {
  const documents = [
    {
      id: 1,
      title: "Rencana Strategis ESDM Sumatera Barat 2024-2029",
      description: "Dokumen perencanaan strategis lima tahun untuk pengembangan energi dan sumber daya mineral di Sumatera Barat",
      category: "perencanaan",
      fileType: "pdf",
      fileSize: "2.5 MB",
      downloadUrl: "/downloads/renstra-esdm-2024-2029.pdf",
      uploadDate: "15 Juni 2024",
      downloads: 1250,
      author: "Tim Perencanaan ESDM"
    },
    {
      id: 2,
      title: "Laporan Kinerja Tahunan 2023",
      description: "Laporan pencapaian kinerja Dinas ESDM Sumatera Barat selama tahun 2023",
      category: "laporan",
      fileType: "pdf",
      fileSize: "4.8 MB",
      downloadUrl: "/downloads/lakip-2023.pdf",
      uploadDate: "20 Maret 2024",
      downloads: 890,
      author: "Bagian Perencanaan"
    },
    {
      id: 3,
      title: "Formulir Permohonan Izin Usaha Pertambangan",
      description: "Formulir untuk mengajukan izin usaha pertambangan di wilayah Sumatera Barat",
      category: "formulir",
      fileType: "doc",
      fileSize: "1.2 MB",
      downloadUrl: "/downloads/form-iup.doc",
      uploadDate: "10 Februari 2024",
      downloads: 2150,
      author: "Bidang Pertambangan"
    },
    {
      id: 4,
      title: "SOP Pengesahan Kepala Teknik Tambang",
      description: "Standar Operasional Prosedur untuk pengesahan kepala teknik tambang",
      category: "sop",
      fileType: "pdf",
      fileSize: "1.8 MB",
      downloadUrl: "/downloads/sop-kepala-teknik.pdf",
      uploadDate: "16 November 2022",
      downloads: 567,
      author: "Bidang Pertambangan"
    },
    {
      id: 5,
      title: "Data Potensi Energi Terbarukan Sumbar",
      description: "Database potensi energi terbarukan di seluruh kabupaten/kota Sumatera Barat",
      category: "data",
      fileType: "xlsx",
      fileSize: "3.2 MB",
      downloadUrl: "/downloads/data-energi-terbarukan.xlsx",
      uploadDate: "5 Mei 2024",
      downloads: 745,
      author: "Bidang Energi"
    },
    {
      id: 6,
      title: "Peraturan Daerah ESDM No. 5 Tahun 2023",
      description: "Peraturan daerah tentang pengelolaan energi dan sumber daya mineral",
      category: "regulasi",
      fileType: "pdf",
      fileSize: "2.1 MB",
      downloadUrl: "/downloads/perda-esdm-5-2023.pdf",
      uploadDate: "12 September 2023",
      downloads: 1580,
      author: "Bagian Hukum"
    },
    {
      id: 7,
      title: "Maklumat Pelayanan Publik PPID",
      description: "Maklumat pelayanan publik untuk Pejabat Pengelola Informasi dan Dokumentasi",
      category: "ppid",
      fileType: "pdf",
      fileSize: "950 KB",
      downloadUrl: "/downloads/maklumat-ppid.pdf",
      uploadDate: "22 September 2023",
      downloads: 420,
      author: "PPID ESDM"
    },
    {
      id: 8,
      title: "Bagan Alir Perpanjangan IUJP",
      description: "Alur prosedur perpanjangan Izin Usaha Jasa Pertambangan",
      category: "prosedur",
      fileType: "pdf",
      fileSize: "1.5 MB",
      downloadUrl: "/downloads/alur-perpanjangan-iujp.pdf",
      uploadDate: "2 November 2022",
      downloads: 680,
      author: "Bidang Pertambangan"
    },
    {
      id: 9,
      title: "Rencana Kerja Tahunan 2024",
      description: "Rencana kerja dan anggaran tahunan Dinas ESDM untuk tahun 2024",
      category: "perencanaan",
      fileType: "pdf",
      fileSize: "3.7 MB",
      downloadUrl: "/downloads/rkt-2024.pdf",
      uploadDate: "6 Juni 2024",
      downloads: 356,
      author: "Tim Perencanaan ESDM"
    },
    {
      id: 10,
      title: "Perjanjian Kinerja Eselon 2 Tahun 2024",
      description: "Dokumen perjanjian kinerja untuk pejabat eselon 2 tahun 2024",
      category: "kinerja",
      fileType: "pdf",
      fileSize: "2.8 MB",
      downloadUrl: "/downloads/pk-eselon2-2024.pdf",
      uploadDate: "6 Juni 2024",
      downloads: 234,
      author: "Bagian Kepegawaian"
    },
    {
      id: 11,
      title: "Standar Pelayanan Minimal ESDM",
      description: "Standar pelayanan minimal untuk sektor energi dan sumber daya mineral",
      category: "spm",
      fileType: "pdf",
      fileSize: "2.2 MB",
      downloadUrl: "/downloads/spm-esdm.pdf",
      uploadDate: "18 April 2024",
      downloads: 512,
      author: "Bagian Pelayanan"
    },
    {
      id: 12,
      title: "Formulir Pengaduan Masyarakat",
      description: "Formulir untuk menyampaikan pengaduan terkait layanan ESDM",
      category: "formulir",
      fileType: "doc",
      fileSize: "850 KB",
      downloadUrl: "/downloads/form-pengaduan.doc",
      uploadDate: "25 Januari 2024",
      downloads: 1100,
      author: "Bagian Humas"
    }
  ];

  const categories = [
    { name: "Semua", count: 12, color: "bg-gray-500" },
    { name: "Perencanaan", count: 2, color: "bg-blue-500" },
    { name: "Laporan", count: 1, color: "bg-green-500" },
    { name: "Regulasi", count: 1, color: "bg-purple-500" },
    { name: "Formulir", count: 2, color: "bg-orange-500" },
    { name: "SOP", count: 1, color: "bg-red-500" },
    { name: "Data", count: 1, color: "bg-indigo-500" },
    { name: "PPID", count: 1, color: "bg-pink-500" },
    { name: "Prosedur", count: 1, color: "bg-teal-500" },
    { name: "Kinerja", count: 1, color: "bg-yellow-500" },
    { name: "SPM", count: 1, color: "bg-cyan-500" }
  ];

  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return '📄';
      case 'doc':
      case 'docx':
        return '📝';
      case 'xlsx':
      case 'xls':
        return '📊';
      default:
        return '📁';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "perencanaan": "bg-blue-100 text-blue-800",
      "laporan": "bg-green-100 text-green-800",
      "regulasi": "bg-purple-100 text-purple-800",
      "formulir": "bg-orange-100 text-orange-800",
      "sop": "bg-red-100 text-red-800",
      "data": "bg-indigo-100 text-indigo-800",
      "ppid": "bg-pink-100 text-pink-800",
      "prosedur": "bg-teal-100 text-teal-800",
      "kinerja": "bg-yellow-100 text-yellow-800",
      "spm": "bg-cyan-100 text-cyan-800"
    };
    return colors[category.toLowerCase()] || "bg-gray-100 text-gray-800";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
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
              Download Center
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Pusat unduhan dokumen resmi, formulir, regulasi, dan informasi penting dari Dinas ESDM Provinsi Sumatera Barat
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari dokumen, formulir, atau regulasi..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {categories.slice(0, 6).map((cat, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow-sm border border-gray-200'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Total Dokumen", value: "150+", icon: DocumentTextIcon, color: "bg-blue-500" },
              { title: "Download Bulan Ini", value: "2,847", icon: ArrowDownTrayIcon, color: "bg-green-500" },
              { title: "Dokumen Terbaru", value: "12", icon: ClipboardDocumentListIcon, color: "bg-purple-500" },
              { title: "Kategori", value: "11", icon: FolderIcon, color: "bg-orange-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dokumen Tersedia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih dan unduh dokumen yang Anda perlukan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3">
                      <span className="text-2xl">{getFileIcon(doc.fileType)}</span>
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(doc.category)}`}>
                        {doc.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    <p>{doc.fileSize}</p>
                    <p>{doc.downloads} downloads</p>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {doc.description}
                </p>

                {/* Meta Info */}
                <div className="space-y-2 mb-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <CalendarDaysIcon className="w-4 h-4 mr-2" />
                    {doc.uploadDate}
                  </div>
                  <div className="flex items-center">
                    <EyeIcon className="w-4 h-4 mr-2" />
                    {doc.author}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center text-sm">
                    <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                    Download
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors">
                    <EyeIcon className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Butuh Bantuan?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Jika Anda tidak menemukan dokumen yang dicari atau mengalami kendala dalam mengunduh, 
              jangan ragu untuk menghubungi kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Hubungi Support
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Kirim Permintaan Dokumen
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
