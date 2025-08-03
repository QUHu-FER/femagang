'use client';

import { motion } from 'framer-motion';
import { 
  ClockIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function SejarahPage() {
  const timelineEvents = [
    {
      year: "1945",
      title: "Awal Kemerdekaan",
      description: "Setelah kemerdekaan Indonesia, urusan pertambangan dan energi masih dikelola secara terpusat dari Jakarta dengan perwakilan daerah yang terbatas.",
      icon: CalendarIcon,
      color: "bg-red-500"
    },
    {
      year: "1957",
      title: "Pembentukan Dinas Pertambangan",
      description: "Dibentuk Dinas Pertambangan Provinsi Sumatera Barat sebagai cikal bakal pengelolaan sumber daya mineral di daerah.",
      icon: BuildingOfficeIcon,
      color: "bg-blue-500"
    },
    {
      year: "1974",
      title: "Reorganisasi Kelembagaan",
      description: "Seiring dengan perkembangan otonomi daerah, dinas mengalami reorganisasi untuk memperkuat kapasitas dalam mengelola potensi daerah.",
      icon: DocumentTextIcon,
      color: "bg-green-500"
    },
    {
      year: "1999",
      title: "Era Reformasi dan Otonomi Daerah",
      description: "Implementasi UU No. 22/1999 tentang Pemerintahan Daerah memberikan kewenangan lebih besar kepada daerah dalam mengelola sumber daya alam.",
      icon: BuildingOfficeIcon,
      color: "bg-purple-500"
    },
    {
      year: "2001",
      title: "Penggabungan Energi dan Pertambangan",
      description: "Dinas Pertambangan bergabung dengan sektor energi menjadi Dinas Energi dan Sumber Daya Mineral (ESDM) sesuai dengan perkembangan kebutuhan daerah.",
      icon: BuildingOfficeIcon,
      color: "bg-orange-500"
    },
    {
      year: "2008",
      title: "Penguatan Kelembagaan",
      description: "Restrukturisasi organisasi untuk mengoptimalkan pelayanan publik dan pengelolaan potensi energi dan pertambangan Sumatera Barat.",
      icon: DocumentTextIcon,
      color: "bg-indigo-500"
    },
    {
      year: "2016",
      title: "Modernisasi Layanan",
      description: "Implementasi sistem informasi dan digitalisasi layanan untuk meningkatkan transparansi dan efisiensi pelayanan kepada masyarakat.",
      icon: BuildingOfficeIcon,
      color: "bg-teal-500"
    },
    {
      year: "2020-Sekarang",
      title: "Era Digital dan Berkelanjutan",
      description: "Fokus pada pengembangan energi terbarukan, digitalisasi layanan, dan pembangunan berkelanjutan sektor energi dan pertambangan.",
      icon: BuildingOfficeIcon,
      color: "bg-emerald-500"
    }
  ];

  const achievements = [
    {
      title: "Potensi Energi Terbarukan",
      description: "Sumatera Barat memiliki potensi energi terbarukan yang besar, termasuk tenaga air, surya, dan biomassa yang terus dikembangkan.",
      number: "2,500+ MW",
      color: "text-green-600"
    },
    {
      title: "Cadangan Batubara",
      description: "Memiliki cadangan batubara yang signifikan dengan kualitas baik untuk mendukung kebutuhan energi regional.",
      number: "180+ Juta Ton",
      color: "text-gray-600"
    },
    {
      title: "Mineral Logam",
      description: "Potensi emas, perak, dan mineral logam lainnya yang tersebar di berbagai kabupaten/kota.",
      number: "15+ Jenis",
      color: "text-yellow-600"
    },
    {
      title: "Layanan Perizinan",
      description: "Telah melayani ribuan permohonan izin usaha pertambangan dan energi dengan proses yang transparan.",
      number: "5,000+",
      color: "text-blue-600"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
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
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm"
            >
              <ClockIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Sejarah Singkat
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              Perjalanan panjang Dinas Energi dan Sumber Daya Mineral Provinsi Sumatera Barat 
              dalam melayani masyarakat dan mengembangkan potensi daerah
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Sejarah
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Dari masa kemerdekaan hingga era digital, berikut adalah tonggak-tonggak penting 
              dalam perkembangan Dinas ESDM Sumatera Barat
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            {/* Mobile Timeline Line */}
            <div className="md:hidden absolute left-8 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>

            <div className="space-y-8 md:space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                >
                  {/* Desktop Layout */}
                  <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center ${index % 2 === 0 ? 'order-2 ml-4' : 'order-1 mr-4'}`}>
                          <event.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                          <span className="text-2xl font-bold text-gray-900">{event.year}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex-1 ml-16">
                    <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className={`w-10 h-10 ${event.color} rounded-full flex items-center justify-center mr-3`}>
                          <event.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">{event.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Desktop Timeline Dot */}
                  <div className="hidden md:flex relative items-center justify-center">
                    <div className={`w-6 h-6 ${event.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                  </div>

                  {/* Mobile Timeline Dot */}
                  <div className="md:hidden absolute left-6 flex items-center justify-center">
                    <div className={`w-4 h-4 ${event.color} rounded-full border-2 border-white shadow-lg z-10`}></div>
                  </div>

                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pencapaian dan Potensi
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Hasil dari perjalanan panjang dalam mengelola dan mengembangkan 
              sektor energi dan sumber daya mineral Sumatera Barat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <div className={`text-3xl md:text-4xl font-bold ${achievement.color} mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.number}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
              Warisan untuk Masa Depan
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6 px-4">
                Perjalanan sejarah Dinas ESDM Sumatera Barat merupakan cerminan komitmen dalam 
                melayani masyarakat dan mengoptimalkan potensi sumber daya alam daerah. 
                Dari masa ke masa, dinas terus beradaptasi dengan perkembangan zaman dan 
                kebutuhan masyarakat.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 px-4">
                Dengan pengalaman puluhan tahun, Dinas ESDM Sumatera Barat siap menghadapi 
                tantangan masa depan dengan fokus pada pembangunan berkelanjutan, 
                energi terbarukan, dan digitalisasi layanan untuk kemajuan Sumatera Barat.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <DocumentTextIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Pelajari Lebih Lanjut
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
