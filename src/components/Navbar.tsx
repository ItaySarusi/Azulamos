import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Scissors } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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
        "fixed w-full z-50 transition-all duration-300 bg-white dark:bg-gray-900",
        isScrolled 
          ? "shadow-md py-2 md:py-2" 
          : "py-2 md:py-4"
      )}
    >
      <div className="container mx-auto px-3 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Scissors className="h-6 w-6 md:h-8 md:w-8 text-azul-primary" />
            <span className="mr-2 md:mr-4 text-xl md:text-2xl font-bold font-display text-azul-primary">
              פינק ברבר
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-reverse-8">
            <a href="#programs" className="text-gray-700 dark:text-gray-300 hover:text-azul-primary font-medium ml-8">תוכניות</a>
            <a href="#why-us" className="text-gray-700 dark:text-gray-300 hover:text-azul-primary font-medium ml-8">למה אנחנו</a>
            <a href="#instructors" className="text-gray-700 dark:text-gray-300 hover:text-azul-primary font-medium ml-8">היכרות</a>
            <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-azul-primary font-medium ml-8">המלצות</a>
            <a href="#contact" className="btn-primary ml-8">צור קשר</a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-reverse-2 md:space-x-reverse-4">
            <button 
              className="text-azul-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg 
                className="w-5 h-5 md:w-6 md:h-6" 
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
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 mt-2 py-3 px-2 rounded-lg shadow-lg animate-fade-in">
            <a href="#programs" className="block py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-azul-primary hover:text-white rounded-md">תוכניות</a>
            <a href="#why-us" className="block py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-azul-primary hover:text-white rounded-md">למה אנחנו</a>
            <a href="#instructors" className="block py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-azul-primary hover:text-white rounded-md">היכרות</a>
            <a href="#testimonials" className="block py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-azul-primary hover:text-white rounded-md">המלצות</a>
            <a href="#contact" className="block py-2 px-3 mt-2 text-sm bg-azul-primary text-white text-center rounded-md">צור קשר</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
