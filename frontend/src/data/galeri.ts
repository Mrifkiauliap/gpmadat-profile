export interface GaleriItem {
  judul: string;
  gambar: string;
  tanggal?: string;
}

/**
 * Foto asli dokumentasi KKN Kelompok 29 Universitas Samudra di Gampong Madat.
 * Berkas resolusi penuh disimpan di `frontend/foto-asli/`; yang dipakai di sini
 * adalah versi WebP hasil optimasi. Tanggal mengikuti entri di
 * `src/content/kegiatan/` — perbarui keduanya bila tanggal dikoreksi.
 */
export const galeri: GaleriItem[] = [
  {
    judul: "Pembagian Hadiah Lomba Adzan dan Surah Pendek",
    gambar: "/images/pembagian-hadiah-lomba-adzan-surah-pendek.webp",
    tanggal: "2026-08-08",
  },
  {
    judul: "Foto Bersama Panitia Lomba Adzan dan Surah Pendek",
    gambar: "/images/foto-bersama-panitia-lomba-adzan-surah-pendek.webp",
    tanggal: "2026-08-08",
  },
  {
    judul: "Peserta Lomba Adzan dan Surah Pendek Antar Dusun",
    gambar: "/images/peserta-lomba-adzan-surah-pendek.webp",
    tanggal: "2026-08-08",
  },
  {
    judul: "Posyandu Balita Gampong Madat",
    gambar: "/images/posyandu-balita.webp",
    tanggal: "2026-08-06",
  },
  {
    judul: "Pemasangan Papan Peta Gampong Madat",
    gambar: "/images/pemasangan-peta.webp",
    tanggal: "2026-08-06",
  },
  {
    judul: "Kunjungan Dosen Pembimbing Lapangan",
    gambar: "/images/kunjungan-dpl.webp",
    tanggal: "2026-08-03",
  },
  {
    judul: "Survei Batas Dusun Kayee Unoe",
    gambar: "/images/survei-pengukuran-batas-dusun.webp",
    tanggal: "2026-07-30",
  },
  {
    judul: "Pemasangan Plang Nama Dusun",
    gambar: "/images/pemasangan-plang-dusun.webp",
    tanggal: "2026-07-24",
  },
  {
    judul: "Foto Bersama Dakwah Akbar Gampong Madat",
    gambar: "/images/foto-bersama-dakwah-akbar-1.webp",
    tanggal: "2026-07-18",
  },
  {
    judul: "Kegiatan Dakwah Akbar Gampong Madat",
    gambar: "/images/foto-bersama-dakwah-akbar-2.webp",
    tanggal: "2026-07-18",
  },
];
