import React from "react";
import Navbar from "../Components/Navbar-after";
import Footer from '../Components/Footer-after';

const petData = [
  {
    id: 1,
    ras: "Anjing Husky Siberia",
    nama: "Buddy",
    kelamin: "Jantan",
    usia: "2 Tahun",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rD1FEh8AbGInF4erFbVsD7IjkuymuvjtxUGSztF6YqGfsUicwJqfo7iGhzbEwlC5nn8&usqp=CAU",
  },
  {
    id: 2,
    ras: "Kucing Scottish Fold",
    nama: "Luna",
    kelamin: "Betina",
    usia: "1 Tahun",
    imageUrl:
      "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
  },
  {
    id: 3,
    ras: "Anjing Beagle",
    nama: "Max",
    kelamin: "Jantan",
    usia: "3 Tahun",
    imageUrl:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/Anjing_Beagle.width-800.format-webp.webp",
  },
  {
    id: 4,
    ras: "Kucing Persia",
    nama: "Mochi",
    kelamin: "Betina",
    usia: "6 Bulan",
    imageUrl:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/kucing.width-500.format-webp_EEmRlF4.webp",
  },
];

const PetCard = ({ imageUrl, nama, ras, kelamin, usia }) => {
  return (
    <div className="max-w-xs mx-1 bg-white rounded-xl shadow-lg overflow-hidden">
      <img className="w-full h-52 object-cover" src={imageUrl} alt={nama} />
      <div className="p-4">
        <h2 className="text-xl font-bold text-slate-900">{nama}</h2>
        <div className="mt-2 text-gray-600">
          <p className="line-clamp-1">
            <span className="font-semibold">Ras:</span> {ras}
          </p>
          <p>
            <span className="font-semibold">Kelamin:</span> {kelamin}
          </p>
          <p>
            <span className="font-semibold">Usia:</span> {usia}
          </p>
        </div>
        <button className="mt-4 w-full py-1 bg-[#ED9455] hover:bg-[#f89b59] text-white rounded-lg transition duration-300">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

const PetDetailPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="min-h-screen font-sans flex flex-col md:flex-row p-3 max-w-7xl mt-5 mx-auto pb-24">
        {/* Bagian gambar */}
        <div className="w-full md:w-1/2 flex flex-col items-start mb-8 md:mb-0">
          <img
            className="w-[530px] h-[530px] rounded-lg mb-4 object-cover"
            src="https://www.akc.org/wp-content/uploads/2017/11/Shiba-Inu-puppy-standing-outdoors.jpg"
            alt="Pet"
          />
          <div className="flex space-x-3 justify-start">
            <img
              className="w-24 h-24 rounded-md border-2"
              src="https://via.placeholder.com/94x94"
              alt="Thumbnail"
            />
            <img
              className="w-24 h-24 rounded-md border-2"
              src="https://via.placeholder.com/94x94"
              alt="Thumbnail"
            />
            <img
              className="w-24 h-24 rounded-md border-2"
              src="https://via.placeholder.com/94x94"
              alt="Thumbnail"
            />
            <img
              className="w-24 h-24 rounded-md border-2"
              src="https://via.placeholder.com/94x94"
              alt="Thumbnail"
            />
            <img
              className="w-24 h-24 rounded-md border-2"
              src="https://via.placeholder.com/94x94"
              alt="Thumbnail"
            />
          </div>
        </div>

        {/* Bagian deskripsi */}
        <div className="w-full md:w-1/2 md:ml-8 flex flex-col">
          <h1 className="text-2xl font-bold font-sans mb-4">
            Anjing Shiba Inu
          </h1>

          <div className="flex flex-col space-y-4">
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-32">
                Nama Panggilan:{" "}
              </span>
              <span className="font-sans">Cleo</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-32">Kelamin: </span>
              <span className="font-sans">Jantan</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-32">Umur: </span>
              <span className="font-sans">2 Tahun</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-32">Warna: </span>
              <span className="font-sans">Appricot & Tan</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-32">Vaksin: </span>
              <span className="font-sans">Sudah</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-32">
                Obat Cacing:{" "}
              </span>
              <span className="font-sans">Sudah</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-32">Lokasi: </span>
              <span className="font-sans">Kediri, Indonesia</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-32">
                Tanggal Publikasi:{" "}
              </span>
              <span className="font-sans">12-Oct-2022</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-32">
                Informasi Tambahan:{" "}
              </span>
              <span className="font-sans">
                Pure breed Shih Tzu. Struktur tubuh yang baik. Dengan sertifikat
                MKA dan Microchip. Garis keturunan juara.
              </span>
            </div>
          </div>
          <a href="/Chat-pemilik">
          <button className="mt-6 px-6 py-3 bg-[#ED9455] hover:bg-[#f89b59] text-white rounded-lg transition duration-300">
            Chat dengan pemilik untuk adopsi
          </button>
          </a>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <div className="text-black text-base font-normal mb-1">
              Belum menemukan hewan yang cocok?
            </div>
            <div className="text-[#ED9455] text-2xl font-extrabold capitalize mb-2">
              Lihat Hewan Lainnya
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {petData.map((pet) => (
            <PetCard
              key={pet.id}
              imageUrl={pet.imageUrl}
              nama={pet.nama}
              ras={pet.ras}
              kelamin={pet.kelamin}
              usia={pet.usia}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PetDetailPage;
