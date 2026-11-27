const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/siswadb');
const siswaRoutes = require('./routes/siswaRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/siswa', siswaRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});