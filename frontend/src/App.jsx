import { Routes, Route } from "react-router-dom";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Notfound from "./Components/Notfound";
import Footer from "./Components/Footer";
import HomepageBefore from "./pages/HomepageBefore";
import HomepageAfter from "./pages/HomepageAfter";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilUserPage from "./pages/ProfilUserPage";
import ProfilUserChat from "./pages/ProfilUserChat";
import RegisterDokterPage from "./pages/RegisterDokterPage";
import VerifikasiPage from "./pages/VerifikasiPage";
import LoginDokterPage from "./pages/LoginDokterPage";
import ProfilDokter from "./pages/ProfilDokter";
import ChatDokterPage from "./pages/ChatDokterPage";
import PostingHewanPage from "./pages/PostingHewanPage";
import ChatPemilikPage from "./pages/ChatPemilikPage";
import PetDetailPage from "./pages/PetDetailPage";
import AdopsiPage from "./pages/AdopsiPage";
import KonsultasiPage from "./pages/KonsultasiPage";
import AboutUsPageBefore from "./pages/AboutUsPageBefore";
import AboutUsPageAfter from "./pages/AboutUsPageAfter";
import DetailDokterCowo from "./pages/DetailDokterCowo";
import DetailDokterCewe from "./pages/DetailDokterCewe";
import DokterHewanPage from "./pages/DokterHewanPage";
import PopUpKonfirmasi from "./pages/PopUpKonfirmasi";
import PopUpPosting from "./pages/PopUpPosting";
import Verifikasi from "./pages/VerifikasiPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomepageBefore} />
        <Route path="/Beranda" Component={HomepageAfter} />
        <Route path="/Login-PetPalsCare" Component={LoginPage} />
        <Route path="/Daftar-PetPalsCare" Component={RegisterPage} />
        <Route path="/Profil" Component={ProfilUserPage} />
        <Route path="/Profil-chat" Component={ProfilUserChat} />
        <Route path="/Daftar-dokter" Component={RegisterDokterPage} />
        <Route path="/Verifikasi" Component={VerifikasiPage} />
        <Route path="/Login-dokter" Component={LoginDokterPage} />
        <Route path="/Profil-dokter" Component={ProfilDokter} />
        <Route path="/Chat-dokter" Component={ChatDokterPage} />
        <Route path="/Posting-hewan" Component={PostingHewanPage} />
        <Route path="/Chat-pemilik" Component={ChatPemilikPage} />
        <Route path="/Detail-hewan" Component={PetDetailPage} />
        <Route path="/Adopsi-hewan" Component={AdopsiPage} />
        <Route path="/Konsultasi-dokter" Component={KonsultasiPage} />
        <Route path="/Tentang-kami" Component={AboutUsPageBefore} />
        <Route path="/Tentang-PetPalsCare" Component={AboutUsPageAfter} />
        <Route path="/Detail-dokter-pria" Component={DetailDokterCowo} />
        <Route path="/Detail-dokter-wanita" Component={DetailDokterCewe} />
        <Route path="/Daftar-dokter-hewan" Component={DokterHewanPage} />
        <Route path="/Pop-Up-Konfirmasi" Component={PopUpKonfirmasi} />
        <Route path="/Upload-hewan" Component={PopUpPosting} />
        <Route path="/Verifikasi" Component={Verifikasi} />
      </Routes>
    </div>
  );
}

export default App;
