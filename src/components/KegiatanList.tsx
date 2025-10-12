import React from 'react';

interface KegiatanItem {
  id: number;
  judul: string;
  tanggal: string;
  deskripsi: string;
}

interface KegiatanListProps {
  kegiatan: KegiatanItem[];
}

const KegiatanList: React.FC<KegiatanListProps> = ({ kegiatan }) => {
  return (
    <div className="space-y-4">
      {kegiatan.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold">{item.judul}</h3>
          <p className="text-gray-600 text-sm">{item.tanggal}</p>
          <p className="mt-2 text-gray-700">{item.deskripsi}</p>
        </div>
      ))}
    </div>
  );
};

export default KegiatanList;
