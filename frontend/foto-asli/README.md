# Foto Asli (master)

Berkas asli beresolusi penuh, **tidak ikut di-deploy** karena berada di luar
`public/`. Versi yang dipakai situs adalah `.webp` hasil optimasi di
`public/images/` (sisi terpanjang 1600px, kualitas 82).

`logo-desa.png` (2000x2103) adalah sumber untuk membuat ulang favicon dan
`public/images/logo-desa.webp`.

Untuk mengoptimasi foto baru:

```bash
node -e "const s=require('./node_modules/.pnpm/sharp@0.35.3/node_modules/sharp');s('foto-asli/NAMA.jpeg').rotate().resize(1600,1600,{fit:'inside',withoutEnlargement:true}).webp({quality:82}).toFile('public/images/NAMA.webp')"
```
