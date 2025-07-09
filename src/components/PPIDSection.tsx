'use client';

import { useState } from 'react';
import { FaFileAlt, FaDownload, FaCalendarAlt, FaEye, FaSearch, FaFilter, FaInfoCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { MdGavel, MdDescription, MdInfo } from 'react-icons/md';

interface PPIDDocument {
  id: string;
  title: string;
  description: string;
  category: 'wajib' | 'berkala' | 'serta-merta' | 'setiap-saat';
  type: 'pdf' | 'doc' | 'xls' | 'image';
  size: string;
  uploadDate: string;
  downloads: number;
  url: string;
  featured: boolean;
}

interface PPIDSectionProps {
  className?: string;
}

export default function PPIDSection({ className = "" }: PPIDSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    { id: 'all', name: 'Semua Informasi', count: 32 },
    { id: 'wajib', name: 'Informasi Wajib', count: 12 },
    { id: 'berkala', name: 'Informasi Berkala', count: 8 },
    { id: 'serta-merta', name: 'Informasi Serta Merta', count: 7 },
    { id: 'setiap-saat', name: 'Informasi Setiap Saat', count: 5 }
  ];

  const documentTypes = [
    { id: 'all', name: 'Semua Format' },
    { id: 'pdf', name: 'PDF' },
    { id: 'doc', name: 'Word' },
    { id: 'xls', name: 'Excel' },
    { id: 'image', name: 'Gambar' }
  ];

  const ppidDocuments: PPIDDocument[] = [
    {
      id: '1',
      title: 'Profil Dinas ESDM Sumatera Barat',
      description: 'Dokumen profil lengkap Dinas Energi dan Sumber Daya Mineral Provinsi Sumatera Barat mencakup visi, misi, struktur organisasi, dan tugas pokok fungsi.',
      category: 'wajib',
      type: 'pdf',
      size: '2.5 MB',
      uploadDate: '2024-01-20',
      downloads: 1245,
      url: '/downloads/profil-dinas-esdm.pdf',
      featured: true
    },
    {
      id: '2',
      title: 'Laporan Kinerja Instansi Pemerintah (LKIP) 2023',
      description: 'Laporan kinerja tahunan Dinas ESDM Sumbar tahun 2023 yang memuat pencapaian target kinerja dan realisasi anggaran.',
      category: 'berkala',
      type: 'pdf',
      size: '4.8 MB',
      uploadDate: '2024-01-15',
      downloads: 892,
      url: '/downloads/lkip-2023.pdf',
      featured: true
    },
    {
      id: '3',
      title: 'Data Potensi Energi Terbarukan Sumbar',
      description: 'Data komprehensif potensi energi terbarukan di Sumatera Barat meliputi solar, angin, biomassa, dan panas bumi.',
      category: 'setiap-saat',
      type: 'xls',
      size: '1.2 MB',
      uploadDate: '2024-01-18',
      downloads: 567,
      url: '/downloads/data-energi-terbarukan.xlsx',
      featured: false
    },
    {
      id: '4',
      title: 'Pengumuman Tender Konsultan Teknis 2024',
      description: 'Pengumuman resmi tender pengadaan jasa konsultan teknis untuk proyek pengembangan energi terbarukan tahun 2024.',
      category: 'serta-merta',
      type: 'pdf',
      size: '850 KB',
      uploadDate: '2024-01-22',
      downloads: 423,
      url: '/downloads/pengumuman-tender-2024.pdf',
      featured: false
    },
    {
      id: '5',
      title: 'Peraturan Daerah tentang Pertambangan',
      description: 'Peraturan Daerah Provinsi Sumatera Barat tentang pengelolaan pertambangan dan lingkungan hidup.',
      category: 'wajib',
      type: 'pdf',
      size: '3.1 MB',
      uploadDate: '2024-01-10',
      downloads: 756,
      url: '/downloads/perda-pertambangan.pdf',
      featured: false
    },
    {
      id: '6',
      title: 'Statistik Konsumsi Energi 2023',
      description: 'Data statistik konsumsi energi di Sumatera Barat tahun 2023 berdasarkan sektor dan wilayah.',
      category: 'berkala',
      type: 'xls',
      size: '2.8 MB',
      uploadDate: '2024-01-12',
      downloads: 634,
      url: '/downloads/statistik-energi-2023.xlsx',
      featured: false
    }
  ];

  const filteredDocuments = ppidDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesType = selectedType === 'all' || doc.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDocuments = filteredDocuments.slice(startIndex, startIndex + itemsPerPage);

  const getCategoryColor = (category: string) => {
    const colors = {
      wajib: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300',
      berkala: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
      'serta-merta': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300',
      'setiap-saat': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf': return 'PDF';
      case 'doc': return 'DOC';
      case 'xls': return 'XLS';
      case 'image': return 'IMG';
      default: return 'FILE';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`bg-white dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <MdInfo className="w-16 h-16 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            PPID - Pejabat Pengelola Informasi dan Dokumentasi
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Portal transparansi informasi publik Dinas ESDM Sumatera Barat sesuai dengan UU No. 14 Tahun 2008 
            tentang Keterbukaan Informasi Publik
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <FaInfoCircle className="w-8 h-8 text-blue-500" />
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200">
                Tentang PPID
              </h3>
            </div>
            <p className="text-blue-800 dark:text-blue-300 text-sm">
              PPID adalah pejabat yang bertanggung jawab dalam pengumpulan, pendokumentasian, 
              penyediaan, dan pelayanan informasi publik di lingkungan Dinas ESDM Sumbar.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <MdGavel className="w-8 h-8 text-green-500" />
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-200">
                Dasar Hukum
              </h3>
            </div>
            <p className="text-green-800 dark:text-green-300 text-sm">
              UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik dan 
              Peraturan Komisi Informasi tentang standar layanan informasi publik.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <MdDescription className="w-8 h-8 text-purple-500" />
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-200">
                Cara Mengajukan
              </h3>
            </div>
            <p className="text-purple-800 dark:text-purple-300 text-sm">
              Pemohon dapat mengajukan permohonan informasi melalui formulir online, 
              email, atau datang langsung ke kantor PPID Dinas ESDM Sumbar.
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
          {/* Search */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Cari Dokumen
            </label>
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Cari berdasarkan judul atau deskripsi dokumen..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Kategori Informasi
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Format Dokumen
            </label>
            <select
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              {documentTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Menampilkan {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredDocuments.length)} dari {filteredDocuments.length} dokumen
          </p>
          {(selectedCategory !== 'all' || selectedType !== 'all' || searchTerm) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedType('all');
                setSearchTerm('');
                setCurrentPage(1);
              }}
              className="text-blue-500 hover:text-blue-600 text-sm font-medium"
            >
              Hapus Filter
            </button>
          )}
        </div>

        {/* Documents Grid */}
        {paginatedDocuments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {paginatedDocuments.map((doc) => (
              <div key={doc.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                {/* Featured Badge */}
                {doc.featured && (
                  <div className="p-4 pb-0">
                    <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                      Unggulan
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded font-medium ${getCategoryColor(doc.category)}`}>
                        {categories.find(cat => cat.id === doc.category)?.name.replace('Informasi ', '')}
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 text-xs rounded font-medium">
                        {getTypeIcon(doc.type)}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {doc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {doc.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="w-3 h-3" />
                        {formatDate(doc.uploadDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaDownload className="w-3 h-3" />
                        {doc.downloads.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-xs">
                      {doc.size}
                    </span>
                  </div>

                  {/* Download Button */}
                  <button className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    <FaDownload className="w-4 h-4" />
                    Unduh Dokumen
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FaFileAlt className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Tidak ada dokumen ditemukan
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Coba ubah filter atau kata kunci pencarian Anda
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Sebelumnya
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Selanjutnya
            </button>
          </div>
        )}

        {/* Contact PPID */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4">
              Butuh Informasi Lain?
            </h2>
            <p className="text-blue-800 dark:text-blue-300 mb-6">
              Jika informasi yang Anda cari tidak tersedia di portal ini, silakan ajukan permohonan informasi 
              melalui formulir online atau hubungi PPID Dinas ESDM Sumbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                <FaFileAlt className="w-4 h-4" />
                Formulir Permohonan Informasi
              </button>
              <button className="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium px-6 py-3 rounded-lg transition-colors">
                <FaExternalLinkAlt className="w-4 h-4" />
                Hubungi PPID
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
