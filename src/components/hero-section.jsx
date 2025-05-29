import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    setActiveIndex(realIndex);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative w-full h-screen max-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <img
          src="public/annie-spratt-R3LcfTvcGWY-unsplash.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center z-0"
        />
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="text-6xl font-bold mb-6 tracking-wide">KANTIN HEN</h1>
              <h2 className="text-3xl font-semibold mb-4">
                Dapatkan Makanan Favoritmu dengan Harga{" "}
                <span className="text-green-400">Termurah!</span>
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Kami dengan bangga menyajikan berbagai pilihan makanan
                lezat dan berkualitas untuk memuaskan selera Anda. Kami selalu menjaga kebersihan, rasa, dan pelayanan terbaik agar setiap pengalaman makan Anda di Kantin Hen menjadi istimewa. Nikmati berbagai menu favorit yang cocok untuk segala suasana, mulai dari camilan hingga makanan berat, semuanya tersedia dengan harga bersahabat.
              </p>
            </div>

            <div className="w-full md:w-1/2 pl-0 md:pl-10">
              <div className="relative">
                <Swiper
                  modules={[Pagination, Autoplay, Navigation]}
                  pagination={{ 
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  navigation
                  loop={true}
                  onSlideChange={handleSlideChange}
                  className="rounded-lg overflow-hidden shadow-2xl"
                  slideToClickedSlide={true}
                >
                  <SwiperSlide>
                    <div className="relative h-72 md:h-80 overflow-hidden rounded-lg">
                      <img
                        src="public/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg"
                        alt="Roblox Dragon Character"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative h-72 md:h-80 overflow-hidden rounded-lg">
                      <img
                        src="public/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg"
                        alt="Roblox Multiplayer Scene"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative h-72 md:h-80 overflow-hidden rounded-lg">
                      <img
                        src="public/emy-XoByiBymX20-unsplash.jpg"
                        alt="Roblox Adventure Scene"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="flex mt-4 gap-2 justify-center">
                  <div
                    className={`w-24 h-16 rounded-md overflow-hidden transition-all duration-300 ${
                      activeIndex === 0
                        ? "ring-2 ring-yellow-400 scale-105"
                        : "opacity-70"
                    }`}
                  >
                    <img
                      src="public/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg"
                      alt="Thumbnail 1"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div
                    className={`w-24 h-16 rounded-md overflow-hidden transition-all duration-300 ${
                      activeIndex === 1
                        ? "ring-2 ring-yellow-400 scale-105"
                        : "opacity-70"
                    }`}
                  >
                    <img
                      src="public/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg"
                      alt="Thumbnail 2"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div
                    className={`w-24 h-16 rounded-md overflow-hidden transition-all duration-300 ${
                      activeIndex === 2
                        ? "ring-2 ring-yellow-400 scale-105"
                        : "opacity-70"
                    }`}
                  >
                    <img
                      src="public/emy-XoByiBymX20-unsplash.jpg"
                      alt="Thumbnail 3"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Kategori Menu Favorit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="public/robin-stickel-tzl1UCXg5Es-unsplash.jpg"
                  alt="Hamburger & Makanan Berat"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Hamburger & Makanan Berat</h3>
              <p className="text-gray-600">
                Nikmati burger lezat dan makanan berat lainnya yang mengenyangkan
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="gaby-dyson-QX814A1w3j4-unsplash.jpg"
                  alt="Dessert"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Dessert</h3>
              <p className="text-gray-600">
                Nikmati berbagai hidangan penutup yang lezat dan menggugah selera
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="public/kaizen-nguy-n-jcLcWL8D7AQ-unsplash.jpg"
                  alt="Minuman"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Minuman</h3>
              <p className="text-gray-600">
                Nikmati berbagai minuman yang menyegarkan untuk menemani hidangan Anda
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
