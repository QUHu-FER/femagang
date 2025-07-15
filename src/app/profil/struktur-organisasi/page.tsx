'use client';

import { motion } from 'framer-motion';
import { 
  UserGroupIcon, 
  BuildingOfficeIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import Image from 'next/image';

export default function StrukturOrganisasiPage() {
  const pimpinan = [
    {
      nama: "Ir. Herry Martiana, M.M.",
      jabatan: "Kepala Dinas",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      email: "kepala.dinas@esdm.sumbarprov.go.id",
      telepon: "(0751) 7051234"
    },
    {
      nama: "Mitro Wandojo, A.Md.T, M.Si",
      jabatan: "Sekretaris",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      email: "sekretaris@esdm.sumbarprov.go.id",
      telepon: "(0751) 7051235"
    }
  ];

  const subBagian = [
    {
      nama: "Agus Sugianto, S.T.",
      jabatan: "Sub Bagian Program dan Keuangan",
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    },
    {
      nama: "Jannaris, S.E., M.Si.",
      jabatan: "Sub Bagian Umum dan Kepegawaian",
      foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const bidang = [
    {
      nama: "Azmi Nur, S.Sos",
      jabatan: "Bidang Air Tanah dan Geologi",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
    },
    {
      nama: "Erfal Pratama, S.T., M.Sc",
      jabatan: "Bidang Pertambangan",
      foto: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop&crop=face"
    },
    {
      nama: "Irsuddin, S.T., M.T",
      jabatan: "Bidang Energi dan Ketenagalistrikan",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
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
            Struktur Organisasi
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

      {/* Bagan Struktur Organisasi */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bagan Struktur Organisasi</h2>
            <p className="text-lg text-gray-600">
              Pergub Nomor 28 Tahun 2021
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8">
              <div className="relative">
                <Image
                  src="/image/STRUKTUR.jpg"
                  alt="Struktur Organisasi Dinas ESDM Sumatera Barat"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pimpinan */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pimpinan</h2>
            <p className="text-lg text-gray-600">
              Struktur kepemimpinan Dinas ESDM Provinsi Sumatera Barat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pimpinan.map((person, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mr-4">
                      <Image
                        src={person.foto}
                        alt={person.nama}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{person.nama}</h3>
                      <p className="text-blue-600 font-semibold">{person.jabatan}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <EnvelopeIcon className="w-4 h-4 mr-2" />
                      <span className="text-sm">{person.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <PhoneIcon className="w-4 h-4 mr-2" />
                      <span className="text-sm">{person.telepon}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Bagian */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sub Bagian</h2>
            <p className="text-lg text-gray-600">
              Struktur Sub Bagian di bawah Sekretariat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subBagian.map((person, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={person.foto}
                      alt={person.nama}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{person.nama}</h3>
                    <p className="text-green-600 font-semibold text-sm">{person.jabatan}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bidang */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bidang</h2>
            <p className="text-lg text-gray-600">
              Struktur Bidang di Dinas ESDM Provinsi Sumatera Barat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bidang.map((person, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-6 text-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src={person.foto}
                      alt={person.nama}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{person.nama}</h3>
                  <p className="text-blue-600 font-semibold text-sm">{person.jabatan}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kelompok Jabatan Fungsional */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl p-8 border border-purple-300">
              <BuildingOfficeIcon className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kelompok Jabatan Fungsional</h3>
              <p className="text-lg text-gray-700 mb-6">
                Unit Pelaksana Teknis Daerah (UPTD) yang menunjang pelaksanaan tugas dan fungsi Dinas ESDM
              </p>
              <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">UPTD</h4>
                <p className="text-gray-600">
                  Unit Pelaksana Teknis Daerah yang bertanggung jawab dalam pelaksanaan kegiatan teknis operasional di lapangan
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
