import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import hewanRoutes from "./routes/hewanRoutes.js";
import { fileDir } from "./utils/filehandler.cjs";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// Menyajikan folder uploads/profile secara publik
app.use("/uploads/profile", express.static(fileDir("profile")));

// Menyajikan folder uploads/hewan scr publik
app.use("/uploads/hewan", express.static(fileDir("hewan")));

app.use(cookieParser());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/hewan", hewanRoutes);

app.listen(5000, () => console.log("Server running at port 5000"));
