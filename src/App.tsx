import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'MedZone Pharmaceuticals | High-Quality Medicines';
    
    // Update favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 21H16M12 3V11M9 7H15M19.2 14.8V15.8C19.2 16.9201 19.2 17.4802 19.027 17.908C18.8781 18.2843 18.6188 18.6012 18.2905 18.8284C17.9168 19.0919 17.4343 19.2 16.47 19.2H7.53C6.56566 19.2 6.08349 19.0919 5.71014 18.8284C5.38185 18.6012 5.12206 18.2843 4.97312 17.908C4.8 17.4802 4.8 16.9201 4.8 15.8V14.8C4.8 13.6799 4.8 13.1198 4.97312 12.692C5.12206 12.3157 5.38185 11.9988 5.71014 11.7716C6.08349 11.5081 6.56566 11.4 7.53 11.4H16.47C17.4343 11.4 17.9168 11.5081 18.2905 11.7716C18.6188 11.9988 18.8781 12.3157 19.027 12.692C19.2 13.1198 19.2 13.6799 19.2 14.8Z" stroke="%231a5f7a" stroke-width="2" stroke-linecap="round"/></svg>';
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <TestimonialsSection  />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;