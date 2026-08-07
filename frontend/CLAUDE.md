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

| File | Isi | Ekspor tambahan |
|---|---|---|
| `site.ts` | Identitas situs, `heroImage`, `ogImage`, `logo`, alamat kantor | — |
| `profil.ts` | `wilayah` (luas & dusun), gambaran umum, asal-usul, visi, misi, batas wilayah | `wilayah` |
| `perangkat.ts` | Perangkat gampong, dipisah per tingkatan | `keuchik`, `sekretariat`, `kaurKasi`, `kepalaDusun`, `perangkat` |
| `penduduk.ts` | Statistik kependudukan & sebaran dusun | `adaRincianDusun` |
| `fasilitas.ts` | Sarana & prasarana, dikelompokkan per kategori | `totalFasilitas` |
| `potensi.ts` | Sektor ekonomi/UMKM | — |
| `galeri.ts` | Item galeri foto | — |
| `kontak.ts` | Info kontak (menurunkan alamat dari `site.ts`) | — |

`site.ts` adalah sumber kebenaran tunggal untuk identitas desa — `profil.ts` dan `kontak.ts` mengambil nilai dari sana, jadi ubah di `site.ts` saja, jangan menulis ulang nama kecamatan/kabupaten/alamat di tempat lain. Begitu pula `wilayah` di `profil.ts`: luas dan jumlah dusun dibaca dari sana oleh halaman Beranda, Profil, dan Peta.

Beberapa data sengaja memakai `null` untuk menandai "belum tersedia", bukan diisi angka karangan:

- `profil.asalUsul` — bila `null`, halaman Profil menampilkan catatan bahwa naskah masih disusun; bila diisi, muncul bagian "Asal-usul Nama".
- `penduduk.dusun[].jiwa|kk|lakiLaki|perempuan` — bila semuanya `null`, `adaRincianDusun` bernilai `false` dan halaman Penduduk menyembunyikan tabel rincian per dusun.
- `site.heroImage` — bila `null`, Beranda memakai latar gradien alih-alih foto.

**Jangan mengganti `null` itu dengan angka atau teks perkiraan.** Ini situs resmi pemerintah gampong; data yang belum ada lebih baik tidak ditampilkan daripada ditampilkan salah.

## Halaman

Routing berbasis file di `src/pages/`: `index` (Beranda), `profil`, `pemerintahan`, `penduduk`, `potensi`, `kegiatan/index`, `kegiatan/[slug]`, `galeri`, `peta`, `kontak`, plus endpoint `robots.txt.ts`.

Setiap halaman membungkus isinya dengan `<Layout title="..." description="...">`. Layout menangani seluruh `<head>`: title, meta description, canonical, Open Graph, Twitter card, dan JSON-LD. **Jangan menambahkan tag SEO per halaman** — cukup teruskan prop ke Layout.

Prop `Layout`: `title`, `description`, `image`, `type` (`'website'` | `'article'`), `publishedTime`. Halaman detail kegiatan memakai `type="article"` + `publishedTime`. Layout otomatis mengganti gambar `.svg` dengan `site.ogImage` karena WhatsApp/Facebook/X tidak merender SVG pada kartu Open Graph.

Halaman isi (bukan Beranda) diawali `<PageHeader eyebrow title description />` yang merender satu-satunya `<h1>` halaman itu.

## Komponen

`src/components/`: `Navbar`, `Footer`, `PageHeader`, `SectionHeading`, `StatCard`, `ActivityCard`, `OfficialCard`, `PotensiCard`, `PlaceholderNotice`.

`StatCard` dan `PotensiCard` menerima prop `icon` berisi **nama ikon Lucide tanpa prefix** (mis. `"users"`, `"wheat"`), lalu komponen menambahkan sendiri prefix `lucide:`. Verifikasi nama ikon benar-benar ada di Lucide sebelum memakainya — nama yang salah akan menggagalkan build.

