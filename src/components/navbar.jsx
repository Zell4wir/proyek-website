import { Cat, CodeXml } from 'lucide-react';
import React from 'react'

function NavBar() {
  return (
    <header className="sticky top-0 border bg-white border-gray-500 backdrop-blur-md shadow-md z-50">
      <div className="flex max-w-7xl mx-auto justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <Cat size={32} />
          <h1 className="font-bold text-xl text-gray-600">VESTIA ZETA</h1>
        </div>
        <ul className="hidden-md flex gap-8">
          <li>
            <a href="/" className="hover:text-red-400">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-red-400">
              Tentang Zeta
            </a>
          </li>
          <li>
            <a href="/og-song" className="hover:text-red-400">
              OG Song
            </a>
          </li>
        </ul>
        <a
          href="https://www.youtube.com/@VestiaZeta"
          className="bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-400"
        >
          YouTube mY isteri
        </a>
      </div>
    </header>
  );
}

export default NavBar