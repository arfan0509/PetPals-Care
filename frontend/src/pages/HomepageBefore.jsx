import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import heroImage from "../assets/images/hero-home.jpg";
import image1 from "../assets/images/vectorhome1.png";
import image2 from "../assets/images/vectorhome2.png";
import image3 from "../assets/images/vectorhome3.png";
import image4 from "../assets/images/vectorhome4.png";
import doktercwo from "../assets/images/DokterCowo.png";
import doktercwe from "../assets/images/DokterCewe.png";
import vaksinKucing from "../assets/images/vaksinimg.jpg";
import adoptionBgImage from "../assets/images/banner2.png";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    Imgurl: image1,
    text: "Lokasi Dokter Hewan",
    description:
      "Kemudahan untuk menemukan dokter hewan terdekat dengan cepat.",
  },
  {
    id: 2,
    Imgurl: image2,
    text: "Konsultasi Dokter",
    description:
      "Berkonsultasi dengan dokter hewan secara online untuk memperoleh saran penanganan.",
  },
  {
    id: 3,
    Imgurl: image3,
    text: "Adopsi Hewan",
    description:
      "Menjelajahi daftar-daftar hewan yang anda inginkan untuk dipelihara.",
  },
  {
    id: 4,
    Imgurl: image4,
    text: "Temukan Pengadopsi",
    description:
      "Anda dapat mengunggah profil hewan anda untuk menemukan pengadopsi yang cocok.",
  },
];

const doctorData = [
  {
    id: 1,
    name: "Drh. Bagus Syahputra A",
    specialty: "Hewan Domestik dan Eksotik",
    experience: "7 Tahun",
    imageUrl: doktercwo,
  },
  {
    id: 2,
    name: "Drh. Nurma Lala",
    specialty: "Kucing dan Anjing",
    experience: "5 Tahun",
    imageUrl: doktercwe,
  },
  {
    id: 3,
    name: "Drh. Septian Priatama",
    specialty: "Hewan Ternak dan Unggas",
    experience: "10 Tahun",
    imageUrl: doktercwo,
  },
  {
    id: 4,
    name: "Drh. Ami Kosriami",
    specialty: "Anjing dan Kucing, Ternak",
    experience: "15 Tahun",
    imageUrl: doktercwe,
  },
];

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
      "https://asset.kompas.com/crops/Tjk-lZqu-OWdgxYJeMyRjSzz1BQ=/46x0:1832x1191/750x500/data/photo/2022/08/26/63082fb8d14af.jpg",
  },
  {
    id: 4,
    ras: "Kucing Persia",
    nama: "Mochi",
    kelamin: "Betina",
    usia: "6 Bulan",
    imageUrl:
      "https://trubus.id/wp-content/uploads/2023/10/Perawatan-Kucing-Persia.jpg",
  },
];

