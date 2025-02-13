import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    setShowScroll(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#0A0819] to-[#1A1830]">
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

        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 p-3 rounded-full bg-gradient-to-b from-[#0A0819] to-[#1A1830] text-[#FFD600] shadow-xl transition-all duration-300 ${
            showScroll ? 'opacity-100' : 'opacity-0'
          } hover:scale-105 hover:shadow-2xl`}
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        <footer className="bg-gradient-to-b from-[#0A0819] to-[#1A1830] text-white py-8 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-[#FFD600]">SPSK EduTech</h3>
                <p className="text-[#FFD600]/80">Empowering children, parents, and teachers</p>
              </div>
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/betterparentbetterkids" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD600] transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/spsk_edutech" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD600] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="mailto:spskedutech@gmail.com" className="hover:text-[#FFD600] transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="tel:8891337811" className="hover:text-[#FFD600] transition-colors">
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="mt-8 text-center text-[#FFD600]/80">
              <p>&copy; {new Date().getFullYear()} SPSK EduTech. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;