'use client';

import { motion } from 'framer-motion';

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
      { name: 'Konsultasi KB', href: '/konsultasi' },
      { name: 'Lapor Kekerasan', href: '/lapor' },
    ],
    situsLain: [
      { name: 'Situs Resmi Sumbar', href: '#' },
      { name: 'SIMAYA Sumbar', href: '#' },
      { name: 'SIGA DPPPA', href: '#' },
      { name: 'SIPPAK UPTD', href: '#' },
      { name: 'Lapor.go.id', href: '#' },
    ]
  };

  return (
    <footer 
      className="relative text-white"
      style={{
        backgroundImage: `url('https://i.ytimg.com/vi/I-VYFW8sCtc/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGBMgRSh_MA8=&rs=AOn4CLAovmc0hsae87H3AiF6BXHn7fG2tA')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">DP3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">DP3AP2KB</h3>
                <p className="text-sm text-gray-400">Sumatera Barat</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dinas Pemberdayaan Perempuan dan Perlindungan Anak, 
              Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-3">
              {footerSections.menu.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-3">
              {footerSections.layanan.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Situs Terkait</h4>
            <ul className="space-y-3">
              {footerSections.situsLain.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} DP3AP2KB Sumatera Barat. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
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
