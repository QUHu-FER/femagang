'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
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

interface MenuItem {
  name: string;
  href: string;
  description: string;
  external?: boolean;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Tidak perlu navItems array lagi karena kita hardcode urutan yang benar

  const dropdownMenus: Record<string, MenuItem[]> = {
    'Profil': [
      { name: 'Struktur Organisasi', href: '/profil/struktur-organisasi', description: 'Bagan organisasi Dinas ESDM' },
      { name: 'Visi dan Misi', href: '/profil/visi-misi', description: 'Visi, misi, dan tujuan dinas' },
      { name: 'Sejarah Singkat', href: '/profil/sejarah', description: 'Sejarah pembentukan dinas' },
      { name: 'Tugas dan Fungsi', href: '/profil/tugas-fungsi', description: 'Tupoksi dinas ESDM' },
    ],
    'Data dan Informasi': [
      { name: 'Berita Utama', href: '/berita', description: 'Berita dan informasi terkini' },
      { name: 'Siaran Pers', href: '/data-informasi/siaran-pers', description: 'Press release resmi' },
      { name: 'Pengumuman', href: '/data-informasi/pengumuman', description: 'Pengumuman resmi dinas' },
      { name: 'Kegiatan Dinas', href: '/data-informasi/kegiatan-dinas', description: 'Dokumentasi kegiatan' },
    ],
    'Media Data': [
      { name: 'Galeri Foto', href: '/galeri/foto', description: 'Dokumentasi foto kegiatan' },
      { name: 'Galeri Video', href: '/galeri/video', description: 'Video dokumentasi' },
    ],
    'PPID': [
      { name: 'Profil Singkat Organisasi PPID', href: '/ppid/profil', description: 'Profil PPID Dinas ESDM' },
      { name: 'Struktur PPID Pelaksana Dinas ESDM', href: '/ppid/struktur', description: 'Struktur organisasi PPID' },
      { name: 'Tugas Fungsi PPID', href: '/ppid/tugas-fungsi', description: 'Tupoksi PPID' },
      { name: 'Daftar Informasi Publik (DIP)', href: '/ppid/dip', description: 'Daftar informasi publik' },
      { name: 'Informasi Regulasi', href: '/ppid/regulasi', description: 'Informasi regulasi terkait' },
      { name: 'Permohonan Informasi', href: '/ppid/permohonan', description: 'Form permohonan informasi' },
      { name: 'Keberatan Permohonan', href: '/ppid/keberatan', description: 'Form keberatan permohonan' },
      { name: 'Informasi Publik Dinas ESDM', href: '/ppid/informasi-publik', description: 'Informasi publik dinas' },
    ],
    'Download Area': [
      { name: 'Dokumen Publik', href: '/download/dokumen', description: 'Dokumen untuk publik' },
      { name: 'Formulir Layanan', href: '/download/formulir', description: 'Formulir berbagai layanan' },
      { name: 'Peraturan', href: '/download/peraturan', description: 'Peraturan dan regulasi' },
      { name: 'Laporan', href: '/download/laporan', description: 'Laporan kegiatan dan keuangan' },
    ],
    'Informasi Pelayanan Publik': [
      { name: 'Dokumen Layanan Publik', href: 'https://drive.google.com/drive/folders/1-a6A2KVjw5hD0YYp_r-O_P7NLlNnDEY_', description: 'Akses dokumen layanan publik', external: true },
    ],
  };
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Fungsi untuk mengecek apakah dropdown menu sedang aktif berdasarkan submenu
  const isDropdownActive = (menuName: string) => {
    const menuItems = dropdownMenus[menuName];
    if (!menuItems) return false;

    return menuItems.some(item => {
      if (item.href === '/') {
        return pathname === '/';
      }
      return pathname.startsWith(item.href);
    });
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
    <header className="bg-white shadow-sm sticky top-0 z-[100] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group min-w-0 flex-shrink-0">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden border border-gray-200">
              <div className="relative w-full h-full p-1">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Coat_of_arms_West_Sumatera.png/1200px-Coat_of_arms_West_Sumatera.png"
                  alt="Logo Sumatera Barat"
                  className="object-contain"
                  fill
                />
              </div>
            </div>
            <div className="min-w-0">
              <h1 className="text-lg xl:text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors whitespace-nowrap">
                DINAS ESDM
              </h1>
              <p className="text-xs xl:text-sm text-gray-600 group-hover:text-gray-700 transition-colors whitespace-nowrap">
                Sumatera Barat
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-end overflow-visible">
            {/* Menu utama pertama - Beranda */}
            <Link
              href="/"
              className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap ${isActive('/')
                  ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
            >
              Beranda
              {isActive('/') && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full"
                  layoutId="activeTab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>

            {/* Dropdown Menus - urutan sesuai gambar: Profil, Data dan Informasi, Media Data, PPID, Download Area, Hubungi Kami, Informasi Pelayanan Publik, Lapor */}

            {/* Profil Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('Profil')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                aria-label="Menu Profil"
                aria-expanded={activeDropdown === 'Profil'}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 relative whitespace-nowrap ${activeDropdown === 'Profil' || isDropdownActive('Profil')
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <span>Profil</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'Profil' ? 'rotate-180' : ''
                    }`}
                />
                {/* Active indicator untuk dropdown yang aktif */}
                {isDropdownActive('Profil') && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"
                    layoutId="activeDropdownIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === 'Profil' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-[60]"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="p-2">
                      {dropdownMenus['Profil'].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={handleMenuItemClick}
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                            <ChevronDownIcon className="w-4 h-4 text-gray-400 rotate-[-90deg] group-hover:text-blue-500 transition-colors ml-2 flex-shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Data dan Informasi Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('Data dan Informasi')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                aria-label="Menu Data dan Informasi"
                aria-expanded={activeDropdown === 'Data dan Informasi'}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 relative whitespace-nowrap ${activeDropdown === 'Data dan Informasi' || isDropdownActive('Data dan Informasi')
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <span>Data dan Informasi</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'Data dan Informasi' ? 'rotate-180' : ''
                    }`}
                />
                {/* Active indicator untuk dropdown yang aktif */}
                {isDropdownActive('Data dan Informasi') && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"
                    layoutId="activeDropdownIndicator2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === 'Data dan Informasi' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-[60]"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="p-2">
                      {dropdownMenus['Data dan Informasi'].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={handleMenuItemClick}
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                            <ChevronDownIcon className="w-4 h-4 text-gray-400 rotate-[-90deg] group-hover:text-blue-500 transition-colors ml-2 flex-shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Media Data Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('Media Data')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                aria-label="Menu Media Data"
                aria-expanded={activeDropdown === 'Media Data'}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 relative whitespace-nowrap ${activeDropdown === 'Media Data' || isDropdownActive('Media Data')
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <span>Media Data</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'Media Data' ? 'rotate-180' : ''
                    }`}
                />
                {/* Active indicator untuk dropdown yang aktif */}
                {isDropdownActive('Media Data') && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"
                    layoutId="activeDropdownIndicator3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === 'Media Data' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-[60]"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="p-2">
                      {dropdownMenus['Media Data'].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={handleMenuItemClick}
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                            <ChevronDownIcon className="w-4 h-4 text-gray-400 rotate-[-90deg] group-hover:text-blue-500 transition-colors ml-2 flex-shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* PPID Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('PPID')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                aria-label="Menu PPID"
                aria-expanded={activeDropdown === 'PPID'}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 relative whitespace-nowrap ${activeDropdown === 'PPID' || isDropdownActive('PPID')
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <span>PPID</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'PPID' ? 'rotate-180' : ''
                    }`}
                />
                {/* Active indicator untuk dropdown yang aktif */}
                {isDropdownActive('PPID') && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"
                    layoutId="activeDropdownIndicator4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === 'PPID' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-[60]"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="p-2">
                      {dropdownMenus['PPID'].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={handleMenuItemClick}
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                            <ChevronDownIcon className="w-4 h-4 text-gray-400 rotate-[-90deg] group-hover:text-blue-500 transition-colors ml-2 flex-shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Download Area Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('Download Area')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                aria-label="Menu Download Area"
                aria-expanded={activeDropdown === 'Download Area'}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 relative whitespace-nowrap ${activeDropdown === 'Download Area' || isDropdownActive('Download Area')
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <span>Download Area</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'Download Area' ? 'rotate-180' : ''
                    }`}
                />
                {/* Active indicator untuk dropdown yang aktif */}
                {isDropdownActive('Download Area') && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"
                    layoutId="activeDropdownIndicator5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === 'Download Area' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-[60]"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="p-2">
                      {dropdownMenus['Download Area'].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={handleMenuItemClick}
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                            <ChevronDownIcon className="w-4 h-4 text-gray-400 rotate-[-90deg] group-hover:text-blue-500 transition-colors ml-2 flex-shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hubungi Kami - link biasa */}
            <Link
              href="/kontak"
              className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap ${isActive('/kontak')
                  ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
            >
              Hubungi Kami
              {isActive('/kontak') && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full"
                  layoutId="activeTab2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>

            {/* Informasi Pelayanan Publik Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('Informasi Pelayanan Publik')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                aria-label="Menu Informasi Pelayanan Publik"
                aria-expanded={activeDropdown === 'Informasi Pelayanan Publik'}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 relative whitespace-nowrap ${activeDropdown === 'Informasi Pelayanan Publik' || isDropdownActive('Informasi Pelayanan Publik')
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <span>Informasi Pelayanan Publik</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'Informasi Pelayanan Publik' ? 'rotate-180' : ''
                    }`}
                />
                {/* Active indicator untuk dropdown yang aktif */}
                {isDropdownActive('Informasi Pelayanan Publik') && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"
                    layoutId="activeDropdownIndicator6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === 'Informasi Pelayanan Publik' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-[60]"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="p-2">
                      {dropdownMenus['Informasi Pelayanan Publik'].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          onClick={handleMenuItemClick}
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.name}
                                {item.external && (
                                  <span className="ml-1 text-xs text-gray-400">↗</span>
                                )}
                              </p>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                            <ChevronDownIcon className="w-4 h-4 text-gray-400 rotate-[-90deg] group-hover:text-blue-500 transition-colors ml-2 flex-shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Lapor - link langsung dengan styling yang lebih baik */}
            <Link
              href="https://www.lapor.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center space-x-1"
            >
              <span>Lapor</span>
              <span className="text-xs opacity-60">↗</span>
            </Link>
          </nav>

          {/* Search and Mobile menu buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              aria-label="Cari"
              title="Cari"
            >
              <FaSearch className="w-5 h-5 text-gray-700" />
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 mobile-menu-container"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileMenuOpen}
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
                {/* Menu utama berurutan */}
                <Link
                  href="/"
                  onClick={handleMenuItemClick}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive('/')
                      ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  Beranda
                </Link>

                {/* Dropdown menus for mobile - dalam urutan yang benar */}
                {['Profil', 'Data dan Informasi', 'Media Data', 'PPID', 'Download Area'].map((menuName) => {
                  const menuItems = dropdownMenus[menuName];
                  if (!menuItems) return null;

                  return (
                    <div key={menuName} className="border-t border-gray-100 pt-2">
                      <button
                        onClick={() => handleDropdownToggle(menuName)}
                        aria-label={`Menu ${menuName}`}
                        aria-expanded={activeDropdown === menuName}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-300 relative ${activeDropdown === menuName
                            ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                      >
                        <span>{menuName}</span>
                        <div className="flex items-center space-x-2">
                          {/* Badge indicator for number of items */}
                          <span className={`text-xs px-2 py-1 rounded-full ${activeDropdown === menuName
                              ? 'bg-white/20 text-white'
                              : 'bg-gray-200 text-gray-600'
                            }`}>
                            {menuItems.length}
                          </span>
                          <ChevronDownIcon
                            className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === menuName ? 'rotate-180' : ''
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
                                    target={item.external ? '_blank' : undefined}
                                    rel={item.external ? 'noopener noreferrer' : undefined}
                                    onClick={handleMenuItemClick}
                                    className="block px-4 py-3 rounded-lg text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 group"
                                  >
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <p className="font-medium group-hover:text-blue-600 transition-colors">
                                          {item.name}
                                          {item.external && (
                                            <span className="ml-1 text-xs text-gray-400">↗</span>
                                          )}
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
                  );
                })}

                {/* Menu lainnya */}
                <Link
                  href="/kontak"
                  onClick={handleMenuItemClick}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive('/kontak')
                      ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  Hubungi Kami
                </Link>

                {/* Informasi Pelayanan Publik dropdown */}
                <div className="border-t border-gray-100 pt-2">
                  <button
                    onClick={() => handleDropdownToggle('Informasi Pelayanan Publik')}
                    aria-label="Menu Informasi Pelayanan Publik"
                    aria-expanded={activeDropdown === 'Informasi Pelayanan Publik'}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-300 relative ${activeDropdown === 'Informasi Pelayanan Publik'
                        ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                  >
                    <span>Informasi Pelayanan Publik</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${activeDropdown === 'Informasi Pelayanan Publik'
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-200 text-gray-600'
                        }`}>
                        {dropdownMenus['Informasi Pelayanan Publik'].length}
                      </span>
                      <ChevronDownIcon
                        className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'Informasi Pelayanan Publik' ? 'rotate-180' : ''
                          }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'Informasi Pelayanan Publik' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-2 space-y-1 bg-gray-50 rounded-lg p-2">
                          {dropdownMenus['Informasi Pelayanan Publik'].map((item) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                            >
                              <Link
                                href={item.href}
                                target={item.external ? '_blank' : undefined}
                                rel={item.external ? 'noopener noreferrer' : undefined}
                                onClick={handleMenuItemClick}
                                className="block px-4 py-3 rounded-lg text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 group"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium group-hover:text-blue-600 transition-colors">
                                      {item.name}
                                      {item.external && (
                                        <span className="ml-1 text-xs text-gray-400">↗</span>
                                      )}
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

                {/* Lapor link langsung */}
                <Link
                  href="https://www.lapor.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMenuItemClick}
                  className="block px-4 py-3 rounded-lg font-medium transition-all duration-300 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  Lapor <span className="ml-1 text-xs opacity-60">↗</span>
                </Link>
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
