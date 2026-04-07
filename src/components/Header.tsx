import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerBg = isScrolled 
    ? 'bg-white shadow-sm py-4' 
    : isHomePage 
      ? 'bg-transparent py-6' 
      : 'bg-white border-b border-gray-100 py-6';

  // If mobile menu is open, force text to be white so the close button is visible on the dark background
  const textColor = isMobileMenuOpen ? 'text-white' : (isScrolled || !isHomePage ? 'text-gray-900' : 'text-white');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isMobileMenuOpen ? 'bg-transparent py-6' : headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="https://i.imgur.com/1uDPRil.png" 
              alt="JH Construction Logo" 
              className={`h-14 sm:h-16 md:h-28 lg:h-32 object-contain transition-all duration-300 ${isMobileMenuOpen ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 hover:text-accent ${
                  location.pathname === link.path ? 'text-accent' : textColor
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:5085075483"
              className={`px-6 py-3 text-xs font-bold uppercase tracking-widest border transition-colors duration-300 ${
                isScrolled || !isHomePage
                  ? 'border-primary-deep text-primary-deep hover:bg-primary-deep hover:text-accent'
                  : 'border-white text-white hover:bg-white hover:text-primary-deep'
              }`}
            >
              (508) 507-5483
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Premium Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 z-40 bg-primary-deep flex flex-col pt-32 px-6 pb-12 h-screen overflow-y-auto"
          >
            <div className="flex flex-col gap-8 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.path}
                    className={`block text-4xl font-serif tracking-tight ${
                      location.pathname === link.path
                        ? 'text-accent italic'
                        : 'text-white hover:text-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-auto pt-12 border-t border-white/10"
            >
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Get an Estimate</p>
              <a
                href="tel:5085075483"
                className="block text-white text-3xl font-serif hover:text-accent transition-colors"
              >
                (508) 507-5483
              </a>
              <a
                href="mailto:info@jhconstructionma.com"
                className="block text-gray-400 text-sm mt-4 hover:text-white transition-colors"
              >
                info@jhconstructionma.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
