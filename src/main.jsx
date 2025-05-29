import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/homepage.jsx";
import ContactPage from "./pages/contact.jsx";
import CostumerService from "./pages/costumer-service.jsx";
import ProdukPage from "./pages/menu-page.jsx";
import MenuPage from "./pages/menu-page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/costumer-service" element={<CostumerService />} />
        <Route path="/*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
