# Website Profil Gampong Madat

Website profil resmi Gampong Madat, Kecamatan Madat, Kabupaten Aceh Timur.

Dibangun dengan **Astro** sebagai situs statis — tidak butuh server, database, atau login admin.
Memperbarui isi website = mengedit file di folder ini, lalu `git push`. Vercel akan otomatis
membangun ulang dan menerbitkan versi terbaru.

---

## Menjalankan di komputer sendiri

Butuh **Node.js 22.12+** dan **pnpm**.

```bash
pnpm install
```

```bash
pnpm dev
```

Buka `http://localhost:4321`.

Perintah lain:

```bash
pnpm build
```

```bash
pnpm preview
```

---

## Cara memperbarui isi website

Semua data ada di `src/data/` (file teks biasa) dan `src/content/` (tulisan panjang).
Gambar diletakkan di `public/images/`.

### 1. Memperbarui peta wilayah

Peta membaca satu file: **`public/geojson/madat.geojson`**.

Langkah:

1. Di QGIS, export layer batas wilayah → **GeoJSON**.
2. Pastikan CRS-nya **EPSG:4326 (WGS 84)**. Ini wajib; kalau memakai UTM, peta tidak akan muncul
   di lokasi yang benar.
3. Pastikan ada kolom berisi nama dusun. Nama kolom yang otomatis dikenali:
   `nama_dusun`, `nama`, `NAMA_DUSUN`, `NAMOBJ`, `name`, atau `label`.
4. Timpa file `public/geojson/madat.geojson` dengan hasil export tadi (nama file harus tetap sama).
5. `git push`.

Warna tiap wilayah diberikan otomatis berdasarkan urutan, jadi tidak perlu mengatur apa pun.
Jumlah dusun juga bebas — legenda menyesuaikan sendiri.

> Kalau nama dusun berubah, samakan juga penulisannya di `src/data/penduduk.ts` supaya
> halaman Penduduk dan Pemerintahan ikut konsisten (daftar Kepala Dusun dibuat otomatis dari sana).

### 2. Menambah kegiatan baru

Buat satu file `.md` baru di **`src/content/kegiatan/`**. Nama file menjadi alamat halamannya —
misal `gotong-royong-2026.md` → `/kegiatan/gotong-royong-2026`.

```markdown
---
title: "Judul Kegiatan"
date: 2026-05-17
excerpt: "Ringkasan satu kalimat untuk ditampilkan di daftar kegiatan."
cover: "/images/kegiatan-gotong-royong.jpg"
tags: ["Gotong Royong"]
---

Isi tulisan lengkap di sini. Bisa beberapa paragraf.

## Sub-judul

Boleh pakai daftar:

- poin pertama
- poin kedua
```

Keterangan kolom:

| Kolom     | Wajib | Keterangan                                                        |
| --------- | ----- | ----------------------------------------------------------------- |
| `title`   | ya    | Judul kegiatan                                                     |
| `date`    | ya    | Format `YYYY-MM-DD`                                                |
| `excerpt` | ya    | Ringkasan singkat                                                  |
| `cover`   | tidak | Path foto, diawali `/images/`                                      |
| `tags`    | tidak | Daftar label                                                       |

Untuk fotonya: taruh file gambar di `public/images/`, lalu tulis path-nya di `cover`.
Kegiatan terbaru otomatis muncul di halaman Beranda dan urut dari tanggal termuda.

### 3. Menambah foto galeri

Edit **`src/data/galeri.ts`**:

```ts
export const galeri: GaleriItem[] = [
  { judul: 'Gotong Royong', gambar: '/images/galeri-gotong-royong.jpg', tanggal: '2026-01-10' },
  // tambahkan baris baru di sini
];
```

Taruh file fotonya di `public/images/` lebih dulu. `tanggal` boleh dikosongkan.

### 4. Data lain

| Yang ingin diubah                    | File                        |
| ------------------------------------ | --------------------------- |
| Nama desa, alamat, logo, foto hero   | `src/data/site.ts`          |
| Sejarah, visi, misi, batas wilayah   | `src/data/profil.ts`        |
| Nama perangkat gampong               | `src/data/perangkat.ts`     |
| Jumlah penduduk & sebaran dusun      | `src/data/penduduk.ts`      |
| Sektor potensi / UMKM                | `src/data/potensi.ts`       |
| Nomor telepon, email, jam layanan    | `src/data/kontak.ts`        |

### 5. Foto latar halaman Beranda

Taruh foto (misal kantor Keuchik) di `public/images/`, lalu di `src/data/site.ts` ubah:

```ts
heroImage: '/images/hero-desa.jpg',
```

Kalau dibiarkan `null`, Beranda memakai latar hijau polos.

---

## Deploy ke Vercel

Konfigurasi sudah disiapkan di `vercel.json` (caching aset, header keamanan, clean URL).

**Sekali di awal:**

1. Buka [vercel.com](https://vercel.com) → **Add New Project** → import repo GitHub ini.
2. Pada **Root Directory**, pilih **`frontend`**. _(penting — kode aplikasi ada di subfolder)_
3. Framework otomatis terdeteksi sebagai Astro. Klik **Deploy**.

**Selanjutnya:** cukup `git push` ke branch `main`, Vercel otomatis deploy ulang.

### Saat domain asli sudah dibeli

Sekarang situs memakai domain sementara `gp-madat.local`. Setelah `gp-madat.web.id` aktif,
ubah **dua tempat**:

1. `astro.config.mjs` → `site: 'https://gp-madat.web.id'`
2. `src/data/site.ts` → `domain: 'gp-madat.web.id'`

Lalu tambahkan domain tersebut di Vercel (**Settings → Domains**) dan arahkan DNS-nya.

Nilai `site` dipakai untuk canonical URL, sitemap, robots.txt, dan link pratinjau media sosial —
jadi kalau tidak diubah, Google akan mengindeks alamat yang salah.

---

## SEO yang sudah terpasang

- Judul & deskripsi unik per halaman
- Canonical URL
- Open Graph + Twitter Card (gambar `public/images/og-default.png`, 1200×630)
- Data terstruktur JSON-LD (`GovernmentOrganization`)
- `sitemap-index.xml` otomatis
- `robots.txt` otomatis menunjuk ke sitemap
- Font di-hosting sendiri (tanpa permintaan ke Google saat halaman dibuka)

Setelah domain aktif, daftarkan situs di
[Google Search Console](https://search.google.com/search-console) dan kirimkan sitemap-nya.
