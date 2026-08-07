# Gampong Madat — Website Profil Desa

Website profil resmi **Gampong Madat**, Kecamatan Madat, Kabupaten Aceh Timur, Provinsi Aceh. Dibangun sebagai bagian dari program KKN Kelompok 29 Universitas Samudra Langsa.

Situs ini **statis** — tanpa backend, database, atau panel admin. Seluruh konten disimpan sebagai file di dalam repositori; memperbarui konten berarti mengedit file lalu deploy ulang.

## Fitur

- **Beranda** — ringkasan angka wilayah, kegiatan terbaru, dan potensi unggulan
- **Profil Desa** — gambaran umum, visi & misi, sarana-prasarana, batas wilayah
- **Struktur Pemerintahan** — susunan perangkat gampong (Keuchik, Sekretariat, Kaur/Kasi, Kepala Dusun)
- **Data Penduduk** — statistik kependudukan dan rasio jenis kelamin
- **Potensi & UMKM** — sektor ekonomi dan komoditas warga
- **Kegiatan** — dokumentasi aktivitas gampong (per entri, dengan halaman detail)
- **Galeri** — kumpulan foto kegiatan
- **Peta Wilayah** — peta interaktif batas dusun berbasis GeoJSON hasil pemetaan QGIS
- **Kontak** — informasi kantor gampong dan tautan WhatsApp

## Tech Stack

| Bagian | Teknologi |
|---|---|
| Framework | [Astro 7](https://astro.build) (output statis) |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Ikon | [Lucide](https://lucide.dev) via `astro-icon` |
| Peta | [Leaflet](https://leafletjs.com) + GeoJSON |
| Font | Fraunces & Archivo (Google Fonts, via Astro Fonts API) |
| SEO | `@astrojs/sitemap`, Open Graph, JSON-LD |
| Hosting | Vercel (`frontend/vercel.json`) |

## Struktur Repositori

```
gpmadat-profil/
└── frontend/              seluruh aplikasi Astro
    ├── src/
    │   ├── pages/          routing berbasis file (Beranda, Profil, Peta, dst.)
    │   ├── layouts/        Layout.astro — <head>, SEO, JSON-LD
    │   ├── components/     Navbar, Footer, StatCard, OfficialCard, dll.
    │   ├── data/           konten situs sebagai file TypeScript (lihat di bawah)
    │   └── content/        entri Kegiatan (Markdown, via Content Collection)
    └── public/
        ├── geojson/        batas wilayah dusun (madat.geojson)
        └── images/         logo, foto placeholder, gambar Open Graph
```

## Menjalankan Secara Lokal

Prasyarat: Node.js ≥ 22.12 dan [pnpm](https://pnpm.io).

```bash
cd frontend
pnpm install
pnpm dev
```

Situs berjalan di `http://localhost:4321`.

```bash
pnpm build     # build produksi ke frontend/dist
pnpm preview   # jalankan hasil build secara lokal
```

## Mengedit Konten

Konten dipisah menjadi dua bentuk, tergantung strukturnya:

- **`frontend/src/data/*.ts`** — data terstruktur tanpa badan tulisan panjang: identitas situs (`site.ts`), profil & visi-misi (`profil.ts`), perangkat gampong (`perangkat.ts`), statistik penduduk (`penduduk.ts`), potensi/UMKM (`potensi.ts`), sarana-prasarana (`fasilitas.ts`), galeri (`galeri.ts`), dan kontak (`kontak.ts`). Edit langsung nilainya, lalu jalankan ulang `pnpm dev`/`pnpm build`.
- **`frontend/src/content/kegiatan/*.md`** — satu file Markdown per kegiatan (punya badan tulisan), dibaca lewat Astro Content Collection.

Beberapa data sengaja bernilai `null` sebagai penanda "belum tersedia" — misalnya rincian penduduk per dusun dan naskah asal-usul. Bagian yang bersangkutan otomatis disembunyikan atau diganti catatan, jadi **jangan diisi angka/teks perkiraan** demi menutup tampilan yang kosong.

Panduan lebih detail untuk pengembangan (arsitektur, konvensi ikon, cara mengganti GeoJSON, status data asli vs. placeholder) ada di [`frontend/CLAUDE.md`](frontend/CLAUDE.md). Daftar data yang masih perlu diminta ke operator desa ada di [`DATA-DIBUTUHKAN.md`](DATA-DIBUTUHKAN.md).

## Peta & Data GeoJSON

Batas 4 dusun (Ali Tawil, Cot Madat, Abeuk Gadeng, Kayee Unoe) disimpan di `frontend/public/geojson/madat.geojson`, hasil pemetaan QGIS (WGS 1984 / EPSG:4326) oleh tim KKN. Untuk memperbarui batas wilayah, timpa file ini dengan hasil export baru — pastikan setiap fitur tetap memiliki properti `nama_dusun`.

## Status Data

Sudah memakai data resmi (sumber: Peta Gampong Madat, KKN Kelompok 29 Unsam 2026): identitas gampong, alamat kantor, kontak, luas wilayah 231,24 Ha, 4 dusun, batas wilayah, batas dusun GeoJSON, total penduduk 1.579 jiwa / 515 KK, susunan 9 perangkat gampong, 13 sarana-prasarana, dan lambang gampong.

Masih perlu dilengkapi sebelum rilis penuh: naskah sejarah gampong, visi-misi resmi (yang tertulis sekarang masih draf tim KKN), rincian penduduk per dusun, angka potensi/UMKM riil, foto asli (galeri, kegiatan, dan latar halaman depan), dokumentasi kegiatan, serta domain. Rinciannya di [`DATA-DIBUTUHKAN.md`](DATA-DIBUTUHKAN.md).

## Deployment

Repositori ini di-deploy ke [Vercel](https://vercel.com) dengan root direktori `frontend/` (lihat `frontend/vercel.json`).

URL kanonik situs (dipakai untuk `canonical`, Open Graph, dan sitemap) terdeteksi otomatis dari environment Vercel, jadi **tidak perlu mengubah kode saat ganti domain**. Setelah `gp-madat.web.id` dibeli, cukup pasang domain tersebut sebagai *production domain* di dashboard Vercel — nilai canonical akan ikut menyesuaikan. Untuk menimpanya secara manual, set environment variable `PUBLIC_SITE_URL` (mis. `https://gp-madat.web.id`).

## Kredit

Dibuat dengan ♥ oleh **KKN Kelompok 29 Universitas Samudra Langsa**, 2026.
