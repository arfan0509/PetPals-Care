import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import "aos/dist/aos.css";
import AOS from "aos";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login berhasil, simpan token dan lakukan navigasi ke halaman setelah login
        localStorage.setItem("userData", JSON.stringify(data.user));
        localStorage.setItem("accessToken", data.accessToken);
        window.location.href = "/beranda"; // Ganti dengan URL halaman setelah login
      } else {
        // Login gagal, tampilkan pesan kesalahan
        alert(data.message);
      }
    } catch (error) {
      // Tangani kesalahan jika terjadi
      console.error("Error:", error);
      alert("Terjadi kesalahan saat melakukan login.");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="w-1/2 h-screen flex justify-center items-center"
        data-aos="fade-right"
      >
        <div className="w-full p-20 text-center">
          <div className="text-lg w-auto h-auto font-semibold ">
            <h1 className="">Masuk Akun PetPals Care</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Kata Sandi"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="p-4">
              <button
                type="submit"
                className="w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold size-1 "
              >
                Masuk Sekarang
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="w-1/2 h-screen bg-[#F7DBA7] flex justify-center items-center custom-border-radius"
        data-aos="fade-left"
      >
        <div className="">
          <div className="h-auto w-full max-w-72">
            <a href="/" data-aos="zoom-in">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div
            className="p-4 flex justify-center items-center"
            data-aos="fade-up"
          >
            <a href="/Daftar-PetPalsCare">
              <button className="w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold ">
                Daftar
              </button>
            </a>
          </div>
          <div className="flex justify-center items-center " data-aos="fade-up">
            <a href="/Login-dokter" className="text-[#777]">
              Masuk Sebagai Dokter Hewan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
