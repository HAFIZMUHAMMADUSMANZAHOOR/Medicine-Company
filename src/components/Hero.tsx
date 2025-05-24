import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from './ui/Link';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80"></div>
        <img 
          src="https://images.pexels.com/photos/3786153/pexels-photo-3786153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Pharmaceutical research" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Better Health Through <span className="text-secondary-400">Innovation</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            MedZone is a trusted pharmaceutical company providing high-quality and affordable medicines across Pakistan.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#products" 
              className="px-6 py-3 bg-secondary-500 text-white rounded-md hover:bg-secondary-600 transition-colors flex items-center"
            >
              Explore Products <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="#contact" 
              className="px-6 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Certifications */}
          <div className="mt-16 flex items-center space-x-8">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="mr-3 p-2 bg-white/20 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="block text-sm text-gray-300">Certified</span>
                <span className="font-semibold">WHO-GMP</span>
              </div>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="mr-3 p-2 bg-white/20 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="block text-sm text-gray-300">Approved</span>
                <span className="font-semibold">ISO 9001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;