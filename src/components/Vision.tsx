import { motion } from "framer-motion";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { Globe, HeartHandshake, Users } from 'lucide-react';

const Vision = () => {
  const visionPoints = [
    "Parenting is a role taken on willingly and eagerly by adults who know the full extent what it entails and feel ready to take on the responsibility",
    "Children are seen as individuals rather than possessions",
    "Children receive adequate care, support, connection, mentoring and coaching from parents and other significant adults in their lives",
    "Schools are institutions that prioritize teaching life skills, soft skills, communication skills, mental hygiene, financial responsibility and pro-social behavior to children",
    "Support and guidance for parents and parents-to-be is accessible, affordable and effective"
  ];

  return (
    <motion.div 
      className="relative py-24 bg-gradient-to-b from-[#0A0819] to-[#1A1830] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{ opacity: [0, 0.6, 0], x: Math.random() * 100 - 50 + 'vw', y: Math.random() * 100 - 50 + 'vh' }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#FFD600] via-[#FFB300] to-[#FF8A00] bg-clip-text text-transparent"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Vision
        </motion.h1>

        <motion.div 
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10 hover:border-[#FFD600]/30 transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <motion.p 
            className="text-2xl text-purple-100/80 mb-12 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            SPSK EduTech envisions a society where:
          </motion.p>
          
          <motion.ul 
          
            className="space-y-8 overflow-hidden"
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
            {visionPoints.map((point, index) => (
              <motion.li 
                key={index}
                variants={{
                  hidden: { x: -30, opacity: 0 },
                  visible: { x: 0, opacity: 1 }
                }}
                className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FFD600]/10 rounded-lg">
                    <Globe className="w-6 h-6 text-[#FFD600]" />
                  </div>
                  <p className="text-lg text-purple-50 leading-relaxed">
                    {point}
                  </p>
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[#FFD600]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.li>
            ))}
          </motion.ul>

          <motion.div 
            className="mt-16 border-2 border-[#FFD600]/20 rounded-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Vision;