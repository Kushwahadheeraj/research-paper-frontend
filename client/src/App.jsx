import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import FooterCom from "./components/Footer";
import BajraPost from "./pages/BajraPost";
import WheatPost from "./pages/WheatPost";
import ScrollToTop from "./components/ScrollToTop";
import MaizePost from "./pages/MaizePost";
import RicePost from "./pages/RicePost";
import PharmcologicalPost from "./pages/PharmacologicalPost"
import SorghumPost from "./pages/SorghumPost";
import RagiPost from "./pages/RagiPost";
import ADMEpassPost from "./pages/ADMEpassPost";
import Acknowledgements from "./pages/Acknowledgements";
import StatisticsPost from "./pages/StatisticsPost";
import AuthorPage from "./pages/AuthorPage";
import BarleyPost from "./pages/BarleyPage";
import HelpPost from "./pages/HelpPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cereals/bajra" element={<BajraPost />} />
        <Route path="/Cereals/maize" element={<MaizePost />} />
        <Route path="/Cereals/rice" element={<RicePost />} />
        <Route path="/Cereals/barley" element={<BarleyPost />} />
        <Route path="/Cereals/ragi" element={<RagiPost />} />
        <Route path="/Cereals/sorghum" element={<SorghumPost />} />
        <Route path="/Cereals/wheat" element={<WheatPost />} />
        <Route path="/CMdb/author" element={<AuthorPage />} />
        <Route path="/CMdb/pharmcological" element={<PharmcologicalPost />} />
        <Route path="/adme" element={<ADMEpassPost />} />
        <Route path="/acknowledgements" element={<Acknowledgements />} />
        <Route path="/statisties" element={<StatisticsPost/>}/>
        <Route path="/help" element={<HelpPost/>}/>
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}

