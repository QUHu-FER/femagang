'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


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
        <div className="py-4 grid grid-cols-1 md:grid-cols-5 gap-3">
          {/* Logo dan Info Dinas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">⚡</span>
              </div>
              <div>
                <h3 className="font-bold text-base">ESDM</h3>
                <p className="text-xs text-gray-300">Sumatera Barat</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              Dinas Energi dan Sumber Daya Mineral Provinsi Sumatera Barat
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-2 mt-2">
              <a href="#" className="p-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                <FaFacebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-1.5 bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors">
                <FaTwitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-1.5 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors">
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-1.5 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
                <FaYoutube className="w-3.5 h-3.5" />
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
            <h3 className="text-base font-semibold mb-2 text-white">Menu Utama</h3>
            <ul className="space-y-2">
              {footerSections.menu.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors text-xs">
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
            <h3 className="text-base font-semibold mb-2 text-white">Layanan</h3>
            <ul className="space-y-2">
              {footerSections.layanan.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors text-xs">
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
            <h3 className="text-base font-semibold mb-2 text-white">Link Website</h3>
            <ul className="space-y-2">
              {footerSections.situsLain.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    target={item.target || '_self'}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-xs"
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
            <h3 className="text-base font-semibold mb-2 text-white">Kontak</h3>
            <div className="space-y-2 text-gray-300 text-xs">
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="w-3.5 h-3.5 mt-0.5 text-blue-400" />
                <div>
                  <p>Jl. Joni Anwar No.85 Lapai</p>
                  <p>Nanggalo, Kota Padang</p>
                  <p>Sumatera Barat 25142</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="w-3.5 h-3.5 text-blue-400" />
                <p>(0751) 7054487</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="w-3.5 h-3.5 text-blue-400" />
                <p>esdm@sumbarprov.go.id</p>
              </div>
            </div>

            {/* Visitor Stats */}
            <div className="mt-4 space-y-2">
              <h3 className="text-base font-semibold mb-2 text-white">📊 Statistik Website</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gradient-to-br from-green-400/20 to-green-700/30 rounded-lg px-3 py-2 border border-green-400/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-green-100">Online</span>
                    <span className="text-xs text-green-200 font-bold">55</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-400/20 to-blue-700/30 rounded-lg px-3 py-2 border border-blue-400/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-100">Hari Ini</span>
                    <span className="text-xs text-blue-200 font-bold">1,385</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-400/20 to-purple-700/30 rounded-lg px-3 py-2 border border-purple-400/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-purple-100">Kemarin</span>
                    <span className="text-xs text-purple-200 font-bold">9,144</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-700/30 rounded-lg px-3 py-2 border border-yellow-400/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-yellow-100">Total</span>
                    <span className="text-xs text-yellow-200 font-bold">3.7M</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400">Data diperbarui secara real-time</p>
            </div>

          </motion.div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs mb-2 md:mb-0">
              © {currentYear} Dinas ESDM Sumatera Barat. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-2 text-xs">
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
