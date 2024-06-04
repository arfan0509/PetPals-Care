import React, { useEffect } from "react";
import Logo from "../assets/images/logo.png";
import "aos/dist/aos.css";
import AOS from "aos";

const RegisterPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
            <div className="py-2" data-aos="fade-up">
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nama"
              />
            </div>
            <div className="py-2" data-aos="fade-up">
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="No Handphone"
              />
            </div>
            <div className="py-2" data-aos="fade-up">
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
            </div>
            <div className="py-2" data-aos="fade-up">
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Kata Sandi"
              />
            </div>

            <div className="p-4" data-aos="fade-up">
              <a href="/Login-PetPalsCare">
                <button className=" w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold size-1 ">
                  Daftar Sekarang
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* end kanan */}
      </div>
    </>
  );
};

export default RegisterPage;
