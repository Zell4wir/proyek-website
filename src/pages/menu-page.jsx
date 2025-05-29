import { useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const gameItems = [
    {
      id: 1,
      name: "Bakso Mercon Hot Jeletot",
      price: "Rp 25.000",
      sold: "7,5k+ Terjual",
      image:
        "snapinstaapp_1080_317750253_328-202301140517141.jpg",
      category: "makanan berat",
      isLimited: true,
    },
    {
      id: 2,
      name: "Seblak Special",
      price: "Rp 15.000",
      sold: "1k+ Terjual",
      image:
        "thai-food-noodles-spicy-boil-with-pork-boil-eggg.jpg",
      category: "makanan berat",
      isLimited: true,
    },
    {
      id: 3,  
      name: "Mie Ayam",
      price: "Rp 10.000",
      sold: "5k+ Terjual",
      image:
        "095962400_1604981057-shutterstock_1827452876.jpg",
      category: "makanan berat",
      isLimited: true,
    },
    {
      id: 4,
      name: "Jus Jeruk Segar",
      price: "Rp 5.000",
      sold: "500+ Terjual",
      image:
        "juice-7556620_12801.jpg",
      category: "minuman",
      isLimited: true,
    },
    {
      id: 5,
      name: "Nasi Goreng",
      price: "Rp 20.000",
      sold: "3k+ Terjual",
      image:
        "american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-foodd.jpg",
      category: "makanan berat",
      isLimited: true,
    },
    {
      id: 6,
      name: "Ayam Geprek",
      price: "Rp 10.000",
      sold: "4k+ Terjual",
      image:
        "31f2ddfc6d17441c81c5633b6cd017000.jpg",
      category: "makanan berat",
      isLimited: true,
    },
    {
      id: 7,
      name: "Risoles",
      price: "Rp 1.000",
      sold: "100+ Terjual",
      image:
        "downloadd (3).jpg",
      category: "makanan penutup",
      isLimited: true,
    },
    {
      id: 8,
      name: "Es Teh Candoe",
      price: "Rp 3.000",
      sold: "2k+ Terjual",
      image:
        "blake-wisz-X6aY_j6JD_Y-unsplashh.jpg",
      category: "minuman",
      isLimited: true,
    },
    {
      id: 9,
      name: "Kue SuS",
      price: "Rp 2.000",
      sold: "300+ Terjual",
      image:
        "public/Yummyy.jpg",
      category: "makanan penutup",
      isLimited: true,
    },
  ];
  const filteredItems =
    activeTab === "all"
      ? gameItems
      : gameItems.filter((item) => item.category === activeTab);
  return (
    <>
      <NavBar/>
      <div className="min-h-screen text-white">
        <main className="container mx-auto py-8 px-4">
          <div className="mb-8">
            <div className="flex space-x-4 border-b border-gray-700 pb-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 cursor-pointer whitespace-nowrap !rounded-button ${
                  activeTab === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-white hover:bg-gray-600"
                }`}
              >
                Semua Menu
              </button>
              <button 
                onClick={() => setActiveTab("makanan berat")}
                className={`px-4 py-2 cursor-pointer whitespace-nowrap !rounded-button ${
                  activeTab === "makanan berat"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-white hover:bg-gray-600"
                }`}
              >
                Makanan Berat
              </button>
              <button
                onClick={() => setActiveTab("minuman")}
                className={`px-4 py-2 cursor-pointer whitespace-nowrap !rounded-button ${
                  activeTab === "minuman"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-white hover:bg-gray-600"
                }`}
              >
                Minuman
              </button>
              <button
                onClick={() => setActiveTab("makanan penutup")}
                className={`px-4 py-2 cursor-pointer whitespace-nowrap rounded-button ${
                  activeTab === "makanan penutup"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-white hover:bg-gray-600"
                }`}
              >
                Makanan Penutup
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-0 left-0 bg-red-600 text-xs font-bold px-2 py-1 m-2 rounded">
                    MIEATS
                  </div>
                  {item.isLimited && (
                    <div className="absolute bottom-0 left-0 bg-yellow-600 text-xs font-bold px-2 py-1 m-2 rounded">
                      Bintang 5
                    </div>
                  )}
                  {item.isLimited && (
                    <div className="absolute bottom-0 right-0 bg-gradient-to-r from-yellow-400 to-yellow-600 text-xs font-bold px-2 py-1 m-2 rounded">
                      BEST OFFER
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 h-14 line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300">{item.price}</span>
                    <span className="text-gray-400 text-sm">{item.sold}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 py-2 rounded text-center font-medium cursor-pointer whitespace-nowrap !rounded-button">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
export default MenuPage;
