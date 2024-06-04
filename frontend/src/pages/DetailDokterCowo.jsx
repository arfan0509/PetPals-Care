import DokterCowo from '../assets/images/DokterCowo.png'
import React from 'react';
import Footer from '../Components/Footer-after';
import Navbar from "../Components/Navbar-after";

const posts = [
  {
    id: 1,
    title: 'Drh. Muhammad Ali',
    href: '#',
    description: 'KEDIRI',
    author: {
      imageUrl: 'https://drive.google.com/uc?id=1oonn5IChr3VGrSBLD2Pg853o18FPEvbu', // Ganti dengan URL gambar yang benar
    },
  },
  // More posts...
];

const Example = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {/* Bagian ini dihapus sesuai permintaan */}
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between bg-white shadow-lg rounded-lg p-6 w-full">
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-6 mt-3 w-full">
                {post.author.imageUrl && (
                  <img src={DokterCowo} alt="" className="h-40 w-40 rounded-full bg-gray-50" />
                )}
                <div className="flex flex-col mt-3 sm:mt-0 w-full">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {/* <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a> */}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    <span style={{ color: '#564741' }}><strong>Nama:</strong></span> {post.title} <br />
                    <span style={{ color: '#564741' }}><strong>Region/Wilayah:</strong></span> Kediri <br />
                    <span style={{ color: '#564741' }}><strong>Lulusan:</strong></span> Pendidikan Profesi Dokter Hewan, Fakultas Kedokteran Hewan, Universitas Syiah Kuala <br />
                    <span style={{ color: '#564741' }}><strong>Pengalaman:</strong></span> 7 Tahun <br />
                    <span style={{ color: '#564741' }}><strong>Spesialis Hewan:</strong></span> Hewan Domestik dan Eksotik
                  </p>
                  <div className="mt-5 flex space-x-4">
                  <button className="px-4 py-2 bg-[#ED9455] text-white rounded-lg hover:bg-[#d8854c]">
                    <a href="/Pop-Up-Konfirmasi">Konsultasi</a></button>
                    <button className="px-4 py-2 bg-[#ED9455] text-white rounded-lg hover:bg-[#d8854c]">Lokasi Praktik</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const DetailDokterCowo = () => {
  return (
    <>
      <Navbar />
      <Example />
      <Footer/>
      </>
  );
};

export default DetailDokterCowo;