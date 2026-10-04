# SI '26 — Sistem Informasi 2026 Universitas Dipa Makassar

### 🎓 Digital Showcase & Buku Kenangan Digital Resmi Angkatan 2026

Website portal digital, direktori mahasiswa, dan buku kenangan (_digital yearbook_) resmi angkatan **Sistem Informasi 2026 (SI '26)** **Universitas Dipa Makassar (UNDIPA)**. Dibuat dengan pendekatan antarmuka minimalis, elegan, dan berkinerja tinggi yang terinspirasi oleh filosofi desain **Apple Human Interface Guidelines (HIG)** dan mengadopsi palet warna resmi angkatan.

---

## 🌟 Fitur Utama Website

1. **Direktori 112 Mahasiswa Lengkap & Terverifikasi:**
   - Telah dimuat seluruh **112 mahasiswa angkatan 2026** (NIM `261001` hingga `261112`).
   - Dilengkapi kartu identitas dengan avatar dinamis berbasis inisial nama atau foto profil mahasiswa.
   - Penanda kelas angkatan (_class pill_) yang rapi dan seragam.

2. **Pencarian Cepat & Filter Kelas Cerdas:**
   - Pencarian instan berdasarkan **Nama Lengkap**, **NIM**, maupun **Nama Panggilan**.
   - Pintasan keyboard: tekan tombol `/` di mana saja untuk langsung fokus ke bilah pencarian.
   - Tombol hapus pencarian (_clear button_) satu klik.
   - Filter kelas dinamis yang otomatis menghitung jumlah mahasiswa per kelas.

3. **Modal Profil Detail Mahasiswa (Apple Card Style):**
   - Dialog profil interaktif yang menampilkan foto/avatar, nama lengkap, NIM, nama panggilan, kelas, program studi, kampus, kutipan/catatan pribadi (_quote_), dan tombol tautan langsung ke Instagram pribadi mahasiswa.
   - Navigasi modal yang ramah aksesibilitas (dapat dibuka dengan `Enter` / `Spasi` dan ditutup dengan tombol `Esc` atau klik di luar modal).

4. **Palet Warna Resmi SI '26:**
   - Menerapkan 5 kode warna resmi angkatan secara terpusat melalui CSS Variables:
     - `#31318A` — **Royal Indigo Blue** (Identitas Utama Angkatan)
     - `#E5222A` — **Crimson Red** (Badge UNDIPA & Aksen Semangat)
     - `#D9B96C` — **Champagne Gold** (NIM, Highlight Prestasi & Elemen Spesial)
     - `#000000` — **Pitch Black** (Latar Belakang Dasar Dark Mode)
     - `#FFFFFF` — **Crisp White** (Tipografi Utama dengan Kontras Maksimal)

5. **Komunitas & Media Sosial Angkatan Terintegrasi:**
   - **Grup WhatsApp Resmi**: Terhubung langsung ke tautan undangan grup WhatsApp angkatan.
   - **Instagram Angkatan**: Terhubung langsung ke akun Instagram resmi `@si26undipa`.

6. **Slot Logo Otomatis & Cerdas:**
   - Mendukung slot logo angkatan (`logo-si.png`) dan logo kampus (`logo-undipa.png`). Jika gambar belum diunggah, antarmuka tetap tampil bersih dan rapi tanpa ikon rusak (_graceful fallback_).

7. **100% Bahasa Indonesia:**
   - Seluruh teks, label navigasi, tombol, judul, statistik, dan pesan sistem disajikan dalam Bahasa Indonesia yang komunikatif dan profesional.

---

## 📁 Struktur Berkas Proyek

```text
si26/
├── index.html              # Dokumen utama website (struktur semantik HTML5)
├── css/
│   └── style.css           # Sistem desain terpusat, CSS Variables, dan Apple HIG
├── js/
│   ├── data.js             # Basis data terpusat (112 mahasiswa, pengurus, galeri, tautan)
│   └── app.js              # Logika aplikasi (pencarian, filter, modal profil, navigasi)
├── assets/
│   ├── images/
│   │   ├── members/        # Folder foto profil mahasiswa (format NIM, misal: 261001.jpg)
│   │   ├── gallery/        # Folder dokumentasi kegiatan dan kebersamaan angkatan
│   │   ├── lecturers/      # Folder foto Ketua Program Studi
│   │   ├── logo-si.png     # [Opsional] Logo resmi SI '26 untuk navbar & favicon
│   │   └── logo-undipa.png # [Opsional] Logo resmi Universitas Dipa Makassar untuk footer
│   └── icons/              # Aset ikon pendukung
└── README.md               # Dokumentasi lengkap & panduan pembaruan
```

---

## 🚀 Cara Menjalankan Website

Website ini **100% statis murni** (HTML, CSS, JS Vanilla). Anda **tidak perlu menginstal Node.js, npm, composer, maupun database server**:

### Opsi 1: Buka Langsung di Browser

1. Unduh atau salin seluruh isi folder proyek ke komputer Anda.
2. Klik dua kali file `index.html`.
3. Website akan langsung terbuka di browser favorit Anda (Chrome, Safari, Edge, Firefox, Opera).

### Opsi 2: Menggunakan Visual Studio Code (Live Server)

1. Buka folder proyek di **VS Code**.
2. Pasang ekstensi **Live Server** (oleh Ritwick Dey) jika belum ada.
3. Klik kanan pada file `index.html` lalu pilih **"Open with Live Server"**.
4. Website akan berjalan di alamat lokal: `http://127.0.0.1:5500/`.

---

## ✏️ Panduan Memperbarui & Menyesuaikan Data

Semua data teks, mahasiswa, foto, tautan, dan pengumuman dikelola dalam **satu file tunggal**: `js/data.js`.

### 1. Memperbarui Data Mahasiswa (Foto, Panggilan, Quote, Instagram)

Buka file `js/data.js` dan temukan bagian `siteData.students`. Cari mahasiswa berdasarkan NIM:

```javascript
{
  nim: "261001",
  name: "FADHLUR ROHMAN DZAKI AKBAR",
  nickname: "Dzaki",                          // Nama panggilan
  className: "SI-A",                          // Nama kelas sebenarnya
  photo: "assets/images/members/261001.jpg",  // Jalur file foto (disimpan di folder members)
  quote: "Belajar teknologi untuk menebar kebermanfaatan.", // Kutipan / pesan pribadi
  instagram: "dzakiakbar"                     // Username Instagram (tanpa tanda @)
}
```

### 2. Mengatur Pembagian Kelas Mahasiswa

Ubah nilai `className` pada objek mahasiswa dari `"Belum Ditentukan"` ke nama kelas resmi (misalnya: `"SI-A"`, `"SI-B"`, `"SI-C"`):

```javascript
className: 'SI-A';
```

> **Keunggulan Otomatis:** Tombol filter kelas pada bagian direktori akan **otomatis mendeteksi kelas baru** dan menghitung jumlah mahasiswanya tanpa perlu Anda mengubah kode HTML sama sekali!

### 3. Menambahkan Foto Mahasiswa

1. Siapkan file foto (disarankan rasio 1:1 / persegi, format `.jpg` atau `.png`).
2. Beri nama file sesuai NIM agar rapi, misalnya: `261001.jpg`.
3. Masukkan file ke dalam folder `assets/images/members/`.
4. Di file `js/data.js`, ubah properti `photo` mahasiswa terkait:
   ```javascript
   photo: 'assets/images/members/261001.jpg';
   ```
   _Catatan: Selama foto belum dimasukkan, website otomatis menampilkan inisial nama dengan gradien warna yang elegan._

### 4. Memperbarui Susunan Pengurus Angkatan

Saat pemilihan struktur pengurus angkatan telah selesai, buka `js/data.js` pada bagian `siteData.organization`:

```javascript
organization: [
  {
    position: 'Ketua Angkatan',
    name: 'Nama Ketua Terpilih',
    photo: 'assets/images/members/261xxx.jpg',
    status: 'Aktif',
  },
  {
    position: 'Wakil Ketua',
    name: 'Nama Wakil Terpilih',
    photo: 'assets/images/members/261xxx.jpg',
    status: 'Aktif',
  },
  // Tambahkan divisi atau koordinator sesuai kebutuhan
];
```

### 5. Memasang Logo SI '26 & Logo Universitas

Website telah dilengkapi slot logo responsif:

- **Logo SI '26**: Letakkan file gambar berekstensi PNG dengan nama `logo-si.png` di folder `assets/images/`. Logo akan otomatis tampil di bilah navigasi atas (Navbar), tab browser (_favicon_), dan footer.
- **Logo Kampus UNDIPA**: Letakkan file gambar berekstensi PNG dengan nama `logo-undipa.png` di folder `assets/images/`. Logo akan otomatis muncul di bagian footer berdampingan dengan logo angkatan.

---

## 🎨 Palet Warna Resmi SI '26

Seluruh skema warna dikendalikan secara sentral melalui variabel CSS di bagian paling atas file `css/style.css`:

```css
/* ==================================================
   SI '26 OFFICIAL COLORS
   ================================================== */
:root {
  --color-primary: #31318a; /* Royal Indigo Blue — Identitas Angkatan */
  --color-secondary: #e5222a; /* Crimson Red — Badge UNDIPA & Aksen Semangat */
  --color-accent: #d9b96c; /* Warm Champagne Gold — Prestasi, NIM & Sorotan */
  --color-bg: #000000; /* Pitch Black — Dasar Latar Belakang */
  --color-text: #ffffff; /* Crisp White — Tipografi Utama */
}
```

Jika di kemudian hari terdapat penyesuaian warna resmi, cukup ubah kode hex di atas dan seluruh elemen website (tombol, teks, kartu, gradien ambient, border) akan berganti secara otomatis.

---

## 🌐 Cara Publikasi Gratis (Deploy ke GitHub Pages)

Anda dapat mempublikasikan website ini secara gratis agar dapat diakses oleh seluruh mahasiswa angkatan:

1. Buat repositori baru di akun GitHub Anda (misalnya: `si26-undipa`).
2. Unggah seluruh file dan folder proyek ini ke repositori tersebut:
   - `index.html`
   - `css/`
   - `js/`
   - `assets/`
   - `README.md`
3. Buka tab **Settings** di halaman repositori GitHub Anda.
4. Pilih menu **Pages** di kolom sebelah kiri.
5. Pada bagian **Build and deployment > Source**, pilih opsi **Deploy from a branch**.
6. Pada pilihan **Branch**, pilih `main` (atau `master`) dan folder `/ (root)`.
7. Klik tombol **Save**.
8. Tunggu sekitar 1–2 menit, website resmi SI '26 Anda akan online di:
   ```text
   https://username-anda.github.io/si26-undipa/
   ```

---

## 📱 Media Sosial & Saluran Komunikasi Resmi

- **Instagram Angkatan**: [@si26undipa](https://www.instagram.com/si26undipa/?utm_source=ig_web_button_share_sheet)
- **Grup WhatsApp Angkatan**: [Tautan Undangan Resmi](https://chat.whatsapp.com/FOdYroWLYSIEndjERZOq99?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAac2sROvwj2NEFNZxo9dw_iIxKVpuP4wW4o6HOZxxyaJWs9B7E3GK7QlNEpKpw_aem_mgEwFmdwQ9GSO3iCzYYcOQ)

---

## 🛡️ Spesifikasi & Standar Teknis

- **Fondasi**: HTML5 Semantik, CSS3 Modern (Flexbox, Grid, CSS Variables), Vanilla JavaScript (ES6+).
- **Desain**: Mengacu pada _Apple Human Interface Guidelines_ (tipografi hierarkis, radius sudut proporsional, efek _glassmorphism_ halus, pencahayaan _ambient glow_).
- **Performa & Kemandirian**: Nol dependensi pihak ketiga (_zero dependencies_), ukuran aset sangat ringan, waktu muat super cepat.
- **Aksesibilitas (a11y)**: Navigasi penuh via keyboard, kontras warna rasio tinggi, dukungan `prefers-reduced-motion` untuk pengguna dengan sensitivitas animasi.
- **Responsif Penuh**: Tampilan optimal di layar ponsel cerdas (iPhone/Android), tablet (iPad), laptop, maupun monitor desktop resolusi tinggi.

---

_Dikembangkan dengan penuh dedikasi untuk Keluarga Besar Sistem Informasi Angkatan 2026 — Universitas Dipa Makassar._
