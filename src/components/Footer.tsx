'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import VisitorStatsCompact from './VisitorStatsCompact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    menu: [
      { name: 'Beranda', href: '/' },
      { name: 'Profil Dinas', href: '/profil' },
      { name: 'Berita & Artikel', href: '/berita' },
      { name: 'Program Kerja', href: '/layanan' },
      { name: 'Galeri Kegiatan', href: '/galeri' },
    ],
    layanan: [
      { name: 'Pengaduan Online', href: '/pengaduan' },
      { name: 'PPID', href: '/ppid' },
      { name: 'Download Dokumen', href: '/download' },
      { name: 'Konsultasi Energi', href: '/konsultasi' },
      { name: 'Lapor Pertambangan', href: '/lapor' },
    ],
    situsLain: [
      { name: 'Situs Resmi Sumbar', href: 'https://sumbarprov.go.id', target: '_blank' },
      { name: 'SIMAYA Sumbar', href: 'https://simaya.sumbarprov.go.id', target: '_blank' },
      { name: 'SIGA ESDM', href: '#' },
      { name: 'Portal Energi', href: '#' },
      { name: 'Lapor.go.id', href: 'https://lapor.go.id', target: '_blank' },
    ]
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Decorative background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Logo dan Info Dinas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">⚡</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">ESDM</h3>
                <p className="text-sm text-gray-300">Sumatera Barat</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dinas Energi dan Sumber Daya Mineral Provinsi Sumatera Barat
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3 mt-4">
              <a href="#" className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Menu Utama */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Menu Utama</h3>
            <ul className="space-y-2">
              {footerSections.menu.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Layanan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Layanan</h3>
            <ul className="space-y-2">
              {footerSections.layanan.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Link Website */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Link Website</h3>
            <ul className="space-y-2">
              {footerSections.situsLain.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    target={item.target || '_self'}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kontak & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Kontak</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-blue-400" />
                <div>
                  <p>Jl. Joni Anwar No.85 Lapai</p>
                  <p>Nanggalo, Kota Padang</p>
                  <p>Sumatera Barat 25142</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="w-4 h-4 text-blue-400" />
                <p>(0751) 7054487</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="w-4 h-4 text-blue-400" />
                <p>esdm@sumbarprov.go.id</p>
              </div>
            </div>
            
            {/* Visitor Stats - Compact Version */}
            <div className="mt-4">
              <VisitorStatsCompact />
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              © {currentYear} Dinas ESDM Sumatera Barat. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
