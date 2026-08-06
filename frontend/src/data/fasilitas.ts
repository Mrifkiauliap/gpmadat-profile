export interface Fasilitas {
  nama: string;
  keterangan: string;
}

export interface KategoriFasilitas {
  kategori: string;
  icon: string;
  items: Fasilitas[];
}

/**
 * Sarana dan prasarana yang berada di wilayah Gampong Madat.
 * Sumber: Peta Gampong Madat — KKN Kelompok 29 Universitas Samudra Langsa (2026).
 */
export const fasilitas: KategoriFasilitas[] = [
  {
    kategori: "Pemerintahan & Layanan Publik",
    icon: "landmark",
    items: [
      {
        nama: "Kantor Geuchik Madat",
        keterangan:
          "Pusat pelayanan administrasi dan pemerintahan Gampong Madat.",
      },
      {
        nama: "Kantor Camat Madat",
        keterangan:
          "Kantor pemerintahan Kecamatan Madat yang berkedudukan di Gampong Madat.",
      },
      {
        nama: "Kantor Urusan Agama (KUA)",
        keterangan:
          "Layanan pencatatan nikah dan urusan keagamaan tingkat kecamatan.",
      },
    ],
  },
  {
    kategori: "Pendidikan",
    icon: "graduation-cap",
    items: [
      { nama: "SDN 1 Madat", keterangan: "Sekolah Dasar Negeri." },
      { nama: "MIN 11 Aceh Timur", keterangan: "Madrasah Ibtidaiyah Negeri." },
      { nama: "SMPN 1 Madat", keterangan: "Sekolah Menengah Pertama Negeri." },
      { nama: "MTsN 4 Aceh Timur", keterangan: "Madrasah Tsanawiyah Negeri." },
      { nama: "SMAN 1 Madat", keterangan: "Sekolah Menengah Atas Negeri." },
    ],
  },
  {
    kategori: "Peribadatan",
    icon: "moon-star",
    items: [
      {
        nama: "Masjid Baitul Akmal",
        keterangan:
          "Masjid utama sebagai pusat ibadah dan kegiatan keagamaan warga.",
      },
      {
        nama: "Meunasah Madat",
        keterangan: "Tempat ibadah, sekaligus balai musyawarah gampong.",
      },
    ],
  },
  {
    kategori: "Kesehatan",
    icon: "stethoscope",
    items: [
      {
        nama: "Puskesmas Madat",
        keterangan:
          "Pusat Kesehatan Masyarakat yang melayani warga se-Kecamatan Madat.",
      },
    ],
  },
  {
    kategori: "Keamanan & Ketertiban",
    icon: "shield",
    items: [
      {
        nama: "Polsek Madat",
        keterangan: "Kepolisian Sektor Kecamatan Madat.",
      },
      {
        nama: "Koramil Madat",
        keterangan: "Komando Rayon Militer Kecamatan Madat.",
      },
    ],
  },
];

/** Jumlah seluruh sarana yang terdata. */
export const totalFasilitas = fasilitas.reduce((n, k) => n + k.items.length, 0);
