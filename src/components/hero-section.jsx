import { Calendar, Clock, MapPin } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-5xl font-bold">
            Super agent dari HololiveID gen 3 yang penuh semangat dan ceria
          </h1>
          <p className="text-gray-600 text-2xl">
            dengan kemampuan luar biasa dalam bermain game dan menyanyi.
          </p>
          <div className="flex gap-4 flex-col text-center md:flex-row">
            <a
              href="https://www.facebook.com/VestiaZeta"
              className="bg-red-500 px-4 py-2 text-white rounded-md"
            >
              Facebook Zeta
            </a>
            <a
              href="https://x.com/vestiazeta"
              className="border border-black bg-black text-white px-4 py-2 rounded-md"
            >
              Twitter Zeta
            </a>
          </div>
          <div className="flex gap-2 text-gray-600">
            <Calendar />
            <p>4 Mei 2025</p>
            <Clock />
            <p>12:00 WIB</p>
            <MapPin />
            <p>Kampus Polsri</p>
          </div>
        </div>
        <img
          className="w-150 object-cover rounded-md"
          src="public/Utool-20250328-205249256.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

export default HeroSection;
