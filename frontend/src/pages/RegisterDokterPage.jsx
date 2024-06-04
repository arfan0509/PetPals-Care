import React, { useRef } from 'react';
import Logo from '../assets/images/logo.png';

const RegisterDokterPage = () => {
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Lakukan sesuatu dengan file yang diunggah
    console.log('File yang diunggah:', file);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        {/* kiri */}
        <div className="w-1/2 h-screen bg-[#F7DBA7] flex justify-center items-center custom-border-radius rotate-180">
          <div>
            <div className="p-4 flex justify-center items-center rotate-180">
              <a href="/Login-dokter">
                <button className="w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold">
                  Masuk
                </button>
              </a>
            </div>
            <div className="h-auto w-full max-w-72 rotate-180">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
          </div>
        </div>
        {/* end kiri */}

        {/* kanan */}
        <div className="w-1/2 h-screen flex justify-center items-center">

          <div className="w-full p-20 text-center">
            <div className="text-lg w-auto h-auto font-semibold">
              <h1 className="">Daftar Akun Dokter Hewan</h1>
            </div>
            <div className="py-2">
              <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nama" />
            </div>
            <div className="py-2">
              <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="No Handphone" />
            </div>
            <div className="py-2">
              <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Alamat Praktek" />
            </div>
            <div className="py-2">
              <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" />
            </div>
            <div className="py-2">
              <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Kata Sandi" />
            </div>

            <div className="text-left py-2">
              <p className="font-medium">Upload STR Aktif</p>
              <div className="mt-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button
                  className="w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-6 rounded-full font-semibold size-1 flex items-center justify-center "
                  onClick={handleFileUpload}
                >
                  <i className="fa fa-upload mr-2"></i>
                  <span>
                  Upload File
                  </span>
                </button>
              </div>
            </div>

            <div className="text-left py-2">
              <p className="font-medium">Upload SIP Aktif</p>
              <div className="mt-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button
                  className="w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-6 rounded-full font-semibold size-1 flex items-center justify-center "
                  onClick={handleFileUpload}
                >
                  <i className="fa fa-upload mr-2"></i>
                  <span>
                  Upload File
                  </span>
                </button>
              </div>
            </div>

            <div className="p-4">
              <button className="w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold size-1">
               <a href="/Verifikasi">Daftar Sekarang</a> 
              </button>
            </div>
          </div>

        </div>
        {/* end kanan */}
      </div>
    </>
  )
}

export default RegisterDokterPage;
