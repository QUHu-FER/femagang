

"use client";
import Layout from '@/components/Layout';

export default function PengumumanPage() {
  // Dummy data
  const announcements = [
    {
      title: 'Pemberitahuan Pemadaman Listrik',
      date: '29 Juli 2025',
      excerpt: 'Akan ada pemadaman listrik terjadwal di beberapa wilayah Sumatera Barat pada tanggal 31 Juli 2025 mulai pukul 09.00 hingga 15.00 WIB.',
      link: '#'
    },
    {
      title: 'Pengumuman Lelang Proyek Energi Terbarukan',
      date: '25 Juli 2025',
      excerpt: 'Dinas ESDM membuka lelang proyek pembangunan PLTS di Kabupaten Solok. Informasi dan dokumen dapat diunduh di website resmi.',
      link: '#'
    },
    {
      title: 'Pendaftaran Magang Mahasiswa',
      date: '20 Juli 2025',
      excerpt: 'Dibuka pendaftaran magang mahasiswa untuk periode Agustus-Desember 2025 di lingkungan Dinas ESDM Sumatera Barat.',
      link: '#'
    }
  ];

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-800">Pengumuman</h1>
          <p className="text-gray-600 text-base sm:text-lg">Informasi dan pengumuman resmi dari Dinas ESDM Sumatera Barat</p>
        </div>
        <div className="space-y-6">
          {announcements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-600 font-semibold text-sm">{item.date}</span>
                <a href={item.link} className="text-blue-500 hover:underline text-sm font-medium">Detail</a>
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h2>
              <p className="text-gray-700 text-sm">{item.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
