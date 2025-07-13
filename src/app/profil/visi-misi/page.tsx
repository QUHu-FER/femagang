'use client';

import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function VisiMisiPage() {
  const visiMisi = {
    visi: "Terwujudnya pengelolaan energi dan sumber daya mineral yang berkelanjutan untuk mendukung pembangunan ekonomi dan kesejahteraan masyarakat Sumatera Barat",
    misi: [
      "Mengoptimalkan pemanfaatan energi dan sumber daya mineral untuk mendukung pembangunan daerah",
      "Meningkatkan investasi di bidang energi dan sumber daya mineral melalui kebijakan yang kondusif", 
      "Mengembangkan energi terbarukan dan ramah lingkungan untuk keberlanjutan masa depan",
      "Meningkatkan kapasitas sumber daya manusia di bidang energi dan sumber daya mineral",
      "Mewujudkan tata kelola pemerintahan yang baik dalam pengelolaan energi dan sumber daya mineral",
      "Meningkatkan pelayanan publik yang berkualitas di bidang energi dan sumber daya mineral"
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Visi & Misi
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dinas Energi dan Sumber Daya Mineral Provinsi Sumatera Barat
          </motion.p>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visi */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Visi</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{visiMisi.visi}</p>
            </motion.div>

            {/* Misi */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <DocumentTextIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Misi</h2>
              </div>
              <ul className="space-y-4">
                {visiMisi.misi.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Komitmen Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dinas ESDM Sumatera Barat berkomitmen untuk mewujudkan visi dan misi melalui program-program strategis yang berkelanjutan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inovasi</h3>
              <p className="text-gray-600">Mengembangkan teknologi dan metode terbaru dalam pengelolaan energi dan sumber daya mineral</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Keberlanjutan</h3>
              <p className="text-gray-600">Memastikan pembangunan yang berkelanjutan dengan memperhatikan aspek lingkungan</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pelayanan</h3>
              <p className="text-gray-600">Memberikan pelayanan publik yang prima dan berorientasi pada kepuasan masyarakat</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Mari Bersama Mewujudkan Visi & Misi
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan kami dalam membangun Sumatera Barat yang lebih maju di bidang energi dan sumber daya mineral
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Hubungi Kami
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Lihat Program
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
