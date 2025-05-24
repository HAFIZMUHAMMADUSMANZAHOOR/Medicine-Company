import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "MedZone has been our trusted supplier for over 5 years. Their product quality and reliability are unmatched in the industry.",
    author: "Dr. Ahmed Khan",
    position: "Medical Director, Karachi Central Hospital"
  },
  {
    id: 2,
    text: "As a pharmacy chain owner, I appreciate MedZone's efficient distribution and consistent product quality. They've helped us serve our customers better.",
    author: "Sara Malik",
    position: "CEO, HealthPlus Pharmacy Chain"
  },
  {
    id: 3,
    text: "The R&D team at MedZone helped us develop a specialized formulation that has been tremendously successful in our clinics.",
    author: "Dr. Fatima Siddiqui",
    position: "Chief Physician, Islamabad Medical Center"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  
  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  
  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-800 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-800 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-primary-100">
            Hear from healthcare professionals and businesses who trust MedZone Pharmaceuticals.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-72 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-primary-800/50 backdrop-blur-sm rounded-xl p-8 md:p-10 text-center">
                  <div className="flex justify-center mb-6">
                    <Quote className="h-10 w-10 text-secondary-400" />
                  </div>
                  <p className="text-lg md:text-xl mb-8">{testimonial.text}</p>
                  <div>
                    <p className="font-bold text-lg">{testimonial.author}</p>
                    <p className="text-primary-300">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={goToPrevious}
              className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-secondary-500' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={goToNext}
              className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;