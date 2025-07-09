'use client';

import Layout from '@/components/Layout';
import PhotoGallery from '@/components/PhotoGallery';
import VideoGallery from '@/components/VideoGallery';

export default function GaleriPage() {
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
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Peresmian PLTMH Tanjung Balik Kabupaten Solok",
      description: "Dokumentasi peresmian Pembangkit Listrik Tenaga Mikrohidro di Kabupaten Solok",
      thumbnail: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "15:32",
      views: 2450,
      date: "27 April 2020",
      category: "peresmian"
    },
    {
      id: 2,
      title: "Seminar ESQ Leadership",
      description: "Seminar pengembangan kepemimpinan untuk pegawai Dinas ESDM Sumatera Barat",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "45:15",
      views: 1820,
      date: "28 Desember 2020",
      category: "seminar"
    },
    {
      id: 3,
      title: "Penghargaan Subroto 2019",
      description: "Penerimaan penghargaan Subroto untuk prestasi terbaik Dinas ESDM",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "8:45",
      views: 3200,
      date: "16 April 2020",
      category: "penghargaan"
    },
    {
      id: 4,
      title: "Peresmian Listrik Desa 2020",
      description: "Program listrik masuk desa untuk meningkatkan akses energi di daerah terpencil",
      thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "22:18",
      views: 4100,
      date: "30 April 2020",
      category: "peresmian"
    },
    {
      id: 5,
      title: "Workshop Energi Terbarukan",
      description: "Workshop pengembangan energi terbarukan untuk masa depan berkelanjutan",
      thumbnail: "https://images.unsplash.com/photo-1497436072909-f5e4be843c96?w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "1:12:30",
      views: 2890,
      date: "12 Juni 2024",
      category: "workshop"
    },
    {
      id: 6,
      title: "Monitoring Tambang Berkelanjutan",
      description: "Kegiatan monitoring dan evaluasi tambang ramah lingkungan di Sumatera Barat",
      thumbnail: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "35:42",
      views: 1650,
      date: "8 Maret 2024",
      category: "monitoring"
    }
  ];

  return (
    <Layout>
      <PhotoGallery 
        photos={photos} 
        title="Galeri Foto Dokumentasi"
        showCategories={true}
      />
      <VideoGallery 
        videos={videos} 
        title="Galeri Video Dokumentasi"
        showCategories={true}
      />
    </Layout>
  );
}
