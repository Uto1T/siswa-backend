CREATE DATABASE IF NOT EXISTS db_siswa;
USE db_siswa;

CREATE TABLE IF NOT EXISTS siswa (
  kode_siswa VARCHAR(15) NOT NULL,
  nama_siswa VARCHAR(100) NOT NULL,
  alamat_siswa TEXT,
  tgl_lahir DATE,
  jurusan VARCHAR(50),
  PRIMARY KEY (kode_siswa)
);

INSERT INTO siswa (kode_siswa, nama_siswa, alamat_siswa, tgl_lahir, jurusan) VALUES
('0988', 'Umran Eman', 'Jl. Srigunting', '2008-06-03', 'Teknik Informatika'),
('0977', 'Gibran RakaBulan', 'Jl. Solo', '2026-11-19', 'Teknik Sipil'),
('0987', 'Prabrewok', 'Jl. Jakarta', '2022-09-25', 'Tata Boga');