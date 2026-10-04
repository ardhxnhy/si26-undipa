# SI '26 — Digital Yearbook
**Sistem Informasi 2026 — Universitas Dipa Makassar**

Website digital yearbook minimalis, monokrom, dan editorial untuk angkatan Sistem Informasi 2026 (SI '26) Universitas Dipa Makassar. Dibuat tanpa ketergantungan rumit sehingga langsung siap dijalankan secara lokal maupun di-deploy ke GitHub Pages.

---

## Struktur Folder

```text
si26/
│
├── index.html                  # Halaman utama website
│
├── css/
│   └── style.css               # Gaya visual & CSS variables (Monochrome)
│
├── js/
│   ├── data.js                 # Pusat seluruh data (112 mahasiswa, pengurus, dll)
│   └── app.js                  # Logika aplikasi (search, filter, modal)
│
├── assets/
│   └── images/
│       ├── logos/              # Logo resmi UNDIPA & Sistem Informasi
│       │   ├── undipa.svg      # Logo Universitas Dipa Makassar
│       │   └── sistem_informasi.svg # Logo Program Studi Sistem Informasi
│       ├── members/            # Foto mahasiswa (format: [NIM].jpg)
│       │   └── placeholder.jpg # Foto default mahasiswa
│       ├── lecturers/
│       │   └── placeholder.jpg # Foto Ketua Program Studi
│       └── gallery/
│           └── placeholder.jpg # Foto dokumentasi kegiatan
│
└── README.md
```

---

## Panduan Penggunaan

### 1. Menjalankan Website
Cukup klik dua kali (buka) file `index.html` pada browser Anda (Chrome, Safari, Edge, Firefox), atau gunakan ekstensi **Live Server** di VS Code. Tidak membutuhkan Node.js, npm, database, atau build tool.

---

### 2. Mengganti / Menambahkan Foto Mahasiswa
1. Siapkan foto mahasiswa (disarankan rasio portrait 3:4 atau 4:5).
2. Beri nama file foto sesuai dengan **NIM** mahasiswa bersangkutan.
   - Contoh: `261001.jpg`, `261002.jpg`, dst.
3. Masukkan file foto ke dalam folder:
   ```text
   assets/images/members/
   ```
4. Website akan otomatis memuat foto tersebut. Jika foto belum dimasukkan, website secara otomatis menampilkan foto placeholder yang elegan tanpa error.

---

### 3. Mengubah / Melengkapi Data Mahasiswa
Buka file `js/data.js` dan temukan bagian `SI26_STUDENTS`.

Setiap mahasiswa memiliki struktur:
```javascript
{
  nim: "261001",
  name: "FADHLUR ROHMAN DZAKI AKBAR",
  nickname: "Dzak",                       // Isi nama panggilan
  className: "SI-A",                      // Ganti saat kelas sudah dibagi
  photo: "assets/images/members/261001.jpg",
  quote: "Tetap tenang dan konsisten.",  // Kata-kata mutiara / kutipan
  instagram: "dzak_akbar"                 // Username atau link Instagram
}
```

- Ketika `className` diubah (misalnya `SI-A`, `SI-B`), tombol filter di website akan otomatis bertambah sesuai kelas yang ada.
- Jika `nickname`, `quote`, atau `instagram` dikosongkan, tampilan profil akan menyesuaikan secara bersih tanpa menampilkan nilai `undefined` atau tombol rusak.

---

### 4. Mengubah Warna Website
Buka file `css/style.css` pada bagian teratas:

```css
/* ==========================================
   SI '26 COLOR SYSTEM
   Semua warna website dikontrol dari sini.
   Jika identitas warna SI '26 berubah,
   cukup edit variable di bagian ini.
   ========================================== */
:root {
  --black: #000000;
  --white: #ffffff;
  --gray-950: #0a0a0a;
  --gray-900: #111111;
  /* ... */
}
```
Cukup ubah nilai warna di bagian ini untuk mengganti skema warna seluruh website.

---

### 5. Mengganti Logo UNDIPA & Sistem Informasi
File logo berada di:
```text
assets/images/logos/undipa.svg
assets/images/logos/sistem_informasi.svg
```
Jika Anda memiliki file logo resmi (PNG/SVG), cukup gantikan file di folder tersebut dengan nama yang sama, atau format `.png`.

---

### 6. Mengisi Struktur Organisasi Angkatan
Buka file `js/data.js` pada bagian `SI26_ORGANIZATION`:

```javascript
const SI26_ORGANIZATION = [
  {
    position: "Ketua Angkatan",
    name: "Coming Soon",          // Ganti dengan nama Ketua terpilih di VS Code
    status: "Belum Ditentukan",   // Status pengurus (misal: "Periode 2026/2027")
    photo: "assets/images/members/placeholder.jpg",
    instagram: ""                 // Tautan Instagram (misal: "https://instagram.com/...")
  },
  {
    position: "Wakil Ketua",
    name: "Coming Soon",
    status: "Belum Ditentukan",
    photo: "assets/images/members/placeholder.jpg",
    instagram: ""
  },
  {
    position: "Sekretaris",
    name: "Coming Soon",
    status: "Belum Ditentukan",
    photo: "assets/images/members/placeholder.jpg",
    instagram: ""
  },
  {
    position: "Bendahara",
    name: "Coming Soon",
    status: "Belum Ditentukan",
    photo: "assets/images/members/placeholder.jpg",
    instagram: ""
  }
];
```
Ketika nama atau foto pengurus diubah di `js/data.js`, tampilan kartu pengurus di website otomatis ter-update.

---

### 7. Mengisi Dokumentasi / Gallery
Buka file `js/data.js` pada bagian `SI26_GALLERY`:

```javascript
const SI26_GALLERY = [
  {
    photo: "assets/images/gallery/inaugurasi.jpg",
    title: "Malam Keakraban SI '26",
    date: "12 Oktober 2026",
    caption: "Merajut solidaritas dan kebersamaan 112 mahasiswa SI '26."
  }
];
```

---

### 8. Memperbarui Pengumuman & Quick Links
Buka file `js/data.js` pada bagian:
- `SI26_ANNOUNCEMENTS`: Tambahkan judul, tanggal, dan deskripsi pengumuman.
- `SI26_QUICK_LINKS`: Masukkan URL grup WhatsApp, link Google Drive angkatan, atau akun Instagram resmi.

---

### 9. Deploy ke GitHub Pages
1. Buat repository baru di GitHub (contoh: `si26-yearbook`).
2. Upload seluruh file dan folder project ini ke repository tersebut.
3. Masuk ke tab **Settings** repository → pilih menu **Pages**.
4. Pada bagian **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: pilih **main** (atau **master**) / folder `/(root)`
   - Klik **Save**.
5. Tunggu sekitar 1 menit, website Anda sudah aktif dan dapat diakses publik!

---

*SI '26 — One Cohort. One Story.*  
*Universitas Dipa Makassar*
