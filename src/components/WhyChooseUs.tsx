
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeatureCard = ({ title, description, number }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md p-6 card-hover">
      <div className="absolute -top-5 -left-5 bg-yellow-primary text-azul-dark w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold font-display">
        {number}
      </div>
      <h3 className="text-xl font-bold text-azul-dark mb-3 mt-4 font-display">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding" style={{
      background: `linear-gradient(rgba(126, 105, 171, 0.05), rgba(126, 105, 171, 0.1))`
    }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">Why Choose Azulamos</h2>
          <p className="section-subheading">
            We're not just teaching a skill - we're building confidence, creativity, and future professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <FeatureCard 
            title="Kid-Focused Curriculum"
            description="Our programs are specifically designed with young learners in mind, using age-appropriate teaching methods and equipment."
            number="1"
          />
          
          <FeatureCard 
            title="Professional Equipment"
            description="Students train with real, high-quality barbering tools in a controlled, safe environment with proper supervision."
            number="2"
          />
          
          <FeatureCard 
            title="Certified Instructors"
            description="All our teachers are licensed barbers with experience in education and working with children and teens."
            number="3"
          />
          
          <FeatureCard 
            title="Small Class Sizes"
            description="We maintain low student-to-teacher ratios to ensure every student receives personalized attention and guidance."
            number="4"
          />
          
          <FeatureCard 
            title="Creative Expression"
            description="We encourage creativity and self-expression through barbering, helping students develop their own unique style."
            number="5"
          />
          
          <FeatureCard 
            title="Future Opportunities"
            description="Students gain valuable skills that can lead to hobby development, part-time work during studies, or future career paths."
            number="6"
          />
        </div>
        
        <div className="mt-16 bg-azul-primary rounded-xl p-8 md:p-10 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">Ready to start your child's barbering journey?</h3>
          <p className="mb-6 text-lg opacity-90 max-w-2xl mx-auto">
            Our programs fill up quickly. Contact us today to schedule a tour of our facility and learn more about our enrollment process.
          </p>
          <a href="#contact" className="btn-secondary">
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
