import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/beranda/Beranda";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./pages/product/product";
import Negara from "./pages/negara/Negara";
import DetailNegara from "./pages/DetailNegara";
import ProductDetail from "./pages/productdetail/ProductDetail";
import ThemeContext from "./context/ThemeContext";

function App() {
  const themes = useState("light");
  return (
    <Router>
      <ThemeContext.Provider value={themes}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/produk" element={<Product />} />
          <Route path="/produk/:id" element={<ProductDetail />} />
          <Route path="/negara" element={<Negara />} />
          <Route path="/detailnegara/:id" element={<DetailNegara />} />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
