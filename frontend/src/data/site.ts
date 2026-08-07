export const site = {
  name: "Gampong Madat",
  shortName: "GM",
  tagline: "Portal Resmi Gampong Madat",
  kecamatan: "Kecamatan Madat",
  kabupaten: "Kabupaten Aceh Timur",
  provinsi: "Aceh",
  description:
    "Website profil resmi Gampong Madat: profil desa, pemerintahan, data penduduk, potensi, kegiatan, galeri, dan peta wilayah.",
  // Domain dummy sementara (lihat astro.config.mjs `site`). Ganti keduanya bersamaan setelah domain asli dibeli.
  domain: "gampongmadat.web.id",
  // Foto latar hero di Beranda. Sementara pakai dokumentasi pemasangan papan
  // Peta Gampong Madat — satu-satunya foto KKN yang widescreen (16:9) dan
  // temanya nyambung ke fitur Peta di situs ini. Ganti begitu ada foto bersih
  // kantor Keuchik / suasana desa tanpa rombongan (lihat DATA-DIBUTUHKAN.md).
  // Biarkan null untuk memakai latar gradien default.
  heroImage: "/images/pemasangan-peta.webp",
  // Kartu pratinjau saat link dibagikan (1200x630). Harus PNG/JPG — WhatsApp,
  // Facebook, dan X tidak merender SVG/WebP pada kartu Open Graph.
  ogImage: "/images/og-default.png",
  logo: "/images/logo-desa.webp",
  alamatKantor:
    "Jln Simpang Ulim - Paya Naden, Kantor Keuchik Gampong Madat, Kecamatan Madat, Kabupaten Aceh Timur, Aceh",
};
