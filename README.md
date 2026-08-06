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

Panduan lebih detail untuk pengembangan (arsitektur, konvensi ikon, cara mengganti GeoJSON, status data asli vs. placeholder) ada di [`frontend/CLAUDE.md`](frontend/CLAUDE.md).

## Peta & Data GeoJSON

Batas 4 dusun (Ali Tawil, Cot Madat, Abeuk Gadeng, Kayee Unoe) disimpan di `frontend/public/geojson/madat.geojson`, hasil pemetaan QGIS (WGS 1984 / EPSG:4326) oleh tim KKN. Untuk memperbarui batas wilayah, timpa file ini dengan hasil export baru — pastikan setiap fitur tetap memiliki properti `nama_dusun`.

## Status Data

Sudah memakai data resmi (sumber: Peta Gampong Madat, KKN Kelompok 29 Unsam 2026): nama kecamatan/kabupaten, alamat kantor, batas wilayah, nama dusun, luas wilayah, total penduduk/KK/rasio gender, dan daftar sarana-prasarana.

Masih berupa contoh/placeholder — perlu dilengkapi sebelum rilis penuh: naskah sejarah & asal-usul nama gampong, sebagian nama perangkat gampong, rincian penduduk per dusun, angka potensi/UMKM, entri galeri & kegiatan, nomor telepon/email resmi, serta domain (saat ini memakai dummy `gp-madat.local`).

## Deployment

Repositori ini di-deploy ke [Vercel](https://vercel.com) dengan root direktori `frontend/` (lihat `frontend/vercel.json`).

URL kanonik situs (dipakai untuk `canonical`, Open Graph, dan sitemap) terdeteksi otomatis dari environment Vercel, jadi **tidak perlu mengubah kode saat ganti domain**. Setelah `gp-madat.web.id` dibeli, cukup pasang domain tersebut sebagai *production domain* di dashboard Vercel — nilai canonical akan ikut menyesuaikan. Untuk menimpanya secara manual, set environment variable `PUBLIC_SITE_URL` (mis. `https://gp-madat.web.id`).

## Kredit

Dibuat dengan ♥ oleh **KKN Kelompok 29 Universitas Samudra Langsa**, 2026.
