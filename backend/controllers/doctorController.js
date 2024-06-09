import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../database/Database.js";

// Fungsi untuk meregistrasi dokter
export const registerDoctor = async (req, res) => {
  const {
    nama,
    no_hp,
    alamat,
    email,
    password,
    confirmPassword,
    gender,
    usia,
    lulusan,
    spesialis,
    biaya,
    pengalaman,
  } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const [existingDoctor] = await pool.query(
      "SELECT email FROM dokter WHERE email = ?",
      [email]
    );
    if (existingDoctor.length > 0)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      "INSERT INTO dokter (nama, no_hp, alamat, email, password, gender, usia, lulusan, spesialis, biaya, pengalaman) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        nama,
        no_hp,
        alamat,
        email,
        hashedPassword,
        gender,
        usia,
        lulusan,
        spesialis,
        biaya,
        pengalaman,
      ]
    );

    res.status(201).json({ message: "Doctor registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fungsi untuk login dokter
export const loginDoctor = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await pool.query("SELECT * FROM dokter WHERE email = ?", [
      email,
    ]);
    if (rows.length === 0)
      return res.status(400).json({ message: "Invalid email or password" });

    const doctor = rows[0];
    const isPasswordValid = await bcrypt.compare(password, doctor.password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid email or password" });

    const accessToken = jwt.sign(
      { id: doctor.id_dokter, email: doctor.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    const refreshToken = jwt.sign(
      { id: doctor.id_dokter, email: doctor.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    await pool.query(
      "UPDATE dokter SET refresh_token = ? WHERE id_dokter = ?",
      [refreshToken, doctor.id_dokter]
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fungsi untuk logout dokter
export const logoutDoctor = async (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) return res.sendStatus(204); // No Content

  try {
    const [rows] = await pool.query(
      "SELECT * FROM dokter WHERE refresh_token = ?",
      [refreshToken]
    );
    if (rows.length === 0) return res.sendStatus(204); // No Content

    const doctor = rows[0];
    await pool.query(
      "UPDATE dokter SET refresh_token = NULL WHERE id_dokter = ?",
      [doctor.id_dokter]
    );

    res.clearCookie("refreshToken");
    return res.sendStatus(200); // OK
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fungsi untuk mengunggah foto dokter
export const updateDoctorPhoto = async (req, res) => {
  const doctorId = req.user.id; // Mengambil ID dokter dari token akses
  const foto = req.file ? req.file.filename : null; // Mendapatkan nama file jika ada

  if (!foto) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const query = "UPDATE dokter SET foto = ? WHERE id_dokter = ?";
    const [result] = await pool.query(query, [foto, doctorId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const [updatedDoctor] = await pool.query(
      "SELECT id_dokter, nama, no_hp, email, gender, usia, alamat, lulusan, spesialis, biaya, pengalaman, foto FROM dokter WHERE id_dokter = ?",
      [doctorId]
    );

    res.json(updatedDoctor[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
