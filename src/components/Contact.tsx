import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <motion.section 
      className="py-24 bg-gradient-to-b from-[#0A0819] to-[#1A1830]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
          {/* Contact Form */}
          <motion.div 
            className="flex items-center lg:mb-0 mb-10"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-full">
              <h4 className="text-[#FFD600] text-lg font-medium mb-4">Get in Touch</h4>
              <h2 className="text-4xl font-bold text-white mb-12">Reach Out To Us</h2>
              
              <motion.form 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.02 }}>
                  <input 
                    type="text" 
                    className="w-full h-14 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 text-lg rounded-full border border-white/20 px-6 focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                    placeholder="Name"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <input 
                    type="email" 
                    className="w-full h-14 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 text-lg rounded-full border border-white/20 px-6 focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                    placeholder="Email"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <textarea 
                    className="w-full h-48 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 text-lg rounded-2xl border border-white/20 p-6 focus:outline-none focus:ring-2 focus:ring-[#FFD600] resize-none"
                    placeholder="Message"
                  />
                </motion.div>

                <motion.button 
                  className="w-full h-14 bg-gradient-to-r from-[#FFD600] to-[#FFB300] text-black text-lg font-bold rounded-full hover:shadow-lg hover:shadow-[#FFD600]/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="lg:max-w-xl w-full h-[600px] max-w-[100vw] flex items-center justify-center bg-cover bg-no-repeat bg-[url('https://pagedone.io/asset/uploads/1696245837.png')] rounded-2xl overflow-hidden"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl w-full max-w-md">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div whileHover={{ x: 5 }}>
                  <a href="tel:8891337811" className="flex items-center text-white hover:text-[#FFD600] transition-colors">
                    <Phone className="w-8 h-8 mr-4" />
                    <span className="text-xl">+91 88913 37811</span>
                  </a>
                </motion.div>

                <motion.div whileHover={{ x: 5 }}>
                  <a href="mailto:spskedutech@gmail.com" className="flex items-center text-white hover:text-[#FFD600] transition-colors">
                    <Mail className="w-8 h-8 mr-4" />
                    <span className="text-xl">spskedutech@gmail.com</span>
                  </a>
                </motion.div>

                <motion.div whileHover={{ x: 5 }}>
                  <a 
                    href="https://www.instagram.com/spsk_edutech" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-white hover:text-[#FFD600] transition-colors"
                  >
                    <Instagram className="w-8 h-8 mr-4" />
                    <span className="text-xl">@spsk_edutech</span>
                  </a>
                </motion.div>

                <motion.div whileHover={{ x: 5 }}>
                  <a 
                    href="https://www.facebook.com/betterparentbetterkids" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-white hover:text-[#FFD600] transition-colors"
                  >
                    <Facebook className="w-8 h-8 mr-4" />
                    <span className="text-xl">Smart Parents for Smart Kids</span>
                  </a>
                </motion.div>

                <div className="border-t border-white/20 pt-6 mt-8">
                  <div className="flex justify-center space-x-6">
                    {[Facebook, Instagram, Mail, Phone].map((Icon, index) => (
                      <motion.a 
                        key={index}
                        href="#"
                        className="p-3 rounded-full bg-white/10 hover:bg-[#FFD600]/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;