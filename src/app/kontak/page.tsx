'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '@/components/Layout';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  UserIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Pesan Anda telah terkirim! Terima kasih.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Alamat",
      content: "Jl. Khatib Sulaiman No. 52, Padang, Sumatera Barat 25136",
      color: "text-blue-600"
    },
    {
      icon: PhoneIcon,
      title: "Telepon",
      content: "(0751) 7051711",
      color: "text-green-600"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      content: "dp3ap2kb@sumbarprov.go.id",
      color: "text-purple-600"
    },
    {
      icon: ClockIcon,
      title: "Jam Operasional",
      content: "Senin - Jumat: 08.00 - 16.00 WIB",
      color: "text-orange-600"
    }
  ];

  const departments = [
    {
      name: "Sekretariat",
      phone: "(0751) 7051711",
      email: "sekretariat@dp3ap2kb.sumbarprov.go.id"
    },
    {
      name: "Bidang Pengendalian Penduduk dan KB",
      phone: "(0751) 7051712",
      email: "pp_kb@dp3ap2kb.sumbarprov.go.id"
    },
    {
      name: "Bidang Pemberdayaan Perempuan",
      phone: "(0751) 7051713",
      email: "pp@dp3ap2kb.sumbarprov.go.id"
    },
    {
      name: "Bidang Perlindungan Anak",
      phone: "(0751) 7051714",
      email: "pa@dp3ap2kb.sumbarprov.go.id"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hubungi Kami
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Kami siap membantu dan melayani Anda dengan sepenuh hati
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${info.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                  <info.icon className={`w-6 h-6 ${info.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Kirim Pesan</h2>
                  <p className="text-gray-600">Sampaikan pertanyaan atau saran Anda</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Masukkan email Anda"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Subjek pesan"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lokasi Kami</h3>
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <MapPinIcon className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-lg font-medium">Peta Lokasi</p>
                    <p className="text-sm opacity-90">Jl. Khatib Sulaiman No. 52, Padang</p>
                  </div>
                </div>
              </motion.div>

              {/* Department Contacts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Kontak Bidang</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 mb-2">{dept.name}</h4>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <PhoneIcon className="w-4 h-4" />
                          <span>{dept.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <EnvelopeIcon className="w-4 h-4" />
                          <span>{dept.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Emergency Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-red-50 rounded-xl p-8 shadow-md border border-red-200"
              >
                <h3 className="text-xl font-bold text-red-900 mb-4">Kontak Darurat</h3>
                <p className="text-red-700 mb-4">
                  Untuk kasus darurat yang memerlukan penanganan segera, hubungi:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-red-700">
                    <PhoneIcon className="w-5 h-5" />
                    <span className="font-semibold">+62 813-6372-1234</span>
                  </div>
                  <div className="flex items-center space-x-2 text-red-700">
                    <EnvelopeIcon className="w-5 h-5" />
                    <span className="font-semibold">darurat@dp3ap2kb.sumbarprov.go.id</span>
                  </div>
                </div>
                <p className="text-sm text-red-600 mt-4">
                  * Tersedia 24 jam untuk kasus kekerasan terhadap perempuan dan anak
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
