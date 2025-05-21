import React from 'react';
import { Scissors, Clock, Calendar, User, ArrowLeft } from 'lucide-react';

const ProgramCard = ({ 
  title, 
  description, 
  icon: Icon, 
  duration, 
  ageGroup, 
  startDate, 
  color = "bg-azul-primary dark:bg-azul-primary-dark"
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-hover">
      <div className={`${color} p-4 flex justify-center`}>
        <Icon className="h-12 w-12 text-white dark:text-gray-100 animate-spin-slow" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-azul-dark dark:text-white mb-3 font-display">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Clock className="h-4 w-4 ml-2" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <User className="h-4 w-4 ml-2" />
            <span>{ageGroup}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4 ml-2" />
            <span>{startDate}</span>
          </div>
        </div>
        
        <a 
          href="#contact" 
          className="mt-6 block text-center text-azul-primary hover:text-azul-dark dark:text-azul-primary-dark dark:hover:text-azul-dark-dark font-medium border border-azul-primary hover:border-azul-dark dark:border-azul-primary-dark dark:hover:border-azul-dark-dark rounded-md py-2 transition-colors duration-300 group"
        >
          למד עוד
          <span className="inline-block transition-transform group-hover:translate-x-1 mr-1">←</span>
        </a>
      </div>
    </div>
  );
};

const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading dark:text-white">התוכנית שלנו</h2>
          <p className="section-subheading dark:text-gray-300">
            בחירה בין תוכניות ספרות מיוחדות המיועדות לקבוצות גיל ורמות מיומנות שונות
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProgramCard 
            title="יסודות ספרות לצעירים"
            description="הקדמה מושלמת לילדים המעוניינים ללמוד את יסודות הספרות. מתמקד בבטיחות, טיפול בכלים וטכניקות בסיסיות."
            icon={Scissors}
            duration="8 שבועות (סופי שבוע)"
            ageGroup="גילאי 10-13"
            startDate="כיתות חדשות כל חודש"
            color="bg-azul-primary dark:bg-azul-primary-dark"
          />
          
          <ProgramCard 
            title="אקדמיית עיצוב לנוער"
            description="תוכנית בינונית המלמדת סגנונות תספורת מגמתיים, טכניקות מכונת תספורת ומיומנויות שירות לקוחות לבני נוער."
            icon={Scissors}
            duration="12 שבועות (אחרי בית הספר)"
            ageGroup="גילאי 14-17"
            startDate="ספטמבר וינואר"
            color="bg-yellow-primary dark:bg-yellow-primary-dark"
          />
          
          <ProgramCard 
            title="טכניקות מתקדמות"
            description="לספרים צעירים מחויבים ורציניים שרוצים לפתח מיומנויות מתקדמות כולל גזירות, דירוגים וטכניקות מיוחדות."
            icon={Scissors}
            duration="16 שבועות (אינטנסיבי)"
            ageGroup="גילאי 15-18"
            startDate="הרשמה רבעונית"
            color="bg-azul-dark dark:bg-azul-dark-dark"
          />
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary dark:bg-azul-primary-dark dark:hover:bg-azul-dark-dark">
            שאל על התוכניות שלנו
            <ArrowLeft className="h-5 w-5 mr-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
