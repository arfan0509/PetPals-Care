import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import verifyToken from "../middleware/VerifyToken.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/refresh-token", refreshToken);
router.delete("/logout", logoutUser);

// Rute yang memerlukan otentikasi
router.get("/users-data", verifyToken, getUsers);
router.put("/update-data", verifyToken, updateUser);

export default router;
