import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import userRoutes from "./routes/userRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(cookieParser());
app.use(express.json());
const __dirname = path.dirname(new URL(import.meta.url).pathname); // Mendapatkan direktori saat ini
app.use(express.static(path.join(__dirname, "uploads"))); // Pastikan untuk menyajikan folder uploads

app.use("/api/users", userRoutes);
app.use("/api/doctors", doctorRoutes);

app.listen(5000, () => console.log("Server running at port 5000"));
