import React, { useState } from "react";
import axios from "../context/axiosConfig";
import UploadFotoHewanModal from "./UploadFotoHewanModal";

const PostingHewanModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nama: "",
    jenis_hewan: "",
    gender: "",
    usia: "",
    warna: "",
    lokasi: "",
    tgl_publish: new Date().toISOString().slice(0, 10),
    deskripsi: "",
    main_photo: null,
  });

  const [preview, setPreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [hewanId, setHewanId] = useState(null); // State untuk menyimpan ID hewan yang berhasil dibuat

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      const fileSize = file.size / 1024 / 1024; // Convert size to MB

      // Check if file type is valid
      const validFileTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validFileTypes.includes(fileType)) {
        setErrorMessage("File harus dalam format JPG, JPEG, atau PNG.");
        setFormData((prevData) => ({
          ...prevData,
          main_photo: null,
        }));
        setPreview(null);
        return;
      }

      // Check if file size is within limit
      if (fileSize > 5) {
        setErrorMessage("Ukuran file maksimal adalah 5MB.");
        setFormData((prevData) => ({
          ...prevData,
          main_photo: null,
        }));
        setPreview(null);
        return;
      }

      setErrorMessage("");
      setFormData((prevData) => ({
        ...prevData,
        main_photo: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Menampilkan preview gambar
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataObj = new FormData();

      // Check if the 'nama' field is empty and set default value
      if (!formData.nama) {
        formData.nama = "(Belum memiliki nama)";
      }

      for (const key in formData) {
        formDataObj.append(key, formData[key]);
      }

      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.post("/hewan/uploadHewan", formDataObj, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("Response:", response.data);
      setHewanId(response.data.hewanId); // Mengambil ID hewan dari respons
    } catch (error) {
      console.error("Error uploading hewan:", error);
    }
  };

  // Memastikan bahwa hewanId tidak null untuk menampilkan modal UploadFotoHewanModal
  if (hewanId !== null) {
    return <UploadFotoHewanModal hewanId={hewanId} onClose={onClose} />;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg h-4/5 overflow-y-auto w-2/3">
        <h2 className="text-2xl font-bold mb-4">Posting Hewan</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">
              Nama Panggilan{" "}
              <div className="text-xs opacity-60 mb-1">
                (Kosongkan jika tidak ada)
              </div>
            </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Jenis Hewan{" "}
              <div className="text-xs opacity-60 mb-1">
                (contoh: Kucing Lokal)
              </div>
            </label>
            <input
              type="text"
              name="jenis_hewan"
              value={formData.jenis_hewan}
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
              <option value=""></option>
              <option value="Jantan">Jantan</option>
              <option value="Betina">Betina</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Usia{" "}
              <div className="text-xs opacity-60 mb-1">
                (dalam satuan bulan)
              </div>
            </label>
            <input
              type="number"
              name="usia"
              value={formData.usia}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Warna{" "}
              <div className="text-xs opacity-60 mb-1">(contoh: Putih)</div>
            </label>
            <input
              type="text"
              name="warna"
              value={formData.warna}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Lokasi{" "}
              <div className="text-xs opacity-60 mb-1">
                (masukkan alamat lengkap)
              </div>
            </label>
            <input
              type="text"
              name="lokasi"
              value={formData.lokasi}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Deskripsi Tambahan{" "}
              <div className="text-xs opacity-60 mb-1">
                (masukkan deskripsi tambahan)
              </div>
            </label>
            <textarea
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="main_photo" className="block font-semibold mb-1">
              Foto Utama
            </label>
            <input
              type="file"
              id="main_photo"
              name="main_photo"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
          </div>
          {preview && (
            <div className="mb-4">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#DE9455] text-white rounded-lg hover:bg[#f89b59] transition duration-300 mt-4"
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
