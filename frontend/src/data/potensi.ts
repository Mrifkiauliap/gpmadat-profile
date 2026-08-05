export interface PotensiSektor {
  nama: string;
  icon: string;
  jumlahUsaha: string;
  deskripsi: string;
  komoditas: string[];
}

export const potensi: PotensiSektor[] = [
  {
    nama: 'Pertanian & Perkebunan',
    icon: 'wheat',
    jumlahUsaha: 'Contoh: ± 40 usaha',
    deskripsi: 'Sektor pertanian menjadi salah satu mata pencaharian utama warga Gampong Madat.',
    komoditas: ['Padi', 'Cabai', 'Sayur-sayuran', 'Kelapa sawit'],
  },
  {
    nama: 'Perdagangan & Kios',
    icon: 'store',
    jumlahUsaha: 'Contoh: ± 25 usaha',
    deskripsi: 'Usaha kios dan warung yang melayani kebutuhan sehari-hari warga.',
    komoditas: ['Kios kelontong', 'Toko sembako', 'Pedagang keliling'],
  },
  {
    nama: 'Kuliner & Makanan',
    icon: 'utensils-crossed',
    jumlahUsaha: 'Contoh: ± 15 usaha',
    deskripsi: 'Aneka usaha kuliner rumahan dan warung makan khas daerah.',
    komoditas: ['Warung kopi', 'Kue tradisional', 'Katering'],
  },
  {
    nama: 'Peternakan & Perikanan',
    icon: 'paw-print',
    jumlahUsaha: 'Contoh: ± 10 usaha',
    deskripsi: 'Usaha budidaya ternak dan perikanan air tawar milik warga gampong.',
    komoditas: ['Ternak sapi', 'Ternak kambing', 'Budidaya lele'],
  },
  {
    nama: 'Jasa & Layanan',
    icon: 'wrench',
    jumlahUsaha: 'Contoh: ± 8 usaha',
    deskripsi: 'Layanan jasa yang mendukung kebutuhan rumah tangga warga.',
    komoditas: ['Bengkel', 'Salon', 'Laundry'],
  },
];
