import React from 'react'

function MenuTerlaris() {
  return (
    <div className=" bg-green-50 max-h-screen p-20">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="snapinstaapp_1080_317750253_328-20230114051714.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Menu Terlaris!</h1>
          <p className="py-6 text-justify">
            Bakso Mercon Hot Jeletot adalah menu terlaris di MIEATS. Dengan
            cita rasa pedas yang menggigit, bakso ini terbuat dari daging sapi
            pilihan yang diolah dengan bumbu khas, disajikan dengan mie dan
            kuah yang menggugah selera. Setiap suapan memberikan
            sensasi pedas yang memuaskan, cocok untuk para pecinta makanan pedas.
            Bakso Mercon Hot Jeletot menjadi favorit pelanggan karena
            kualitas dan cita rasanya yang konsisten. Jangan lewatkan untuk
            mencobanya!
          </p>
          <button className="btn btn-primary">
            <a href="/menu">Yuk Cobain!</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuTerlaris;