'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GlobalSearch from './GlobalSearch';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Berita', href: '/berita' },
    { name: 'Layanan', href: '/layanan' },
    { name: 'Galeri', href: '/galeri' },
    { name: 'Download', href: '/download' },
    { name: 'Kontak', href: '/kontak' },
  ];

  const dropdownMenus = {
    'Profil': [
      { name: 'Struktur Organisasi', href: '/profil/struktur', description: 'Bagan organisasi Dinas ESDM' },
      { name: 'Visi dan Misi', href: '/profil/visi-misi', description: 'Visi, misi, dan tujuan dinas' },
      { name: 'Sejarah Singkat', href: '/profil/sejarah', description: 'Sejarah pembentukan dinas' },
      { name: 'Tugas dan Fungsi', href: '/profil/tugas-fungsi', description: 'Tupoksi dinas ESDM' },
    ],
    'Data & Informasi': [
      { name: 'Berita Utama', href: '/berita', description: 'Berita dan informasi terkini' },
      { name: 'Siaran Pers', href: '/berita/siaran-pers', description: 'Press release resmi' },
      { name: 'Pengumuman', href: '/berita/pengumuman', description: 'Pengumuman resmi dinas' },
      { name: 'Kegiatan Dinas', href: '/berita/kegiatan', description: 'Dokumentasi kegiatan' },
    ],
    'Media Data': [
      { name: 'Galeri Foto', href: '/galeri/foto', description: 'Dokumentasi foto kegiatan' },
      { name: 'Galeri Video', href: '/galeri/video', description: 'Video dokumentasi' },
    ],
    'PPID': [
      { name: 'Profil PPID', href: '/ppid/profil', description: 'Profil PPID Dinas ESDM' },
      { name: 'Struktur PPID', href: '/ppid/struktur', description: 'Struktur organisasi PPID' },
      { name: 'Tugas Fungsi PPID', href: '/ppid/tugas-fungsi', description: 'Tupoksi PPID' },
      { name: 'Daftar Informasi Publik', href: '/ppid/dip', description: 'Daftar informasi publik' },
      { name: 'Permohonan Informasi', href: '/ppid/permohonan', description: 'Form permohonan informasi' },
    ],
    'Download Area': [
      { name: 'Dokumen Publik', href: '/download/dokumen', description: 'Dokumen untuk publik' },
      { name: 'Formulir Layanan', href: '/download/formulir', description: 'Formulir berbagai layanan' },
      { name: 'Peraturan', href: '/download/peraturan', description: 'Peraturan dan regulasi' },
      { name: 'Laporan', href: '/download/laporan', description: 'Laporan kegiatan dan keuangan' },
    ]
  };
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleMouseEnter = (menu: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to allow moving to dropdown
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
  };

  const handleDropdownMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (mobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Handle touch events for mobile
  useEffect(() => {
    const handleTouchStart = () => {
      // Close any open dropdown when touching elsewhere
      if (activeDropdown && !mobileMenuOpen) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    return () => document.removeEventListener('touchstart', handleTouchStart);
  }, [activeDropdown, mobileMenuOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-sm">⚡</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors">ESDM</h1>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">Sumatera Barat</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive(item.href)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}

            {/* Dropdown Menus */}
            {Object.entries(dropdownMenus).map(([menuName, menuItems]) => (
              <div 
                key={menuName} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(menuName)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 relative ${
                    activeDropdown === menuName
                      ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <span>{menuName}</span>
                  <ChevronDownIcon 
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === menuName ? 'rotate-180' : ''
                    }`} 
                  />
                  {/* Active indicator */}
                  {activeDropdown === menuName && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"
                      layoutId="activeDropdown"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {activeDropdown === menuName && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <div className="p-2">
                        {menuItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={handleMenuItemClick}
                            className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {item.name}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {item.description}
                                </p>
                              </div>
                              <ChevronDownIcon className="w-4 h-4 text-gray-400 rotate-[-90deg] group-hover:text-blue-500 transition-colors" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Search and Mobile menu buttons */}
          <div className="flex items-center gap-2">
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              title="Cari"
            >
              <FaSearch className="w-5 h-5 text-gray-700" />
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 mobile-menu-container"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-700" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mobile-menu-container bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
                {/* Regular nav items */}
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleMenuItemClick}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Dropdown menus for mobile */}
                {Object.entries(dropdownMenus).map(([menuName, menuItems]) => (
                  <div key={menuName} className="border-t border-gray-100 pt-2">
                    <button
                      onClick={() => handleDropdownToggle(menuName)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                        activeDropdown === menuName
                          ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <span>{menuName}</span>
                      <div className="flex items-center space-x-2">
                        {/* Badge indicator for number of items */}
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          activeDropdown === menuName 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {menuItems.length}
                        </span>
                        <ChevronDownIcon 
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeDropdown === menuName ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                      {/* Active indicator for mobile */}
                      {activeDropdown === menuName && (
                        <motion.div
                          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"
                          layoutId="activeMobileDropdown"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {activeDropdown === menuName && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 mt-2 space-y-1 bg-gray-50 rounded-lg p-2">
                            {menuItems.map((item) => (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                // transition={{ duration: 0.2, delay: index * 0.05 }}
                              >
                                <Link
                                  href={item.href}
                                  onClick={handleMenuItemClick}
                                  className="block px-4 py-3 rounded-lg text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 group"
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <p className="font-medium group-hover:text-blue-600 transition-colors">
                                        {item.name}
                                      </p>
                                      <p className="text-xs text-gray-500 mt-1">
                                        {item.description}
                                      </p>
                                    </div>
                                    <ChevronDownIcon className="w-4 h-4 text-gray-400 rotate-[-90deg] group-hover:text-blue-500 transition-colors" />
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global Search Modal */}
      <GlobalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
