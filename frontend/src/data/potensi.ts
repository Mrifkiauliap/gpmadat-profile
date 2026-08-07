export interface PotensiSektor {
  nama: string;
  icon: string;
  jumlahUsaha: string;
  deskripsi: string;
  komoditas: string[];
}

export const potensi: PotensiSektor[] = [
  {
    nama: "Pertanian, Peternakan & Tambak",
    icon: "wheat",
    jumlahUsaha: "100 ± Hektar",
    deskripsi:
      "Mayoritas warga Gampong Madat bermata pencaharian sebagai petani padi, peternak, dan pembudidaya tambak ikan.",
    komoditas: ["Padi", "Ternak sapi", "Ternak kambing", "Tambak ikan"],
  },
  {
    nama: "Warung Makan & Kuliner",
    icon: "utensils-crossed",
    jumlahUsaha: "± 10 usaha",
    deskripsi:
      "Warung makan yang melayani kebutuhan sarapan dan makan harian warga gampong.",
    komoditas: [
      "Lontong sarapan",
      "Nasi sarapan",
      "Warung kopi",
      "Ayam geprek",
      "Ayam penyet",
    ],
  },
  {
    nama: "Jajanan & Minuman",
    icon: "cookie",
    jumlahUsaha: "± 15 usaha",
    deskripsi:
      "Aneka jajanan dan minuman kekinian yang banyak digemari warga, terutama anak muda.",
    komoditas: [
      "Burger",
      "Gorengan",
      "Jus",
      "Dimsum",
      "Es teler",
      "Buah potong / salad buah",
      "Bakso",
    ],
  },
  {
    nama: "Perdagangan & Toko",
    icon: "store",
    jumlahUsaha: "± 25 usaha",
    deskripsi:
      "Usaha kios, toko, dan pasar kecil yang melayani kebutuhan sehari-hari warga gampong.",
    komoditas: [
      "Kios kelontong",
      "Grosir / Toko Serba Ada",
      "Toko Material Bangunan",
      "Toko Pertanian",
      "Toko Pecah Belah",
      "Toko Parfum",
      "Fotokopi & ATK",
      "Pasar kecil",
      "Depot air galon",
    ],
  },
  {
    nama: "Jasa & Layanan",
    icon: "wrench",
    jumlahUsaha: "± 8 usaha",
    deskripsi: "Layanan jasa yang mendukung kebutuhan rumah tangga warga.",
    komoditas: [
      "Bengkel",
      "Doorsmeer / Cuci Motor",
      "Pangkas Rambut / Barbershop",
      "Laundry",
      "Toko Servis",
      "Market Kecil",
    ],
  },
];
