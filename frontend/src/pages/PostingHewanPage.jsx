import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar-after";
import Footer from "../Components/Footer-after";
import axios from "../context/axiosConfig";
import PostingHewanModal from "../Components/PostingHewanModal";

const logoutUser = async () => {
  try {
    await axios.delete("/users/logout");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/";
  } catch (error) {
    console.error("Failed to logout:", error);
    // Tindakan penanganan kesalahan jika diperlukan
  }
};

const PostingHewanPage = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengontrol visibilitas modal upload hewan

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/posting-hewan");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeletePosting = async (id) => {
    try {
      await axios.delete(`/posting-hewan/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting posting:", error);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-white-light-2 w-full h-auto flex justify-start font-poppins">
        <div className="w-1/3 h-screen p-8">
          <ul>
            <li className="p-2 hover:bg-[#DE9455] hover:text-white border-collapse rounded-lg transition duration-200">
              <a href="/Profil">Profil Saya</a>
            </li>
            <li className="p-2 hover:bg-[#DE9455] hover:text-white border-collapse rounded-lg transition duration-200">
              <a href="/GantiPassword-user">Ubah Kata Sandi</a>
            </li>
            <li className="p-2 hover:bg-[#DE9455] hover:text-white border-collapse rounded-lg transition duration-200">
              <a href="#">Pesan</a>
            </li>
            <li className="p-2 hover:bg-[#DE9455] hover:text-white border-collapse rounded-lg transition duration-200">
              <a href="/PostingHewan">Posting Hewan Saya</a>
            </li>
            <div className="py-4"></div>
            <li className="p-2 hover:bg-red-500 hover:text-white border-collapse rounded-lg transition duration-200">
              <button onClick={logoutUser}>Keluar</button>
            </li>
          </ul>
        </div>
        {/* Konten */}
        <div className="w-full h-auto p-4">
          <div className="bg-white p-0 rounded-xl w-full h-full shadow-2xl">
            <h1 className="p-4 text-2xl font-bold">Postingan Hewan Saya</h1>
            <div className="px-4 py-2">
              <button
                onClick={handleOpenModal} // Tambahkan event handler untuk membuka modal
                className="text-white py-2 px-4 rounded-md bg-[#DE9455] hover:bg-[#D68B4B]"
              >
                + Posting Hewan
              </button>
            </div>

            {/* Grid */}
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-auto w-auto">
                {data.map((item) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    Nama={item.Nama}
                    JenisHewan={item.JenisHewan}
                    Kelamin={item.Kelamin}
                    Usia={item.Usia}
                    imageUrl={item.imageUrl}
                    onDelete={handleDeletePosting}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal upload hewan */}
      {isModalOpen && <PostingHewanModal onClose={handleCloseModal} />}
    </>
  );
};

export default PostingHewanPage;
