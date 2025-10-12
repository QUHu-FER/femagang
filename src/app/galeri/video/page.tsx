'use client';

import Layout from '@/components/Layout';
import VideoGallery from '@/components/VideoGallery';

export default function VideoPage() {
  // Base videos data
  const baseVideos = [
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
    },
    {
      id: 7,
      title: "Pelatihan Teknis Geothermal",
      description: "Pelatihan teknis untuk pengembangan energi panas bumi di Sumatera Barat",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "28:45",
      views: 1980,
      date: "15 Februari 2024",
      category: "pelatihan"
    },
    {
      id: 8,
      title: "Launching Program Energi Berkelanjutan 2024",
      description: "Peluncuran program strategis pengembangan energi berkelanjutan tahun 2024",
      thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "42:20",
      views: 3750,
      date: "10 Januari 2024",
      category: "launching"
    },
    {
      id: 9,
      title: "Sidak Pertambangan Illegal",
      description: "Operasi sidak mendadak untuk penertiban pertambangan ilegal di Sumatera Barat",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "18:12",
      views: 2650,
      date: "5 Maret 2024",
      category: "operasi"
    }
  ];

  // Generate more videos for pagination
  const generateMoreVideos = () => {
    const allVideos = [...baseVideos];
    for (let i = 1; i <= 2; i++) {
      baseVideos.forEach((video) => {
        allVideos.push({
          ...video,
          id: video.id + baseVideos.length * i,
          title: `${video.title} - Part ${i + 1}`,
          views: Math.floor(video.views * (0.5 + Math.random())),
          date: new Date(new Date(video.date).getTime() + i * 30 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        });
      });
    }
    return allVideos;
  };

  return (
    <Layout>
      <VideoGallery 
        videos={generateMoreVideos()} 
        title="Galeri Video Dokumentasi"
        showCategories={true}
      />
    </Layout>
  );
}
