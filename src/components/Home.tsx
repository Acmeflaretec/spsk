import { motion } from "framer-motion";
import { ArrowRight, Facebook, Instagram, Mail, Phone, Heart, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const childVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#0A0819] to-[#1A1830]">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative min-h-[90vh] md:h-screen bg-gradient-to-br from-[#0A0819] via-[#1A1830] to-[#2A2840] overflow-x-hidden"
      >
        {/* Mobile-optimized Particle Background */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.4, 0],
                x: Math.random() * 100 - 50 + 'vw',
                y: Math.random() * 100 - 50 + 'vh'
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Mobile-first Content Layout */}
        <motion.div 
          className="relative container mx-auto px-4 h-full flex items-center pt-16 md:pt-0 pb-16 md:pb-0"
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center w-full">
            {/* Text Content with Mobile Adjustments */}
            <motion.div 
              className="space-y-4 md:space-y-8 relative z-10 order-2 md:order-1"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-[#FFE99B] to-[#FFD600] bg-clip-text text-transparent drop-shadow-2xl leading-tight"
                initial={{ x: -40 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Empowering Young Minds Through Holistic Development
              </motion.h1>
              
              {/* Stacked Stats Grid for Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {[
                  { number: '98%', label: 'Success Rate' },
                  { number: '5K+', label: 'Parents Trust' },
                  { number: '34+', label: 'Years Experience' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-[#FFD600]">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-purple-100/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile-optimized CTA Section */}
              <motion.div 
                className="flex flex-col gap-3 sm:gap-4 items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="relative group w-full"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD600] to-[#FFB300] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <Link
                    to="/appointment"
                    className="relative inline-flex items-center justify-center bg-gradient-to-r from-[#FFD600] to-[#FFB300] text-purple-900 px-6 py-4 sm:px-8 sm:py-5 rounded-xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-[0_0_30px_-5px_rgba(255,214,0,0.4)] transition-all w-full"
                  >
                    Book Free Consultation
                    <ArrowRight className="ml-2 sm:ml-4 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                {/* Compact Video Preview for Mobile */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer w-full"
                >
                  <div className="flex items-center gap-2 sm:gap-3 text-purple-100/90 hover:text-white transition-colors w-full">
                    <div className="relative h-10 w-10 sm:h-14 sm:w-14">
                      <div className="absolute inset-0 bg-white/10 rounded-xl transform group-hover:scale-110 transition-all"></div>
                      <Play className="absolute inset-0 m-auto w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">Watch Video</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Responsive Illustration Section */}
            <motion.div 
              className="relative order-1 md:order-2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1A1830]/10 to-transparent" />
              
              <div className="relative w-full h-full">
                <DotLottiePlayer
                  src="https://lottie.host/8c9e8b60-31bc-4b05-b27b-2e308559c1c8/9DJCEAQLRH.lottie"
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>

              {/* Stacked Mobile Badges */}
              <div className="absolute bottom-2 md:bottom-8 left-0 right-0 flex flex-col items-center sm:flex-row justify-center gap-2 px-4">
                {['Google 5★ Reviews', '2024 Education Award'].map((badge, i) => (
                  <motion.div
                    key={i}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-xs sm:text-sm text-purple-100/90 hover:text-white transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    ★★★★★ {badge}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile-friendly Scroll Indicator */}
        <motion.div 
          className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-[#FFD600] flex justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFD600] rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <span className="text-xs sm:text-sm text-[#FFD600]/80">Explore More</span>
        </motion.div>
      </motion.section>

      {/* About Section with Mobile Layout */}
      <motion.section 
        className="py-16 md:py-24 bg-gradient-to-b from-[#0A0819] to-[#1A1830] relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="container mx-auto px-4 sm:px-6">            
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center"
          >
            <motion.div variants={childVariants} className="space-y-6 md:space-y-10 relative">
              <div className="space-y-4 md:space-y-6">
                <motion.h6 
                  className="text-[#7B1FA2] text-base md:text-lg font-medium"
                  variants={childVariants}
                >
                  About Us
                </motion.h6>
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-purple-50"
                  variants={childVariants}
                >
                  Empowering Young Lives Through Education
                </motion.h2>
                <motion.p 
                  className="text-base md:text-lg text-purple-100/80 leading-relaxed"
                  variants={childVariants}
                >
                  SPSK EduTech stands with children to help them realize their potential for joyful, meaningful lives. 
                  Founded in 2020 by Teena Benjamin and Linos David, we're dedicated to holistic child development 
                  through counseling, workshops, and mentorship programs.
                </motion.p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  { number: "34+ Years", text: "Combined Experience" },
                  { number: "5000+", text: "Lives Impacted" },
                  { number: "100+", text: "Annual Workshops" },
                  { number: "98%", text: "Positive Outcomes" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={childVariants}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 md:p-6 rounded-xl border-2 border-[#7B1FA2]/20 hover:border-[#7B1FA2] transition-all bg-white/5 backdrop-blur-sm hover:shadow-xl"
                  >
                    <h4 className="text-2xl md:text-3xl font-bold text-[#FFD600]">{item.number}</h4>
                    <p className="text-sm md:text-base text-purple-100/80 mt-1 md:mt-2">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              variants={childVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-[2.5rem] shadow-xl md:shadow-2xl p-4 md:p-8 overflow-hidden relative"
              whileHover={{ scale: 1.02 }}
            >       
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="hidden md:block" 
              >
                <DotLottiePlayer
                  src="https://lottie.host/8c9e8b60-31bc-4b05-b27b-2e308559c1c8/9DJCEAQLRH.lottie"
                  loop
                  autoplay
                  className="w-full h-[400px] md:h-[600px] rounded-xl md:rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mobile-optimized Services Section */}
      <motion.section 
        className="py-16 md:py-24 bg-gradient-to-b from-[#0A0819] to-[#1A1830]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-purple-50"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {servicesData.map((service, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                className="group relative bg-white/5 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/10 hover:border-[#FFD600]"
              >
                <motion.div 
                  className="h-48 md:h-64 overflow-hidden relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7B1FA2]/30 to-transparent" />
                </motion.div>

                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-purple-50">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-purple-100/80 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mobile-friendly Vision Section */}
      <motion.section 
        className="py-16 md:py-24 bg-gradient-to-br from-[#0A0819] to-[#1A1830]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="mb-12 md:mb-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-50 mb-4 md:mb-6">
              Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-purple-100/80 max-w-2xl mx-auto">Guiding Principles for a Brighter Future</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div 
              className="rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl md:shadow-2xl border-4 md:border-8 border-white/10 transform hover:scale-[1.01] transition-all"
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring" }}
            >
              <DotLottiePlayer
                src="https://lottie.host/f65b810b-7023-4bfe-8214-58067a478671/H9we43kV9H.lottie"
                loop
                autoplay
                className="w-full h-[300px] md:h-[600px]"
              />
            </motion.div>
            <div className="space-y-6 md:space-y-8">
              <p className="text-xl md:text-2xl font-medium text-purple-100/80 mb-8 md:mb-12">SPSK EduTech envisions a society where:</p>
              <ul className="space-y-4 md:space-y-8">
                {visionItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 md:gap-6 group"
                  >
                    <div className="h-8 w-8 md:h-12 md:w-12 bg-gradient-to-br from-[#FFD600] to-[#FFE54C] rounded-lg md:rounded-xl flex items-center justify-center p-1.5 md:p-2 shadow-md transform group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-6 md:h-6 text-white">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <p className="text-base md:text-xl text-purple-100/80 leading-relaxed flex-1">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ... (other sections maintain similar mobile optimizations) ... */}

    </div>
  );
};

export default Home;
 