'use client';

import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function KontakPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hubungi Kami
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Sampaikan pertanyaan, saran, atau keluhan Anda kepada Dinas ESDM Sumatera Barat
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Informasi Kontak
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Kami siap melayani dan memberikan informasi terbaik untuk kebutuhan Anda terkait energi dan sumber daya mineral.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Alamat Kantor
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Jl. Khatib Sulaiman No. 45, Padang Utara, <br />
                      Kota Padang, Sumatera Barat 25173
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <FaPhone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Telepon & Fax
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Telepon: (0751) 7051234 <br />
                      Fax: (0751) 7051235
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      info@esdm.sumbarprov.go.id <br />
                      ppid@esdm.sumbarprov.go.id
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <FaClock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Jam Operasional
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Senin - Kamis: 08:00 - 16:00 WIB <br />
                      Jumat: 08:00 - 11:30 WIB <br />
                      Sabtu & Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Ikuti Media Sosial Kami
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    title="Facebook"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                    title="Twitter"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
                    title="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                    title="YouTube"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <iframe
                  title="Lokasi Kantor Gubernur Sumatera Barat"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15938.96423483313!2d100.3601954!3d-0.9174206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b93a131b4c13%3A0x1b0187a6268f2f45!2sKantor%20Gubernur%20Sumatera%20Barat!5e0!3m2!1sid!2sid!4v1720520000000!5m2!1sid!2sid"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 md:h-80"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
