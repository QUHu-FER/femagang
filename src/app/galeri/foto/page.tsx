'use client';

import Layout from '@/components/Layout';
import PhotoGallery from '@/components/PhotoGallery';

export default function FotoPage() {
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1497436072909-f5e4be843c96?w=800",
      title: "Workshop International Center for Hydropower",
      description: "Dinas ESDM Sumatera Barat menghadiri workshop pengembangan pembangkit listrik tenaga air",
      category: "workshop",
      date: "14 Mei 2024"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800", 
      title: "Kunjungan ke PLTA Singkarak",
      description: "Field trip ke PLTA Singkarak bersama FTI Universitas Bung Hatta dan ICH Norwegia",
      category: "kunjungan",
      date: "7 Mei 2024"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
      title: "Sidak SPBU Kota Padang", 
      description: "Kepala Dinas ESDM melakukan sidak mendadak ke beberapa SPBU di Kota Padang",
      category: "pengawasan",
      date: "28 Desember 2023"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800",
      title: "Rapat Kerja Komisi IV DPRD",
      description: "Kepala Dinas ESDM menghadiri Rapat Kerja dengan Komisi IV DPRD Sumatera Barat",
      category: "rapat",
      date: "22 Maret 2022"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800",
      title: "Perjanjian Kerjasama FTI UBH",
      description: "Penandatanganan perjanjian kerjasama antara FTI Universitas Bung Hatta dengan Dinas ESDM",
      category: "kerjasama",
      date: "22 Maret 2022"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1498049860654-af1a5c566876?w=800",
      title: "Rapat Pengembangan RUKD",
      description: "Rapat rencana pengembangan sistem penyediaan tenaga listrik (RUKD)",
      category: "rapat",
      date: "22 Maret 2022"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
      title: "Forum Perangkat Daerah",
      description: "Forum Perangkat Daerah Penyusunan Rencana Kerja Dinas ESDM",
      category: "forum",
      date: "22 Maret 2022"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      title: "Sosialisasi Energi Terbarukan",
      description: "Sosialisasi program pengembangan energi terbarukan kepada masyarakat",
      category: "sosialisasi",
      date: "15 Januari 2024"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
      title: "Monitoring Pembangkit Listrik",
      description: "Kegiatan monitoring dan evaluasi pembangkit listrik di Sumatera Barat",
      category: "monitoring",
      date: "10 Februari 2024"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=800",
      title: "Survei Potensi Geothermal",
      description: "Survei lapangan untuk mengidentifikasi potensi energi panas bumi",
      category: "survei",
      date: "28 Januari 2024"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
      title: "Pelatihan Teknis Migas",
      description: "Pelatihan teknis untuk petugas di bidang minyak dan gas bumi",
      category: "pelatihan",
      date: "5 Maret 2024"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
      title: "Seminar Energi Berkelanjutan",
      description: "Seminar nasional tentang pengembangan energi berkelanjutan di Indonesia",
      category: "seminar",
      date: "12 April 2024"
    }
  ];

  return (
    <Layout>
      <PhotoGallery 
        photos={photos} 
        title="Galeri Foto Dokumentasi"
        showCategories={true}
      />
    </Layout>
  );
}
