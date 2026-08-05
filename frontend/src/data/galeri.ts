export interface GaleriItem {
  judul: string;
  gambar: string;
  tanggal?: string;
}

export const galeri: GaleriItem[] = [
  { judul: 'Gotong Royong Bersih Gampong', gambar: '/images/placeholder-kegiatan.svg', tanggal: '2026-01-10' },
  { judul: 'Musyawarah Gampong', gambar: '/images/placeholder-kegiatan.svg', tanggal: '2026-02-14' },
  { judul: 'Kegiatan Posyandu', gambar: '/images/placeholder-kegiatan.svg', tanggal: '2026-03-05' },
  { judul: 'Kegiatan Keagamaan', gambar: '/images/placeholder-kegiatan.svg', tanggal: '2026-03-20' },
];
