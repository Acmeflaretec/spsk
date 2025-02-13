import React from 'react';
import { motion } from 'framer-motion';
import { BookHeart, HeartHandshake, Scale, Users, LampDesk, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '4+', label: 'Years Impact', icon: BookHeart },
    { value: '95%', label: 'Positive Outcomes', icon: Scale },
    { value: '2K+', label: 'Lives Transformed', icon: Users }
  ];

  const values = [
    { title: 'Child-Centered Philosophy', icon: HeartHandshake, color: 'text-rose-400' },
    { title: 'Mentorship Excellence', icon: LampDesk, color: 'text-indigo-400' },
    { title: 'Community Impact', icon: Globe, color: 'text-emerald-400' }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0A0819] to-[#1A1830] py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{ opacity: [0, 0.4, 0], x: Math.random() * 100 - 50 + 'vw', y: Math.random() * 100 - 50 + 'vh' }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD600] via-[#FFB300] to-[#FF8A00] bg-clip-text text-transparent mb-6">
            Empowering Tomorrow's Leaders
          </h2>
          <p className="text-xl text-purple-100/80 max-w-3xl mx-auto">
            Pioneering holistic child development through innovative mentorship programs and 
            evidence-based psychological support since 2020.
          </p>
        </motion.div>

        {/* Founder's Quote */}
        <motion.div 
          className="max-w-4xl mx-auto mb-24 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-[#FFD600]/20"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
        >
          <div className="flex items-start gap-6">
            <div className="shrink-0 p-3 bg-[#FFD600]/10 rounded-xl">
              <HeartHandshake className="w-8 h-8 text-[#FFD600]" />
            </div>
            <p className="text-2xl leading-relaxed text-purple-50 italic">
              "Every child deserves a champion - someone who will never give up on them, 
              who understands the power of connection and insists they become the best they can possibly be."
            </p>
          </div>
          <div className="mt-6 pl-20 border-l-2 border-[#FFD600]/40">
            <h4 className="text-lg font-bold text-[#FFD600]">Teena Benjamin</h4>
            <p className="text-purple-100/70">Co-Founder & Chief Psychologist</p>
          </div>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-[#FFD600]/10 rounded-xl group-hover:bg-[#FFD600]/20 transition-all">
                    <Icon className="w-8 h-8 text-[#FFD600]" />
                  </div>
                  <div className="text-3xl font-bold text-[#FFD600]">{stat.value}</div>
                </div>
                <h3 className="text-xl font-semibold text-purple-50 mb-2">{stat.label}</h3>
                <p className="text-purple-100/70">
                  {i === 0 && 'Dedicated to nurturing children\'s potential since our founding'}
                  {i === 1 && 'Of participants report improved family dynamics and mental health'}
                  {i === 2 && 'Children and families empowered through our programs'}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Founders Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            className="relative h-[600px] rounded-[2.5rem] overflow-hidden border-2 border-[#FFD600]/20"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="grid grid-cols-2 h-full gap-4 p-4">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="/teena-benjamin.jpg"
                  alt="Teena Benjamin"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1830]/90 via-transparent to-transparent" />
              </div>
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="/linos-david.jpg"
                  alt="Linos David"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1830]/90 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/5 backdrop-blur-xl rounded-xl">
              <h3 className="text-2xl font-bold text-[#FFD600] mb-2">Visionary Leadership</h3>
              <p className="text-purple-100/80">
                Teena Benjamin & Linos David - Combining psychological expertise with decades of social work
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-3xl font-bold text-purple-50 mb-4">Our Genesis</h3>
              <p className="text-purple-100/70 leading-relaxed">
                Born from the intersection of psychological expertise and grassroots social work, SPSK EduTech 
                combines Teena Benjamin's academic rigor with Linos David's four decades of field experience. 
                Our unique methodology addresses the complete ecosystem around a child - family, educators, 
                and community - to create sustainable transformation.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={i}
                    className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className="flex items-start gap-6">
                      <div className={`p-3 rounded-lg ${value.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-purple-50 mb-2">{value.title}</h3>
                        <p className="text-purple-100/70">
                          {value.title === 'Child-Centered Philosophy' && 'Programs designed around the Four Pillars Framework: Emotional Intelligence, Cognitive Development, Social Skills, and Spiritual Grounding'}
                          {value.title === 'Mentorship Excellence' && 'Certified experts providing personalized guidance through our proprietary CARE (Compassionate Actionable Responsive Engagement) model'}
                          {value.title === 'Community Impact' && 'Collaborative initiatives with schools, NGOs, and local governments to create child-friendly ecosystems'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Evolution Timeline */}
        <div className="mt-24 relative">
          <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-[#FFD600] via-transparent to-transparent" />
          {[2011, 2013, 2020, 2023].map((year, i) => (
            <motion.div
              key={year}
              className="flex flex-col items-center mb-16 even:md:flex-row-reverse odd:md:flex-row"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="w-full md:w-1/2 p-6">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                  <h4 className="text-2xl font-bold text-[#FFD600] mb-4">Key Milestone</h4>
                  <p className="text-purple-100/70">
                    {year === 2011 && 'Linos David establishes Love You Children Mission, laying foundation for future work'}
                    {year === 2013 && 'Teena Benjamin begins mentoring underprivileged children while completing psychology studies'}
                    {year === 2020 && 'Official launch of SPSK EduTech combining psychological expertise with grassroots experience'}
                    {year === 2023 && 'Expansion to digital platforms serving 15+ states with 98% satisfaction rate'}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#FFD600]/10 flex items-center justify-center border-2 border-[#FFD600]/20">
                  <span className="text-2xl font-bold text-[#FFD600]">{year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;