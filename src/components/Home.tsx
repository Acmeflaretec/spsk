import { motion } from "framer-motion";
import { ArrowRight, Facebook, Instagram, Mail, Phone, Heart, Play, Sparkles, User } from 'lucide-react';

import { Link } from 'react-router-dom';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { useEffect, useState } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(0);
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
    <div className="bg-gradient-to-br from-[#0A0819] to-[#1A1830]">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative min-h-[90vh] md:h-screen bg-gradient-to-br from-[#0A0819] via-[#1A1830] to-[#2A2840] overflow-x-hidden"
      >
        {/* Manual Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#FFD600]/20 to-transparent rounded-full blur-2xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#FF8A00]/20 to-transparent rounded-full blur-2xl opacity-30" />

        {/* Animated Particle Background */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
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

        {/* Carousel Container */}
        <motion.div 
          className="relative container mx-auto px-4 h-full flex items-center"
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <div className="w-full h-full flex snap-x snap-mandatory overflow-x-scroll">
            {/* Slide 1: Main Message */}
            <motion.div 
              className="w-full min-h-[90vh] flex-shrink-0 snap-center flex items-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-4xl mx-auto text-center space-y-8 px-4">
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#FFD600] via-[#FFB300] to-[#FF8A00] bg-clip-text text-transparent"
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                >
                  Unlock Your Child’s Potential with SPSK EduTech!
                </motion.h1>

                <motion.div className="space-y-6 text-base sm:text-xl text-purple-100/80">
                  {[
                    "Want to raise confident, emotionally strong, and intelligent children?",
                    "Looking for expert guidance on parenting and child development?",
                    "Ready to give your child essential life skills for a bright future?"
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-4 justify-center"
                      initial={{ x: -50 }}
                      animate={{ x: 0 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <Sparkles className="text-[#FFD600] w-5 h-5" />
                      <p className="text-left">{text}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-gradient-to-r from-[#FFD600] to-[#FFB300] text-purple-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-[0_0_30px_-5px_rgba(255,214,0,0.4)] transition-all"
                  >
                    Join Us Now
                    <ArrowRight className="ml-2 sm:ml-4 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Slide 2: Teena Benjamin Profile */}
            <motion.div 
              className="w-full min-h-[90vh] flex-shrink-0 snap-center flex items-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4">
                <div className="relative h-64 w-64 md:h-96 md:w-96 mx-auto rounded-2xl overflow-hidden bg-gray-700/30 border-2 border-[#FFD600]/20">
                  <div className="absolute inset-0 bg-[#1A1830]/50 flex items-center justify-center">
                      <img src="/assets/teena.jpeg"className="w-40 h-40 md:w-64 md:h-64 text-[#FFD600]/50"
                      alt="Teena Benjamin"
                  
                     />
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-[#FFD600]">Teena Benjamin</h3>
                  <p className="text-base md:text-lg text-purple-100/80">Parenting & Education Coach</p>
                  <blockquote className="text-lg md:text-2xl italic text-purple-100/90 border-l-4 border-[#FFD600] pl-4 md:pl-6 py-2 md:py-3">
                    "If our children learn to navigate the battlefield of the mind, navigating the real world becomes easier!"
                  </blockquote>
                  <p className="text-sm md:text-base text-purple-100/80">
                    Empowering parents and educators to raise emotionally strong, intelligent, and resilient children.
                  </p>
                  <button className="w-full md:w-auto bg-[#FFD600]/10 hover:bg-[#FFD600]/20 text-[#FFD600] px-4 py-2 md:px-6 md:py-3 rounded-lg transition-colors text-sm md:text-base">
                    Join Our Journey
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-[#FFD600] flex justify-center p-1">
            <motion.div
              className="w-2 h-2 bg-[#FFD600] rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-[#0A0819] to-[#1A1830] relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={childVariants} className="space-y-10 relative">
              <div className="space-y-6">
                <motion.h6 
                  className="text-[#7B1FA2] text-lg font-medium"
                  variants={childVariants}
                >
                  About Us
                </motion.h6>
                <motion.h2 
                  className="text-5xl font-bold text-purple-50"
                  variants={childVariants}
                >
                  Empowering Young Lives Through Education
                </motion.h2>
                <motion.p 
                  className="text-lg text-purple-100/80 leading-relaxed text-justify "
                  variants={childVariants}
                  
                >
                 SPSK EduTech is an organization that stands for and with children. Children are born with the potential to live joyful, meaningful, productive and pro-social lives. If they are raised in an environment where their physical, emotional, intellectual and spiritual needs are met sufficiently, they grow up to be healthy adults. When some of these needs are not met, they may develop disordered behaviors and attitudes.
SPSK EduTech was founded in 2020 by Teena Benjamin, a Psychology student, inspired by Linos David, an educationist, social worker, and motivational speaker.  
Teena, an experienced counselor and social worker, has mentored underprivileged children since 2013. Her passion for child development led her to become a certified psychologist, conducting workshops for children, parents, and teachers to foster better relationships and resilience in children.  
Linos David has worked with children since 1990. In 2011, he founded Love You Children Mission, an NGO supporting underprivileged children through education. Over time, he recognized that even privileged children struggled with mental health issues due to a lack of mentorship. This realization led him to co-found SPSK EduTech with Teena, aiming to support the holistic development of all children.
 
                </motion.p>
              </div>
              {/* <div className="grid md:grid-cols-2 gap-6">
                {[
                  { number: "34+ Years", text: "Combined Experience in Child Development" },
                  { number: "5000+", text: "Lives Impacted Through Our Programs" },
                  { number: "100+", text: "Workshops Conducted Annually" },
                  { number: "98%", text: "Positive Outcomes Reported" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={childVariants}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-6 rounded-2xl border-2 border-[#7B1FA2]/20 hover:border-[#7B1FA2] transition-all bg-white/5 backdrop-blur-sm hover:shadow-xl"
                  >
                    <h4 className="text-3xl font-bold text-[#FFD600]">{item.number}</h4>
                    <p className="text-purple-100/80 mt-2">{item.text}</p>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>
            <motion.div 
              variants={childVariants}
              className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] shadow-2xl p-8 overflow-hidden relative"
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
                  className="w-full h-[600px] rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-[#0A0819] to-[#1A1830]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-purple-50"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
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
                className={`group relative bg-white/5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/10 hover:border-[#FFD600] ${
                  index === 6 ? 'md:col-span-3' : ''
                }`}
              >
                {/* Image Container */}
                <motion.div 
                  className="h-64 overflow-hidden relative"
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

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-50">
                    {service.title}
                  </h3>
                  <p className="text-purple-100/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FFD600] transition-all duration-300 rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-[#0A0819] to-[#1A1830]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="mb-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl font-bold text-purple-50 mb-6">
              Our Vision
            </h2>
            <p className="text-2xl text-purple-100/80 max-w-2xl mx-auto">Guiding Principles for a Brighter Future</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/10 transform hover:scale-[1.01] transition-all"
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring" }}
            >
              <DotLottiePlayer
                src="https://lottie.host/f65b810b-7023-4bfe-8214-58067a478671/H9we43kV9H.lottie"
                loop
                autoplay
                className="w-full h-[600px]"
              />
            </motion.div>
            <div className="space-y-8">
              <p className="text-2xl font-medium text-purple-100/80 mb-12">SPSK EduTech envisions a society where:</p>
              <ul className="space-y-8">
                {visionItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-6 group"
                  >
                    <div className="h-12 w-12 bg-gradient-to-br from-[#FFD600] to-[#FFE54C] rounded-xl flex items-center justify-center p-2 shadow-md transform group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <p className="text-xl text-purple-100/80 leading-relaxed">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      {/* Contact Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-[#0A0819] to-[#1A1830] relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 opacity-20">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-300 rounded-full"
              animate={{ 
                opacity: [0, 0.6, 0],
                x: `${Math.random() * 100 - 50}vw`,
                y: `${Math.random() * 100 - 50}vh`
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#FFD600] via-[#FFB300] to-[#FF8A00] bg-clip-text text-transparent mb-6">
              Connect With Us
            </h2>
            <p className="text-2xl text-purple-100/80 max-w-2xl mx-auto">Your journey to better parenting starts with a conversation</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-white/5 to-purple-900/10 p-8 rounded-[3rem] border-2 border-white/10 hover:border-[#FFD600]/30 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-10">
                {contactMethods.map((method, index) => (
                  <motion.a 
                    key={index}
                    href={method.href}
                    className="group flex items-center gap-6 p-6 rounded-2xl backdrop-blur-sm bg-white/5 hover:bg-gradient-to-r from-[#7B1FA2]/20 to-[#9C27B0]/20 transition-all"
                    whileHover={{ x: 15 }}
                  >
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#7B1FA2] to-[#9C27B0] transform group-hover:-rotate-12 transition-transform">
                      <method.Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-purple-50">{method.text.split(' ')[0]}</p>
                      <p className="text-purple-100/70">{method.text.split(' ').slice(1).join(' ')}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#7B1FA2] to-[#9C27B0]"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
            >
              <div className="absolute inset-0 bg-noise opacity-10" />
              <div className="p-12 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-6">Expert Guidance</h3>
                  <p className="text-lg text-purple-100/90 mb-8">
                    Schedule a personalized consultation with our certified parenting specialists and child development experts.
                  </p>
                  <div className="flex items-center gap-4 mb-12">
                    {/* <div className="flex -space-x-4">
                      {[1,2,3,4].map((i) => (
                        <img 
                          key={i}
                          src={`/avatars/avatar-${i}.jpg`}
                          className="w-12 h-12 rounded-full border-2 border-white"
                          alt="Specialist"
                        />
                      ))}
                    </div> */}
                    {/* <p className="text-sm text-white/80">Meet our team of 12+ experts</p> */}
                  </div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20 hover:border-[#FFD600] transition-all"
                >
                  <Link 
                    to="/appointment"
                    className="flex items-center justify-between group"
                  >
                    <span className="text-xl font-bold text-white">Book Free Consultation</span>
                    <div className="p-3 rounded-lg bg-[#FFD600] transform group-hover:rotate-45 transition-transform">
                      <ArrowRight className="w-6 h-6 text-[#7B1FA2]" />
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section 
        className="relative py-24 bg-gradient-to-br from-[#0A0819] to-[#1A1830]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4081] to-[#7B1FA2] mb-6">
              Creating Impact
            </h2>
            <p className="text-2xl text-purple-100/80 max-w-3xl mx-auto">Join our mission to empower children and transform communities</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div 
              className="relative rounded-[2.5rem] overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <DotLottiePlayer
                src="https://lottie.host/a6043f55-d99c-4446-9d90-f5ee45ea577c/nMX6bzVU3u.lottie"
                loop
                autoplay
                className="w-full h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7B1FA2]/40 to-transparent" />
            </motion.div>

            <div className="space-y-12">
              <motion.div 
                className="p-8 rounded-2xl bg-gradient-to-br from-[#FF4081]/10 to-[#7B1FA2]/10 border-2 border-[#FF4081]/20"
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <Heart className="w-12 h-12 text-[#FF4081] mx-auto" />
              </motion.div>
              
              <div className="space-y-8">
                <h3 className="text-4xl font-bold text-purple-50">
                  Every Contribution Matters
                </h3>
                <p className="text-lg text-purple-100/80 leading-relaxed">
                  Your support directly impacts the lives of underprivileged children through education, nutrition programs, and community development initiatives.
                </p>
                <div className="grid gap-6">
                  <motion.div 
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border-2 border-[#7B1FA2]/20 hover:border-[#FFD600] transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-xl font-bold text-[#FFD600] mb-4">Banking Details</h4>
                    <div className="space-y-3 font-mono">
                      <p className="text-purple-100/90">Account: Love You Children Mission</p>
                      <p className="text-purple-100/90">A/C No: 15450200003812</p>
                      <p className="text-purple-100/90">IFSC: FDRL0001545</p>
                    </div>
                  </motion.div>
                  
                  <motion.a
                    href="mailto:lycm11@gmail.com"
                    className="inline-flex items-center gap-4 p-6 rounded-xl bg-[#7B1FA2]/20 hover:bg-[#9C27B0]/30 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="w-8 h-8 text-[#FFD600]" />
                    <span className="text-lg font-semibold text-purple-50">Partner with LYCM</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Future Section */}
      <motion.section 
        className="relative py-24 bg-gradient-to-br from-[#0A0819] to-[#1A1830]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="container mx-auto px-6 text-center relative">
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
          >
          <iframe 
                src="https://lottie.host/embed/f3c7d2bc-92fc-4a63-b5c0-f79db040262b/HZt6PG3YkH.lottie" 
                className="w-full h-[500px]"
                frameBorder="0"
                allowFullScreen
              />
          </motion.div>
          
          <motion.h2 
            className="text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-[#FFD600] via-[#FFB300] to-[#FF8A00] bg-clip-text text-transparent"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring" }}
          >
            Building Brighter Futures
          </motion.h2>
          
          <motion.p 
            className="text-xl text-purple-100/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join thousands of parents transforming their family dynamics through compassionate guidance
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#FFD600] to-[#FFB300] p-1 rounded-2xl"
            >
              <Link 
                to="/appointment"
                className="flex items-center gap-4 px-16 py-6 bg-[#7B1FA2] rounded-2xl hover:bg-opacity-90 transition-all"
              >
                <span className="text-2xl font-bold text-white">Start Now</span>
                <ArrowRight className="w-8 h-8 text-[#FFD600]" />
              </Link>
            </motion.div>
            
            {/* <motion.a 
              href="/services"
              className="p-6 rounded-2xl border-2 border-[#FFD600] text-[#FFD600] hover:bg-[#FFD600]/10 transition-all"
              whileHover={{ y: -3 }}
            >
              See Success Stories →
            </motion.a> */}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

const servicesData = [
  {
    title: "Child and Adolescent Counseling",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Our experienced counselor helps children and adolescents to deal with the stressors of life, develop healthy coping skills, improve academic and soft skills, develop have more connected and fulfilling relationships with family, nurture positive relationships with others and find their place in society"
  },
  {
    title: "Individual and Family Counseling",
    image: "https://images.unsplash.com/photo-1557425529-b1ae9c141e7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Whether it is a single parent, nuclear or joint family, parental stress and dysfunctional family dynamics can impact children adversely. Family counseling helps in resolving conflicts, communication more effectively and improving feelings of connectedness and satisfaction with the family."
  },
  {
    title: "Life Skills Workshops",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Schools focus on teaching children academic hard skills. However, with a rise in nuclear and detached lifestyles, children do not get enough opportunities to learn basic life skills that help them to understand and manage themselves, connect well with others and live meaningful and pro-social lives. The Life Skills Workshop by SPSK teaches these skills to kids. Regular follow up is conducted after the teaching sessions to track how the kids are able to apply these skills in their daily lives and provide extra guidance, if required."
  },
  {
    title: "Parenting Workshops",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Parenting is one of the hardest jobs in the world but parents are not given enough training or resources to be able to do it well. We provide training and guidance to parents in order to help them understand their children, connect with them and bring out the best in them."
  },
  {
    title: "Teachers' Training",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Teachers are often called upon to play the role of mentor, caregiver, fried and coach all at once. Our teachers' training program helps them learn how to navigate these roles in an effective manner and avoid burnout. We conduct this program at schools and other institutions that seek our help."
  },
  {
    title: "Book Club for Children and Parents",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Reading is a scientifically proven factor that contributes to future academic achievement, intelligence, creativity, empathy and resilience in children. SPSK's book club, The Blyton Bunch, conducts weekly meetings for parents and children to promote the reading habit in our families and communities."
  },
  {
    title: "Kuttipattaalam Club",
    image: "https://plus.unsplash.com/premium_vector-1682270275978-3ac5bae3ea48?q=80&w=2698&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a children’s mental health awareness club that empowers kids to be ambassadors for emotional well-being in society. Through skits, songs, community projects, and pro-social initiatives, members promote kindness, resilience, and awareness about mental health. They engage in activities like public performances, peer support, awareness campaigns, and acts of service, helping to break stigma and encourage open conversations. By encouraging leadership, empathy, and confidence, the club not only equips children with essential life skills but also inspires them to create a more understanding and compassionate world. Kids receive membership certificates and the opportunity to develop new skills and hone their innate talents. Most importantly, they learn to live with a pro-social mindset which will help them tremendously out in the real world."
  }

];

const contactMethods = [
  { Icon: Phone, text: "8891337811", href: "tel:8891337811" },
  { Icon: Mail, text: "spskedutech@gmail.com", href: "mailto:spskedutech@gmail.com" },
  { Icon: Instagram, text: "@spsk_edutech", href: "https://www.instagram.com/spsk_edutech" },
  { Icon: Facebook, text: "Smart Parents for Smart Kids", href: "https://www.facebook.com/betterparentbetterkids" }
];

const visionItems = [
  "Parenting is a role taken on willingly and eagerly by prepared adults",
  "Children are seen as individuals rather than possessions",
  "Children receive adequate care, support, and mentoring",
  "Schools prioritize teaching life skills and soft skills"
];

export default Home;