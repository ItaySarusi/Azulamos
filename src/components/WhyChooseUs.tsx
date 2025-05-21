import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const FeatureCard = ({ title, description, number }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 card-hover">
      <div className="absolute -top-5 -right-5 bg-yellow-primary text-azul-dark dark:text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold font-display">
        {number}
      </div>
      <h3 className="text-xl font-bold text-azul-dark dark:text-white mb-3 mt-4 font-display">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding dark:bg-gray-900" style={{
      background: `linear-gradient(rgba(126, 105, 171, 0.05), rgba(126, 105, 171, 0.1))`,
      backgroundImage: `dark:none`
    }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading dark:text-white">למה לבחור בפינק ברבר</h2>
          <p className="section-subheading dark:text-gray-300">
            פה לא רק תלמדו מיומנות - אנחנו בונים ביטחון, יצירתיות ומקצועיות עתידית
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <FeatureCard 
            title="תוכנית לימודים ממוקדת לנוער"
            description="התוכניות שלנו מתוכננות במיוחד עבור לומדים צעירים, באמצעות שיטות הוראה וציוד מותאם לגיל."
            number="1"
          />
          
          <FeatureCard 
            title="ציוד מקצועי"
            description="התלמידים מתאמנים עם כלי ספרות אמיתיים, איכותיים בסביבה מבוקרת ובטוחה עם פיקוח ובקרה מקצועית."
            number="2"
          />
          
          <FeatureCard 
            title="יש על מי לסמוך"
            description="המורה שתקבל יהיה ספר עם הרבה ניסיון ותוצאות, שיודע גם ללמד, מעבר לזה שהוא מקצוען."
            number="3"
          />
          
          <FeatureCard 
            title="כיתות קטנות"
            description="אצלנו שומרים על יחס נמוך של תלמידים למורה כדי להבטיח שכל תלמיד יקבל תשומת לב והדרכה אישית."
            number="4"
          />
          
          <FeatureCard 
            title="ביטוי יצירתי"
            description="אנחנו מעודדים יצירתיות וביטוי עצמי דרך ספרות, עוזרים לתלמידים לפתח את הסגנון הייחודי שלהם."
            number="5"
          />
          
          <FeatureCard 
            title="הזדמנויות עתידיות"
            description="התלמידים רוכשים מיומנויות חשובות שיכולות להוביל לפיתוח תחביב, עבודה במהלך הלימודים או מסלולי קריירה עתידיים, אפילו במספרה שלנו."
            number="6"
          />
        </div>
        
        <div className="mt-16 bg-azul-primary dark:bg-gray-800 rounded-xl p-8 md:p-10 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">מוכנים להתחיל את מסע הספרות שלכם?</h3>
          <p className="mb-6 text-lg opacity-90 max-w-2xl mx-auto">
            התוכניות שלנו מתמלאות במהירות.<br />
            צרו קשר עוד היום כדי לתאם סיור  אצלנו וללמוד עוד על תהליך ההרשמה.
          </p>
          <a href="#contact" className="btn-secondary dark:bg-azul-primary dark:text-white dark:hover:bg-azul-dark">
            התחילו עוד היום
            <ArrowLeft className="h-5 w-5 mr-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
