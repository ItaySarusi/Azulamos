
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const InstructorCard = ({ name, title, bio, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-azul-dark font-display">{name}</h3>
        <p className="text-yellow-dark font-medium mb-4">{title}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        
        <div className="flex space-x-3">
          <a 
            href="#" 
            className="text-gray-600 hover:text-azul-primary transition-colors"
            aria-label={`${name}'s Instagram profile`}
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-azul-primary transition-colors"
            aria-label={`${name}'s Facebook profile`}
          >
            <Facebook className="h-5 w-5" />
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
        <div className="text-center mb-12">
          <h2 className="section-heading">Meet Our Instructors</h2>
          <p className="section-subheading">
            Our team of experienced barbers is passionate about teaching the next generation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InstructorCard 
            name="Marcus Johnson"
            title="Head Instructor"
            bio="With 15 years of barbering experience and 7 years teaching, Marcus specializes in creating a fun learning environment for kids."
            image="https://images.unsplash.com/photo-1618149103124-8296f926447b?auto=format&fit=crop&q=80"
          />
          
          <InstructorCard 
            name="Sophia Rodriguez"
            title="Youth Program Director"
            bio="A master barber with experience working with children, Sophia develops our curriculum to be engaging and educational for all ages."
            image="https://images.unsplash.com/photo-1620794108219-aedbaded4eea?auto=format&fit=crop&q=80"
          />
          
          <InstructorCard 
            name="David Chen"
            title="Technical Specialist"
            bio="David excels at teaching precision cutting and designs. His patient approach makes complex techniques accessible to young learners."
            image="https://images.unsplash.com/photo-1599032909756-5deb82fea3b0?auto=format&fit=crop&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Instructors;
