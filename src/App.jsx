import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import ShopPage from "./Pages/ShopPage";
import FeaturesPage from "./Pages/FeaturesPage";
import TestimonialPage from "./Pages/TestimonialPage";
import ContactUsPage from "./Pages/ContactUsPage";
import AdminHome from "./Pages/Admin/AdminHome";
import AdminMaincategory from "./Pages/Admin/Maincategory/AdminMaincategory";
import AdminCreateMaincategory from "./Pages/Admin/Maincategory/AdminCreateMaincategory";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/maincategory" element={<AdminMaincategory />} />
        <Route path="/admin/maincategory/create" element={<AdminCreateMaincategory />} />
      </Routes>   
      <Footer />
    </BrowserRouter>
  );
};

export default App;
