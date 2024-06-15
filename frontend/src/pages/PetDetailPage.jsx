import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar-after";
import Footer from "../Components/Footer-after";
import axios from "../context/axiosConfig";
import Slider from "react-slick";

const PetDetailPage = () => {
  const { id } = useParams();
  const [Hewan, setHewan] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchHewanDetail = async () => {
      try {
        const response = await axios.get(`/users/hewan/${id}`);
        setHewan(response.data);
        setSelectedImage(response.data.url_fotoutama);
      } catch (error) {
        console.error("Failed to fetch pet details:", error);
      }
    };

    fetchHewanDetail();
  }, [id]);

  const handleThumbnailClick = (url) => {
    setSelectedImage(url);
  };

  if (!Hewan) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Memasukkan foto utama ke dalam array foto_hewan
  const fotoHewanWithMainPhoto = [
    { id_foto: "main", url_foto: Hewan.url_fotoutama },
    ...Hewan.foto_hewan,
  ];

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="min-h-screen flex flex-col p-3 max-w-7xl mt-5 mx-auto pb-24 md:flex-row md:space-x-8">
        {/* Bagian gambar */}
        <div className="w-full md:w-2/5 flex flex-col items-center mb-8 md:mb-0">
          <div className="w-full mb-4 relative">
            <div className="relative w-full" style={{ paddingBottom: "100%" }}>
              <img
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                src={selectedImage}
                alt={Hewan.nama}
              />
            </div>
          </div>
          <Slider {...settings} className="w-full">
            {fotoHewanWithMainPhoto.map((foto) => (
              <div key={foto.id_foto} className="px-1">
                <img
                  className="w-full h-24 md:h-40 rounded-md border-2 cursor-pointer object-cover"
                  src={foto.url_foto}
                  alt={`Thumbnail ${foto.id_foto}`}
                  onClick={() => handleThumbnailClick(foto.url_foto)}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Bagian deskripsi */}
        <div className="w-full md:w-3/5 flex flex-col">
          <h1 className="text-2xl font-bold font-sans mb-4">
            {Hewan.jenis_hewan}
          </h1>

          <div className="flex flex-col space-y-4">
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-48">Nama: </span>
              <span className="font-sans">{Hewan.nama}</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-48">
                Jenis kelamin:{" "}
              </span>
              <span className="font-sans">{Hewan.gender}</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-48">Usia: </span>
              <span className="font-sans">{Hewan.usia} Bulan</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-48">Warna: </span>
              <span className="font-sans">{Hewan.warna}</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-48">Lokasi: </span>
              <span className="font-sans">{Hewan.lokasi}</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-48">
                Di posting pada:{" "}
              </span>
              <span className="font-sans">{Hewan.tgl_publish}</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-48">Deskripsi: </span>
              <span className="font-sans">{Hewan.deskripsi}</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex items-center">
              <span className="text-gray-500 font-sans w-48">
                Nama Pemilik:{" "}
              </span>
              {Hewan.user_url_foto ? (
                <img
                  className="w-10 h-10 rounded-full object-cover mr-2"
                  src={Hewan.user_url_foto}
                  alt={`Foto ${Hewan.user_nama}`}
                />
              ) : (
                <i className="fas fa-user w-12 h-12 flex items-center"></i>
              )}
              <span className="font-sans">{Hewan.user_nama}</span>
            </div>

            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-48">
                Nomor HP Pemilik:{" "}
              </span>
              <span className="font-sans">{Hewan.user_no_hp}</span>
            </div>

            {/* Add more details as needed */}
          </div>
          <button className="mt-6 px-6 py-3 bg-[#ED9455] hover:bg-[#f89b59] text-white rounded-lg transition duration-300">
            Chat dengan pemilik untuk adopsi
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PetDetailPage;
