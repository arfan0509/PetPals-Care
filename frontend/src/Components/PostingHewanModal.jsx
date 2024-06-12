import React, { useState } from "react";
import axios from "axios";

const PostingHewanModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nama: "",
    jenis_hewan: "",
    gender: "",
    usia: "",
    warna: "",
    lokasi: "",
    tgl_publish: "",
    deskripsi: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataObj = new FormData();
      for (const key in formData) {
        formDataObj.append(key, formData[key]);
      }
      const response = await axios.post("/uploadHewan", formDataObj, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      onClose();
    } catch (error) {
      console.error("Error uploading hewan:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg h-4/5 overflow-y-auto w-2/3">
        <h2 className="text-2xl font-bold mb-4">Posting Hewan</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nama" className="block font-semibold mb-1">
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
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
          {/* Tambahkan input untuk semua field yang diperlukan */}
          <div className="mb-4">
            <label htmlFor="file" className="block font-semibold mb-1">
              Foto Utama
            </label>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#DE9455] text-white rounded-lg hover:bg-[#f89b59] transition duration-300"
          >
            Upload
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PostingHewanModal;
