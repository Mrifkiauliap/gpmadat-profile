import { penduduk } from './penduduk';

export interface Perangkat {
  nama: string;
  jabatan: string;
  kelompok: string;
}

/** Pimpinan tertinggi gampong. */
export const keuchik: Perangkat = {
  nama: 'Nama Keuchik',
  jabatan: 'Keuchik Gampong',
  kelompok: 'Pimpinan Gampong',
};

/** Sekretariat gampong. */
export const sekretariat: Perangkat[] = [
  { nama: 'Nama Sekretaris', jabatan: 'Sekretaris Desa (Sekdes)', kelompok: 'Sekretariat' },
];

/** Pelaksana teknis: kepala urusan dan kepala seksi. */
export const kaurKasi: Perangkat[] = [
  { nama: 'Nama Kaur Umum', jabatan: 'Kaur Umum', kelompok: 'Urusan Umum' },
  { nama: 'Nama Kaur Keuangan', jabatan: 'Kaur Keuangan', kelompok: 'Urusan Keuangan' },
  { nama: 'Nama Kasi Pemerintahan', jabatan: 'Kasi Pemerintahan', kelompok: 'Seksi Pemerintahan' },
  { nama: 'Nama Kasi Pelayanan', jabatan: 'Kasi Pelayanan', kelompok: 'Seksi Pelayanan' },
];

/** Kepala dusun — satu per wilayah dusun di penduduk.ts. */
export const kepalaDusun: Perangkat[] = penduduk.dusun.map((d) => ({
  nama: `Nama Kadus ${d.nama}`,
  jabatan: 'Kepala Dusun (Kadus)',
  kelompok: `Dusun ${d.nama}`,
}));

export const perangkat: Perangkat[] = [keuchik, ...sekretariat, ...kaurKasi, ...kepalaDusun];
