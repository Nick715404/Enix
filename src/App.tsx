import './styles/fonts.scss';
import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Catalog from "./pages/Catalog";
import Product from "./components/product/Product";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />}>
            {/* <Route path="/catalog/product:id" element={<Product />} /> */}
          </Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
};