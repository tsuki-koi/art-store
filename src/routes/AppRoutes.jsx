import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";
import FAQ from "../pages/FAQ";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Wishlist from "../pages/Wishlist";
import Account from "../pages/Account";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ReturnPolicy from "../pages/ReturnPolicy";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/shop/:slug" element={<ProductDetails />}></Route>
      <Route path="/about-us" element={<About />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/contact-us" element={<Contact />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/cart/checkout" element={<Checkout />}></Route>
      <Route path="/wishlist" element={<Wishlist />}></Route>
      <Route path="/account" element={<Account />}></Route>
      <Route path="/dashboard" element={<Account />}></Route>
      <Route path="/faq" element={<FAQ />}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
      <Route path="/return-policy" element={<ReturnPolicy />}></Route>
      <Route path="/*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
