import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useCart, CartProvider } from "./context/CartContext";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import JournalPage from "./pages/JournalPage";
import NotFoundPage from "./pages/NotFoundPage";



function Storefront( ) {
  const { itemCount } = useCart();
  return (
    <div className="min-h-screen bg-white text-[#292820]">
      <Header cartCount={itemCount} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
           <Route path="/contact" element={<ContactPage />} />
           <Route path="/about" element={<AboutPage />} />
           <Route path="/journal" element={<JournalPage />} />
          <Route path="*" element={<NotFoundPage />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return <BrowserRouter><CartProvider><Storefront /></CartProvider></BrowserRouter>;
}
