import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import "aos/dist/aos.css";
import AOS from "aos";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nama: "",
    no_hp: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    usia: "",
    alamat: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registrasi berhasil, lakukan tindakan lanjutan seperti menavigasi pengguna ke halaman beranda
        console.log("Registrasi berhasil");
        window.location.href = "/Login-PetPalsCare";
      } else {
        // Registrasi gagal, tangani kesalahan
        const responseData = await response.json();
        if (responseData.message === "Email already exists") {
          alert(
            "Email sudah terdaftar. Silakan gunakan email lain atau masuk ke akun Anda."
          );
        } else {
          console.error("Gagal mendaftar");
          console.error("Error:", responseData.message); // Jika backend mengirimkan pesan kesalahan selain "Email already exists"
        }
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        {/* kiri */}
        <div
          className="w-1/2 h-screen bg-[#F7DBA7] flex justify-center items-center custom-border-radius rotate-180"
          data-aos="fade-left"
        >
          <div className="">
            <div className="h-auto w-full max-w-72" data-aos="zoom-in">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <div
              className="p-4 flex justify-center items-center"
              data-aos="fade-up"
            >
              <a href="/Login-PetPalsCare">
                <button className=" w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold ">
                  Masuk{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* end kiri */}

        {/* kanan */}
        <div
          className="w-1/2 h-screen flex justify-center items-center"
          data-aos="fade-right"
        >
          <div className=" w-full p-20 text-center">
            <div className="text-lg w-auto h-auto font-semibold ">
              <h1 className="">Daftar Akun</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="py-2" data-aos="fade-up">
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nama"
                />
              </div>
              <div className="py-2" data-aos="fade-up">
                <input
                  type="text"
                  name="no_hp"
                  value={formData.no_hp}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="No Handphone"
                />
              </div>
              <div className="py-2" data-aos="fade-up">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                />
              </div>
              <div className="py-2" data-aos="fade-up">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Kata Sandi"
                />
              </div>
              <div className="py-2" data-aos="fade-up">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Konfirmasi Kata Sandi"
                />
              </div>
              <div className="py-2" data-aos="fade-up">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Pilih Gender</option>
                  <option value="Male">Laki-laki</option>
                  <option value="Female">Perempuan</option>
                </select>
              </div>
              <div className="py-2" data-aos="fade-up">
                <input
                  type="text"
                  name="usia"
                  value={formData.usia}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Usia"
                />
              </div>
              <div className="py-2" data-aos="fade-up">
                <input
                  type="text"
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Alamat"
                />
              </div>
              <div className="p-4" data-aos="fade-up">
                <button
                  type="submit"
                  className=" w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold size-1 "
                >
                  Daftar Sekarang
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* end kanan */}
      </div>
    </>
  );
};

export default RegisterPage;
