import React from 'react';
import { motion } from 'framer-motion';
import { Book, Notebook, BookOpenCheck, LibraryBig, Gift, ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Early Childhood Parenting Made Simple',
      author: 'By Teena Benjamin',
      image: '/parenting-book.jpg',
      description: 'A practical, research-backed guide helping parents navigate early childhood development with confidence. Offers strategies for emotional resilience, social competence, and intellectual curiosity through secure attachment, play, and positive discipline. Includes guidance on developmental milestones, technology handling, and work-life balance.'
    },
    {
      id: 2,
      title: 'SPSK Mentors\' Manual',
      author: 'By Teena Benjamin',
      image: '/mentors-manual.jpg',
      description: 'Comprehensive guide blending global educational insights with play-based learning. Features structured schedules, interactive rhymes, flashcard techniques, and role-play exercises. Focuses on nurturing creativity, problem-solving, and emotional intelligence through child-centered learning environments.'
    },
    {
      id: 3,
      title: 'SPSK Pre-School Homework Book',
      author: 'By Teena Benjamin',
      image: '/homework-book.jpg',
      description: 'Interactive activity book with alphabet treasure hunts, number hopscotch, and nature counting walks. Strengthens parent-child bonds through letter tracing, storytelling, and curated reading lists. Designed for nursery, LKG, and UKG foundational learning.'
    },
    {
      id: 4,
      title: 'SPSK Pre-School Mentors\' Textbook',
      author: 'By Teena Benjamin',
      image: '/textbook.jpg',
      description: 'Essential guide for creating future-ready learning environments. Covers learning styles, classroom organization, and curriculum implementation. Integrates play-based strategies with Indian educational psychology for holistic development.'
    },
    {
      id: 5,
      title: 'Book of Stories and Rhymes',
      author: 'By Teena Benjamin',
      image: '/stories-book.jpg',
      description: 'Magical collection teaching teamwork, empathy, and resilience through tales like Little Raindrops and Bobo Asks for Apples. Features rhythmic rhymes for language development and early literacy skills. Curated to spark creativity and lifelong love for learning.'
    },
    {
      id: 6,
      title: 'The Freedom to Choose Motherhood',
      author: 'By Teena Benjamin',
      image: '/motherhood-book.jpg',
      description: 'Empowering guide for women making informed decisions about motherhood. Includes Motherhood Decision Checklist to assess readiness and alignment with personal goals. Explores joys and challenges while providing practical tools for self-reflection.'
    },
    {
      id: 7,
      title: 'Early Childhood Bundle',
      author: 'Essential Resources',
      image: '/early-bundle.jpg',
      description: 'Complete set including Parenting Guide, Mentors Manual, and Homework Book. Covers developmental milestones, positive discipline, and play-based learning strategies. Essential toolkit for foundational early learning and parent-child bonding.'
    },
    {
      id: 8,
      title: 'Pre-School Bundle',
      author: 'Comprehensive Collection',
      image: '/preschool-bundle.jpg',
      description: 'All-inclusive resources with Mentors Manual, Textbook, Homework Book, and Stories. Offers strategies for emotional-social development, classroom organization, and interactive learning. Perfect for creating holistic educational experiences.'
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-[#0A0819] to-[#1A1830] py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD600] via-[#FFB300] to-[#FF8A00] bg-clip-text text-transparent mb-4">
            Our Resources
          </h2>
          <p className="text-xl text-purple-100/80 max-w-2xl mx-auto">
            Evidence-based tools and guides for parents, educators, and caregivers
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(255, 214, 0, 0.1)' }}
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#FFD600]/10 rounded-xl">
                  {index < 6 ? (
                    <Book className="w-6 h-6 text-[#FFD600]" />
                  ) : (
                    <Gift className="w-6 h-6 text-[#FFD600]" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-purple-50">{product.title}</h3>
              </div>
              <p className="text-purple-100/70 mb-4">{product.author}</p>
              <p className="text-purple-100/80 mb-6">{product.description}</p>
              <button className="w-full flex items-center justify-center gap-2 bg-[#FFD600]/10 hover:bg-[#FFD600]/20 text-[#FFD600] py-3 rounded-lg transition-all">
                <span>Buy Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Products;

