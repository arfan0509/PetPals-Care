import React, { useEffect } from "react";
import Logo from "../assets/images/logo.png";
import "aos/dist/aos.css";
import AOS from "aos";

const LoginPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        {/* kiri */}
        <div
          className="w-1/2 h-screen flex justify-center items-center"
          data-aos="fade-right"
        >
          <div className=" w-full p-20 text-center">
            <div className="text-lg w-auto h-auto font-semibold ">
              <h1 className="">Masuk Akun PetPals Care</h1>
            </div>
            <div className="py-4">
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Kata Sandi"
              />
            </div>

            <div className="p-4">
              <button className=" w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold size-1 ">
                <a href="/Beranda">Masuk Sekarang</a>
              </button>
            </div>
          </div>
        </div>
        {/* end kiri */}

        {/* kanan */}
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
                <button className=" w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold ">
                  Daftar
                </button>
              </a>
            </div>
            <div
              className="flex justify-center items-center "
              data-aos="fade-up"
            >
              <a href="/Login-dokter" className="text-[#777]">
                Masuk Sebagai Dokter Hewan
              </a>
            </div>
          </div>
        </div>
        {/* end kanan */}
      </div>
    </>
  );
};

export default LoginPage;