const Card = ({ Imgurl, text, description }) => {
  return (
    <div className="bg-[#F1F1F1] shadow-md rounded-lg p-6" data-aos="fade-up">
      <div className="flex items-center justify-start mb-4">
        <img src={Imgurl} alt={text} className="h-12 w-12" />
      </div>
      <h2 className="text-xl font-semibold mb-2">{text}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const DoctorCard = ({ imageUrl, name, specialty, experience }) => {
  return (
    <div
      className="px-2 pt-2 bg-white rounded-xl shadow flex-col justify-start items-center gap-2 inline-flex"
      data-aos="fade-up"
    >
      <div className="w-auto h-52 bg-white rounded-[10px] justify-center items-center ">
        <img className="w-auto h-52" src={imageUrl} alt={name} />
      </div>
      <div className="px-2 pt-2 pb-5 flex-col justify-start items-start gap-2.5 flex">
        <div className="flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch text-slate-900 text-xl font-normal leading-10">
            {name}
          </div>
          <div className="self-stretch justify-start items-start gap-1 inline-flex">
            <div className="justify-start items-start gap-1.5 flex">
              <div className="w-[61px] h-[18px] text-gray-500 text-xs font-black">
                Spesialis:
              </div>
              <div className="w-[171px] h-[18px] text-gray-500 text-xs font-normal">
                {specialty}
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-1.5 inline-flex">
            <div className="text-gray-500 text-xs font-black">Pengalaman:</div>
            <div className="text-gray-500 text-xs font-normal">
              {experience}
            </div>
          </div>
        </div>
        <button className="mt-4 w-full py-1 bg-[#ED9455] hover:bg-[#f89b59] text-white rounded-lg transition duration-300">
          <a href="/Login-PetPalsCare">Lihat Detail</a>
        </button>
      </div>
    </div>
  );
};

const PetCard = ({ imageUrl, nama, ras, kelamin, usia }) => {
  return (
    <div
      className="max-w-xs mx-1 bg-white rounded-xl shadow-lg overflow-hidden"
      data-aos="fade-up"
    >
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
          <a href="/Login-PetPalsCare">Lihat Detail</a>
        </button>
      </div>
    </div>
  );
};

const HomepageBefore = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-poppins">
      <div>
        <Navbar />
      </div>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-aos="fade-in"
      >
        <div
          className="absolute left-[130px] top-[180px]"
          data-aos="fade-right"
        >
          <div className="text-neutral-800 text-5xl font-bold font-sans capitalize leading-[68px]">
            Hewan Sehat, Hati Bahagia
            <p>Temukan Perawatan Terbaik</p>
          </div>
          <div className="w-[480px] text-stone-500 text-base font-normal font-sans mt-4">
            Bersama-sama, kita berkomitmen untuk mengubah dan memperbaiki
            kesejahteraan hewan serta menciptakan kehidupan yang penuh
            kebahagiaan bagi mereka!
          </div>
          <a href="/Login-PetPalsCare">
            <button className="w-[163px] h-[48px] bg-[#ED9455] hover:bg-[#f89b59] transition duration-300 rounded-full flex justify-center items-center mt-10">
              <span className="text-white">Jelajahi Sekarang</span>
            </button>
          </a>
        </div>
      </div>
      <div className="container mx-auto p-8 pt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <Card
              key={item.id}
              Imgurl={item.Imgurl}
              text={item.text}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto p-8 flex flex-col lg:flex-row items-center gap-8 pt-28">
        <div
          className="w-full lg:w-1/2 h-[23rem] overflow-hidden rounded-lg"
          data-aos="fade-right"
        >
          <img
            src={vaksinKucing}
            alt="vaksin"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <h2 className="text-4xl font-bold mb-10">Vaksinasi dan Imunisasi</h2>
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              Pastikan hewan peliharaan Anda mendapatkan vaksinasi dan imunisasi
              yang diperlukan untuk menjaga kesehatan dan kekebalan tubuh
              mereka.
            </p>
            <p>
              Setiap vaksinasi adalah investasi dalam kesehatan dan
              kesejahteraan hewan peliharaan Anda, memberikan mereka
              perlindungan yang kuat dan memastikan bahwa mereka dapat hidup
              dengan nyaman dan bahagia dalam lingkungan yang aman dan sehat.
            </p>
            <p>
              Konsultasikan dengan dokter hewan Anda untuk mengetahui jenis
              vaksinasi yang tepat dan jadwal yang sesuai untuk hewan peliharaan
              Anda.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8 pt-28" id="rekomendasi-dokter">
        <div className="flex justify-between items-center mb-10">
          <div data-aos="fade-right">
            <div className="text-black text-base font-normal mb-1">
              Ingin berkonsultasi dengan dokter hewan terpercaya?
            </div>
            <div className="text-[#ED9455] text-2xl font-extrabold capitalize mb-2">
              Rekomendasi Dokter Hewan
            </div>
          </div>
          <a href="/Login-PetPalsCare">
            <button
              className="bg-[#ED9455] py-2 px-4 hover:bg-[#f89b59] transition duration-300 rounded-md flex justify-center items-center"
              data-aos="fade-left"
            >
              <span className="text-white">Tampilkan Lainnya</span>
            </button>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctorData.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              imageUrl={doctor.imageUrl}
              name={doctor.name}
              specialty={doctor.specialty}
              experience={doctor.experience}
            />
          ))}
        </div>
      </div>
      <div
        className="relative w-full h-screen bg-cover bg-center mt-10"
        style={{ backgroundImage: `url(${adoptionBgImage})` }}
        data-aos="fade-in"
      >
        <div
          className="absolute left-[130px] top-[120px] w-full lg:w-1/2"
          data-aos="fade-right"
        >
          <h2 className="text-4xl font-bold mb-10 leading-tight font">
            Manfaat Mempelihara Hewan Membawa Kebahagiaan dalam Kehidupan Anda
          </h2>
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              Hewan peliharaan tidak hanya menjadi bagian dari keluarga, tetapi
              juga menjadi teman sejati yang menghadirkan keceriaan dan kenangan
              tak terlupakan.
            </p>
            <p>
              Setiap hewan yang diadopsi mendapatkan kesempatan kedua untuk
              menciptakan kenangan indah, bersama keluarga yang penuh kasih
              sayang. Adopsi adalah tindakan nyata yang membantu mengurangi
              jumlah hewan terlantar di komunitas kita. Bergabunglah dengan kami
              hari ini dalam misi menyelamatkan dan memberikan cinta kepada
              mereka yang membutuhkan, melalui adopsi hewan peliharaan!
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8 pt-32" id="adopsi">
        <div className="flex justify-between items-center mb-10">
          <div data-aos="fade-right">
            <div className="text-black text-base font-normal mb-1">
              Ingin mengadopsi hewan peliharaan yang lucu?
            </div>
            <div className="text-[#ED9455] text-2xl font-extrabold capitalize mb-2">
              Hewan yang Siap diadopsi
            </div>
          </div>
          <a href="/Login-PetPalsCare">
            <button
              className="bg-[#ED9455] py-2 px-4 hover:bg-[#f89b59] transition duration-300 rounded-md flex justify-center items-center"
              data-aos="fade-left"
            >
              <a href="/Adopsi-hewan" className="text-white">
                Tampilkan Semua
              </a>
            </button>
          </a>
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

export default HomepageBefore;
