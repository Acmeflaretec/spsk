import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Appointment from './components/Appointment';
import Support from './components/Support';
import Products from './components/Products';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (window.pageYOffset > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-[#7B1FA2] via-[#9C27B0] to-[#7B1FA2]">         
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/support" element={<Support />} />
        </Routes>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 p-3 rounded-full bg-gradient-to-b from-[#0A0819] to-[#1A1830] text-white shadow-lg transition-opacity duration-300 ${
            showScroll ? 'opacity-100' : 'opacity-0'
          } hover:shadow-xl hover:scale-105`}
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        <footer className="bg-gradient-to-b from-[#0A0819] to-[#1A1830] text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">SPSK EduTech</h3>
                <p className="text-indigo-200">Empowering children, parents, and teachers</p>
              </div>
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/betterparentbetterkids" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/spsk_edutech" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200">
                  <Instagram />
                </a>
                <a href="mailto:spskedutech@gmail.com" className="hover:text-indigo-200">
                  <Mail />
                </a>
                <a href="tel:8891337811" className="hover:text-indigo-200">
                  <Phone />
                </a>
              </div>
            </div>
            <div className="mt-8 text-center text-indigo-200">
              <p>&copy; {new Date().getFullYear()} SPSK EduTech. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;