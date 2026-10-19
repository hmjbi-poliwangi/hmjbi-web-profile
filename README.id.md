# HMJBI Web Profile

<p align="center">
  🌐 Website Resmi Organisasi HMJBI  
</p>

<p align="center">
  <a href="README.md"><b>🇬🇧 English</b></a> |
  <a href="README.id.md"><b>🇮🇩 Bahasa Indonesia</b></a>
</p>

---

## 📌 Tentang Project

HMJBI Web Profile adalah website resmi organisasi HMJBI.
Website ini berfungsi sebagai pusat informasi, media branding organisasi, serta sarana publikasi kegiatan HMJBI.

Project ini dirancang agar modern, responsif, dan mudah dikelola oleh pengurus HMJBI berikutnya.

---

## ✨ Fitur

- Landing page organisasi
- Halaman profil & visi misi
- Tampilan struktur kepengurusan
- Informasi divisi & program kerja
- Galeri kegiatan & dokumentasi
- Informasi event
- Kontak & integrasi media sosial
- Desain fully responsive

---

## 🛠️ Tech Stack

### Teknologi Utama

- Next.js
- TypeScript
- Tailwind CSS

### Tools & Quality

- GitHub
- Figma
- ESLint
- Prettier
- Husky
- Commitlint

### Library Pendukung

- Zod (validasi data)
- Lucide React (ikon)

---

## 🚀 Cara Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/hmjbi-poliwangi/hmjbi-web-profile.git
cd hmjbi-web-profile
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment

Salin file environment:

```bash
cp .env.example .env
```

Atau buat file `.env` secara manual sesuai kebutuhan project.

---

### 4. Jalankan Development Server

```bash
npm run dev
```

Buka di browser:

```
http://localhost:3000
```

---

## 🔐 Admin & Penyimpanan Data

Halaman admin tersedia di `/admin/login`.

- Username: `admin`
- Password: `admin123`
- Editor mengelola `data/division.json`, `data/events.json`, `data/divisions-list.json`, dan `data/proker.json` langsung pada server; tidak menggunakan database.
- Untuk produksi, aplikasi harus dijalankan sebagai server Next.js/Node.js dengan filesystem persisten yang dapat ditulis. Hosting static export saja tidak mendukung API maupun penyimpanan perubahan.
- Workflow GitHub Actions mengunggah paket standalone ke cPanel melalui FTP. Buat aplikasi Node.js cPanel dengan app root pada folder unggahan, Node.js 20+, dan startup file `server.js`; restart aplikasi setelah deployment. Folder `data` harus tetap persisten. Workflow mengecualikan JSON aktif dari sinkronisasi supaya perubahan admin tidak tertimpa saat deployment berikutnya.
- Set `ADMIN_SESSION_SECRET` menjadi secret acak yang kuat pada environment produksi. `HMJBI_DATA_DIR` dapat diarahkan ke folder persisten di luar direktori rilis; bila belum ada, data awal disalin dari `data-seed`.
- Kredensial yang hardcoded adalah kredensial demo sesuai kebutuhan proyek dan tidak aman untuk penggunaan produksi publik. Ganti mekanisme login sebelum membuka dashboard ke internet.

---

## 📂 Struktur Project

```
app/            → halaman & routing
components/     → komponen UI reusable
public/         → assets (gambar, logo)
docs/           → dokumentasi project
lib/            → utilities
types/          → TypeScript types
```

---

## 📚 Dokumentasi

Dokumentasi lengkap tersedia di:

- 📘 Project Guideline → `docs/PROJECT_GUIDELINE.md`
- 🎨 Design System → `docs/DESIGN_SYSTEM.md`
- 🤝 Panduan Kontribusi → `docs/CONTRIBUTING.md`

---

## 🌿 Git Workflow

### Struktur Branch

```
main      → production
develop   → development
feature/* → fitur baru
fix/*     → perbaikan bug
```

---

### Format Commit

```
feat: menambah fitur baru
fix: memperbaiki bug
docs: update dokumentasi
style: update styling
chore: menambah atau memperbaiki dependensi
```

---

## 🤝 Kontribusi

Kontribusi sangat terbuka untuk anggota tim.

Silakan baca panduan kontribusi terlebih dahulu:

👉 `docs/CONTRIBUTING.md`

---

## 🎯 Tujuan Project

- Tampilan modern & clean
- Layout responsif
- Struktur code mudah dipelihara
- Mudah dikembangkan oleh tim selanjutnya

---

## 📄 Lisensi

Project ini dibuat untuk keperluan organisasi dan pembelajaran.

---

## 👥 Dikelola Oleh

Tim Developer HMJBI

---

END OF FILE
