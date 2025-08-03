'use client';

import { motion } from 'framer-motion';
import { 
  ClipboardDocumentListIcon,
  CogIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  LightBulbIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function TugasFungsiPage() {
  const tugasPokok = [
    {
      id: 1,
      title: "Perumusan Kebijakan",
      description: "Merumuskan kebijakan teknis di bidang energi dan sumber daya mineral sesuai dengan peraturan perundang-undangan yang berlaku",
      icon: DocumentTextIcon,
      color: "bg-blue-500",
      details: [
        "Penyusunan rencana strategis bidang energi dan sumber daya mineral",
        "Perumusan kebijakan teknis pengelolaan energi terbarukan",
        "Penetapan standar dan prosedur operasional bidang ESDM",
        "Koordinasi dengan instansi terkait dalam penyusunan kebijakan"
      ]
    },
    {
      id: 2,
      title: "Penyelenggaraan Urusan Pemerintahan",
      description: "Melaksanakan urusan pemerintahan dan pelayanan umum di bidang energi dan sumber daya mineral",
      icon: CogIcon,
      color: "bg-green-500",
      details: [
        "Penerbitan izin usaha pertambangan dan energi",
        "Pengawasan kegiatan usaha pertambangan",
        "Fasilitasi investasi di sektor energi dan pertambangan",
        "Koordinasi program pembangunan infrastruktur energi"
      ]
    },
    {
      id: 3,
      title: "Pembinaan dan Pengawasan",
      description: "Melakukan pembinaan teknis dan pengawasan terhadap kegiatan di bidang energi dan sumber daya mineral",
      icon: ShieldCheckIcon,
      color: "bg-orange-500",
      details: [
        "Pengawasan operasional kegiatan pertambangan",
        "Pembinaan teknis kepada pelaku usaha",
        "Monitoring kepatuhan terhadap peraturan lingkungan",
        "Evaluasi kinerja perusahaan tambang dan energi"
      ]
    },
    {
      id: 4,
      title: "Evaluasi dan Pelaporan",
      description: "Melaksanakan evaluasi dan pelaporan pelaksanaan tugas di bidang energi dan sumber daya mineral",
      icon: ClipboardDocumentListIcon,
      color: "bg-purple-500",
      details: [
        "Monitoring dan evaluasi program kerja",
        "Penyusunan laporan kinerja dinas",
        "Analisis pencapaian target dan sasaran",
        "Pelaporan kepada pemerintah pusat dan daerah"
      ]
    }
  ];

  const fungsiUtama = [
    {
      bidang: "Energi",
      icon: LightBulbIcon,
      color: "from-yellow-400 to-orange-500",
      fungsi: [
        "Pengembangan energi terbarukan (surya, angin, air, biomassa)",
        "Pengelolaan ketenagalistrikan daerah",
        "Pengawasan distribusi bahan bakar minyak",
        "Promosi efisiensi energi dan konservasi",
        "Fasilitasi pembangunan infrastruktur energi"
      ]
    },
    {
      bidang: "Sumber Daya Mineral",
      icon: UserGroupIcon,
      color: "from-gray-500 to-gray-700",
      fungsi: [
        "Pengelolaan izin usaha pertambangan",
        "Pengawasan kegiatan eksplorasi dan eksploitasi",
        "Pembinaan pertambangan rakyat",
        "Monitoring dampak lingkungan pertambangan",
        "Optimalisasi penerimaan daerah dari sektor pertambangan"
      ]
    },
    {
      bidang: "Pelayanan Publik",
      icon: UserGroupIcon,
      color: "from-blue-500 to-indigo-600",
      fungsi: [
        "Pelayanan perizinan terpadu satu pintu",
        "Konsultasi teknis kepada masyarakat",
        "Sosialisasi program dan kebijakan",
        "Penanganan pengaduan masyarakat",
        "Transparansi informasi publik"
      ]
    }
  ];

  const struktur = [
    {
      jabatan: "Kepala Dinas",
      nama: "Ir. H. Joni Arman, M.T",
      tugas: "Memimpin dan mengkoordinasikan seluruh kegiatan dinas serta bertanggung jawab atas pencapaian visi dan misi organisasi",
      wewenang: [
        "Menetapkan kebijakan operasional dinas",
        "Mengkoordinasikan pelaksanaan tugas dan fungsi",
        "Membina dan mengawasi kinerja pegawai",
        "Mewakili dinas dalam hubungan eksternal"
      ]
    },
    {
      jabatan: "Sekretaris Dinas",
      nama: "Drs. H. Ramlan Nurmatias, M.Si",
      tugas: "Mengkoordinasikan kegiatan administrasi, keuangan, dan kepegawaian untuk mendukung kelancaran operasional dinas",
      wewenang: [
        "Mengelola administrasi umum dan keuangan",
        "Mengkoordinasikan perencanaan program",
        "Membina administrasi kepegawaian",
        "Menyiapkan laporan kinerja dinas"
      ]
    },
    {
      jabatan: "Kepala Bidang Energi",
      nama: "Dr. Ir. Syamsul Bahri, M.T",
      tugas: "Mengelola dan mengembangkan program di bidang energi termasuk energi terbarukan dan ketenagalistrikan",
      wewenang: [
        "Menyusun program pengembangan energi",
        "Mengawasi kegiatan energi di daerah",
        "Memberikan rekomendasi teknis energi",
        "Mengkoordinasikan dengan stakeholder energi"
      ]
    },
    {
      jabatan: "Kepala Bidang Sumber Daya Mineral",
      nama: "Ir. Hj. Ratna Dewi, M.T",
      tugas: "Mengelola program pertambangan dan sumber daya mineral dengan fokus pada keberlanjutan dan kepatuhan regulasi",
      wewenang: [
        "Mengelola izin usaha pertambangan",
        "Mengawasi kegiatan pertambangan",
        "Melakukan pembinaan pertambangan rakyat",
        "Monitoring dampak lingkungan"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;80&quot; height=&quot;80&quot; viewBox=&quot;0 0 80 80&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Cpath d=&quot;M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z&quot;/&gt;%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8 backdrop-blur-sm"
            >
              <ClipboardDocumentListIcon className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Tugas & Fungsi
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Tugas pokok dan fungsi Dinas Energi dan Sumber Daya Mineral Provinsi Sumatera Barat 
              dalam melayani masyarakat dan mengelola sumber daya alam daerah
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tugas Pokok Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tugas Pokok Dinas ESDM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empat pilar utama dalam menjalankan amanah pengelolaan energi dan sumber daya mineral
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tugasPokok.map((tugas, index) => (
              <motion.div
                key={tugas.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${tugas.color} rounded-xl flex items-center justify-center mr-6`}>
                    <tugas.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{tugas.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">{tugas.description}</p>
                
                <div className="space-y-3">
                  {tugas.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fungsi Utama Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fungsi Utama Berdasarkan Bidang
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pembagian fungsi strategis berdasarkan bidang keahlian dan tanggung jawab
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {fungsiUtama.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.bidang}</h3>
                  
                  <ul className="space-y-4">
                    {item.fungsi.map((fungsi, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRightIcon className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{fungsi}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Struktur dan Wewenang Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Struktur Organisasi & Wewenang
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pembagian tugas dan wewenang dalam struktur organisasi Dinas ESDM
            </p>
          </motion.div>

          <div className="space-y-8">
            {struktur.map((jabatan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{jabatan.jabatan}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">{jabatan.nama}</p>
                    <p className="text-gray-600 leading-relaxed">{jabatan.tugas}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Wewenang dan Tanggung Jawab:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {jabatan.wewenang.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Komitmen Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Komitmen Pelayanan
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Dinas Energi dan Sumber Daya Mineral Provinsi Sumatera Barat berkomitmen untuk 
                melaksanakan tugas dan fungsi dengan integritas tinggi, profesionalisme, 
                dan orientasi pada kepentingan masyarakat serta kelestarian lingkungan.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <DocumentTextIcon className="w-5 h-5 mr-2" />
                Hubungi Kami untuk Konsultasi
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
