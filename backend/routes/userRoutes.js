import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUsers,
  updateUser,
  updateUserPhoto,
  changePassword,
  deletePhoto,
  deleteAccount,
} from "../controllers/userController.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import verifyToken from "../middleware/VerifyToken.js";
import uploadPP from "../middleware/multer.js";
<<<<<<< HEAD
import {
  getAllDoctors,
  getDoctorById,
} from "../controllers/doctorController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/refresh-token", refreshToken);
router.delete("/logout", logoutUser);

// Rute yang memerlukan otentikasi
router.get("/users-data", verifyToken, getUsers);
router.put("/update-data", verifyToken, updateUser);
router.put(
  "/update-photo",
  verifyToken,
  uploadPP.single("foto"),
  updateUserPhoto
);
router.put("/change-password", verifyToken, changePassword);
router.delete("/delete-photo", verifyToken, deletePhoto);
router.delete("/delete-account", verifyToken, deleteAccount);

// Rute untuk mendapatkan seluruh data dokter
router.get("/all-doctors", getAllDoctors);
// Rute untuk mendapatkan detail dokter berdasarkan id_dokter
router.get("/doctor/:id", getDoctorById);

export default router;
