'use client';

import { motion } from 'framer-motion';
import { 
  DocumentArrowDownIcon, 
  DocumentTextIcon, 
  DocumentChartBarIcon,
  FolderIcon,
  EyeIcon,
  CalendarIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

interface Document {
  id: number;
  title: string;
  description: string;
  category: string;
  fileType: string;
  fileSize: string;
  downloadUrl: string;
  uploadDate: string;
  downloads: number;
  author: string;
}

interface DocumentDownloadProps {
  documents: Document[];
  title?: string;
  showCategories?: boolean;
}

export default function DocumentDownload({ 
  documents, 
  title = "Pusat Download Dokumen", 
  showCategories = true 
}: DocumentDownloadProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(documents.map(doc => doc.category)))];

  // Filter documents by category and search
  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return <DocumentTextIcon className="w-8 h-8 text-red-500" />;
      case 'doc':
      case 'docx':
        return <DocumentTextIcon className="w-8 h-8 text-blue-500" />;
      case 'xls':
      case 'xlsx':
        return <DocumentChartBarIcon className="w-8 h-8 text-green-500" />;
      default:
        return <FolderIcon className="w-8 h-8 text-gray-500" />;
    }
  };

  const getFileTypeColor = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'doc':
      case 'docx':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'xls':
      case 'xlsx':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-green-50 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6">
            <span className="text-green-600 font-semibold text-xs sm:text-sm">📄 PUSAT DOWNLOAD</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">{title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Akses dokumen resmi, laporan, dan formulir Dinas ESDM Sumatera Barat
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari dokumen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 sm:px-6 sm:py-4 pl-12 sm:pl-14 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm sm:text-base"
              />
              <div className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          {showCategories && (
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 shadow-md hover:shadow-lg'
                  }`}
                >
                  {category === 'all' ? 'Semua' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredDocuments.map((doc, index) => (
            <motion.div
              key={doc.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4 sm:mb-6">
                  <div className="flex-shrink-0">
                    {getFileIcon(doc.fileType)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2 line-clamp-2">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base line-clamp-2 mb-3">
                      {doc.description}
                    </p>
                    
                    {/* File Info */}
                    <div className="flex items-center space-x-3 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getFileTypeColor(doc.fileType)}`}>
                        {doc.fileType.toUpperCase()}
                      </span>
                      <span className="text-gray-500 text-sm">{doc.fileSize}</span>
                    </div>
                  </div>
                </div>

                {/* Meta Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <UserIcon className="w-4 h-4" />
                    <span>{doc.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{doc.uploadDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DocumentArrowDownIcon className="w-4 h-4" />
                    <span>{doc.downloads} downloads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FolderIcon className="w-4 h-4" />
                    <span>{doc.category}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-xl font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center space-x-2">
                    <DocumentArrowDownIcon className="w-5 h-5" />
                    <span>Download</span>
                  </button>
                  <button className="flex-1 sm:flex-none border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2">
                    <EyeIcon className="w-5 h-5" />
                    <span>Preview</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredDocuments.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FolderIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada dokumen ditemukan</h3>
            <p className="text-gray-600">Coba ubah kata kunci pencarian atau kategori</p>
          </motion.div>
        )}

        {/* Quick Stats */}
        <motion.div
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <DocumentTextIcon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">{documents.length}</div>
            <div className="text-gray-600">Total Dokumen</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <DocumentArrowDownIcon className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">
              {documents.reduce((sum, doc) => sum + doc.downloads, 0).toLocaleString()}
            </div>
            <div className="text-gray-600">Total Download</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <FolderIcon className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">{categories.length - 1}</div>
            <div className="text-gray-600">Kategori</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
