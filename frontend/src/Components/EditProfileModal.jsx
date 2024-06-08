import React, { useState } from "react";
import axios from "../context/axiosConfig";

const EditProfileModal = ({ userData, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    nama: userData.nama,
    no_hp: userData.no_hp,
    email: userData.email,
    gender: userData.gender,
    usia: userData.usia,
    alamat: userData.alamat,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");

    try {
      await axios.put("/users/update-data", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      onUpdate(formData); // Update data in parent component
      onClose(); // Close the modal
    } catch (error) {
      console.error("Failed to update user data", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Edit Profil</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nama</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nomor Handphone</label>
            <input
              type="text"
              name="no_hp"
              value={formData.no_hp}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Jenis Kelamin</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Male">Laki-laki</option>
              <option value="Female">Perempuan</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Usia</label>
            <input
              type="number"
              name="usia"
              value={formData.usia}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Alamat Lengkap</label>
            <input
              type="text"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 py-2 px-4 bg-gray-400 text-white rounded"
            >
              Batal
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white rounded"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
