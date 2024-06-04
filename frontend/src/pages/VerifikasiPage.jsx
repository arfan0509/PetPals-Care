
import logo from "../assets/images/logo.png";

const VerifikasiPage = () => {
  return (
    <>
      <div className="container mx-auto p-4 ">
        <div>
          {/* logo */}
          <div className=" w-auto max-w-xs h-auto ">
            <img src={logo} alt="logo" className="w-full max-w-48 pl-10" />
          </div>
          {/* text */}
          <div className="text-center pt-20">
            <h1 className="text-4xl font-bold">Data Anda Sedang Kami Proses</h1>
          </div>
          {/* box */}
          <div className="w-full h-1/2 flex justify-center items-center pt-10">
            <div className=" h-60 w-auto max-w-4xl bg-white shadow-2xl p-16">
              <h1 className="  text-center text-2xl">
                Tim kami akan menghubungi Anda untuk proses lebih lanjut.
                Silakan hubungi Kontak Whatsapp PetPalsCare khusus untuk mitra tenaga kesehatan  jika Anda memiliki pertanyaan.
              </h1>
            </div>
            
          </div>
          {/* end box */}

          {/* button */}
          <div className="w-full h-auto flex justify-center items-center py-4 ">
          <div className=" h-60 w-full max-w-4xl">
          <button className="bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-4 px-8 rounded-full float-right" >
            <a href="/Login-dokter">Kembali Ke Beranda</a>
            </button>
          </div>
          </div>
          {/* end Button */}

        </div>
      </div>
    </>
  )
}

export default VerifikasiPage
