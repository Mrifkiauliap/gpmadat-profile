import { penduduk } from './penduduk';

export interface Perangkat {
  nama: string;
  jabatan: string;
  kelompok: string;
}

/** Pimpinan tertinggi gampong. */
export const keuchik: Perangkat = {
  nama: 'Murhaban Husen',
  jabatan: 'Keuchik Gampong',
  kelompok: 'Pimpinan Gampong',
};

/** Sekretariat gampong. */
export const sekretariat: Perangkat[] = [
  { nama: 'Saifuddin', jabatan: 'Sekretaris Desa (Sekdes)', kelompok: 'Sekretariat' },
];

/** Pelaksana teknis: kepala urusan dan kepala seksi. */
export const kaurKasi: Perangkat[] = [
  { nama: 'Khaidir', jabatan: 'Kaur Umum & Perencanaan', kelompok: 'Urusan Umum & Perencanaan' },
  { nama: 'Suryadi', jabatan: 'Kaur Keuangan', kelompok: 'Urusan Keuangan' },
  { nama: 'Abdurrahman', jabatan: 'Kasi Pemerintahan', kelompok: 'Seksi Pemerintahan' },
  { nama: 'Muchsin', jabatan: 'Kasi Kesejahteraan & Pelayanan', kelompok: 'Seksi Kesejahteraan & Pelayanan' },
];

/** Kepala dusun — satu per wilayah dusun di penduduk.ts. */
export const kepalaDusun: Perangkat[] = [{
  nama: `Safruddin`,
  jabatan: 'Kepala Dusun Ali Tawil',
  kelompok: `Dusun Ali Tawil`,
},
{
  nama: `Abdul Wahab`,
  jabatan: 'Kepala Dusun Abeuk Gadeng',
  kelompok: `Dusun Abeuk Gadeng`,
},
{
  nama: `Addahri`,
  jabatan: 'Kepala Dusun Cot Madat',
  kelompok: `Dusun Cot Madat`,
},
{
  nama: `Muhammad Rizal`,
  jabatan: 'Kepala Dusun Kayee Unoe',
  kelompok: `Dusun Kayee Unoe`,
}];

export const perangkat: Perangkat[] = [keuchik, ...sekretariat, ...kaurKasi, ...kepalaDusun];
