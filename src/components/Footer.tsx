import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from './ui/Link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-white p-2 rounded-md mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 21H16" stroke="#1a5f7a" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 3L12 11" stroke="#1a5f7a" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 7L15 7" stroke="#1a5f7a" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M19.2 14.8L19.2 15.8C19.2 16.9201 19.2 17.4802 19.027 17.908C18.8781 18.2843 18.6188 18.6012 18.2905 18.8284C17.9168 19.0919 17.4343 19.2 16.47 19.2L7.53 19.2C6.56566 19.2 6.08349 19.0919 5.71014 18.8284C5.38185 18.6012 5.12206 18.2843 4.97312 17.908C4.8 17.4802 4.8 16.9201 4.8 15.8L4.8 14.8C4.8 13.6799 4.8 13.1198 4.97312 12.692C5.12206 12.3157 5.38185 11.9988 5.71014 11.7716C6.08349 11.5081 6.56566 11.4 7.53 11.4L16.47 11.4C17.4343 11.4 17.9168 11.5081 18.2905 11.7716C18.6188 11.9988 18.8781 12.3157 19.027 12.692C19.2 13.1198 19.2 13.6799 19.2 14.8Z" stroke="#1a5f7a" strokeWidth="2"/>
                </svg>
              </div>
              <span className="font-bold text-xl">MedZone</span>
            </div>
            <p className="mb-4 text-gray-300">
              MedZone is a trusted pharmaceutical company providing high-quality and affordable medicines across Pakistan.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/medzonepharma" className="text-white hover:text-secondary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/medzonepharma" className="text-white hover:text-secondary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/company/medzonepharma" className="text-white hover:text-secondary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-secondary-500 after:-bottom-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-300 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-secondary-500 after:-bottom-2">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#painkillers" className="text-gray-300 hover:text-white transition-colors">Painkillers</Link>
              </li>
              <li>
                <Link href="#antibiotics" className="text-gray-300 hover:text-white transition-colors">Antibiotics</Link>
              </li>
              <li>
                <Link href="#multivitamins" className="text-gray-300 hover:text-white transition-colors">Multivitamins</Link>
              </li>
              <li>
                <Link href="#skincare" className="text-gray-300 hover:text-white transition-colors">Skin Care</Link>
              </li>
              <li>
                <Link href="#pediatric" className="text-gray-300 hover:text-white transition-colors">Pediatric Medicines</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-secondary-500 after:-bottom-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-secondary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">45 Pharma Road, Industrial Area, Lahore, Pakistan</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-secondary-400 flex-shrink-0" />
                <a href="tel:+923007654321" className="text-gray-300 hover:text-white transition-colors">+92 300 7654321</a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-secondary-400 flex-shrink-0" />
                <a href="mailto:support@medzone.pk" className="text-gray-300 hover:text-white transition-colors">support@medzone.pk</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} MedZone Pharmaceuticals. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;