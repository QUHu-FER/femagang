'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  BoltIcon,
  CubeIcon,
  FireIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), { ssr: false });
import TypewriterText from '@/components/TypewriterText';
import SocialShare from '@/components/SocialShare';
import GlobalSearch from '@/components/GlobalSearch';
import NewsTickerBanner from '@/components/NewsTickerBanner';
import Image from 'next/image';

// Menyiapkan loader untuk gambar
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f3f4f6" offset="20%" />
      <stop stop-color="#eaebee" offset="50%" />
      <stop stop-color="#f3f4f6" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f3f4f6" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  const slides = [
    {
      title: "Energi Berkelanjutan",
      subtitle: "Membangun Masa Depan Energi Terbarukan untuk Sumatera Barat",
      description: "Mengembangkan potensi energi terbarukan untuk kemajuan daerah"
    },
    {
      title: "Sumber Daya Mineral",
      subtitle: "Pengelolaan Mineral Berkelanjutan dan Bertanggung Jawab",
      description: "Optimalisasi kekayaan mineral untuk kesejahteraan rakyat"
    },
    {
      title: "Inovasi Teknologi",
      subtitle: "Transformasi Digital Sektor Energi dan Pertambangan",
      description: "Modernisasi teknologi untuk efisiensi dan transparansi"
    }
  ];

  // Function to handle slide change
  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds (lebih lama agar user bisa baca)

    return () => clearInterval(interval);
  }, [slides.length]);

  const news = [
    {
      id: 1,
      title: "Roadmap Energi Terbarukan Sumatera Barat 2024-2030",
      date: "13 Juni 2025",
      category: "Energi",
      views: 380,
      excerpt: "Rencana strategis pengembangan energi terbarukan di Sumatera Barat yang mencakup solar, hidro, dan geothermal untuk mencapai target net zero emission 2060.",
      thumbnail: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800"
    },
    {
      id: 2,
      title: "Perjanjian Kinerja Dinas ESDM Sumatera Barat 2024",
      date: "13 Juni 2025",
      category: "Program",
      views: 351,
      excerpt: "Komitmen kinerja dalam pengelolaan energi dan sumber daya mineral dengan fokus pada keberlanjutan dan kesejahteraan masyarakat.",
      thumbnail: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800"
    },
    {
      id: 3,
      title: "Rencana Aksi Pengelolaan Pertambangan Berkelanjutan 2024",
      date: "13 Juni 2025",
      category: "Pertambangan",
      views: 348,
      excerpt: "Strategi pengelolaan pertambangan yang memperhatikan aspek lingkungan dan pemberdayaan masyarakat sekitar area tambang.",
      thumbnail: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=800"
    },
    {
      id: 4,
      title: "Sosialisasi Keselamatan Pertambangan Mineral dan Batubara",
      date: "12 Juni 2025",
      category: "Sosialisasi",
      views: 290,
      excerpt: "Kegiatan sosialisasi untuk meningkatkan pemahaman dan penerapan keselamatan kerja di sektor pertambangan mineral dan batubara.",
      thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
    }
  ];

  const services = [
    {
      icon: <BoltIcon className="w-8 h-8" />,
      title: "Energi Terbarukan",
      description: "Pengembangan dan pengawasan sistem energi terbarukan di Sumatera Barat"
    },
    {
      icon: <CubeIcon className="w-8 h-8" />,
      title: "Pertambangan",
      description: "Pengelolaan dan pengawasan kegiatan pertambangan yang berkelanjutan"
    },
    {
      icon: <FireIcon className="w-8 h-8" />,
      title: "Migas",
      description: "Pengelolaan minyak dan gas bumi untuk kesejahteraan masyarakat"
    }
  ];

  const quickLinks = [
    { title: "Pencarian", desc: "Cari informasi, berita, dan dokumen ESDM", action: () => setSearchOpen(true) },
    { title: "PPID", desc: "Pejabat Pengelola Informasi dan Dokumentasi", action: () => window.location.href = '/profil#ppid' },
    { title: "E-Layanan", desc: "Layanan Digital Terpadu ESDM", action: () => window.location.href = '/layanan' },
    { title: "Download", desc: "Dokumen dan Formulir ESDM", action: () => window.location.href = '/download' }
  ];

  return (
    <Layout>
      {/* News Ticker Banner */}
      <NewsTickerBanner />

      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[500px] max-h-[800px] sm:h-[85vh] sm:min-h-[600px] sm:max-h-[900px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden isolate" aria-label="Hero banner">
        {/* Particles Background */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-slate-900/80 to-blue-900/70"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-x-12"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform -skew-x-12"></div>
          </div>
        </div>

        {/* Slides Container */}
        <div className="relative h-full overflow-hidden">
          <div
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                  <div className="max-w-6xl mx-auto text-center w-full">
                    <div className="mb-4 sm:mb-6 md:mb-8">
                      <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 sm:px-8 sm:py-4 mb-3 sm:mb-6">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mr-3 sm:mr-4 overflow-hidden">
                          <div className="relative w-full h-full">
                            <Image
                              src="/logo-sumbar.png"
                              alt="Logo Sumatera Barat"
                              fill
                              className="object-contain"
                              priority
                              sizes="(max-width: 640px) 48px, 64px"
                            />
                          </div>
                        </div>
                        <div className="text-left">
                          <div className="text-white font-bold text-sm sm:text-lg">DINAS ESDM</div>
                          <div className="text-blue-200 font-medium text-xs sm:text-sm opacity-90">Provinsi Sumatera Barat</div>
                        </div>
                      </div>
                    </div>

                    <motion.h1
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight px-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-blue-200 mb-1 sm:mb-2 md:mb-3">
                        {slide.title}
                      </span>
                      <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight block">
                        {/* Desktop version */}
                        <span className="hidden sm:block">
                          <TypewriterText
                            text={slide.subtitle}
                            speed={50}
                            delay={1000}
                          />
                        </span>
                        {/* Mobile version - shorter text */}
                        <span className="block sm:hidden">
                          <TypewriterText
                            text={slide.subtitle.length > 50 ? slide.subtitle.substring(0, 50) + '...' : slide.subtitle}
                            speed={50}
                            delay={1000}
                          />
                        </span>
                      </span>
                    </motion.h1>

                    <motion.p
                      className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 mb-12 sm:mb-16"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <Link href="/layanan" className="w-full sm:w-auto">
                        <motion.div
                          className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 hover:scale-105 flex items-center space-x-2 w-full justify-center max-w-xs backdrop-blur-sm border border-white/10 text-sm sm:text-base cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Jelajahi Layanan</span>
                          <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </Link>

                      <Link href="/profil" className="w-full sm:w-auto">
                        <motion.div
                          className="group border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center space-x-2 w-full justify-center max-w-xs text-sm sm:text-base cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <PlayIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" />
                          </div>
                          <span>Tonton Profil</span>
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Hide on mobile */}
        <button
          onClick={() => handleSlideChange(activeSlide === 0 ? slides.length - 1 : activeSlide - 1)}
          className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-20"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => handleSlideChange(activeSlide === slides.length - 1 ? 0 : activeSlide + 1)}
          className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-20"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 z-20">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`group relative transition-all duration-500 ${index === activeSlide ? 'scale-110' : 'hover:scale-105'
                }`}
              aria-label={`Slide ${index + 1}: ${slide.title}`}
            >
              <div className={`relative overflow-hidden rounded-full transition-all duration-500 ${index === activeSlide
                ? 'w-12 h-3 sm:w-16 sm:h-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-lg shadow-blue-400/50'
                : 'w-3 h-3 sm:w-4 sm:h-4 bg-white/40 hover:bg-white/60'
                }`}>
                {index === activeSlide && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse"></div>
                )}
              </div>

              {/* Tooltip - Hide on mobile */}
              <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
                  {slide.title}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Scroll Indicator - Responsive */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-white/70 z-20">
          <motion.div
            className="flex flex-col items-center space-y-1 sm:space-y-2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs sm:text-sm font-medium">Scroll</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center relative overflow-hidden">
              <motion.div
                className="w-0.5 h-2 sm:w-1 sm:h-3 bg-gradient-to-b from-white/70 to-white/30 rounded-full mt-1 sm:mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 sm:w-8 sm:h-8 border border-white/30 rounded-full flex items-center justify-center"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating News Cards - Berita Terkini dengan Thumbnail */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-gray-50 to-white" aria-label="Berita Terkini">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl p-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 group-hover:bg-white/90 overflow-hidden flex flex-col h-full">
                  {/* Thumbnail */}
                  <div className="h-32 sm:h-36 w-full bg-gradient-to-br from-blue-100 via-white/30 to-purple-100 flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col p-6 sm:p-8">
                    {/* Kategori & Tanggal */}
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {item.category}
                      </span>
                      <span className="text-gray-500 text-xs ml-3">{item.date}</span>
                    </div>
                    {/* Judul */}
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                      {item.title}
                    </h3>
                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3 text-xs sm:text-sm flex-1">{item.excerpt}</p>
                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto pt-2">
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-xs sm:text-sm">
                        Baca Selengkapnya
                        <ChevronRightIcon className="w-4 h-4 ml-1" />
                      </button>
                      <span className="text-gray-500 text-xs flex items-center">
                        👁️ {item.views}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-white to-gray-50 border-b border-gray-100" aria-label="Layanan Digital">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-6 sm:mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Layanan Digital</h2>
            <p className="text-sm sm:text-base text-gray-600 px-4 sm:px-0">Akses cepat ke berbagai layanan pemerintahan</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickLinks.map((link, index) => (
              <motion.button
                key={index}
                onClick={link.action}
                className="group relative bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl border border-white/50 hover:border-blue-200/50 transition-all duration-500 overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-blue-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.04, y: -6 }}
              >
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 pointer-events-none rounded-xl sm:rounded-2xl group-hover:ring-2 group-hover:ring-blue-300 transition-all duration-300" />
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-100 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg sm:text-xl drop-shadow-md tracking-wide">
                      {link.title.split(' ').length > 1 ? link.title.split(' ').map(w => w[0]).join('') : link.title.slice(0, 2)}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2 min-h-[36px]">
                    {link.desc}
                  </p>
                  {/* Arrow Icon */}
                  <div className="absolute top-3 sm:top-6 right-3 sm:right-6 w-7 h-7 sm:w-8 sm:h-8 bg-blue-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-blue-100 transition-all duration-300 shadow group-hover:shadow-md">
                    <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:text-blue-700" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white" aria-label="Bidang Layanan ESDM">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-blue-50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4">
              <span className="text-blue-600 font-semibold text-xs sm:text-sm">⚡ BIDANG ESDM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">Bidang Layanan ESDM</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Komitmen kami dalam membangun Sumatera Barat melalui pengelolaan energi terbarukan,
              pertambangan berkelanjutan, dan pemberdayaan sumber daya mineral untuk kesejahteraan rakyat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Container */}
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <button className="group/btn inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-300">
                    <span>Pelajari Lebih Lanjut</span>
                    <ChevronRightIcon className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-100/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Lihat Semua Bidang ESDM
            </button>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50" aria-label="Berita ESDM Terbaru">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Berita ESDM Terbaru</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">Update terkini dari Dinas ESDM Sumatera Barat mengenai program energi terbarukan dan pertambangan berkelanjutan</p>
          </motion.div>

          {/* Featured News */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              {/* Main Featured News */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={news[0].thumbnail}
                    alt={news[0].title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {news[0].category}
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm ml-3">{news[0].date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                    {news[0].title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base">{news[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm sm:text-base">
                      Baca Selengkapnya
                      <ChevronRightIcon className="w-4 h-4 ml-1" />
                    </button>
                    <span className="text-gray-500 text-xs sm:text-sm flex items-center">
                      👁️ {news[0].views}
                    </span>
                  </div>
                </div>
              </div>

              {/* Side News */}
              <div className="space-y-3 sm:space-y-4">
                {news.slice(1, 3).map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden flex-shrink-0">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 80px, 96px"
                          placeholder="blur"
                          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(96, 96))}`}
                        />
                      </div>
                      <div className="p-3 sm:p-4 flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">
                            {item.category}
                          </span>
                          <span className="text-gray-500 text-xs ml-2">{item.date}</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm hover:text-blue-600 transition-colors cursor-pointer">
                          {item.title}
                        </h4>
                        <div className="flex items-center justify-between">
                          <button className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium">
                            Baca
                          </button>
                          <span className="text-gray-500 text-xs flex items-center">
                            👁️ {item.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* All News Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
          >
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm ml-3">{item.date}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm">
                      Baca Selengkapnya
                      <ChevronRightIcon className="w-4 h-4 ml-1" />
                    </button>
                    <span className="text-gray-500 text-xs sm:text-sm flex items-center">
                      👁️ {item.views}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          <motion.div
            className="flex flex-col items-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-center space-x-2">
              <button
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Previous
              </button>
              <div className="flex items-center space-x-1">
                <button className="px-4 py-2 border border-blue-500 bg-blue-500 text-white rounded-lg text-sm font-medium">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm font-medium text-gray-700">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm font-medium text-gray-700">
                  3
                </button>
                <span className="px-4 py-2 text-gray-600">...</span>
                <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm font-medium text-gray-700">
                  8
                </button>
              </div>
              <button
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700"
              >
                Next
              </button>
            </div>
            <Link href="/berita" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl inline-block">
              Lihat Semua Berita
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white" aria-label="Informasi Kontak">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6">
              <span className="text-blue-600 font-semibold text-xs sm:text-sm">📞 HUBUNGI DINAS ESDM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Informasi Kontak ESDM</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Kami siap melayani dan memberikan informasi terkait energi terbarukan,
              pertambangan, dan pengelolaan sumber daya mineral
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
            {[
              {
                icon: <PhoneIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Telepon",
                primary: "(0751) 1234567",
                secondary: "Senin - Jumat: 08:00 - 16:00",
                gradient: "from-blue-500 to-blue-600",
                bg: "from-blue-50 to-blue-100",
                border: "border-blue-200"
              },
              {
                icon: <EnvelopeIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Email",
                primary: "esdm@sumbarprov.go.id",
                secondary: "Respon dalam 1x24 jam",
                gradient: "from-green-500 to-green-600",
                bg: "from-green-50 to-green-100",
                border: "border-green-200"
              },
              {
                icon: <MapPinIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Alamat",
                primary: "Jalan Jend. Sudirman No. 2, Padang",
                secondary: "Sumatera Barat, Indonesia",
                gradient: "from-orange-500 to-orange-600",
                bg: "from-orange-50 to-orange-100",
                border: "border-orange-200"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className={`group relative text-center p-6 sm:p-8 bg-gradient-to-br ${contact.bg} rounded-2xl sm:rounded-3xl ${contact.border} border hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br ${contact.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  {contact.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{contact.title}</h3>
                  <p className="text-gray-700 font-semibold text-sm sm:text-base md:text-lg mb-2 break-words">{contact.primary}</p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">{contact.secondary}</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>

          {/* Map Section */}
          <motion.div
            className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="h-60 sm:h-72 md:h-80 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center text-blue-900 px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
                  <MapPinIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Lokasi Kantor ESDM</h3>
                <p className="text-sm sm:text-base md:text-lg mb-1">Dinas Energi dan Sumber Daya Mineral</p>
                <p className="text-xs sm:text-sm md:text-base opacity-80 mb-4 sm:mb-6">Pemerintah Provinsi Sumatera Barat</p>

                {/* Action Button */}
                <button className="bg-blue-600 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base">
                  Buka di Maps
                </button>
              </div>
            </div>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            className="text-center mt-8 sm:mt-10 md:mt-12 p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Jam Pelayanan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-gray-600 font-medium text-sm sm:text-base">Hari Kerja</p>
                <p className="text-xl sm:text-2xl font-bold text-blue-600">08:00 - 16:00</p>
                <p className="text-xs sm:text-sm text-gray-500">Senin - Jumat</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 font-medium text-sm sm:text-base">Akhir Pekan</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-400">Tutup</p>
                <p className="text-xs sm:text-sm text-gray-500">Sabtu - Minggu</p>
              </div>
            </div>
          </motion.div>

          {/* Social Share */}
          <motion.div
            className="text-center mt-8 p-6 bg-gray-50 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <SocialShare
              url={typeof window !== 'undefined' ? window.location.href : ''}
              title="Dinas ESDM Sumatera Barat - Portal Resmi"
              className="justify-center"
            />
          </motion.div>
        </div>
      </section>

      {/* Global Search Modal */}
      <GlobalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </Layout>
  );
}
