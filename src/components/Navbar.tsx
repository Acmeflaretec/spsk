import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const MotionLink = motion(Link);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 2000);
  }, []);

  return (
    <motion.nav 
      className="bg-gradient-to-b from-[#0A0819] to-[#1A1830] text-white"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
   
    >
      <motion.div
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#0A0819] z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: isMounted ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: isMounted ? 'none' : 'auto' }}
        
      >
        <motion.div
          className="w-12 h-12 border-4 border-[#FFD600] border-t-transparent rounded-full blur-sm"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        
        />
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 ">
          <Link to="/" className="text-2xl font-bold font-poppins">SPSK EDUTECH</Link>
          
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X /> : <Menu />} 
          </motion.button>

          <motion.div 
            className="hidden md:flex space-x-6"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            {['/', '/services', '/about', '/vision', '/contact', '/appointment', '/support', '/products'].map((path, index) => (
              <MotionLink      
                key={path}
                to={path}
                className="hover:text-indigo-200"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {['Home', 'Services', 'About', 'Vision', 'Contact', 'Book Appointment', 'Support', 'Products'][index]}
              </MotionLink>
            ))}
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden pb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ 
                type: 'tween',
                duration: 0.2,
                ease: 'easeInOut'
              }}
            >
              {['/', '/services', '/about', '/vision', '/contact', '/appointment', '/support', '/products'].map((path, index) => (
                <MotionLink
                  key={path}
                  to={path}
                  className="block py-2 hover:text-indigo-200"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {['Home', 'Services', 'About', 'Vision', 'Contact', 'Book Appointment', 'Support', 'Products'][index]}
                </MotionLink>    
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;