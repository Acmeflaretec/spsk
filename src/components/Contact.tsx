import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <motion.section 
      className="py-12 md:py-24 bg-gradient-to-b from-[#0A0819] to-[#1A1830]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1">
          {/* Contact Info */}
          <motion.div 
            className="w-full h-auto md:h-[700px] flex items-center justify-center bg-cover bg-no-repeat bg-[url('https://pagedone.io/asset/uploads/1696245837.png')] rounded-lg md:rounded-2xl overflow-hidden mx-auto"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="backdrop-blur-sm bg-black/30 p-4 md:p-8 rounded-lg md:rounded-2xl w-full max-w-md mx-2 md:mx-0">
              <motion.div 
                className="space-y-4 md:space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {/* Address */}
                <motion.div whileHover={{ x: 5 }}>
                  <div className="flex items-start text-white">
                    <MapPin className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4 flex-shrink-0" />
                    <div>
                      <p className="text-lg md:text-xl font-medium mb-1 md:mb-2">SPSK Edu Tech Private Limited</p>
                      <p className="text-base md:text-lg">XV C 502 Near Thannikkal Bankers,</p>
                      <p className="text-base md:text-lg">Koothatukulam, Ernakulam - 686662</p>
                      <p className="text-base md:text-lg">Kerala, India</p>
                    </div>
                  </div>
                </motion.div>

                {/* Phone Numbers */}
                {['+91 88913 37811', '+91 95441 45220', '+91 98863 23916'].map((number, index) => (
                  <motion.div key={index} whileHover={{ x: 5 }}>
                    <a href={`tel:${number.replace(/\s+/g, '')}`} className="flex items-center text-white hover:text-[#FFD600] transition-colors">
                      <Phone className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4" />
                      <span className="text-lg md:text-xl">{number}</span>
                    </a>
                  </motion.div>
                ))}

                {/* Email */}
                <motion.div whileHover={{ x: 5 }}>
                  <a href="mailto:spskedutech@gmail.com" className="flex items-center text-white hover:text-[#FFD600] transition-colors">
                    <Mail className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4" />
                    <span className="text-lg md:text-xl">spskedutech@gmail.com</span>
                  </a>
                </motion.div>

                {/* Social Media */}
                <motion.div whileHover={{ x: 5 }}>
                  <a 
                    href="https://www.instagram.com/spsk_edutech" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-white hover:text-[#FFD600] transition-colors"
                  >
                    <Instagram className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4" />
                    <span className="text-lg md:text-xl">@spsk_edutech</span>
                  </a>
                </motion.div>

                <motion.div whileHover={{ x: 5 }}>
                  <a 
                    href="https://www.facebook.com/betterparentbetterkids" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-white hover:text-[#FFD600] transition-colors"
                  >
                    <Facebook className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4" />
                    <span className="text-lg md:text-xl">Smart Parents for Smart Kids</span>
                  </a>
                </motion.div>

                {/* Social Icons */}
                <div className="border-t border-white/20 pt-4 md:pt-6 mt-4 md:mt-8">
                  <div className="flex justify-center space-x-4 md:space-x-6">
                    {[Facebook, Instagram, Mail, Phone].map((Icon, index) => (
                      <motion.a 
                        key={index}
                        href="#"
                        className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-[#FFD600]/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
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