import express from "express";
import {
  uploadHewan,
  uploadFotoHewan,
  getHewanWithUser,
  deleteHewan,
} from "../controllers/hewanController.js";
import verifyToken from "../middleware/VerifyToken.js";
import uploadFotoUtama from "../middleware/multerHewan.js";
import uploadFotoHewanArray from "../middleware/multerFotohewan.js";

const router = express.Router();

// Rute untuk mengunggah data hewan beserta foto utama
router.post(
  "/uploadHewan",
  verifyToken,
  uploadFotoUtama.single("main_photo"),
  uploadHewan
);

// Rute untuk mengunggah foto hewan
router.post(
  "/uploadFotoHewan/:id",
  verifyToken,
  uploadFotoHewanArray.array("photos", 5), // Menggunakan multer middleware untuk menghandle multiple files
  uploadFotoHewan
);
router.get("/", getHewanWithUser);
router.delete("/:id", verifyToken, deleteHewan);

export default router;
