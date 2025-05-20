
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, name, relation, rating, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 card-hover">
      <div className="flex space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-primary fill-current" />
        ))}
      </div>
      
      <blockquote className="text-gray-600 mb-6 italic">"{quote}"</blockquote>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover ml-4"
        />
        <div>
          <p className="font-bold text-azul-dark">{name}</p>
          <p className="text-sm text-gray-500">{relation}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">מה הורים ותלמידים אומרים</h2>
          <p className="section-subheading">
            שמעו ממשפחות שחוו את תוכניות הספרות הייחודיות שלנו
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="הבן שלי תמיד התעניין בתספורות ועיצוב שיער. אזולמוס נתן לו דרך יצרנית לנתב את העניין הזה תוך למידת מיומנויות חשובות. הוא מצפה לשיעור בכל שבוע!"
            name="יעל פ."
            relation="הורה לתלמיד בן 12"
            rating={5}
            image="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80"
          />
          
          <TestimonialCard 
            quote="המדריכים סבלניים והופכים את הלמידה למהנה. יצרתי חברים ולמדתי מיומנויות שכבר עזרו לי להרוויח כסף בתספורות של חברים שלי (עם פיקוח של הורים!)."
            name="גיל מ."
            relation="תלמיד, בן 15"
            rating={5}
            image="https://images.unsplash.com/photo-1568493021943-4077b55c95a3?auto=format&fit=crop&q=80"
          />
          
          <TestimonialCard 
            quote="אזולמוס מספקת סביבה תומכת כל כך. הבת שלי הייתה ביישנית בהתחלה, אבל הקהילה שהם בנו עזרה לה לפתח ביטחון עצמי לצד מיומנויות הספרות שלה."
            name="מיכאל כ."
            relation="הורה לתלמידה בת 14"
            rating={5}
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
          />
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="text-azul-primary hover:text-azul-dark font-medium underline underline-offset-4">
            קרא עוד המלצות
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
