// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import { useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
const App = () => {
  const [activeTab, setActiveTab] = useState("all");
  const gameItems = [
    {
      id: 1,
      name: "Seblak Special",
      price: "Rp 15.000",
      sold: "1k+ Terjual",
      image:
        "public/thai-food-noodles-spicy-boil-with-pork-boil-egg.jpg",
      category: "fish",
      isLimited: true,
    },
    {
      id: 2,  
      name: "Mie Ayam",
      price: "Rp 10.000",
      sold: "5k+ Terjual",
      image:
        "public/095962400_1604981057-shutterstock_1827452876.jpg",
      category: "fish",
      isLimited: true,
    },
    {
      id: 3,
      name: "Jus Jeruk Segar",
      price: "Rp 5.000",
      sold: "500+ Terjual",
      image:
        "public/juice-7556620_1280.jpg",
      category: "money",
      isLimited: false,
    },
    {
      id: 4,
      name: "Nasi Goreng",
      price: "Rp 20.000",
      sold: "3k+ Terjual",
      image:
        "public/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food.jpg",
      category: "fish",
      isLimited: true,
    },
    {
      id: 5,
      name: "Ayam Geprek",
      price: "Rp 10.000",
      sold: "4k+ Terjual",
      image:
        "public/31f2ddfc6d17441c81c5633b6cd01700.jpg",
      category: "fish",
      isLimited: true,
    },
    {
      id: 6,
      name: "Risoles",
      price: "Rp 1.000",
      sold: "100+ Terjual",
      image:
        "public/download (3).jpg",
      category: "equipment",
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

        {/* Main Content */}
        <main className="container mx-auto py-8 px-4">
          {/* Category Tabs */}
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
                onClick={() => setActiveTab("fish")}
                className={`px-4 py-2 cursor-pointer whitespace-nowrap !rounded-button ${
                  activeTab === "fish"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-white hover:bg-gray-600"
                }`}
              >
                Makanan Utama
              </button>
              <button
                onClick={() => setActiveTab("money")}
                className={`px-4 py-2 cursor-pointer whitespace-nowrap !rounded-button ${
                  activeTab === "money"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-white hover:bg-gray-600"
                }`}
              >
                Minuman
              </button>
              <button
                onClick={() => setActiveTab("equipment")}
                className={`px-4 py-2 cursor-pointer whitespace-nowrap rounded-button ${
                  activeTab === "equipment"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-white hover:bg-gray-600"
                }`}
              >
                Makanan Penutup
              </button>
            </div>
          </div>
          {/* Products Grid */}
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
export default App;
