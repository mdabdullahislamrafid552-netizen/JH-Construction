import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Phone } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      <main className={`flex-grow ${isHomePage ? '' : 'pt-[100px]'}`}>
        <Outlet />
      </main>
      <Footer />
      
      {/* Sticky Mobile Call Button */}
      <a
        href="tel:5085075483"
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] bg-primary-deep text-accent px-6 py-4 rounded-full shadow-2xl z-50 flex items-center justify-center gap-3 border border-accent/20 backdrop-blur-md hover:bg-primary-deep/90 transition-colors"
        aria-label="Call Now"
      >
        <Phone size={20} className="animate-pulse" />
        <span className="text-sm font-bold uppercase tracking-widest">Call Now</span>
      </a>
    </div>
  );
}
