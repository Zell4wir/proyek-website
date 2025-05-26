import { BookHeart, Cake, Rocket } from "lucide-react";
import React from "react";

const dataKonten = [
    {
        items: Rocket,
        judul: "Kepribadian",
        deskripsi: "Zeta memiliki kepribadian yang ceria dan energik.",
    },
    {
        items: BookHeart,
        judul: "Hobi",
        deskripsi: "Zeta suka bermain game dan menyanyi.",
    },
    {
        items: Cake,
        judul: "Acara Spesial",
        deskripsi: "Zeta mengadakan acara spesial untuk merayakan pencapaian tertentu.",
    },
];

function AboutSection() {
  return (
    <section className="py-32">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
        {/* Bagian Judul */}
        <div className="text-center space-y-2">
          <h1 className="font-bold text-4xl md:text-6xl">
            Mengenal lebih dekat Vestia Zeta
          </h1>
          <p className="text-gray-600 mt-4">
            Vestia Zeta adalah seorang VTuber yang berasal dari Indonesia. Ia
            merupakan anggota dari Hololive Indonesia generasi ketiga, yang
            dikenal dengan nama "Hololive ID Gen 3". Zeta memiliki kepribadian
            yang ceria dan energik, serta sering kali berinteraksi dengan
            penggemarnya melalui siaran langsung di platform YouTube. Ia juga
            dikenal karena kemampuannya dalam bermain game dan menyanyi, serta
            sering kali mengadakan acara spesial untuk merayakan pencapaian
            tertentu.
          </p>
        </div>
        {/* Bagian Kotak */}
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {dataKonten.map((data) => (
            <div className="flex flex-col p-4 items-center max-w-xs border border-gray-500 rounded-lg shadow-lg bg-white mt-8">
              <div className="bg-red-200 p-4 rounded-full">
                <data.items size={32} />
              </div>
              <h2 className="font-bold text-xl">{data.judul}</h2>
              <p className="text-gray-500 text-center">
                {data.deskripsi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
