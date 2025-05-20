
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center" style={{
      background: `linear-gradient(rgba(126, 105, 171, 0.85), rgba(126, 105, 171, 0.95)), url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in">
              Shaping the Next Generation of Barbers
            </h1>
            <p className="text-lg md:text-xl mb-8 text-yellow-light opacity-90 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              At Azulamos, we teach kids the art and skill of barbering in a fun, 
              supportive environment. Turn passion into profession from an early age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#programs" className="btn-secondary">
                Explore Programs
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#contact" className="text-white border-2 border-white hover:bg-white hover:text-azul-primary font-semibold py-3 px-6 rounded-md transition-all duration-300 text-center">
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white p-5 rounded-xl shadow-lg max-w-md w-full">
              <div className="bg-yellow-light rounded-lg p-6 border-2 border-yellow-primary">
                <h3 className="text-2xl font-bold text-azul-dark mb-4 font-display">Starting Soon!</h3>
                <p className="text-gray-700 mb-4">New beginner-friendly classes for ages 10-16 starting next month. Limited spots available.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-azul-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Learn fundamentals of barbering
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-azul-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Practice on realistic mannequins
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-azul-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Small class sizes with personalized attention
                  </li>
                </ul>
                <a href="#contact" className="btn-primary w-full justify-center">Reserve Your Spot</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#programs" 
          className="text-white animate-bounce"
          aria-label="Scroll down to programs section"
        >
          <svg 
            className="h-10 w-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
