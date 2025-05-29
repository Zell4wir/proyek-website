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
  
  // Tambahkan ref untuk Swiper
  const swiperRef = React.useRef(null);

  // Fungsi untuk pindah ke slide tertentu
  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <div className="max-lg:screen bg-gray-100">
      <style>
        {`
          /* Swiper navigation buttons */
          .swiper-button-next,
          .swiper-button-prev {
            color: #6ee7b7 !important; /* pastel green */
            background: rgba(110, 231, 183, 0.15);
            border-radius: 9999px;
            width: 44px;
            height: 44px;
            transition: background 0.2s;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: rgba(110, 231, 183, 0.3);
          }
          /* Swiper pagination bullets */
          .swiper-pagination-bullet {
            background: #bbf7d0 !important; /* lighter pastel green */
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #34d399 !important; /* darker pastel green */
          }
          /* Responsive fix for mobile viewport height */
          @media (max-width: 768px) {
            .hero-mobile-full {
              min-height: 100dvh;
              height: 100dvh;
              max-height: none;
            }
          }
        `}
      </style>
      <div className="relative w-full h-screen max-h-[1000px] overflow-hidden hero-mobile-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <img
          src="annie-spratt-R3LcfTvcGWY-unsplash.jpg"
          alt="Hero Image"
          className="absolute inset-0 h-full w-full object-cover object-center z-0"
        />
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="text-6xl font-bold mb-6 tracking-wide">MIEATS</h1>
              <h2 className="text-3xl font-semibold mb-4">
                Dapatkan Makanan Favoritmu dengan Harga{" "}
                <span className="text-green-400">Termurah!</span>
              </h2>
              <p className="text-lg mb-8 opacity-90 text-justify">
                Kami dengan bangga menyajikan berbagai pilihan makanan lezat dan
                berkualitas untuk memuaskan selera Anda. Kami selalu menjaga
                rasa, pelayanan, dan kebersihan terbaik agar setiap pengalaman
                makan Anda di Kantin Hen menjadi istimewa. Nikmati berbagai menu
                favorit yang cocok untuk segala suasana, mulai dari camilan
                hingga makanan berat, semuanya tersedia dengan harga bersahabat.
              </p>
            </div>

            <div className="w-full md:w-1/2 pl-0 md:pl-10">
              <div className="relative">
                <Swiper
                  ref={swiperRef}
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
                        src="photo-1687426163461-1eeb49c83584.avif"
                        alt="Seluruh makanan"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative h-72 md:h-80 overflow-hidden rounded-lg">
                      <img
                        src="c263ada2-79fa-4d20-946c-6c76a84678742.jpg"
                        alt="Roti"
                        className="w-screen h-full object-cover object-center"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative h-72 md:h-80 overflow-hidden rounded-lg">
                      <img
                        src="emy-XoByiBymX20-unsplash.jpg"
                        alt="Makanan pedas"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="flex mt-4 gap-2 justify-center">
                  <div
                    className={`w-24 h-16 rounded-md overflow-hidden transition-all duration-300 cursor-pointer ${
                      activeIndex === 0
                        ? "ring-2 ring-yellow-400 scale-105"
                        : "opacity-70"
                    }`}
                    onClick={() => goToSlide(0)}
                  >
                    <img
                      src="photo-1687426163461-1eeb49c83584.avif"
                      alt="Thumbnail 1"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div
                    className={`w-24 h-16 rounded-md overflow-hidden transition-all duration-300 cursor-pointer ${
                      activeIndex === 1
                        ? "ring-2 ring-yellow-400 scale-105"
                        : "opacity-70"
                    }`}
                    onClick={() => goToSlide(1)}
                  >
                    <img
                      src="c263ada2-79fa-4d20-946c-6c76a84678742.jpg"
                      alt="Thumbnail 2"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div
                    className={`w-24 h-16 rounded-md overflow-hidden transition-all duration-300 cursor-pointer ${
                      activeIndex === 2
                        ? "ring-2 ring-yellow-400 scale-105"
                        : "opacity-70"
                    }`}
                    onClick={() => goToSlide(2)}
                  >
                    <img
                      src="emy-XoByiBymX20-unsplash.jpg"
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
    </div>
  );
}

export default HeroSection;
