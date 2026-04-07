import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-start text-left overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://kgarch.com/wp-content/uploads/2015/06/KGA-Remodel-Guide-Feature-Image.jpg" 
            alt="Luxury Home Construction" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start mt-16 w-full">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="text-accent uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-8 block"
          >
            Massachusetts Premier Contractor
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8"
          >
            Craftsmanship <br/> <span className="text-accent italic font-light">Without Compromise</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mb-12"
          >
            Siding, windows, doors, and general carpentry — done right.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 sm:px-10 sm:py-5 bg-accent text-primary-deep text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Get a Free Estimate
            </Link>
            <a 
              href="tel:5085075483" 
              className="px-8 py-4 sm:px-10 sm:py-5 border border-accent text-accent text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-primary-deep transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Call (508) 507-5483
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Preview - High End Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Our Expertise</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-deep leading-tight">Elevating Homes with Precision & Care</h2>
            </div>
            <Link to="/services" className="group flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-primary-deep hover:text-accent transition-colors">
              View All Services
              <span className="w-8 md:w-12 h-px bg-primary-deep group-hover:bg-accent transition-colors"></span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'General Carpentry', desc: 'Custom woodwork and structural repairs.', img: 'https://www.ctaontario.ca/wp-content/uploads/2023/06/general_carpenter_800x800_150dpi-min-768x768.jpg' },
              { title: 'Siding Installation', desc: 'Premium exterior protection and aesthetics.', img: 'https://lirp.cdn-website.com/f361ace3/dms3rep/multi/opt/Vinyl-Siding-Cost-1920w.jpg' },
              { title: 'Windows', desc: 'Energy-efficient, flawless installations.', img: 'https://cdn-ilcklln.nitrocdn.com/esrmHDOZzqhSVEBIpQkaHzPHLIjgrKJd/assets/images/optimized/rev-3ce3c9c/daviswin.com/wp-content/uploads/2025/04/3-different-types-of-window-installation-explained-img.jpg' },
              { title: 'Doors', desc: 'Secure, elegant entryways.', img: 'https://woodhavenlumber.com/assets/news-events/658/exterior_door_installation__detail.jpg' }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease }}
                className="group relative overflow-hidden bg-gray-50"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                  <div className="w-8 h-0.5 bg-accent mb-4 transform origin-left transition-transform duration-500 group-hover:scale-x-150"></div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 font-light mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {service.desc}
                  </p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    Explore <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Editorial Layout */}
      <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-4 block">The JH Difference</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-deep leading-tight mb-6 md:mb-8">Built on Trust & Excellence</h2>
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-8 md:mb-10">
                We bring years of experience to every job, ensuring that your home improvement projects are completed to the highest standards. We believe in doing it right the first time, using premium materials and uncompromising attention to detail.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: 'High-Quality Work', desc: 'Unmatched craftsmanship on every project.' },
                  { title: 'Reliable Service', desc: 'On-time, respectful, and clean workspaces.' },
                  { title: 'Free Estimates', desc: 'Transparent pricing with no hidden fees.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <div className="text-accent font-serif text-3xl italic">0{i + 1}</div>
                    <div>
                      <h4 className="text-primary-deep font-bold uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                      <p className="text-gray-600 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="lg:col-span-7 relative order-1 lg:order-2"
            >
              <div className="aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] overflow-hidden">
                <img 
                  src="https://www.thespruce.com/thmb/c9ibNdGHBKMb8EkT3pKDqYiDN-I=/5130x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-601799249-5890dfb55f9b5874ee7dcd57.jpg" 
                  alt="Carpentry craftsmanship" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 bg-primary-deep p-6 md:p-10 border-l-4 border-accent shadow-xl">
                <p className="text-accent uppercase tracking-widest text-[10px] md:text-xs font-bold mb-1 md:mb-2">Established</p>
                <p className="font-serif text-2xl md:text-4xl text-white">Quality</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Ready to Begin?</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-white mb-6 md:mb-8 leading-tight">Let's Build Something <br/><span className="italic text-accent">Extraordinary</span></h2>
          <p className="text-lg md:text-xl text-gray-400 font-light mb-10 md:mb-12 max-w-2xl mx-auto">
            Contact us today for a free estimate. Experience the highest standard of carpentry and exterior services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-8 py-4 md:px-10 md:py-5 bg-accent text-primary-deep text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 w-full sm:w-auto"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
