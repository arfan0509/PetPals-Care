import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUsers,
  updateUser,
  updateUserPhoto,
} from "../controllers/userController.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import verifyToken from "../middleware/VerifyToken.js";
import uploadUser from "../middleware/multerUser.js";

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
  uploadUser.single("foto"),
  updateUserPhoto
);

export default router;
