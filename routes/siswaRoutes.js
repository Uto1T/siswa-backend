const express = require('express');
const router = express.Router();
const db = require('../config/siswadb');

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM siswa';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Gagal mengambil data', error: err.message });
    }
    res.status(200).json(results);
  });
});

router.post('/', (req, res) => {
  const { kode_siswa, nama_siswa, alamat_siswa, tgl_lahir, jurusan } = req.body;
  const sql = 'INSERT INTO siswa (kode_siswa, nama_siswa, alamat_siswa, tgl_lahir, jurusan) VALUES (?, ?, ?, ?, ?)';

  db.query(sql, [kode_siswa, nama_siswa, alamat_siswa, tgl_lahir, jurusan], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Gagal menambahkan data siswa', error: err.message });
    }
    res.status(201).json({
      message: 'Data siswa berhasil ditambahkan',
      data: { kode_siswa, nama_siswa, alamat_siswa, tgl_lahir, jurusan }
    });
  });
});

router.put('/:kode_siswa', (req, res) => {
  const { kode_siswa } = req.params;
  const { nama_siswa, alamat_siswa, tgl_lahir, jurusan } = req.body;
  const sql = 'UPDATE siswa SET nama_siswa = ?, alamat_siswa = ?, tgl_lahir = ?, jurusan = ? WHERE kode_siswa = ?';

  db.query(sql, [nama_siswa, alamat_siswa, tgl_lahir, jurusan, kode_siswa], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Gagal mengubah data siswa', error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: `siswa dengan kode siswa ${kode_siswa} tidak ditemukan` });
    }
    res.status(200).json({ message: 'Data siswa berhasil diperbarui' });
  });
});

router.delete('/:kode_siswa', (req, res) => {
  const { kode_siswa } = req.params;
  const sql = 'DELETE FROM siswa WHERE kode_siswa = ?';

  db.query(sql, [kode_siswa], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Gagal menghapus data siswa', error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: `siswa dengan kode siswa ${kode_siswa} tidak ditemukan` });
    }
    res.status(200).json({ message: 'Data siswa berhasil dihapus' });
  });
});

module.exports = router;