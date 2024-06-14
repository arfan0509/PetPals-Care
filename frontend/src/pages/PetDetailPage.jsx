import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar-after";
import Footer from "../Components/Footer-after";
import axios from "../context/axiosConfig";

const PetDetailPage = () => {
  const { id } = useParams();
  const [Hewan, setHewan] = useState(null);

  useEffect(() => {
    const fetchHewanDetail = async () => {
      try {
        const response = await axios.get(`/hewan/${id}`);
        setHewan(response.data);
      } catch (error) {
        console.error("Failed to fetch pet details:", error);
      }
    };

    fetchHewanDetail();
  }, [id]);

  if (!Hewan) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-sans">
      <Navbar />
      <div className="min-h-screen font-sans flex flex-col md:flex-row p-3 max-w-7xl mt-5 mx-auto pb-24">
        {/* Bagian gambar */}
        <div className="w-full md:w-1/2 flex flex-col items-start mb-8 md:mb-0">
          <img
            className="w-[530px] h-[530px] rounded-lg mb-4 object-cover"
            src={Hewan.url_fotoutama}
            alt={Hewan.nama}
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
            {/* Add more images as needed */}
          </div>
        </div>

        {/* Bagian deskripsi */}
        <div className="w-full md:w-1/2 md:ml-8 flex flex-col">
          <h1 className="text-2xl font-bold font-sans mb-4">{Hewan.nama}</h1>

          <div className="flex flex-col space-y-4">
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-32">
                Jenis Hewan:{" "}
              </span>
              <span className="font-sans">{Hewan.jenis_hewan}</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-32">Kelamin: </span>
              <span className="font-sans">{Hewan.gender}</span>
            </div>
            <div className="border-b border-gray-200 py-2 flex">
              <span className="text-gray-500 font-sans w-32">Usia: </span>
              <span className="font-sans">{Hewan.usia}</span>
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
