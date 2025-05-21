import React from 'react';

const TestimonialCard = ({ quote, author, role }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 card-hover">
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg whitespace-pre-line">{quote}</p>
      <div className="text-right">
        <p className="font-semibold text-azul-dark dark:text-white">{author}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading dark:text-white">המלצות</h2>
          <p className="section-subheading dark:text-gray-300">
            מה אומרים על דן והשיעורים שלו
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="אין על דן! הבן שלי היה ממש מתוסכל מהלימודים הרגילים, אבל מאז שהוא התחיל אצל דן - הוא פשוט משתגע על השיעורים. כל שבוע הוא מחכה ליום של השיעור. דן פשוט יודע איך להעביר את השיעורים בצורה שכיף ללמוד."
            author="יעל פ."
            role="אמא של תלמיד, 14"
          />
          <TestimonialCard 
            quote="אני כבר שנה אצל דן ואני פשוט חולה עליו. הוא מלמד בצורה כיפית, לא משעמם כמו בבית ספר. הוא תמיד מסביר הכל עד שאני מבין, גם אם צריך לחזור כמה פעמים. כבר עשיתי תספורות לחברים שלי ויצא מטורף !"
            author="גיל מ."
            role="תלמיד, 15"
          />
          <TestimonialCard 
            quote={`הבן שלי היה ממש ביישן בהתחלה, אבל דן פשוט ידע איך להתחבר אליו.
הוא כל כך סבלני ומעודד.
הוא כבר עושה תספורות בבית לכל המשפחה! 😊
ממליץ בחום.`}
            author="מיכאל כ."
            role="אבא של תלמיד, 16"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
