import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-gray-300 pt-24 pb-12 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="block mb-6">
              <img 
                src="https://i.imgur.com/1uDPRil.png" 
                alt="JH Construction Logo" 
                className="h-24 md:h-32 object-contain"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-md font-light">
              High-quality carpentry and exterior services across Massachusetts. We build with precision, durability, and a commitment to excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-sans text-xs uppercase tracking-widest font-bold mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-accent transition-colors font-light">Home</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors font-light">Services</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-colors font-light">Projects</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors font-light">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors font-light">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-sans text-xs uppercase tracking-widest font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 font-light">
              <li>
                <span className="block text-accent text-xs uppercase tracking-widest mb-1">Phone</span>
                <a href="tel:5085075483" className="text-lg text-white hover:text-accent transition-colors">(508) 507-5483</a>
              </li>
              <li>
                <span className="block text-accent text-xs uppercase tracking-widest mb-1">Email</span>
                <a href="mailto:info@jhconstructionma.com" className="hover:text-white transition-colors">info@jhconstructionma.com</a>
              </li>
              <li>
                <span className="block text-accent text-xs uppercase tracking-widest mb-1">Location</span>
                <span>Massachusetts, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-light">
            &copy; {new Date().getFullYear()} JH Construction. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 font-light">
            Licensed & Insured in Massachusetts
          </p>
        </div>
      </div>
    </footer>
  );
}
