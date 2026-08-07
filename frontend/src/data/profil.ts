import { site } from "./site";

/**
 * Angka wilayah bersumber dari Peta Gampong Madat — KKN Kelompok 29
 * Universitas Samudra Langsa (2026).
 */
export const wilayah = {
  luasHektar: 231.24,
  jumlahDusun: 4,
  namaDusun: ["Cot Madat", "Ali Tawil", "Abeuk Gadeng", "Kayee Unoe"],
};

export const profil = {
  /**
   * Gambaran umum — seluruh paragraf di bawah disusun dari data terverifikasi
   * (peta gampong, data statistik gampong, dan letak kantor kecamatan).
   */
  gambaranUmum: [
    `Gampong Madat merupakan salah satu gampong di ${site.kecamatan}, ${site.kabupaten}, Provinsi ${site.provinsi}, dengan luas wilayah ${wilayah.luasHektar.toLocaleString("id-ID")} hektar yang terbagi ke dalam ${wilayah.jumlahDusun} dusun, yaitu Dusun ${wilayah.namaDusun.slice(0, -1).join(", Dusun ")}, dan Dusun ${wilayah.namaDusun.at(-1)}.`,
    "Gampong ini berkedudukan sebagai pusat pemerintahan Kecamatan Madat, ditandai dengan keberadaan Kantor Camat Madat di wilayahnya. Posisi tersebut menjadikan Gampong Madat sebagai simpul layanan publik bagi gampong-gampong di sekitarnya.",
    "Kedudukan sebagai pusat kecamatan turut membuat sarana dan prasarana di Gampong Madat tergolong lengkap untuk ukuran sebuah gampong, mulai dari kantor pemerintahan, Kantor Urusan Agama, Puskesmas, Polsek, dan Koramil, hingga satuan pendidikan yang berjenjang dari tingkat dasar sampai menengah atas.",
    "Sebagian besar warga menggantungkan penghidupan pada sektor pertanian, khususnya persawahan padi, yang turut ditopang oleh usaha perdagangan, kuliner, peternakan, tambak, serta jasa yang tumbuh di sekitar pusat kecamatan.",
  ],

  /**
   * Asal-usul nama gampong.
   *
   * Ditulis dengan atribusi ("menurut penuturan warga") dan bukan sebagai
   * pernyataan sejarah yang sudah baku, karena naskah resmi hasil wawancara
   * tokoh masyarakat belum tersedia. Ganti dengan naskah resmi begitu ada,
   * dan hapus kalimat penutup soal penyusunan bila sudah tidak relevan.
   */
  asalUsul: [
    "Dalam bahasa Indonesia, kata “madat” bermakna candu. Menurut penuturan warga setempat, makna itulah yang diyakini menjadi asal penamaan Gampong Madat, meski riwayat pastinya masih diwariskan secara lisan dari generasi ke generasi.",
    "Penuturan tersebut belum dibakukan dalam naskah sejarah resmi. Catatan lengkap mengenai asal-usul nama sekaligus perkembangan gampong dari masa ke masa masih disusun bersama tokoh masyarakat setempat.",
  ] as string[] | null,

  // Draf rumusan — sesuaikan dengan dokumen RPJM Gampong bila sudah ada.
  visi: "Mewujudkan Gampong Madat yang religius, sejahtera, dan mandiri melalui pemerintahan yang bersih, pelayanan yang ramah, serta pemberdayaan potensi warga.",
  misi: [
    "Menyelenggarakan pemerintahan gampong yang transparan, akuntabel, dan melayani.",
    "Meningkatkan kualitas pertanian sebagai penopang utama ekonomi warga.",
    "Menumbuhkan usaha perdagangan, kuliner, peternakan, tambak, dan jasa masyarakat gampong.",
    "Memelihara dan mengembangkan sarana pendidikan, kesehatan, dan peribadatan yang telah tersedia.",
    "Menguatkan nilai keagamaan, adat istiadat, serta semangat gotong royong warga.",
  ],

  batasWilayah: [
    {
      arah: "Utara",
      keterangan:
        "Berbatasan dengan Gampong Keupala Sa dan Gampong Keupala Dua",
    },
    {
      arah: "Selatan",
      keterangan: "Berbatasan dengan Gampong Paya Demam Peut",
    },
    {
      arah: "Timur",
      keterangan:
        "Berbatasan dengan Gampong Blang atau Kecamatan Simpang Ulim",
    },
    {
      arah: "Barat",
      keterangan:
        "Berbatasan dengan Gampong Rambong Lop atau Matang Jrok",
    },
  ],
};
