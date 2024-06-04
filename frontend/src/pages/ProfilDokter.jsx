import Navbar from "../Components/Navbar-after";
import Footer from '../Components/Footer-after';


const ProfilDokter = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white-light-2 w-full h-auto flex justify-start container">
        <div className=" w-1/3 h-screen p-8  ">
          <ul>
            <li className="p-2 hover:bg-gray-400 border-collapse rounded-lg"><a href="/Profil-dokter">Profil Saya</a></li>
            <li className="p-2  hover:bg-gray-400 border-collapse rounded-lg"><a href="#">Daftar Alamat</a></li>
            <li className="p-2  hover:bg-gray-400 border-collapse rounded-lg"><a href="#">Favorit</a></li>
            <li className="p-2  hover:bg-gray-400 border-collapse rounded-lg"><a href="/Chat-dokter">Pasien</a></li>
            <li className="py-2 px-2  hover:bg-gray-400 border-collapse rounded-lg"> <a href="http://localhost:5173/"> Keluar</a></li>
          </ul>
        </div>

        <div className=" w-full h-auto p-12">
          <div className="bg-white p-10 rounded-xl w-full h-auto shadow-2xl">
            <h1 className="py-4 font-bold text-1xl" > Profil Saya</h1>
            <div className="flex justify-start items-center gap-4 pt-6">
              <div className=" w-[100px] h-[100px] bg-orange-400 rounded-full flex justify-center items-center" >
                <p>MA</p>
              </div>

              <div>
                <h1>Drh. Muhammad Ali</h1>
                <p>Dokter Hewan</p>
              </div>
            </div>
            <div className=" h-1/2 flex justify-start gap-8 items-center  w-full h-auto gap-28">
            <div className="py-4">
                <p>Umur</p>
                <p>27</p>
              </div>
              <div className="py-4">
                <p>Jenis Kelamin</p>
                <p>Laki-laki</p>
              </div>
            </div>
            <div className="py-4">
              <p>Nomor Handphone</p>
              <p>+623244548799</p>
            </div>
            <div className="py-4">
              <p>Email</p>
              <p>muhammadAli97@gmail.com</p>
            </div>
            <div className="py-4">
              <p>Lulusan</p>
              <p>Pendidikan Profesi Dokter, Fakultas Hewan,Universitas Syiah Kuala</p>
            </div>
            <div className="py-4">
              <p>Spesialis</p>
              <p>Hewan Domestik dan Eksotik</p>
            </div>
            <div className="">
              <p>Biaya</p>
              <p>Rp. 25.000,- </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProfilDokter
