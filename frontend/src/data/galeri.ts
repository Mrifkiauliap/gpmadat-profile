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
];
