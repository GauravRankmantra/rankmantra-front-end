import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import AppDevelopment from "../src/services/AppDevelopment";
import WebDevelopment from "../src/services/WebDevelopment";
import Seo from "../src/services/Seo";
import Campaign from "../src/services/Campaign";
import ProductsTemp from "../src/portfolioProducts/ProductsTemp";
import app3 from "../src/img/portfolio/app-3.jpg";
import product3 from "../src/img/portfolio/product-3.jpg";
import Hireus from "../src/services/Hireus";
import Pccpackage from "../src/services/Pccpackage";
import Ormpackage from "../src/services/Ormpackage";
import Smmpackage from "../src/services/Smmpackage";
import Webhosting from "../src/services/Webhosting";
import ProductTemp2 from "../src/portfolioProducts/ProductTemp2";
import ProductTemp3 from "../src/portfolioProducts/ProductTemp3";
import ProductTemp4 from "../src/portfolioProducts/ProductTemp4";
import ProductTemp5 from "../src/portfolioProducts/ProductTemp5";
import ProductTemp6 from "../src/portfolioProducts/ProductTemp6";
import AboutUs from "../src/pages/AboutUs";
import Search from "../src/pages/Search";
import ContactUs from "../src/pages/ContactUs";
import SocialMedia from "../src/pages/SocialMedia";
import Seopackage from "../src/pages/Seopackage";
import Socialpackage from "../src/pages/Socialpackage";
import Payperclick from "../src/pages/Payperclick";
import Onlinereputaion from "../src/pages/Onlinereputaion";
import WebhostPackage from "../src/pages/WebhostPackage";
import WebDevelop from "../src/pages/WebDevelop";
import EcommerceDevelop from "../src/pages/EcommerceDevelop";
import Logo from "../src/pages/Logo";
import WebsiteDesigning from "../src/pages/WebsiteDesigning";
import WebsiteRedesign from "../src/pages/WebsiteRedesign";
import Shopify from "../src/pages/Shopify";
import Wordpress from "../src/pages/Wordpress";
import WixDevelopment from "../src/pages/WixDevelopment";
// import Gallery from "../src/pages/Gallery";



const Routings = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/seo-optimization" element={<Seo />} />
        <Route path="/campagin-creation" element={<Campaign />} />
        <Route path="/ppc-packages" element={<Pccpackage />} />
        <Route path="/smm-packages" element={<Smmpackage />} />
        <Route path="/orm-packages" element={<Ormpackage />} />
        <Route path="/web-hosting" element={<Webhosting />} />
        <Route path="/hireus" element={<Hireus />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/search" element={<Search />} />
        <Route path="/social" element={<SocialMedia />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/seo" element={<Seopackage />} />
        <Route path="/smm" element={<Socialpackage />} />
        <Route path="/pay-per-click" element={<Payperclick />} />
        <Route path="/online-reputation" element={<Onlinereputaion />} />
        <Route path="/web-hosting-package" element={<WebhostPackage />} />
        <Route path="/web-develop" element={<WebDevelop />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/ecommerce-develop" element={<EcommerceDevelop />} />
        <Route path="/logo-design" element={<Logo />} />
        <Route path="/website-designing" element={<WebsiteDesigning />} />
        <Route path="/website-redesign" element={<WebsiteRedesign />} />
        <Route path="/shopify-development" element={<Shopify />} />
        <Route path="/wordpress-development" element={<Wordpress />} />
        <Route path="/wix-development" element={<WixDevelopment />} />

        <Route path="/portfolio/">
          <Route path="web1" element={<ProductsTemp />} />
          <Route path="web2" element={<ProductTemp2 />} />
          <Route path="web3" element={<ProductTemp3 />} />
          <Route path="web4" element={<ProductTemp4 />} />
          <Route path="web5" element={<ProductTemp5 />} />
          <Route path="web6" element={<ProductTemp6 />} />
          <Route path="product3" element={<ProductsTemp img={product3} />} />
          <Route path="app3" element={<ProductsTemp img={app3} />} />
        </Route>

        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default Routings;
