import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Chairman from "./pages/Chairman";
import Policies from "./pages/Policies";
import HomePage from "./pages/HomePage";



export default function App() {
  return (
    <div id="app-root">
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chairman" element={<Chairman />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
