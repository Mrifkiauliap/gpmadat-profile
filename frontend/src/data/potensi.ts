export interface PotensiSektor {
  nama: string;
  icon: string;
  jumlahUsaha: string;
  deskripsi: string;
  komoditas: string[];
}

export const potensi: PotensiSektor[] = [
  {
    nama: "Pertanian & Perkebunan",
    icon: "wheat",
    jumlahUsaha: "100 +/- Hektar",
    deskripsi:
      "Sektor pertanian menjadi salah satu mata pencaharian utama warga Gampong Madat.",
    komoditas: ["Padi"],
  },
  {
    nama: "Perdagangan & Kios",
    icon: "store",
    jumlahUsaha: "± 25 usaha",
    deskripsi:
      "Usaha kios dan warung yang melayani kebutuhan sehari-hari warga.",
    komoditas: [
      "Kios kelontong",
      "Grosir",
      "Toko Material Bangunan",
      "Toko Pertanian",
      "Toko Pecah Belah",
    ],
  },
  {
    nama: "Kuliner & Makanan",
    icon: "utensils-crossed",
    jumlahUsaha: "± 15 usaha",
    deskripsi: "Aneka usaha kuliner warung makan serta Jajanan pasar.",
    komoditas: ["Warung kopi", "Jajanan pasar", "Sarapan pagi"],
  },
  {
    nama: "Peternakan & Perikanan",
    icon: "paw-print",
    jumlahUsaha: "± 10 usaha",
    deskripsi:
      "Usaha budidaya ternak dan perikanan air tawar milik warga gampong.",
    komoditas: ["Ternak sapi", "Ternak kambing", "Budidaya ikan"],
  },
  {
    nama: "Jasa & Layanan",
    icon: "wrench",
    jumlahUsaha: "± 8 usaha",
    deskripsi: "Layanan jasa yang mendukung kebutuhan rumah tangga warga.",
    komoditas: ["Bengkel", "Laundry", "Barbershop", "Fotokopi"],
  },
];
