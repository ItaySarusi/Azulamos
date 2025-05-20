
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import WhyChooseUs from '@/components/WhyChooseUs';
import Instructors from '@/components/Instructors';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Programs />
      <WhyChooseUs />
      <Instructors />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
