'use client';

import Layout from '@/components/Layout';
import DocumentDownload from '@/components/DocumentDownload';

export default function DownloadPage() {
  const documents = [
    {
      id: 1,
      title: "Rencana Strategis ESDM Sumatera Barat 2024-2029",
      description: "Dokumen perencanaan strategis lima tahun untuk pengembangan energi dan sumber daya mineral di Sumatera Barat",
      category: "perencanaan",
      fileType: "pdf",
      fileSize: "2.5 MB",
      downloadUrl: "/downloads/renstra-esdm-2024-2029.pdf",
      uploadDate: "15 Juni 2024",
      downloads: 1250,
      author: "Tim Perencanaan ESDM"
    },
    {
      id: 2,
      title: "Laporan Kinerja Tahunan 2023",
      description: "Laporan pencapaian kinerja Dinas ESDM Sumatera Barat selama tahun 2023",
      category: "laporan",
      fileType: "pdf",
      fileSize: "4.8 MB",
      downloadUrl: "/downloads/lakip-2023.pdf",
      uploadDate: "20 Maret 2024",
      downloads: 890,
      author: "Bagian Perencanaan"
    },
    {
      id: 3,
      title: "Formulir Permohonan Izin Usaha Pertambangan",
      description: "Formulir untuk mengajukan izin usaha pertambangan di wilayah Sumatera Barat",
      category: "formulir",
      fileType: "doc",
      fileSize: "1.2 MB",
      downloadUrl: "/downloads/form-iup.doc",
      uploadDate: "10 Februari 2024",
      downloads: 2150,
      author: "Bidang Pertambangan"
    },
    {
      id: 4,
      title: "SOP Pengesahan Kepala Teknik Tambang",
      description: "Standar Operasional Prosedur untuk pengesahan kepala teknik tambang",
      category: "sop",
      fileType: "pdf",
      fileSize: "1.8 MB",
      downloadUrl: "/downloads/sop-kepala-teknik.pdf",
      uploadDate: "16 November 2022",
      downloads: 567,
      author: "Bidang Pertambangan"
    },
    {
      id: 5,
      title: "Data Potensi Energi Terbarukan Sumbar",
      description: "Database potensi energi terbarukan di seluruh kabupaten/kota Sumatera Barat",
      category: "data",
      fileType: "xlsx",
      fileSize: "3.2 MB",
      downloadUrl: "/downloads/data-energi-terbarukan.xlsx",
      uploadDate: "5 Mei 2024",
      downloads: 745,
      author: "Bidang Energi"
    },
    {
      id: 6,
      title: "Peraturan Daerah ESDM No. 5 Tahun 2023",
      description: "Peraturan daerah tentang pengelolaan energi dan sumber daya mineral",
      category: "regulasi",
      fileType: "pdf",
      fileSize: "2.1 MB",
      downloadUrl: "/downloads/perda-esdm-5-2023.pdf",
      uploadDate: "12 September 2023",
      downloads: 1580,
      author: "Bagian Hukum"
    },
    {
      id: 7,
      title: "Maklumat Pelayanan Publik PPID",
      description: "Maklumat pelayanan publik untuk Pejabat Pengelola Informasi dan Dokumentasi",
      category: "ppid",
      fileType: "pdf",
      fileSize: "950 KB",
      downloadUrl: "/downloads/maklumat-ppid.pdf",
      uploadDate: "22 September 2023",
      downloads: 420,
      author: "PPID ESDM"
    },
    {
      id: 8,
      title: "Bagan Alir Perpanjangan IUJP",
      description: "Alur prosedur perpanjangan Izin Usaha Jasa Pertambangan",
      category: "prosedur",
      fileType: "pdf",
      fileSize: "1.5 MB",
      downloadUrl: "/downloads/alur-perpanjangan-iujp.pdf",
      uploadDate: "2 November 2022",
      downloads: 680,
      author: "Bidang Pertambangan"
    },
    {
      id: 9,
      title: "Rencana Kerja Tahunan 2024",
      description: "Rencana kerja dan anggaran tahunan Dinas ESDM untuk tahun 2024",
      category: "perencanaan",
      fileType: "pdf",
      fileSize: "3.7 MB",
      downloadUrl: "/downloads/rkt-2024.pdf",
      uploadDate: "6 Juni 2024",
      downloads: 356,
      author: "Tim Perencanaan ESDM"
    },
    {
      id: 10,
      title: "Perjanjian Kinerja Eselon 2 Tahun 2024",
      description: "Dokumen perjanjian kinerja untuk pejabat eselon 2 tahun 2024",
      category: "kinerja",
      fileType: "pdf",
      fileSize: "2.8 MB",
      downloadUrl: "/downloads/pk-eselon2-2024.pdf",
      uploadDate: "6 Juni 2024",
      downloads: 234,
      author: "Bagian Kepegawaian"
    },
    {
      id: 11,
      title: "Standar Pelayanan Minimal ESDM",
      description: "Standar pelayanan minimal untuk sektor energi dan sumber daya mineral",
      category: "spm",
      fileType: "pdf",
      fileSize: "2.2 MB",
      downloadUrl: "/downloads/spm-esdm.pdf",
      uploadDate: "18 April 2024",
      downloads: 512,
      author: "Bagian Pelayanan"
    },
    {
      id: 12,
      title: "Formulir Pengaduan Masyarakat",
      description: "Formulir untuk menyampaikan pengaduan terkait layanan ESDM",
      category: "formulir",
      fileType: "doc",
      fileSize: "850 KB",
      downloadUrl: "/downloads/form-pengaduan.doc",
      uploadDate: "25 Januari 2024",
      downloads: 1100,
      author: "Bagian Humas"
    }
  ];

  return (
    <Layout>
      <DocumentDownload 
        documents={documents}
        title="Pusat Download Dokumen ESDM"
        showCategories={true}
      />
    </Layout>
  );
}
