export interface Perangkat {
  nama: string;
  jabatan: string;
  kelompok: string;
}

/** Pimpinan tertinggi gampong. */
export const keuchik: Perangkat = {
  nama: "Murhaban Husen",
  jabatan: "Keuchik Gampong",
  kelompok: "Pimpinan Gampong",
};

/** Sekretariat gampong. */
export const sekretariat: Perangkat[] = [
  {
    nama: "Saifuddin",
    jabatan: "Sekretaris Desa (Sekdes)",
    kelompok: "Sekretariat",
  },
];

/** Pelaksana teknis: kepala urusan dan kepala seksi. */
export const kaurKasi: Perangkat[] = [
  {
    nama: "Khaidir",
    jabatan: "Kaur Umum & Perencanaan",
    kelompok: "Urusan Umum & Perencanaan",
  },
  { nama: "Suryadi", jabatan: "Kaur Keuangan", kelompok: "Urusan Keuangan" },
  {
    nama: "Abdurrahman",
    jabatan: "Kasi Pemerintahan",
    kelompok: "Seksi Pemerintahan",
  },
  {
    nama: "Muchsin",
    jabatan: "Kasi Kesejahteraan & Pelayanan",
    kelompok: "Seksi Kesejahteraan & Pelayanan",
  },
];

/** Kepala dusun — satu per wilayah dusun di penduduk.ts. */
export const kepalaDusun: Perangkat[] = [
  {
    nama: `Safruddin`,
    jabatan: "Kepala Dusun Ali Tawil",
    kelompok: `Dusun Ali Tawil`,
  },
  {
    nama: `Abdul Wahab`,
    jabatan: "Kepala Dusun Abeuk Gadeng",
    kelompok: `Dusun Abeuk Gadeng`,
  },
  {
    nama: `Addahri`,
    jabatan: "Kepala Dusun Cot Madat",
    kelompok: `Dusun Cot Madat`,
  },
  {
    nama: `Muhammad Rizal`,
    jabatan: "Kepala Dusun Kayee Unoe",
    kelompok: `Dusun Kayee Unoe`,
  },
];

/**
 * Tuha Peut Gampong (TPG) — lembaga permusyawaratan gampong. Berdiri sendiri
 * di luar aparatur eksekutif di atas, jadi sengaja TIDAK dimasukkan ke array
 * `perangkat`. Sumber: papan struktur organisasi TPG di kantor gampong.
 */
export const tuhaPeut: Perangkat[] = [
  { nama: "Zainon", jabatan: "Ketua TPG", kelompok: "Pimpinan TPG" },
  { nama: "Usman Raden", jabatan: "Wakil Ketua", kelompok: "Pimpinan TPG" },
  { nama: "Syarwannuddin", jabatan: "Sekretaris", kelompok: "Sekretariat TPG" },
  { nama: "Hamdani", jabatan: "Anggota", kelompok: "Keanggotaan TPG" },
  { nama: "Agustini", jabatan: "Anggota", kelompok: "Keanggotaan TPG" },
];

/** Aparatur eksekutif gampong (tanpa TPG). */
export const perangkat: Perangkat[] = [
  keuchik,
  ...sekretariat,
  ...kaurKasi,
  ...kepalaDusun,
];
