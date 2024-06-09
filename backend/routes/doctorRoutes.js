import express from "express";
import {
  registerDoctor,
  loginDoctor,
  logoutDoctor,
  updateDoctorPhoto,
} from "../controllers/doctorController.js";
import { refreshTokenDoctor } from "../controllers/RefreshToken.js";
import verifyToken from "../middleware/VerifyToken.js";
import uploadDoctor from "../middleware/multerDoctor.js";

const router = express.Router();

router.post("/register", registerDoctor);
router.post("/login", loginDoctor);
router.get("/refresh-token", refreshTokenDoctor);
router.delete("/logout", logoutDoctor);

// Rute yang memerlukan otentikasi
router.put(
  "/update-photo",
  verifyToken,
  uploadDoctor.single("foto"),
  updateDoctorPhoto
);

export default router;
