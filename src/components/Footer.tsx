
import React from 'react';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-azul-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scissors className="h-6 w-6 text-yellow-primary" />
              <span className="ml-2 text-xl font-bold font-display">Azulamos</span>
            </div>
            <p className="mb-4 text-gray-300">
              Empowering the next generation of barbers through fun, educational, and hands-on programs designed specifically for kids.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-yellow-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-yellow-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-yellow-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-display">Programs</h3>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-gray-300 hover:text-yellow-primary transition-colors">Junior Barber Basics</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-yellow-primary transition-colors">Teen Styling Academy</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-yellow-primary transition-colors">Advanced Techniques</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-yellow-primary transition-colors">Summer Camps</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-display">About Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-primary transition-colors">Our Story</a></li>
              <li><a href="#instructors" className="text-gray-300 hover:text-yellow-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-primary transition-colors">Careers</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-yellow-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-display">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">123 Barber Street, Suite 101<br />Los Angeles, CA 90001</li>
              <li><a href="tel:5551234567" className="text-gray-300 hover:text-yellow-primary transition-colors">(555) 123-4567</a></li>
              <li><a href="mailto:info@azulamos.com" className="text-gray-300 hover:text-yellow-primary transition-colors">info@azulamos.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Azulamos. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-yellow-primary transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-yellow-primary transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
