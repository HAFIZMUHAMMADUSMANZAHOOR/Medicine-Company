import React from 'react';
import { Factory, FlaskRound as Flask, Microscope, Truck } from 'lucide-react';

const services = [
  {
    id: 'manufacturing',
    title: 'Third-Party Manufacturing',
    description: 'We offer comprehensive contract manufacturing services with state-of-the-art facilities that meet international standards. Our manufacturing capabilities span tablets, capsules, syrups, and topical preparations.',
    icon: <Factory className="h-8 w-8" />,
    features: [
      'WHO-GMP certified facilities',
      'Quality control at every stage',
      'Flexible batch sizes',
      'Competitive pricing'
    ]
  },
  {
    id: 'formulation',
    title: 'Product Formulation',
    description: 'Our expert team develops innovative pharmaceutical formulations that meet the highest standards of efficacy and safety. We can help bring your product ideas to life with our specialized knowledge.',
    icon: <Flask className="h-8 w-8" />,
    features: [
      'Custom formulation development',
      'Stability testing',
      'Bioequivalence studies',
      'Regulatory documentation support'
    ]
  },
  {
    id: 'randd',
    title: 'Research & Development',
    description: 'Our dedicated R&D team works tirelessly to develop new and improved pharmaceutical products. We invest in innovation to address evolving healthcare needs.',
    icon: <Microscope className="h-8 w-8" />,
    features: [
      'New product development',
      'Formulation optimization',
      'Clinical research support',
      'Technology transfer'
    ]
  },
  {
    id: 'distribution',
    title: 'Wholesale Distribution',
    description: 'With our extensive distribution network, we ensure timely delivery of pharmaceutical products across Pakistan. Our logistics expertise guarantees product integrity throughout the supply chain.',
    icon: <Truck className="h-8 w-8" />,
    features: [
      'Nationwide distribution network',
      'Temperature-controlled logistics',
      'Inventory management',
      'Just-in-time delivery options'
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">Our Services</h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of pharmaceutical services tailored to meet your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg group"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <h4 className="font-bold text-gray-800 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-primary-800 rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to collaborate?</h3>
              <p className="text-primary-100 mb-8">
                Whether you're looking for manufacturing partners, distribution services, or product development expertise, our team is ready to help you succeed.
              </p>
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-secondary-500 text-white rounded-md hover:bg-secondary-600 transition-colors"
              >
                Contact Our Team
              </a>
            </div>
            <div className="hidden lg:block relative h-full min-h-[300px]">
              <img 
                src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Pharmaceutical manufacturing" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;