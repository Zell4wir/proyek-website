import { Soup } from "lucide-react";
import React from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 border bg-green-100 border-green-300 backdrop-blur-md shadow-md z-50">
      <div className="flex max-w-7xl mx-auto justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <Soup size={32} />
          <h1 className="font-bold text-xl text-green-700">MIEATS</h1>
        </div>
        <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex gap-8">
            <li>
              <a href="/" className="hover:text-green-500">
                Home
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-green-500">
                Menu
              </a>
            </li>
            <li>
              <a href="/costumer-service" className="hover:text-green-500">
                Costumer Service
              </a>
            </li>
          </ul>
        </div>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-green-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-green-100 border-t border-green-300 shadow">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <a
                href="/"
                className="hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/produk"
                className="hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Produk
              </a>
            </li>
            <li>
              <a
                href="/costumer-service"
                className="hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Costumer Service
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavBar;
