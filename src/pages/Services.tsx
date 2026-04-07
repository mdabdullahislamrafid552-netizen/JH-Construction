import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const ease = [0.16, 1, 0.3, 1];
  
  const services = [
    {
      id: 'carpentry',
      title: 'General Carpentry',
      subtitle: 'Custom Woodwork & Repairs',
      description: 'We provide high-end carpentry services, from structural repairs to custom built-ins. Our attention to detail ensures that every cut, joint, and finish meets the highest standards of craftsmanship.',
      features: ['Structural repairs', 'Custom built-ins', 'Trim and molding', 'Deck repair & construction'],
      image: 'https://www.ctaontario.ca/wp-content/uploads/2023/06/general_carpenter_800x800_150dpi-min-768x768.jpg'
    },
    {
      id: 'siding',
      title: 'Siding Installation',
      subtitle: 'Premium Exterior Protection',
      description: 'Upgrade your home\'s exterior with durable, high-quality siding. We specialize in seamless installations that not only protect your home from the elements but also significantly enhance its curb appeal.',
      features: ['Vinyl siding systems', 'Wood & composite siding', 'Weatherproofing', 'Complete exterior overhauls'],
      image: 'https://lirp.cdn-website.com/f361ace3/dms3rep/multi/opt/Vinyl-Siding-Cost-1920w.jpg'
    },
    {
      id: 'windows',
      title: 'Windows Installation',
      subtitle: 'Energy Efficiency & Light',
      description: 'Transform your living spaces with premium window installations. We focus on energy efficiency, flawless sealing, and clean aesthetics to brighten your home while lowering energy costs.',
      features: ['Energy-efficient upgrades', 'Custom window fitting', 'Draft sealing & insulation', 'Clean, debris-free installation'],
      image: 'https://cdn-ilcklln.nitrocdn.com/esrmHDOZzqhSVEBIpQkaHzPHLIjgrKJd/assets/images/optimized/rev-3ce3c9c/daviswin.com/wp-content/uploads/2025/04/3-different-types-of-window-installation-explained-img.jpg'
    },
    {
      id: 'doors',
      title: 'Doors Installation',
      subtitle: 'Secure & Elegant Entryways',
      description: 'Make a lasting first impression with perfectly fitted entry and exterior doors. Our installations guarantee security, smooth operation, and an elevated architectural look.',
      features: ['Premium entry doors', 'Patio & sliding doors', 'High-security hardware fitting', 'Weather stripping'],
      image: 'https://woodhavenlumber.com/assets/news-events/658/exterior_door_installation__detail.jpg'
    }
  ];

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
          <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Our Expertise</span>
          <h1 className="font-serif text-5xl md:text-7xl text-primary-deep leading-tight mb-8">
            Services of <br/><span className="italic text-accent">Distinction</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Professional carpentry and exterior solutions designed for durability, precision, and timeless elegance.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/5] overflow-hidden relative group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 border border-black/10 pointer-events-none"></div>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-4 block">{service.subtitle}</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-primary-deep mb-8">{service.title}</h2>
                  <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
                    {service.description}
                  </p>
                  
                  <div className="w-12 h-px bg-gray-300 mb-10"></div>
                  
                  <ul className="space-y-4 mb-12">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-800 font-light">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full block"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary-deep hover:text-accent transition-colors"
                  >
                    Request Estimate 
                    <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-deep py-24 border-t-4 border-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Have a Custom Project in Mind?</h2>
          <p className="text-lg text-gray-400 font-light mb-10">We handle a wide variety of bespoke carpentry and exterior upgrades.</p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-5 bg-accent text-primary-deep text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
          >
            Discuss Your Vision
          </Link>
        </div>
      </section>
    </div>
  );
}
