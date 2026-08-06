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
  totalJiwa: 1579,
  totalKK: 515,
  lakiLaki: 808,
  perempuan: 771,
  sumber:
    "Sumber: Data Statistik Gampong Madat, Peta Gampong Madat — KKN Kelompok 29 Universitas Samudra Langsa (2026).",
  // Nama dusun mengikuti batas wilayah pada data GeoJSON hasil pemetaan QGIS.
  // Rincian jiwa/KK per dusun belum tersedia, sengaja dikosongkan agar tidak
  // menampilkan angka karangan pada situs resmi gampong.
  dusun: [
    {
      nama: "Cot Madat",
      jiwa: null,
      kk: null,
      lakiLaki: null,
      perempuan: null,
    },
    {
      nama: "Ali Tawil",
      jiwa: null,
      kk: null,
      lakiLaki: null,
      perempuan: null,
    },
    {
      nama: "Abeuk Gadeng",
      jiwa: null,
      kk: null,
      lakiLaki: null,
      perempuan: null,
    },
    {
      nama: "Kayee Unoe",
      jiwa: null,
      kk: null,
      lakiLaki: null,
      perempuan: null,
    },
  ] as DusunStat[],
};

/** True bila rincian per dusun sudah diisi. */
export const adaRincianDusun = penduduk.dusun.some((d) => d.jiwa !== null);
