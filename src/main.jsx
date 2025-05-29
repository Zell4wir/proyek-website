import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/homepage.jsx";
import ContactPage from "./pages/contact.jsx";
import CostumerService from "./pages/costumer-service.jsx";
import ProdukPage from "./pages/produk-page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/produk" element={<ProdukPage />} />
        <Route path="/costumer-service" element={<CostumerService />} />
        <Route path="/*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
