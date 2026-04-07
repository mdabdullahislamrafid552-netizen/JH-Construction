import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="max-w-3xl"
        >
          <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Our Story</span>
          <h1 className="font-serif text-5xl md:text-7xl text-primary-deep leading-tight mb-8">
            Building <span className="italic text-accent">Trust</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Delivering high-quality workmanship and enduring value to homeowners across Massachusetts.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="lg:col-span-5"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-primary-deep mb-8">A Commitment to Excellence</h2>
              <div className="prose prose-lg text-gray-600 font-light">
                <p className="mb-6 leading-relaxed">
                  JH Construction was founded on a simple principle: do the job right, the first time. We provide high-quality carpentry and exterior services, focusing on precision, durability, and absolute customer satisfaction.
                </p>
                <p className="mb-12 leading-relaxed">
                  We specialize in residential projects, treating every home as if it were our own. From minor carpentry repairs to complete siding and window installations, our team is dedicated to delivering results that stand the test of time and elevate the beauty of your property.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-8 mb-12">
                <h3 className="font-serif text-2xl text-primary-deep mb-6">Our Core Values</h3>
                <ul className="space-y-6">
                  {[
                    { title: 'Precision', desc: 'Exact measurements and flawless execution.' },
                    { title: 'Durability', desc: 'Using only premium, long-lasting materials.' },
                    { title: 'Integrity', desc: 'Honest pricing and transparent timelines.' }
                  ].map((value, i) => (
                    <li key={i}>
                      <span className="block text-primary-deep font-bold uppercase tracking-widest text-xs mb-1">{value.title}</span>
                      <span className="text-gray-600 font-light">{value.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                to="/contact" 
                className="inline-block px-10 py-5 bg-primary-deep text-accent text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-primary-deep transition-colors duration-300"
              >
                Work With Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-8"
            >
              <div className="space-y-4 md:space-y-8 mt-12 md:mt-24">
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img src="https://picsum.photos/seed/about-luxury-1/800/1000" alt="Carpentry work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img src="https://picsum.photos/seed/about-luxury-2/800/800" alt="Exterior work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 md:space-y-8">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img src="https://picsum.photos/seed/about-luxury-3/800/800" alt="Window installation" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[4/5] bg-primary-deep flex flex-col items-center justify-center p-8 text-center border-t-4 border-accent">
                  <span className="block font-serif text-6xl md:text-7xl text-white mb-4">100<span className="text-accent">%</span></span>
                  <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs leading-loose">Satisfaction<br/>Guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
