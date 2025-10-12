'use client';

import { motion } from 'framer-motion';
import { 
  UserGroupIcon,
  ShieldCheckIcon,
  HeartIcon,
  DocumentTextIcon,
  PhoneIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  DocumentArrowDownIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function LayananPage() {
  const mainServices = [
    {
      icon: <UserGroupIcon className="w-12 h-12" />,
      title: "Pemberdayaan Perempuan",
      description: "Program pelatihan keterampilan, pemberdayaan ekonomi, dan peningkatan partisipasi perempuan dalam pembangunan",
      features: [
        "Pelatihan Keterampilan Usaha",
        "Bantuan Modal Usaha",
        "Pendampingan UMKM",
        "Program Literasi Keuangan"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12" />,
      title: "Perlindungan Anak",
      description: "Layanan perlindungan anak dari kekerasan, eksploitasi, dan diskriminasi serta rehabilitasi korban",
      features: [
        "Konseling Anak dan Keluarga",
        "Shelter/Rumah Aman",
        "Rehabilitasi Sosial",
        "Advokasi Hukum"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <HeartIcon className="w-12 h-12" />,
      title: "Keluarga Berencana",
      description: "Layanan konsultasi KB, edukasi kesehatan reproduksi, dan program pengendalian penduduk",
      features: [
        "Konsultasi KB",
        "Edukasi Kesehatan Reproduksi",
        "Pelayanan Kontrasepsi",
        "Program Generasi Berencana"
      ],
      color: "from-green-500 to-green-600"
    }
  ];

  const digitalServices = [
    {
      icon: <ComputerDesktopIcon className="w-8 h-8" />,
      title: "Layanan Online",
      description: "Akses layanan digital untuk kemudahan masyarakat",
      link: "#"
    },
    {
      icon: <DocumentTextIcon className="w-8 h-8" />,
      title: "PPID",
      description: "Pejabat Pengelola Informasi dan Dokumentasi",
      link: "#"
    },
    {
      icon: <DocumentArrowDownIcon className="w-8 h-8" />,
      title: "Download",
      description: "Unduh formulir dan dokumen penting",
      link: "#"
    },
    {
      icon: <ExclamationTriangleIcon className="w-8 h-8" />,
      title: "Pengaduan",
      description: "Sampaikan keluhan dan saran Anda",
      link: "#"
    }
  ];

  const consultationServices = [
    {
      title: "Konsultasi Psikologi Anak",
      description: "Layanan konsultasi psikologi untuk perkembangan anak",
      schedule: "Senin - Jumat: 08:00 - 15:00",
      contact: "(0751) 7053781"
    },
    {
      title: "Konsultasi Keluarga Berencana",
      description: "Konsultasi terkait program KB dan kesehatan reproduksi",
      schedule: "Senin - Jumat: 08:00 - 15:00",
      contact: "(0751) 7053781"
    },
    {
      title: "Konsultasi Hukum",
      description: "Bantuan hukum untuk kasus kekerasan dan diskriminasi",
      schedule: "Senin - Kamis: 09:00 - 14:00",
      contact: "(0751) 7053781"
    }
  ];

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
            Layanan Kami
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Berbagai program dan layanan untuk mendukung pemberdayaan perempuan, perlindungan anak, dan keluarga berencana
          </motion.p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Utama</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tiga bidang utama layanan kami dalam melayani masyarakat Sumatera Barat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold ml-4">{service.title}</h3>
                  </div>
                  <p className="text-white/90">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Layanan yang Tersedia:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Digital</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Akses mudah dan cepat untuk berbagai layanan melalui platform digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalServices.map((service, index) => (
              <motion.a
                key={index}
                href={service.link}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Konsultasi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Konsultasi gratis dengan tenaga ahli berpengalaman
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <AcademicCapIcon className="w-4 h-4 mr-2" />
                    {service.schedule}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    {service.contact}
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Buat Janji
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-red-600 rounded-xl p-8 text-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ExclamationTriangleIcon className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Layanan Darurat</h2>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Jika Anda atau seseorang yang Anda kenal mengalami kekerasan atau dalam situasi darurat, 
              jangan ragu untuk menghubungi layanan darurat kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:119"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Hotline: 119
              </a>
              <a
                href="tel:08117112331"
                className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors border border-red-500"
              >
                WA: 0811-7112-331
              </a>
            </div>
          </motion.div>
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
              Butuh Bantuan Lebih Lanjut?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Tim kami siap membantu Anda. Hubungi kami untuk konsultasi dan informasi lebih detail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Hubungi Kami
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Chat WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
