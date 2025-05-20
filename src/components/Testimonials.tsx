
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
          className="w-12 h-12 rounded-full object-cover mr-4"
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
          <h2 className="section-heading">What Parents & Students Say</h2>
          <p className="section-subheading">
            Hear from families who have experienced our unique barbering programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="My son has always been interested in haircuts and styling. Azulamos has given him a productive way to channel that interest while learning valuable skills. He looks forward to class every week!"
            name="Jennifer P."
            relation="Parent of a 12-year-old student"
            rating={5}
            image="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80"
          />
          
          <TestimonialCard 
            quote="The instructors are patient and make learning fun. I've made friends and learned skills that have already helped me earn money cutting my friends' hair (with parent supervision!)."
            name="Tyler M."
            relation="Student, age 15"
            rating={5}
            image="https://images.unsplash.com/photo-1568493021943-4077b55c95a3?auto=format&fit=crop&q=80"
          />
          
          <TestimonialCard 
            quote="Azulamos provides such a supportive environment. My daughter was shy at first, but the community they've built has helped her confidence grow alongside her barbering skills."
            name="Michael K."
            relation="Parent of a 14-year-old student"
            rating={5}
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
          />
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="text-azul-primary hover:text-azul-dark font-medium underline underline-offset-4">
            Read more testimonials
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
