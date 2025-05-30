import { Star, Users, SquareMenu } from "lucide-react";
import React from "react";

function StatSection() {
  return (
    <section className=" bg-green-50 py-2">
      <div className="relative w-full flex justify-center mb-6"></div>
      <div className="bg-[url(/ellis.jpg)] bg-fixed">
        <div className="grid grid-cols-3 items-center text-center mx-auto bg-fixed bg-black/70 py-8">
          <div className="font-bold text-white flex flex-col items-center">
            <a href="/banyak-peminat" className="hover:text-red-700">
              <Users size={48} className="text-red-600 mb-2" />
              <p className="text-lg">Banyak Peminat</p>
            </a>
          </div>

          <div className="font-bold text-white flex flex-col items-center">
            <a href="/menu-bervariasi" className="hover:text-green-700">
              <SquareMenu size={48} className="text-green-600 mb-2" />
              <p className="text-lg">Menu Bervariasi</p>
            </a>
          </div>

          <div className="font-bold text-white flex flex-col items-center">
            <a href="/review-dan-ulasan" className="hover:text-yellow-600">
              <Star size={48} className="text-yellow-500 mb-2" />
              <p className="text-lg">Review dan Ulasan</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatSection;
