import { Soup, CodeXml } from "lucide-react";
import React from "react";

function NavBar() {
  return (
    <header className="sticky top-0 border bg-green-100 border-green-300 backdrop-blur-md shadow-md z-50">
      <div className="flex max-w-7xl mx-auto justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <Soup size={32} />
          <h1 className="font-bold text-xl text-green-700">MIEATS</h1>
        </div>
        <div className="flex-1 flex justify-center">
          <ul className="hidden-md flex gap-8">
            <li>
              <a href="/" className="hover:text-green-500">
                Home
              </a>
            </li>
            <li>
              <a href="/produk" className="hover:text-green-500">
                Produk
              </a>
            </li>
            <li>
              <a href="/costumer-service" className="hover:text-green-500">
                Costumer Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
