export interface DusunStat {
  nama: string;
  jiwa: number;
  kk: number;
  lakiLaki: number;
  perempuan: number;
}

export const penduduk = {
  totalJiwa: 1579,
  totalKK: 515,
  lakiLaki: 808,
  perempuan: 771,
  sumber:
    "Nama dusun mengikuti batas wilayah resmi (data GeoJSON hasil pemetaan QGIS). Total penduduk sudah memakai angka riil, tetapi sebaran per dusun di bawah ini masih estimasi proporsional (placeholder) — ganti dengan data riil per dusun bila sudah tersedia.",
  dusun: [
    { nama: "Ali Tawil", jiwa: 430, kk: 141, lakiLaki: 221, perempuan: 209 },
    { nama: "Cot Madat", jiwa: 395, kk: 130, lakiLaki: 202, perempuan: 193 },
    { nama: "Abeuk Gadeng", jiwa: 380, kk: 125, lakiLaki: 194, perempuan: 186 },
    { nama: "Kayee Unoe", jiwa: 374, kk: 119, lakiLaki: 191, perempuan: 183 },
  ] as DusunStat[],
};
