import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar-after";
import Footer from "../Components/Footer-after";
import axios from "../context/axiosConfig";
import { jwtDecode } from "jwt-decode";
import EditProfileModal from "../Components/EditProfileModal";

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

const ProfilUserPage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        setError("User not authenticated");
        // Navigasi ke halaman login jika tidak ada accessToken
        window.location.href = "/login"; // Ubah rute sesuai dengan rute login Anda
        return;
      }

      try {
        const decodedToken = jwtDecode(accessToken);
        const response = await axios.get("/users/users-data", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserData(response.data[0]); // Karena responsenya berupa array
      } catch (err) {
        console.error(err);
        setError("Gagal memuat data user");
        // Navigasi ke halaman login jika gagal memuat data pengguna
        window.location.href = "/Login-PetPalsCare"; // Ubah rute sesuai dengan rute login Anda
      }
    };

    fetchUserData();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateUser = (updatedUser) => {
    setUserData(updatedUser);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-white-light-2 w-full h-auto flex justify-start">
        <div className="w-1/3 h-screen p-8">
          <ul>
            <li className="p-2 hover:bg-gray-400 border-collapse rounded-lg">
              <a href="/Profil">Profil Saya</a>
            </li>
            <li className="p-2 hover:bg-gray-400 border-collapse rounded-lg">
              <a href="#">Daftar Alamat</a>
            </li>
            <li className="p-2 hover:bg-gray-400 border-collapse rounded-lg">
              <a href="#">Favorit</a>
            </li>
            <li className="p-2 hover:bg-gray-400 border-collapse rounded-lg">
              <a href="#">Pesan</a>
            </li>
            <li className="p-2 hover:bg-gray-400 border-collapse rounded-lg">
              <a href="/Posting-hewan">Posting Hewan Saya</a>
            </li>
            <li className="py-8 px-2">
              <button onClick={logoutUser}>Keluar</button>
            </li>
          </ul>
        </div>

        <div className="w-full h-auto p-12">
          <div className="bg-white p-10 rounded-xl w-full h-auto shadow-2xl">
            <h1 className="py-4 font-bold text-1xl">Profil Saya</h1>
            <div className="flex justify-start items-center gap-4 pt-6">
              <div className="w-[100px] h-[100px] bg-orange-400 rounded-full flex justify-center items-center">
                <p>{userData.nama.charAt(0)}</p>
              </div>

              <div>
                <h1>{userData.nama}</h1>
                <p>Pengasuh Setia</p>
              </div>
            </div>
            <div className="flex justify-start gap-8 items-center w-full h-auto gap-28 py-4">
              <div>
                <p>Usia</p>
                <p>{userData.usia} Tahun</p>
              </div>
              <div>
                <p>Jenis Kelamin</p>
                <p>{userData.gender}</p>
              </div>
            </div>
            <div className="py-4">
              <p>Nomor Handphone</p>
              <p>{userData.no_hp}</p>
            </div>
            <div className="py-4">
              <p>Email</p>
              <p>{userData.email}</p>
            </div>
            <div className="py-4">
              <p>Alamat Lengkap</p>
              <p>{userData.alamat}</p>
            </div>
            <button
              onClick={handleOpenModal}
              className="mt-4 py-2 px-4 bg-blue-600 text-white rounded"
            >
              Edit Profil
            </button>
          </div>
        </div>
      </div>
      <Footer />
      {isModalOpen && (
        <EditProfileModal
          userData={userData}
          onClose={handleCloseModal}
          onUpdate={handleUpdateUser}
        />
      )}
    </>
  );
};

export default ProfilUserPage;
