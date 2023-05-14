const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(
  express.urlencoded({
    extended: true,
  })
);

// GET
router.get("/biodata", function (req, res) {
  const nama = req.query.nama;
  const tempatLahir = req.query.tempatLahir;
  const tanggalLahir = req.query.tanggalLahir;
  const alamat = req.query.alamat;

  res.send({
    "Nama lengkap": nama,
    "Tempat lahir": tempatLahir,
    "Tanggal lahir": tanggalLahir,
    "Alamat lahir": alamat,
  });
});

// POST
router.post("/biodata", function (req, res) {
  const nama = req.body.nama;
  const tempatLahir = req.body.tempatLahir;
  const tanggalLahir = req.body.tanggalLahir;
  const alamat = req.body.alamat;

  res.send({
    "Nama lengkap": nama,
    "Tempat lahir": tempatLahir,
    "Tanggal lahir": tanggalLahir,
    "Alamat lahir": alamat,
  });
});

module.exports = router;
