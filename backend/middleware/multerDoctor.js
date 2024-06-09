// middleware/multerDoctor.js
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/pp_dokter");
  },
  filename: function (req, file, cb) {
    const userId = req.user.id; // Mendapatkan ID pengguna dari request (pastikan Anda memiliki middleware yang menetapkan req.user)
    const filenameWithoutExt = path.parse(file.originalname).name; // Mengambil nama file tanpa ekstensi
    cb(
      null,
      userId +
        "-" +
        filenameWithoutExt +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const uploadDoctor = multer({ storage: storage });

export default uploadDoctor;
