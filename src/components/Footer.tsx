import React from 'react';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-azul-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scissors className="h-6 w-6 text-yellow-primary ml-2" />
              <span className="text-xl font-bold font-display">Pink Barber</span>
            </div>
            <p className="mb-4 text-gray-300">
              מעצימים את הדור הבא של ספרים באמצעות תוכניות מהנות, חינוכיות ומעשיות המותאמות במיוחד לילדים.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-yellow-primary transition-colors"
                aria-label="אינסטגרם"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-yellow-primary transition-colors"
                aria-label="פייסבוק"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-yellow-primary transition-colors"
                aria-label="טוויטר"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-display">תוכניות</h3>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-gray-300 hover:text-yellow-primary transition-colors">יסודות ספרות לצעירים</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-yellow-primary transition-colors">אקדמיית עיצוב לנוער</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-yellow-primary transition-colors">טכניקות מתקדמות</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-yellow-primary transition-colors">מחנות קיץ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-display">עלינו</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-primary transition-colors">הסיפור שלנו</a></li>
              <li><a href="#instructors" className="text-gray-300 hover:text-yellow-primary transition-colors">הצוות שלנו</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-primary transition-colors">קריירה</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-yellow-primary transition-colors">המלצות</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-display">צור קשר</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">רחוב הספרים 123, דירה 101<br />תל אביב, ישראל</li>
              <li><a href="tel:03-123-4567" className="text-gray-300 hover:text-yellow-primary transition-colors">03-123-4567</a></li>
              <li><a href="mailto:info@pinkbarber.com" className="text-gray-300 hover:text-yellow-primary transition-colors">info@pinkbarber.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Pink Barber. כל הזכויות שמורות.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-yellow-primary transition-colors">מדיניות פרטיות</a> | 
            <a href="#" className="hover:text-yellow-primary transition-colors mr-2">תנאי שימוש</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
