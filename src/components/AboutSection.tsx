import React from 'react';
import { Clock, Truck, Award, Shield } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">About MedZone Pharmaceuticals</h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            MedZone is a trusted pharmaceutical company committed to the development, manufacturing, and marketing of high-quality medicines across Pakistan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3683941/pexels-photo-3683941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="MedZone facility" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
              <div className="flex items-center">
                <div className="bg-secondary-500 p-3 rounded-full text-white mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-800">Certified Excellence</h4>
                  <p className="text-gray-600 text-sm">WHO-GMP Certified & ISO 9001 Approved</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-800">Our Mission</h3>
            <p className="text-gray-600 mb-8">
              To ensure better health by delivering safe and innovative healthcare products that improve the quality of life for patients across Pakistan and beyond. We are committed to maintaining the highest standards of quality, safety, and efficacy in all our products.
            </p>
            
            <h3 className="text-2xl font-bold mb-6 text-primary-800">Why Choose MedZone?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Truck className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Fast Delivery</h4>
                  <p className="text-gray-600">Efficient distribution network across Pakistan</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Certified Labs</h4>
                  <p className="text-gray-600">WHO-GMP certified manufacturing facilities</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Expert Staff</h4>
                  <p className="text-gray-600">Highly qualified pharmaceutical professionals</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Competitive Prices</h4>
                  <p className="text-gray-600">Affordable medicines without compromising quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;