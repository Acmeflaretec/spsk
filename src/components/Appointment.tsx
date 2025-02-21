import { motion } from 'framer-motion';
import { Calendar, Clock, User, MessageSquare } from 'lucide-react';

const Appointment = () => {
  return (
    <motion.div 
      className="py-16 bg-gradient-to-b from-[#0A0819] to-[#1A1830]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#FFD600] to-[#FFB300] bg-clip-text text-transparent"
              initial={{ y: -20 }}
              whileInView={{ y: 0 }}
            >
              Book an Appointment
            </motion.h1>
            <motion.p 
              className="text-xl text-purple-100/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We're here to help! Schedule your appointment quickly and easily using our online booking system.
            </motion.p>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-8 text-[#FFD600]"
              initial={{ x: -30 }}
              whileInView={{ x: 0 }}
            >
              How to Book:
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-12"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.4
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Calendar, title: "Select Your Service", text: "Choose the service that best fits your needs" },
                { icon: Clock, title: "Pick a Date & Time", text: "Select an available slot that works for you" },
                { icon: User, title: "Provide Your Details", text: "Enter your name, contact information, and notes" },
                { icon: MessageSquare, title: "Confirm Appointment", text: "Receive confirmation email with details" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <item.icon className="w-8 h-8 text-[#FFD600] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-50">{item.title}</h3>
                    <p className="text-purple-100/80">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="bg-white/10 p-6 rounded-xl mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#FFD600]">Need Assistance?</h3>
              <p className="text-purple-100/80 mb-4">
                Contact us for questions or rescheduling:
              </p>
              <ul className="space-y-2 text-purple-100/80">
                <li>Phone: <a href="tel:8891337811" className="text-[#FFD600] hover:text-[#FFB300]">8891337811</a></li>
                <li>Email: <a href="mailto:spskedutech@gmail.com" className="text-[#FFD600] hover:text-[#FFB300]">spskedutech@gmail.com</a></li>
              </ul>
            </motion.div>

            <motion.a 
              href="https://wa.me/918891337811"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#FFD600] to-[#FFB300] text-black py-4 px-8 rounded-xl font-bold hover:shadow-lg hover:shadow-[#FFD600]/30 transition-all cursor-pointer flex justify-center items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Appointment;