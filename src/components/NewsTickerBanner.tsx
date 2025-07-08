'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SpeakerWaveIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function NewsTickerBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const announcements = [
    "📢 Pemberdayaan Perempuan UMKM tahun 2025 telah dibuka - Daftar sekarang!",
    "🔔 Sosialisasi Perlindungan Anak akan diselenggarakan tanggal 15-17 Juli 2025",
    "💼 Program Keluarga Berencana gratis untuk masyarakat kurang mampu",
    "🎓 Pelatihan Keterampilan Perempuan - Pendaftaran dibuka hingga 30 Juli 2025",
    "📞 Layanan konsultasi KB tersedia 24/7 - Hubungi (0751) 7053781"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [announcements.length]);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <SpeakerWaveIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-bold text-white bg-white/20 px-2 py-1 rounded">
                PENGUMUMAN
              </span>
            </div>
            
            <div className="flex-1 overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-sm md:text-base text-white whitespace-nowrap font-medium"
              >
                {announcements[currentIndex]}
              </motion.div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Progress indicators */}
            <div className="hidden md:flex space-x-1">
              {announcements.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Tutup pengumuman"
            >
              <XMarkIcon className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