`PlaceholderNotice` menandai bagian yang datanya masih contoh. Hapus pemakaiannya di suatu halaman begitu data asli sudah masuk.

## Peta & GeoJSON

`public/geojson/madat.geojson` berisi batas 4 dusun hasil export QGIS (**data asli**, CRS84/EPSG:4326): Ali Tawil, Cot Madat, Abeuk Gadeng, Kayee Unoe. Tiap feature punya properti `id` dan `nama_dusun`.

`src/pages/peta.astro` mem-fetch file itu saat runtime di browser, mewarnai tiap dusun dari palet berdasarkan `id`, membangun legenda, lalu `fitBounds` ke data. Karena file dibaca dari `public/`, mengganti batas wilayah cukup dengan menimpa file GeoJSON — tidak perlu mengubah kode, asalkan nama properti (`id`, `nama_dusun`) tetap sama.

Marker default Leaflet di-patch manual di `peta.astro` (import PNG lalu `L.Icon.Default.mergeOptions`) karena URL ikon bawaan Leaflet rusak saat di-bundle.

Nama dusun di `penduduk.ts` harus konsisten dengan `nama_dusun` di GeoJSON.

## Domain & Deploy

`site` di `astro.config.mjs` **tidak di-hardcode**. Nilainya diambil berurutan dari: `PUBLIC_SITE_URL` → `VERCEL_PROJECT_PRODUCTION_URL` (otomatis dari Vercel) → `http://localhost:4321`. Artinya canonical/OG/sitemap otomatis benar di Vercel, dan ikut berubah sendiri begitu domain kustom dipasang sebagai production domain di Vercel — tidak perlu edit kode.

Jangan menaruh domain yang belum aktif di `site`: canonical yang menunjuk domain tak bisa diakses membuat halaman **tidak terindeks** mesin pencari.

Astro dikonfigurasi `trailingSlash: 'never'` + `build.format: 'file'` agar selaras dengan `cleanUrls: true` / `trailingSlash: false` di `vercel.json`. Karena `build.format: 'file'` membuat `Astro.url.pathname` berakhiran `.html`, `Layout.astro` menormalkan pathname itu sebelum dipakai sebagai canonical.

## Status Data

Daftar rinci untuk diminta ke operator desa ada di `../DATA-DIBUTUHKAN.md` (root repo). Ringkasnya:

**Sudah data asli** — jangan diubah tanpa sumber baru: identitas gampong, alamat kantor, kontak (telepon/WA/email), luas wilayah 231,24 Ha, 4 dusun, batas wilayah keempat arah, batas dusun GeoJSON, total penduduk (1.579 jiwa / 515 KK / 808 L / 771 P), 9 perangkat gampong, 13 sarana-prasarana, lambang gampong (logo + favicon).

**Masih perlu dilengkapi:**

| Bagian | Kondisi |
|---|---|
| Sejarah gampong | Belum ada. `profil.asalUsul` baru memuat makna nama dengan atribusi warga, bukan naskah sejarah. |
| Visi & misi | Masih **draf tim KKN**, bukan dokumen resmi. Ganti dengan rumusan dari RPJM/RKP Gampong. |
| Rincian penduduk per dusun | `null` — tabel per dusun tersembunyi otomatis. |
| Angka potensi/UMKM | Masih taksiran (`± 25 usaha` dsb.). Hanya luas sawah yang mendekati riil. |
| Foto | Seluruhnya masih placeholder SVG (galeri, cover kegiatan). `site.heroImage` `null`. |
| Entri kegiatan | 4 entri di `src/content/kegiatan/` masih teks contoh. |
| Domain | Masih memakai alamat bawaan Vercel; `gp-madat.web.id` belum dibeli. |

Saat menambah data asli, hapus juga `<PlaceholderNotice>` di halaman terkait. Saat ini masih dipakai di `pemerintahan.astro` dan `penduduk.astro`.
