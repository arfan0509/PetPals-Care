import express from "express";
import {
  registerDoctor,
  loginDoctor,
  logoutDoctor,
} from "../controllers/doctorController.js";
import { refreshTokenDoctor } from "../controllers/RefreshToken.js";
import verifyToken from "../middleware/VerifyToken.js";

const router = express.Router();

router.post("/register", registerDoctor);
router.post("/login", loginDoctor);
router.get("/refresh-token", refreshTokenDoctor);
router.delete("/logout", logoutDoctor);

// Rute yang memerlukan otentikasi
router.get("/protected-route", verifyToken, (req, res) => {
  res.json({ message: "This is a protected route", doctor: req.user });
});

export default router;
