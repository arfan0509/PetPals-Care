import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomepageAfter from "./pages/HomepageAfter";
import ProfilUserPage from "./pages/ProfilUserPage";
import HomepageBefore from "./pages/HomepageBefore";
import RegisterPage from "./pages/RegisterPage";
import RegisterDokterPage from "./pages/RegisterDokterPage";
import VerifikasiPage from "./pages/VerifikasiPage";
import LoginDokterPage from "./pages/LoginDokterPage";
import AboutUsPageBefore from "./pages/AboutUsPageBefore";
import DokterHewanPage from "./pages/DokterHewanPage";
import AdopsiPage from "./pages/AdopsiPage";
import AboutUsPageAfter from "./pages/AboutUsPageAfter";
import PetDetailPage from "./pages/PetDetailPage";
import ProfilDokter from "./pages/ProfilDokter";
import PostingHewanPage from "./pages/PostingHewanPage";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("accessToken");
  return isAuthenticated ? children : <Navigate to="/Login-PetPalsCare" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageBefore />} />
        <Route path="*" element={<Navigate to="/Login-PetPalsCare" />} />

        <Route path="/Login-PetPalsCare" element={<LoginPage />} />
        <Route path="/Daftar-PetPalsCare" element={<RegisterPage />} />
        <Route path="/Daftar-dokter" element={<RegisterDokterPage />} />
        <Route path="/Verifikasi" element={<VerifikasiPage />} />
        <Route path="/Login-Dokter" element={<LoginDokterPage />} />
        <Route path="/Tentang-kami" element={<AboutUsPageBefore />} />
        <Route path="/Detail-hewan" element={<PetDetailPage />} />
        <Route path="/Profil-dokter" element={<ProfilDokter />} />
        <Route path="/Daftar-dokter-hewan" element={<DokterHewanPage />} />
        <Route path="/Posting-hewan" element={<PostingHewanPage />} />

        <Route
          path="/Beranda"
          element={
            <PrivateRoute>
              <HomepageAfter />
            </PrivateRoute>
          }
        />
        <Route
          path="/Profil"
          element={
            <PrivateRoute>
              <ProfilUserPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/Dokter-hewan"
          element={
            <PrivateRoute>
              <DokterHewanPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/Adopsi-hewan"
          element={
            <PrivateRoute>
              <AdopsiPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/TentangKami"
          element={
            <PrivateRoute>
              <AboutUsPageAfter />
            </PrivateRoute>
          }
        />
        <Route
          path="/Detail-hewan"
          element={
            <PrivateRoute>
              <PetDetailPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/Profil-dokter"
          element={
            <PrivateRoute>
              <ProfilDokter />
            </PrivateRoute>
          }
        />
        <Route
          path="/Posting-hewan"
          element={
            <PrivateRoute>
              <PostingHewanPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
