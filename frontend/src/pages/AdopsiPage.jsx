import React from "react";
import Navbar from "../Components/Navbar-after";
import Footer from "../Components/Footer-after";

const data = [
  {
    id: 1,
    JenisHewan: "Kucing Anggora",
    Nama: "Fluffy",
    Kelamin: "Betina",
    Usia: "2 Bulan",
    imageUrl: "https://i.ibb.co.com/ckN3v0F/Angora.png",
  },
  {
    id: 2,
    JenisHewan: "Iguana Green",
    Nama: "Greendy",
    Kelamin: "Jantan",
    Usia: "9 Bulan",
    imageUrl: "https://i.ibb.co.com/MnCPpF6/iguana.png",
  },
  {
    id: 3,
    JenisHewan: "Kelinci Alaska",
    Nama: "Bunny",
    Kelamin: "Betina",
    Usia: "6 Bulan",
    imageUrl: "https://i.ibb.co.com/WDQmvjH/kelinci.png",
  },
  {
    id: 4,
    JenisHewan: "Kura-kura Darat",
    Nama: "Xeca",
    Kelamin: "Betina",
    Usia: "5 Tahun",
    imageUrl: "https://i.ibb.co.com/bFVrLxx/kura.png",
  },
  {
    id: 5,
    JenisHewan: "Kucing Persia",
    Nama: "Sassy",
    Kelamin: "Betina",
    Usia: "2 Tahun",
    imageUrl: "https://i.ibb.co.com/K98b2mf/persia.png",
  },
  {
    id: 6,
    JenisHewan: "Anjing Shiba Inu",
    Nama: "Cleo",
    Kelamin: "Betina",
    Usia: "2 Tahun",
    imageUrl: "https://i.ibb.co.com/ct4kv3b/shiba.png",
  },
  {
    id: 7,
    JenisHewan: "Kucing Lokal",
    Nama: "(Belum Ada)",
    Kelamin: "Jantan",
    Usia: "2 Bulan",
    imageUrl: "https://i.ibb.co.com/c8kJ9x9/lokal.png",
  },
  {
    id: 8,
    JenisHewan: "Anjing Maltase",
    Nama: "Fuzzy",
    Kelamin: "Betina",
    Usia: "3 Bulan",
    imageUrl: "https://i.ibb.co.com/wSh5zGx/maltase.png",
  },
];

const Card = ({ JenisHewan, Nama, Kelamin, Usia, imageUrl }) => {
  return (
    <div className="max-w-xs mx-1 bg-white rounded-xl shadow-lg overflow-hidden">
      <img className="w-full h-52 object-cover" src={imageUrl} alt={Nama} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h1>{JenisHewan}</h1>
        </div>
        <p className="text-[#667479] text-sm">Nama: {Nama}</p>
        <div className="flex gap-2 items-center">
          <p className="text-[#667479] text-sm">Kelamin: {Kelamin}</p>
          <span className="text-[#667479] text-sm">&bull;</span>
          <p className="text-[#667479] text-sm">Usia: {Usia}</p>
        </div>
        <a href="/Detail-hewan">
          <button className="mt-4 w-full py-1 bg-[#ED9455] hover:bg-[#f89b59] text-white rounded-lg transition duration-300">
            Lihat Detail
          </button>
        </a>
      </div>
    </div>
  );
};

const AdopsiPage = () => {
  return (
    <>
      <Navbar />
      <div className="container px-20 py-8 font-poppins">
        <img
          src="adopsi.png"
          alt="adopsi"
          className="w-auto h-auto relative mb-8"
        />
        <div className="absolute top-72 left-3/4 transform -translate-x-1/4 -translate-y-1/2 text-white px-12 py-4 text-left w-full max-w-full">
          <h1 className="text-4xl font-bold mb-2">Temukan Sahabat Baru</h1>
          <h2 className="text-xl font-semibold">Adopsi Hewan</h2>
          <h2 className="text-xl font-semibold mb-2">Berikan Kasih Sayang</h2>
          <h4 className="text-sm mb-2 max-w-md">
            Satu tindakan, satu ikatan, satu keluarga. Jadilah bagian dari
            perubahan dengan mengadopsi hari ini.
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {data.map((item) => (
            <Card
              key={item.id}
              Nama={item.Nama}
              JenisHewan={item.JenisHewan}
              Kelamin={item.Kelamin}
              Usia={item.Usia}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdopsiPage;
