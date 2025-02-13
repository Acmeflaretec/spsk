import { motion } from 'framer-motion';
import { Heart, Mail, Facebook, Gem, Banknote, HandCoins } from 'lucide-react';

const Support = () => {
  return (
    <motion.div 
      className="py-16 md:py-32 bg-gradient-to-br from-[#0A0816] via-[#1A1836] to-[#0A0816] relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10 mix-blend-soft-light" />
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto backdrop-blur-xl rounded-3xl md:rounded-[2.5rem] border-2 border-white/10 bg-gradient-to-br from-[#1A1836]/90 via-[#0A0816]/90 to-[#1A1836]/90 p-6 md:p-12 shadow-2xl shadow-[#7B1FA2]/20"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-12 md:mb-20 bg-gradient-to-r from-[#FFD600] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent"
            initial={{ scale: 0.8, y: -20 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-[url('https://www.transparenttextures.com/patterns/golden.png')] bg-clip-text bg-cover">
              Empower Futures Through Education
            </span>
          </motion.h1>

          <div className="space-y-12 md:space-y-20">
            <motion.div 
              className="grid lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
            >
              <div className="space-y-6 md:space-y-8 relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#FFD600]/10 blur-3xl rounded-full" />
                <motion.div 
                  className="text-lg md:text-2xl leading-relaxed text-purple-100/90 font-light space-y-6 md:space-y-8"
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 }}}
                >
                  <p className="relative pl-4 md:pl-6 border-l-4 border-[#FFD600]/30">
                    SPSK EDUTECH partners with <span className="font-medium text-[#FFD600]">Love You Children Mission</span>, 
                    a premier NGO dedicated to transforming lives through education and opportunity.
                  </p>
                  <p className="relative pl-4 md:pl-6 border-l-4 border-[#FFD600]/30">
                    Since our founding in 2015, we've established <span className="font-medium text-[#FFD600]">learning centers</span>, 
                    impacting over <span className="font-medium text-[#FFD600]"> children</span> through innovative educational programs.
                  </p>
                </motion.div>
              </div>

              <motion.div 
                className="bg-gradient-to-br from-[#7B1FA2]/30 to-[#1A1836]/90 p-6 md:p-10 xl:p-12 rounded-2xl md:rounded-3xl xl:rounded-[2.5rem] border-2 border-[#FFD600]/20 relative overflow-hidden"
                initial={{ rotate: -1 }}
                animate={{ rotate: [ -1, 1, -1 ] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-eye.png')] opacity-10" />
                <div className="relative z-10 space-y-6 md:space-y-8 xl:space-y-10">
                  <motion.h2 
                    className="text-3xl md:text-4xl xl:text-5xl font-bold flex flex-col md:flex-row items-center gap-3 md:gap-4 xl:gap-5 text-[#FFD600]"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 md:p-4 xl:p-5 bg-[#FFD600]/10 rounded-xl md:rounded-2xl xl:rounded-3xl">
                      <Heart className="w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10" strokeWidth={1.5} />
                    </div>
                    <span className="bg-gradient-to-r from-[#FFD600] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent text-center md:text-left">
                      Contribution Portal
                    </span>
                  </motion.h2>
                  
                  <div className="space-y-6 md:space-y-8 xl:space-y-10">
                    <p className="text-lg md:text-xl xl:text-2xl text-purple-100/80 leading-relaxed font-light">
                      Your support enables access to premium educational resources, nutritional programs, and community development initiatives.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 max-w-3xl mx-auto">
                      <motion.a
                        href="https://www.facebook.com/loveyouchildrenmission"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 md:p-5 xl:p-6 rounded-xl md:rounded-2xl xl:rounded-3xl bg-gradient-to-r from-[#7B1FA2]/30 to-[#1A1836]/50 hover:from-[#7B1FA2]/50 hover:to-[#1A1836]/70 transition-all group flex items-center gap-3 md:gap-4 xl:gap-5 shadow-lg hover:shadow-[#FFD600]/20"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="p-2 md:p-3 xl:p-4 rounded-lg md:rounded-xl xl:rounded-2xl bg-[#FFD600]/10 group-hover:bg-[#FFD600]/20 transition-colors">
                          <Facebook className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 text-[#FFD600]" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-lg xl:text-xl font-semibold text-purple-50">Social Connect</h3>
                          <p className="text-purple-200/80 text-xs md:text-xs xl:text-sm">Engage with our community</p>
                        </div>
                      </motion.a>
                      
                      <motion.a
                        href="mailto:lycm11@gmail.com"
                        className="p-4 md:p-5 xl:p-6 rounded-xl md:rounded-2xl xl:rounded-3xl bg-gradient-to-r from-[#7B1FA2]/30 to-[#1A1836]/50 hover:from-[#7B1FA2]/50 hover:to-[#1A1836]/70 transition-all group flex items-center gap-3 md:gap-4 xl:gap-5 shadow-lg hover:shadow-[#FFD600]/20"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="p-2 md:p-3 xl:p-4 rounded-lg md:rounded-xl xl:rounded-2xl bg-[#FFD600]/10 group-hover:bg-[#FFD600]/20 transition-colors">
                          <Mail className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 text-[#FFD600]" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-lg xl:text-xl font-semibold text-purple-50">Direct Communication</h3>
                          <p className="text-purple-200/80 text-xs md:text-xs xl:text-sm">lycm11@gmail.com</p>
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="pt-12 md:pt-16 border-t border-white/10"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 flex flex-col md:flex-row items-center gap-3 md:gap-5 text-[#FFD600]"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 md:p-4 bg-[#FFD600]/10 rounded-xl md:rounded-2xl">
                  <Banknote className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                </div>
                <span className="bg-gradient-to-r from-[#FFD600] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent">
                  Financial Partnership
                </span>
              </motion.h2>
              
              <motion.div 
                className="bg-gradient-to-br from-[#7B1FA2]/20 to-[#1A1836]/50 p-6 md:p-10 rounded-2xl md:rounded-3xl border-2 border-[#FFD600]/20 relative overflow-hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/crissxcross.png')] opacity-10" />
                {[
                  ['Account Name:', 'Love You Children Mission'],
                  ['Account Number:', '15450200003812'],
                  ['IFSC Code:', 'FDRL0001545']
                ].map(([label, value], index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-4 md:gap-6 py-3 md:py-5 border-b border-white/10 last:border-0 group items-center"
                    whileHover={{ background: 'linear-gradient(90deg, #FFD60010 0%, transparent 100%)' }}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#FFD600]/10 rounded-lg">
                      <HandCoins className="w-5 h-5 md:w-6 md:h-6 text-[#FFD600]" />
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-200 text-base md:text-lg">{label}</dt>
                      <dd className="font-mono text-purple-50 text-lg md:text-xl tracking-tight">{value}</dd>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Support;