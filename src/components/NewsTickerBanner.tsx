'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SpeakerWaveIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function NewsTickerBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  const announcements = [
    "📢 Program Energi Terbarukan 2025 telah dibuka - Daftar sekarang untuk pembangunan PLTS!",
    "🔔 Sosialisasi Perizinan Pertambangan Online akan diselenggarakan tanggal 15-17 Juli 2025",
    "⚡ Pembangunan PLTA di Sumatera Barat mencapai target 85% - Info lengkap segera!",
    "� Peningkatan Kapasitas SDM Sektor ESDM - Pendaftaran dibuka hingga 30 Juli 2025",
    "📞 Layanan konsultasi perizinan ESDM tersedia 24/7 - Hubungi (0751) 7053781"
  ];

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [announcements.length, isPaused]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-lg relative overflow-hidden z-50"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Animated background waves */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12"
            animate={{ x: ['200%', '-100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2.5 sm:py-3 relative">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Left Section - Icon & Label */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <motion.div 
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <SpeakerWaveIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.div>
              <motion.span 
                className="text-xs sm:text-sm font-bold text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md border border-white/30 hidden sm:block"
                whileHover={{ scale: 1.05 }}
              >
                PENGUMUMAN
              </motion.span>
              {/* Mobile only icon */}
              <span className="text-xs font-bold text-white block sm:hidden">📢</span>
            </div>
            
            {/* Center Section - Scrolling Text */}
            <div className="flex-1 overflow-hidden mx-2 sm:mx-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: '100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '-100%', opacity: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.4, 0, 0.2, 1] 
                  }}
                  className="text-xs sm:text-sm md:text-base text-white font-medium leading-tight"
                >
                  <div className="truncate sm:whitespace-nowrap">
                    {/* Mobile: Show truncated text */}
                    <span className="block sm:hidden">
                      {announcements[currentIndex].length > 50 
                        ? `${announcements[currentIndex].substring(0, 50)}...` 
                        : announcements[currentIndex]
                      }
                    </span>
                    {/* Desktop: Show full text */}
                    <span className="hidden sm:block">
                      {announcements[currentIndex]}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Right Section - Indicators & Close */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              {/* Progress indicators - Hidden on mobile */}
              <div className="hidden md:flex space-x-1">
                {announcements.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${
                      index === currentIndex 
                        ? 'bg-white scale-125 shadow-lg' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              
              {/* Mobile Progress Bar */}
              <div className="flex md:hidden items-center space-x-1">
                <span className="text-xs text-white/80 font-medium">
                  {currentIndex + 1}/{announcements.length}
                </span>
                <div className="w-8 h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / announcements.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
              
              {/* Close button */}
              <motion.button
                onClick={() => setIsVisible(false)}
                className="w-6 h-6 sm:w-7 sm:h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30 group"
                aria-label="Tutup pengumuman"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <XMarkIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-red-100 transition-colors" />
              </motion.button>
            </div>
          </div>
          
          {/* Mobile: Touch indicators */}
          <div className="flex md:hidden justify-center mt-2 space-x-1">
            {announcements.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40'
                }`}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
        
        {/* Progress line animation */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-white/60"
          initial={{ width: 0 }}
          animate={{ width: isPaused ? `${((currentIndex + 1) / announcements.length) * 100}%` : '100%' }}
          transition={{ 
            duration: isPaused ? 0.3 : 5,
            ease: isPaused ? "easeOut" : "linear"
          }}
          key={currentIndex}
        />
      </motion.div>
    </AnimatePresence>
  );
}
