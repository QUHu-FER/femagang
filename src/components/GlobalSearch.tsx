'use client';

import { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes, FaNewspaper, FaFileAlt, FaImage, FaVideo, FaGavel } from 'react-icons/fa';
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: 'berita' | 'dokumen' | 'galeri' | 'layanan' | 'peraturan';
  url: string;
  date?: string;
  thumbnail?: string;
}

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Mock data untuk demo
  const mockData: SearchResult[] = [
    {
      id: '1',
      title: 'Pengembangan Energi Terbarukan di Sumbar',
      description: 'Program pengembangan energi terbarukan untuk mengurangi ketergantungan pada energi fosil',
      category: 'berita',
      url: '/berita/energi-terbarukan',
      date: '2024-01-15',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: '2',
      title: 'Regulasi Pertambangan Sumbar 2024',
      description: 'Peraturan terbaru mengenai izin pertambangan di Provinsi Sumatera Barat',
      category: 'peraturan',
      url: '/peraturan/pertambangan-2024',
      date: '2024-01-10'
    },
    {
      id: '3',
      title: 'Laporan Kegiatan ESDM 2023',
      description: 'Dokumen laporan kegiatan Dinas ESDM Sumbar tahun 2023',
      category: 'dokumen',
      url: '/download/laporan-2023',
      date: '2024-01-05'
    },
    {
      id: '4',
      title: 'Izin Usaha Pertambangan',
      description: 'Layanan pengurusan izin usaha pertambangan untuk masyarakat',
      category: 'layanan',
      url: '/layanan/izin-pertambangan',
      date: '2024-01-20'
    },
    {
      id: '5',
      title: 'Galeri Kegiatan Sosialisasi',
      description: 'Dokumentasi kegiatan sosialisasi energi terbarukan',
      category: 'galeri',
      url: '/galeri/sosialisasi',
      date: '2024-01-12'
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua', icon: FaSearch },
    { id: 'berita', name: 'Berita', icon: FaNewspaper },
    { id: 'dokumen', name: 'Dokumen', icon: FaFileAlt },
    { id: 'galeri', name: 'Galeri', icon: FaImage },
    { id: 'layanan', name: 'Layanan', icon: MdOutlineEnergySavingsLeaf },
    { id: 'peraturan', name: 'Peraturan', icon: FaGavel }
  ];

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleSearch = async (term: string) => {
    if (!term.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const filteredResults = mockData.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(term.toLowerCase()) ||
                           item.description.toLowerCase().includes(term.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    setResults(filteredResults);
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  };

  const getCategoryIcon = (category: string) => {
    const categoryObj = categories.find(cat => cat.id === category);
    return categoryObj ? categoryObj.icon : FaSearch;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      berita: 'bg-blue-100 text-blue-800',
      dokumen: 'bg-green-100 text-green-800',
      galeri: 'bg-purple-100 text-purple-800',
      layanan: 'bg-orange-100 text-orange-800',
      peraturan: 'bg-red-100 text-red-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Pencarian Global
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <FaTimes className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Search Input */}
          <div className="relative mb-4">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Cari berita, dokumen, layanan, atau informasi lainnya..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {loading ? (
            <div className="p-6 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400">Mencari...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="p-2">
              {results.map((result) => {
                const Icon = getCategoryIcon(result.category);
                return (
                  <div
                    key={result.id}
                    className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
                    onClick={() => {
                      window.location.href = result.url;
                      onClose();
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                          {result.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {result.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(result.category)}`}>
                            {categories.find(cat => cat.id === result.category)?.name}
                          </span>
                          {result.date && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(result.date).toLocaleDateString('id-ID')}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : searchTerm ? (
            <div className="p-6 text-center">
              <FaSearch className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                Tidak ada hasil ditemukan untuk "{searchTerm}"
              </p>
            </div>
          ) : (
            <div className="p-6 text-center">
              <FaSearch className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                Ketik kata kunci untuk mencari informasi
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
