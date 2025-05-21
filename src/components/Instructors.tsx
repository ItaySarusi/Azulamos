import React from 'react';
import { Instagram } from 'lucide-react';
import danImage from '../assets/images/dan.jpeg';

const InstructorCard = ({ name, title, bio, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover max-w-xl mx-auto">
      <div className="relative w-full">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8 text-center">
        <h3 className="text-3xl font-bold text-azul-dark font-display mb-2">{name}</h3>
        <p className="text-yellow-dark font-medium mb-4 text-xl">{title}</p>
        <p className="text-gray-600 mb-6 text-lg whitespace-pre-line">
          {`ספר בעל ניסיון של שנים.
מורה עם ניסיון בלימוד ספרים צעירים.
מומחה בדירוגים וגזירות.`}
        </p>
        
        <div className="flex justify-center">
          <a 
            href="https://www.instagram.com/_pinkbarber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-azul-primary transition-colors"
            aria-label={`הפרופיל של ${name} באינסטגרם`}
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Instructors = () => {
  return (
    <section id="instructors" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">הבעלים והמורה הראשי</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            ממקצוען יכולים לצאת רק מקצוענים.
          </p>
        </div>
        
        <div className="flex justify-center">
          <InstructorCard 
            name="דן אזולאי"
            title="בעלים ומורה ראשי - פינק ברבר"
            bio="ספר בעל ניסיון של שנים.
מורה עם ניסיון בלימוד ספרים צעירים.
מומחה בדירוגים וגזירות."
            image={danImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Instructors;
