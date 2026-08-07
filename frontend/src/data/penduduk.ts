export interface DusunStat {
  nama: string;
  /** Biarkan null selama rincian per dusun belum tersedia. */
  jiwa: number | null;
  kk: number | null;
  lakiLaki: number | null;
  perempuan: number | null;
}

/**
 * Angka total bersumber dari tabel "Data Statistik Gampong Madat" pada
 * Peta Gampong Madat — KKN Kelompok 29 Universitas Samudra Langsa (2026).
 */
export const penduduk = {
  totalJiwa: 1598,
  totalKK: 498,
  lakiLaki: 787,
  perempuan: 811,,
  sumber:
    "Sumber: Data Statistik Gampong Madat, Peta Gampong Madat — KKN Kelompok 29 Universitas Samudra Langsa (2026).",
  // Nama dusun mengikuti batas wilayah pada data GeoJSON hasil pemetaan QGIS.
  // Rincian jiwa/KK per dusun belum tersedia, sengaja dikosongkan agar tidak
  // menampilkan angka karangan pada situs resmi gampong.
  dusun: [
    {
      nama: "Cot Madat",
      jiwa: 425,
      kk: 130,
      lakiLaki: 220,
      perempuan: 205,
    },
    {
      nama: "Ali Tawil",
      jiwa: 259,
      kk: 75,
      lakiLaki: 127,
      perempuan: 132,
    },
    {
      nama: "Abeuk Gadeng",
      jiwa: 449,
      kk: 133,
      lakiLaki: 217,
      perempuan: 232,
    },
    {
      nama: "Kayee Unoe",
      jiwa: 465,
      kk: 160,
      lakiLaki: 223,
      perempuan: 242,
    },
  ] as DusunStat[],
};

/** True bila rincian per dusun sudah diisi. */
export const adaRincianDusun = penduduk.dusun.some((d) => d.jiwa !== null);
