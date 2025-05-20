
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "ההודעה נשלחה!",
        description: "קיבלנו את פנייתך ונחזור אליך בהקדם.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        childAge: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-azul-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">מוכנים להתחיל?</h2>
            <p className="text-lg mb-8 opacity-90">
              צרו קשר עוד היום כדי ללמוד עוד על התוכניות שלנו או לתאם סיור במתקן שלנו. אנחנו נרגשים לקבל את הילד שלכם למשפחת אזולמוס!
            </p>
            
            <div className="bg-azul-dark rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 font-display">בקרו בסטודיו שלנו</h3>
              <div className="space-y-3">
                <p className="flex items-start">
                  <svg className="h-6 w-6 ml-3 mt-1 text-yellow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>רחוב הספרים 123, דירה 101<br />תל אביב, ישראל</span>
                </p>
                <p className="flex items-start">
                  <svg className="h-6 w-6 ml-3 mt-1 text-yellow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>03-123-4567</span>
                </p>
                <p className="flex items-start">
                  <svg className="h-6 w-6 ml-3 mt-1 text-yellow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@azulamos.com</span>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 font-display">שעות הפעילות שלנו</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="font-medium">יום ראשון - חמישי</p>
                  <p>14:00 - 20:00</p>
                </div>
                <div>
                  <p className="font-medium">יום שישי</p>
                  <p>9:00 - 17:00</p>
                </div>
                <div>
                  <p className="font-medium">יום שבת</p>
                  <p>סגור</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-gray-800 rounded-xl p-6 md:p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-azul-dark mb-6 font-display">שלחו לנו הודעה</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="ישראל ישראלי"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">כתובת דוא״ל</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="israel@example.com"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">מספר טלפון</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="050-123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">גיל הילד/ה</label>
                  <Input
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="12"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">ההודעה שלך</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full"
                  rows={4}
                  placeholder="אני מעוניין/ת לדעת יותר על התוכניות שלכם..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-azul-primary hover:bg-azul-dark text-white font-semibold py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "שולח..." : "שלח הודעה"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
