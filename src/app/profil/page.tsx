'use client';

import { motion } from 'framer-motion';
import { 
  UserGroupIcon, 
  BuildingOffice2Icon, 
  DocumentTextIcon,
  AcademicCapIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function ProfilPage() {
  const organizationStructure = [
    {
      title: "Kepala Dinas",
      name: "Dr. H. Ahmad Syafii, M.Si",
      description: "Memimpin dan mengkoordinasikan seluruh kegiatan dinas"
    },
    {
      title: "Sekretaris Dinas",
      name: "Drs. Budi Santoso, M.AP",
      description: "Mengkoordinasikan administrasi dan keuangan"
    },
    {
      title: "Bidang Pemberdayaan Perempuan",
      name: "Dr. Siti Aminah, M.Si",
      description: "Mengelola program pemberdayaan perempuan"
    },
    {
      title: "Bidang Perlindungan Anak",
      name: "Dra. Ratna Sari, M.Psi",
      description: "Mengelola program perlindungan anak"
    }
  ];

  const visiMisi = {
    visi: "Terwujudnya kesetaraan dan keadilan gender serta perlindungan anak yang optimal dalam mewujudkan keluarga berkualitas di Sumatera Barat",
    misi: [
      "Meningkatkan kualitas hidup dan peran perempuan di berbagai bidang pembangunan",
      "Meningkatkan upaya perlindungan anak dari segala bentuk kekerasan dan diskriminasi", 
      "Mewujudkan keluarga berkualitas melalui program Keluarga Berencana yang berkelanjutan",
      "Menguatkan kelembagaan dan jaringan dalam pemberdayaan perempuan dan perlindungan anak",
      "Meningkatkan pengendalian penduduk dan penyediaan data kependudukan yang akurat"
    ]
  };

  const tugasPokok = [
    "Perumusan kebijakan teknis di bidang pemberdayaan perempuan dan perlindungan anak",
    "Penyelenggaraan urusan pemerintahan dan pelayanan umum di bidang pengendalian penduduk dan KB",
    "Pembinaan dan pelaksanaan tugas di bidang pemberdayaan perempuan, perlindungan anak, pengendalian penduduk dan KB",
    "Pelaksanaan evaluasi dan pelaporan di bidang pemberdayaan perempuan, perlindungan anak, pengendalian penduduk dan KB"
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
            Profil DP3AP2KB
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat
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
                <h2 className="text-2xl font-bold text-gray-900">Visi</h2>
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
                <h2 className="text-2xl font-bold text-gray-900">Misi</h2>
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

      {/* Tugas Pokok Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tugas Pokok dan Fungsi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Berikut adalah tugas pokok dan fungsi DP3AP2KB Sumatera Barat dalam melayani masyarakat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tugasPokok.map((tugas, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{tugas}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Struktur Organisasi Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Struktur Organisasi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Susunan pimpinan dan struktur organisasi DP3AP2KB Sumatera Barat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationStructure.map((person, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition-all border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserGroupIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{person.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{person.name}</p>
                <p className="text-sm text-gray-600">{person.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sejarah Singkat</h2>
          </motion.div>

          <motion.div
            className="bg-white p-8 md:p-12 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana (DP3AP2KB) 
                Provinsi Sumatera Barat dibentuk berdasarkan Peraturan Daerah Provinsi Sumatera Barat yang mengatur tentang 
                pembentukan dan susunan perangkat daerah.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Dinas ini merupakan hasil penggabungan dari beberapa instansi terkait yang sebelumnya menangani bidang 
                pemberdayaan perempuan, perlindungan anak, dan keluarga berencana secara terpisah. Penggabungan ini 
                bertujuan untuk meningkatkan efektivitas dan efisiensi dalam pelayanan kepada masyarakat.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Hingga saat ini, DP3AP2KB terus berkomitmen untuk memberikan pelayanan terbaik dalam upaya pemberdayaan 
                perempuan, perlindungan anak, serta pengendalian penduduk dan keluarga berencana di Provinsi Sumatera Barat.
              </p>
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
              Ingin Mengetahui Lebih Lanjut?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Hubungi kami untuk informasi lebih detail mengenai program dan layanan kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Hubungi Kami
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Lihat Layanan
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
