# CLAUDE.md

Panduan untuk Claude Code saat bekerja di repositori ini.

## Tentang Project

Website profil desa **Gampong Madat** (Kecamatan Madat, Kabupaten Aceh Timur, Aceh). Situs **statis** — tidak ada backend, database, atau panel admin. Semua konten disimpan sebagai file di dalam project; memperbarui konten berarti mengedit file lalu deploy ulang.

Root git ada di direktori induk; seluruh aplikasi berada di `frontend/`.

## Perintah

Semua dijalankan dari `frontend/`:

```bash
pnpm dev
```

```bash
pnpm build
```

```bash
pnpm preview
```

Dev server berjalan di `http://localhost:4321`. Bila sudah ada instance lain berjalan, hentikan dengan `pnpm astro dev stop` atau gunakan `pnpm astro dev --force`.

## Tech Stack

- **Astro 7** — output static (default), tanpa adapter SSR
- **Tailwind CSS 4** — via plugin Vite `@tailwindcss/vite` (bukan integrasi `@astrojs/tailwind` yang lama). Satu-satunya file CSS global adalah `src/styles/global.css` yang berisi `@import "tailwindcss";` dan di-import dari `src/layouts/Layout.astro`. **Tidak ada `tailwind.config.js`** — Tailwind 4 dikonfigurasi lewat CSS.
- **astro-icon + @iconify-json/lucide** — semua ikon memakai Lucide. **Jangan pakai emoji sebagai ikon UI.**
- **Leaflet** — peta interaktif di halaman Peta
- **@astrojs/sitemap** — sitemap otomatis

## Arsitektur Konten

Ada dua mekanisme penyimpanan konten, dipilih berdasarkan bentuk datanya:

**1. Content Collection** (`src/content.config.ts`) — hanya untuk `kegiatan`, karena tiap entri butuh badan tulisan Markdown. File ada di `src/content/kegiatan/*.md` dengan frontmatter: `title`, `date`, `excerpt`, `cover` (opsional), `tags` (opsional). Dibaca dengan `getCollection('kegiatan')`; slug URL berasal dari `entry.id` (nama file).

**2. Data files** (`src/data/*.ts`) — untuk daftar terstruktur tanpa badan teks panjang. Ini objek/array TypeScript biasa yang di-import langsung oleh halaman:

| File | Isi |
|---|---|
| `site.ts` | Identitas situs, domain, `heroImage`, `ogImage`, `logo`, alamat kantor |
| `profil.ts` | Sejarah, visi, misi, batas wilayah |
| `perangkat.ts` | Daftar perangkat gampong |
| `penduduk.ts` | Statistik kependudukan & sebaran dusun |
| `potensi.ts` | Sektor ekonomi/UMKM |
| `galeri.ts` | Item galeri foto |
| `kontak.ts` | Info kontak (menurunkan alamat dari `site.ts`) |

`site.ts` adalah sumber kebenaran tunggal untuk identitas desa — `profil.ts` dan `kontak.ts` mengambil nilai dari sana, jadi ubah di `site.ts` saja, jangan menulis ulang nama kecamatan/kabupaten/alamat di tempat lain.

## Halaman

Routing berbasis file di `src/pages/`: `index` (Beranda), `profil`, `pemerintahan`, `penduduk`, `potensi`, `kegiatan/index`, `kegiatan/[slug]`, `galeri`, `peta`, `kontak`, plus endpoint `robots.txt.ts`.

Setiap halaman membungkus isinya dengan `<Layout title="..." description="...">`. Layout menangani seluruh `<head>`: title, meta description, canonical, Open Graph, dan Twitter card. **Jangan menambahkan tag SEO per halaman** — cukup teruskan prop `title`/`description` ke Layout.

## Komponen

`src/components/`: `Navbar`, `Footer`, `SectionHeading`, `StatCard`, `ActivityCard`, `OfficialCard`, `PotensiCard`, `PlaceholderNotice`.

`StatCard` dan `PotensiCard` menerima prop `icon` berisi **nama ikon Lucide tanpa prefix** (mis. `"users"`, `"wheat"`), lalu komponen menambahkan sendiri prefix `lucide:`. Verifikasi nama ikon benar-benar ada di Lucide sebelum memakainya — nama yang salah akan menggagalkan build.

`PlaceholderNotice` menandai bagian yang datanya masih contoh. Hapus pemakaiannya di suatu halaman begitu data asli sudah masuk.

## Peta & GeoJSON

`public/geojson/madat.geojson` berisi batas 4 dusun hasil export QGIS (**data asli**, CRS84/EPSG:4326): Ali Tawil, Cot Madat, Abeuk Gadeng, Kayee Unoe. Tiap feature punya properti `id` dan `nama_dusun`.

`src/pages/peta.astro` mem-fetch file itu saat runtime di browser, mewarnai tiap dusun dari palet berdasarkan `id`, membangun legenda, lalu `fitBounds` ke data. Karena file dibaca dari `public/`, mengganti batas wilayah cukup dengan menimpa file GeoJSON — tidak perlu mengubah kode, asalkan nama properti (`id`, `nama_dusun`) tetap sama.

Marker default Leaflet di-patch manual di `peta.astro` (import PNG lalu `L.Icon.Default.mergeOptions`) karena URL ikon bawaan Leaflet rusak saat di-bundle.

Nama dusun di `penduduk.ts` harus konsisten dengan `nama_dusun` di GeoJSON.

## Domain & Deploy

`site` di `astro.config.mjs` saat ini `https://gp-madat.local` (dummy). Domain asli yang direncanakan: `gp-madat.web.id`. Saat berganti domain, ubah **dua tempat**: `site` di `astro.config.mjs` dan `domain` di `src/data/site.ts`. Nilai `site` inilah yang membentuk canonical URL, URL Open Graph, sitemap, dan baris `Sitemap:` di robots.txt.

## Status Data

Sudah asli: nama kecamatan/kabupaten, alamat kantor, batas wilayah GeoJSON, nama dusun, total penduduk/KK/gender.

Masih placeholder: sejarah & visi-misi, nama perangkat gampong, sebaran penduduk per dusun (estimasi proporsional), angka potensi/UMKM, item galeri, entri kegiatan, nomor telepon & email, gambar hero (`site.heroImage` masih `null` sehingga Beranda memakai latar gradien), `site.logo` menunjuk ke `/images/logo.png` yang belum ada (Navbar otomatis jatuh ke inisial teks bila gambar gagal dimuat).
