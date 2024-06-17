import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import ProductDetails from "./components/ProductDetails";
import ServicePage from "./components/ServicePage";
import Blogpage from "./components/Blogpage";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/blogpage/:id" element={<Blogpage />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/servicePage/:id" element={<ServicePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
