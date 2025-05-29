// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import { useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
const App = () => {
  const [activeTab, setActiveTab] = useState("all");
  const gameItems = [
    {
      id: 1,
      name: "Nessie - Sparkling Shiny | Limited fish",
      price: "Rp 2500",
      sold: "40+ Terjual",
      image:
        "https://readdy.ai/api/search-image?query=A%20glowing%20blue%20neon%20fish%20with%20sparkling%20scales%20against%20a%20dark%20blue%20background%2C%20digital%20game%20asset%2C%20high%20quality%20render%2C%20holographic%20effect%2C%20limited%20edition%20collectible%2C%20vibrant%20colors%2C%20fantasy%20creature&width=300&height=170&seq=1&orientation=landscape",
      category: "fish",
      isLimited: true,
    },
    {
      id: 2,  
      name: "Phantom Megalodon - Sparkling Shiny | Limited fish",
      price: "Rp 2500",
      sold: "84+ Terjual",
      image:
        "https://readdy.ai/api/search-image?query=A%20glowing%20red%20neon%20shark-like%20fish%20with%20sparkling%20scales%20against%20a%20dark%20blue%20background%2C%20digital%20game%20asset%2C%20high%20quality%20render%2C%20holographic%20effect%2C%20limited%20edition%20collectible%2C%20vibrant%20colors%2C%20fantasy%20creature&width=300&height=170&seq=2&orientation=landscape",
      category: "fish",
      isLimited: true,
    },
    {
      id: 3,
      name: "100K Money",
      price: "Rp 1000",
      sold: "7+ Terjual",
      image:
        "https://readdy.ai/api/search-image?query=Golden%20coins%20and%20cash%20with%20100000%20text%20overlay%2C%20game%20currency%2C%20digital%20asset%2C%20shiny%20gold%20effect%20against%20a%20gradient%20blue%20background%2C%20premium%20game%20resource%2C%20high%20quality%20render&width=300&height=170&seq=3&orientation=landscape",
      category: "money",
      isLimited: false,
    },
    {
      id: 4,
      name: "Electric Eel - Sparkling Shiny | Limited fish",
      price: "Rp 3500",
      sold: "25+ Terjual",
      image:
        "https://readdy.ai/api/search-image?query=A%20glowing%20electric%20blue%20eel%20with%20lightning%20effects%20and%20sparkling%20scales%20against%20a%20dark%20blue%20background%2C%20digital%20game%20asset%2C%20high%20quality%20render%2C%20holographic%20effect%2C%20limited%20edition%20collectible%2C%20vibrant%20colors%2C%20fantasy%20creature&width=300&height=170&seq=4&orientation=landscape",
      category: "fish",
      isLimited: true,
    },
    {
      id: 5,
      name: "Ruby Piranha - Sparkling Shiny | Limited fish",
      price: "Rp 3000",
      sold: "52+ Terjual",
      image:
        "https://readdy.ai/api/search-image?query=A%20glowing%20red%20piranha%20fish%20with%20ruby%20accents%20and%20sparkling%20scales%20against%20a%20dark%20blue%20background%2C%20digital%20game%20asset%2C%20high%20quality%20render%2C%20holographic%20effect%2C%20limited%20edition%20collectible%2C%20vibrant%20colors%2C%20fantasy%20creature&width=300&height=170&seq=5&orientation=landscape",
      category: "fish",
      isLimited: true,
    },
    {
      id: 6,
      name: "ROD OF THE EXALTED ONE | BUNDLE 3 RELIC",
      price: "Rp 5000",
      sold: "12+ Terjual",
      image:
        "https://readdy.ai/api/search-image?query=A%20glowing%20golden%20fishing%20rod%20with%20magical%20runes%20and%20three%20attached%20relics%20against%20a%20blue%20gradient%20background%2C%20digital%20game%20asset%2C%20high%20quality%20render%2C%20legendary%20item%2C%20bundle%20pack%2C%20fantasy%20equipment&width=300&height=170&seq=6&orientation=landscape",
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
                    FISH STORE
                  </div>
                  {item.isLimited && (
                    <div className="absolute bottom-0 left-0 bg-yellow-600 text-xs font-bold px-2 py-1 m-2 rounded">
                      LIMITED FISH
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
                  <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 py-2 rounded text-center font-medium cursor-pointer whitespace-nowrap !rounded-button">
                    Kuning Item
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
