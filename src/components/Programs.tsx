
import React from 'react';
import { Scissors, Clock, Calendar, User } from 'lucide-react';

const ProgramCard = ({ 
  title, 
  description, 
  icon: Icon, 
  duration, 
  ageGroup, 
  startDate, 
  color = "bg-azul-primary"
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
      <div className={`${color} p-4 flex justify-center`}>
        <Icon className="h-12 w-12 text-white" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-azul-dark mb-3 font-display">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="border-t border-gray-100 pt-4 mt-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Clock className="h-4 w-4 mr-2" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <User className="h-4 w-4 mr-2" />
            <span>{ageGroup}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{startDate}</span>
          </div>
        </div>
        
        <a 
          href="#contact" 
          className="mt-6 block text-center text-azul-primary hover:text-azul-dark font-medium border border-azul-primary hover:border-azul-dark rounded-md py-2 transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Programs</h2>
          <p className="section-subheading">
            We offer specialized barbering programs designed for different age groups and skill levels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProgramCard 
            title="Junior Barber Basics"
            description="Perfect introduction for kids interested in learning the fundamentals of barbering. Focuses on safety, tool handling, and basic techniques."
            icon={Scissors}
            duration="8 Weeks (Weekends)"
            ageGroup="Ages 10-13"
            startDate="New classes monthly"
            color="bg-azul-primary"
          />
          
          <ProgramCard 
            title="Teen Styling Academy"
            description="Intermediate program teaching trending haircut styles, clipper techniques, and customer service skills for teenagers."
            icon={Scissors}
            duration="12 Weeks (After School)"
            ageGroup="Ages 14-17"
            startDate="September & January"
            color="bg-yellow-primary"
          />
          
          <ProgramCard 
            title="Advanced Techniques"
            description="For committed young barbers who want to develop advanced skills including designs, fades, and specialized techniques."
            icon={Scissors}
            duration="16 Weeks (Intensive)"
            ageGroup="Ages 15-18"
            startDate="Quarterly Enrollment"
            color="bg-azul-dark"
          />
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Ask About Our Programs
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
