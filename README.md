# Backend API - Sistem Manajemen Data Siswa

REST API sederhana menggunakan Node.js, Express, dan MySQL (`mysql2`) untuk mengelola data siswa (`db_siswa`).

## Fitur API (CRUD)
- **GET** `/siswa` — Menampilkan seluruh data siswa
- **POST** `/siswa` — Menambahkan data siswa baru
- **PUT** `/siswa/:kode_siswa` — Memperbarui data siswa berdasarkan Kode Siswa
- **DELETE** `/siswa/:kode_siswa` — Menghapus data siswa berdasarkan Kode Siswa

## Struktur Database (`db_siswa`)
Tabel `siswa`:
- `kode_siswa` (`VARCHAR(20)`, Primary Key, Not Null)
- `nama_siswa` (`VARCHAR(100)`, Not Null)
- `alamat_siswa` (`VARCHAR(200)`)
- `tgl_lahir` (`DATE`)
- `jurusan` (`VARCHAR(50)`)

## Cara Menjalankan

1. **Instal dependensi:**
   ```bash
   npm install
   ```

2. **Konfigurasi Environment (`.env`):**
   Buat file `.env` di folder utama backend dan sesuaikan pengaturan database Anda:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=db_siswa
   PORT=5000
   ```

3. **Jalankan server:**
   ```bash
   node server.js
   ```