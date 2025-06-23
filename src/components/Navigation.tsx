
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-brand-primary">
            GroupMAX
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-brand-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-brand-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-700 hover:text-brand-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-brand-primary transition-colors">
              Contact
            </a>
          </div>

          <Button className="bg-brand-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform">
            Book Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
