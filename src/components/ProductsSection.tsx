import React, { useState } from 'react';

// Define product categories and their items
const productCategories = [
  {
    id: 'painkillers',
    name: 'Painkillers',
    description: 'Effective relief from various types of pain',
    image: 'https://images.pexels.com/photos/139398/himalayas-mountains-nepal-hill-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: [
      { id: 1, name: 'MedRelief', description: 'Fast-acting pain relief tablets', dosage: '500mg' },
      { id: 2, name: 'PainEase', description: 'Long-lasting pain management', dosage: '650mg' },
      { id: 3, name: 'FeverCare', description: 'Pain and fever reduction', dosage: '500mg' },
    ]
  },
  {
    id: 'antibiotics',
    name: 'Antibiotics',
    description: 'Fighting bacterial infections effectively',
    image: 'https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: [
      { id: 4, name: 'BacteriClear', description: 'Broad-spectrum antibiotic', dosage: '250mg' },
      { id: 5, name: 'InfectShield', description: 'For respiratory tract infections', dosage: '500mg' },
      { id: 6, name: 'ZoneCillin', description: 'Powerful infection fighter', dosage: '750mg' },
    ]
  },
  {
    id: 'multivitamins',
    name: 'Multivitamins',
    description: 'Essential nutrients for overall health',
    image: 'https://images.pexels.com/photos/3683937/pexels-photo-3683937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: [
      { id: 7, name: 'VitaComplete', description: 'Complete multivitamin formula', dosage: 'Daily tablet' },
      { id: 8, name: 'ImmunoBoost', description: 'Immunity enhancing vitamins', dosage: 'Chewable' },
      { id: 9, name: 'EnergyPlus', description: 'Energy and vitality supplement', dosage: 'Capsule' },
    ]
  },
  {
    id: 'skincare',
    name: 'Skin Care',
    description: 'Pharmaceutical-grade skincare solutions',
    image: 'https://images.pexels.com/photos/3373324/pexels-photo-3373324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: [
      { id: 10, name: 'DermaClear', description: 'Acne treatment cream', dosage: 'Topical' },
      { id: 11, name: 'HydraShield', description: 'Protective moisturizer', dosage: 'Daily application' },
      { id: 12, name: 'EczemaRelief', description: 'Soothes eczema symptoms', dosage: 'As needed' },
    ]
  },
  {
    id: 'pediatric',
    name: 'Pediatric Medicines',
    description: 'Safe and effective formulations for children',
    image: 'https://images.pexels.com/photos/4429141/pexels-photo-4429141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: [
      { id: 13, name: 'KidsCough', description: 'Gentle cough syrup for children', dosage: 'Age-based' },
      { id: 14, name: 'FeveRest Junior', description: 'Children\'s fever reducer', dosage: 'Liquid' },
      { id: 15, name: 'GrowWell', description: 'Pediatric multivitamin', dosage: 'Chewable' },
    ]
  },
  {
    id: 'herbal',
    name: 'Herbal Remedies',
    description: 'Natural solutions based on traditional medicine',
    image: 'https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: [
      { id: 16, name: 'NatureCare', description: 'Herbal immune support', dosage: 'Daily' },
      { id: 17, name: 'StressLess', description: 'Natural stress reliever', dosage: 'As needed' },
      { id: 18, name: 'SleepWell', description: 'Herbal sleep aid', dosage: 'Before bed' },
    ]
  }
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);
  const selectedCategory = productCategories.find(cat => cat.id === activeCategory) || productCategories[0];
  
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">Our Products</h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Discover our wide range of high-quality pharmaceutical products designed to improve health and wellbeing.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {productCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Category Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Category Image and Description */}
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <div className="relative h-64 md:h-80">
                <img 
                  src={selectedCategory.image} 
                  alt={selectedCategory.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{selectedCategory.name}</h3>
                    <p>{selectedCategory.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h4 className="font-bold text-primary-800 mb-4">Why choose our {selectedCategory.name.toLowerCase()}?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Highest quality ingredients</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Stringent quality control</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Clinically tested formulations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Affordable pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Products List */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategory.products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="p-6">
                    <div className="w-12 h-12 mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 21H16M12 3V11M9 7H15M19.2 14.8V15.8C19.2 16.9201 19.2 17.4802 19.027 17.908C18.8781 18.2843 18.6188 18.6012 18.2905 18.8284C17.9168 19.0919 17.4343 19.2 16.47 19.2H7.53C6.56566 19.2 6.08349 19.0919 5.71014 18.8284C5.38185 18.6012 5.12206 18.2843 4.97312 17.908C4.8 17.4802 4.8 16.9201 4.8 15.8V14.8C4.8 13.6799 4.8 13.1198 4.97312 12.692C5.12206 12.3157 5.38185 11.9988 5.71014 11.7716C6.08349 11.5081 6.56566 11.4 7.53 11.4H16.47C17.4343 11.4 17.9168 11.5081 18.2905 11.7716C18.6188 11.9988 18.8781 12.3157 19.027 12.692C19.2 13.1198 19.2 13.6799 19.2 14.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                        {product.dosage}
                      </span>
                      <button className="text-secondary-600 hover:text-secondary-700 font-medium">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;