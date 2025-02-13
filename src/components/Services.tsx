import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BrainCircuit, GraduationCap, HeartPulse, Layers3, LibraryBig, Users } from 'lucide-react';

const Services = () => {
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

  const successStories = [
    {
      name: 'The Sharma Family',
      role: 'Parents of Aarav (Grade 9)',
      content: 'The academic roadmap helped Aarav improve from 65% to 89% in just 8 months',
      image: '/testimonials/sharma.jpg'
    },
    {
      name: 'Priya Mehta',
      role: 'Grade 12 Student',
      content: 'Career counseling helped me discover my passion for environmental science',
      image: '/testimonials/priya.jpg'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0F0C29] to-[#1A1830]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FFD600] to-[#FFB300] bg-clip-text text-transparent mb-6">
              Our Comprehensive Services
            </h1>
            <p className="text-xl text-purple-100/80 max-w-3xl mx-auto">
              Expert-led programs designed to support every aspect of child development and family well-being
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
            {servicesData.map((service, i) => (
              <motion.div
                key={i}
                className={`group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#FFD600]/30 transition-all ${
                  i === servicesData.length - 1 ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative h-48 w-full mb-6 rounded-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h2 className="text-2xl font-bold text-purple-50 mb-4">{service.title}</h2>
                <p className="text-purple-100/80 leading-relaxed">{service.description}</p>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* Methodology Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
            {/* <motion.div 
              className="relative h-[500px] rounded-3xl overflow-hidden border-2 border-[#FFD600]/20"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src="/methods.jpg"
                alt="Our methodology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1830] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/5 backdrop-blur-sm rounded-xl">
                <h3 className="text-2xl font-bold text-[#FFD600] mb-2">Proven Framework</h3>
                <p className="text-purple-100/80">
                  Developed through 34 years of research and practical application
                </p>
              </div>
            </motion.div> */}

            <div className="space-y-8 w-full">
              <motion.div
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-3xl font-bold text-[#FFD600] mb-4">Our 360° Approach</h3>
                <div className="grid gap-6">
                  {[
                    'Cognitive Development',
                    'Emotional Intelligence',
                    'Social Skills',
                    'Physical Well-being'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#FFD600]/10 rounded-lg flex items-center justify-center">
                        <HeartPulse className="w-6 h-6 text-[#FFD600]" />
                      </div>
                      <span className="text-xl text-purple-50">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* <motion.div
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-[#FFD600] mb-4">Key Statistics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { value: '98%', label: 'Parent Satisfaction' },
                    { value: '5.0★', label: 'Average Rating' },
                    { value: '34+', label: 'Years Experience' },
                    { value: '10K+', label: 'Lives Impacted' }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#FFD600]/10 rounded-lg flex items-center justify-center">
                        <LibraryBig className="w-6 h-6 text-[#FFD600]" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-50">{stat.value}</div>
                        <div className="text-purple-100/70">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div> */}
            </div>
          </div>

          {/* Success Stories */}
          {/* <motion.div 
            className="mb-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-4xl font-bold text-[#FFD600] mb-12 text-center">
              Transformative Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {successStories.map((story, i) => (
                <div key={i} className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#FFD600]/30 transition-all">
                  <div className="flex items-center gap-6 mb-6">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full border-2 border-[#FFD600]"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-purple-50">{story.name}</h4>
                      <p className="text-purple-100/70">{story.role}</p>
                    </div>
                  </div>
                  <p className="text-purple-100/80">"{story.content}"</p>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </motion.div> */}
          

          {/* CTA Section */}
          <div className="text-center">
            <motion.div
              className="inline-block relative group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD600] to-[#FFB300] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <button className="relative bg-gradient-to-r from-[#FFD600] to-[#FFB300] text-purple-900 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-[0_0_40px_-5px_rgba(255,214,0,0.5)] transition-all">
                Start Your Journey Today
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;