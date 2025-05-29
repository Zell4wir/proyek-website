import React from "react";
import NavBar from "../components/navbar";
import HeroSection from "../components/hero-section";
import StatSection from "../components/stat-section";
import AboutSection from "../components/about-section";
import Footer from "../components/footer";
import MenuTerlaris from "../components/menu-terlaris";
import TestiPelanggan from "../components/testi-pelanggan";


export default function HomePage() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <AboutSection/>
      <StatSection/>
      <MenuTerlaris/>
      <TestiPelanggan/>
      <Footer/>
    </div>
  );
}
