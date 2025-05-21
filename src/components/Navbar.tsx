import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Scissors } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Scissors className="h-8 w-8 text-azul-primary" />
            <span className="mr-4 text-2xl font-bold font-display text-azul-primary">
              פינק ברבר
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-reverse-8">
            <a href="#programs" className="text-gray-700 hover:text-azul-primary font-medium ml-8">תוכניות</a>
            <a href="#why-us" className="text-gray-700 hover:text-azul-primary font-medium ml-8">למה אנחנו</a>
            <a href="#instructors" className="text-gray-700 hover:text-azul-primary font-medium ml-8">הצוות שלנו</a>
            <a href="#testimonials" className="text-gray-700 hover:text-azul-primary font-medium ml-8">המלצות</a>
            <a href="#contact" className="btn-primary">צור קשר</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-azul-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg animate-fade-in">
            <a href="#programs" className="block py-2 px-4 text-gray-700 hover:bg-azul-primary hover:text-white rounded-md">תוכניות</a>
            <a href="#why-us" className="block py-2 px-4 text-gray-700 hover:bg-azul-primary hover:text-white rounded-md">למה אנחנו</a>
            <a href="#instructors" className="block py-2 px-4 text-gray-700 hover:bg-azul-primary hover:text-white rounded-md">הצוות שלנו</a>
            <a href="#testimonials" className="block py-2 px-4 text-gray-700 hover:bg-azul-primary hover:text-white rounded-md">המלצות</a>
            <a href="#contact" className="block py-2 px-4 mt-2 bg-azul-primary text-white text-center rounded-md">צור קשר</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
