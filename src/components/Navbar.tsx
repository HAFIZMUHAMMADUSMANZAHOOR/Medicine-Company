import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center">
            <div className="flex items-center">
              <div className="bg-primary-600 text-white p-2 rounded-md mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 3L12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 7L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M19.2 14.8L19.2 15.8C19.2 16.9201 19.2 17.4802 19.027 17.908C18.8781 18.2843 18.6188 18.6012 18.2905 18.8284C17.9168 19.0919 17.4343 19.2 16.47 19.2L7.53 19.2C6.56566 19.2 6.08349 19.0919 5.71014 18.8284C5.38185 18.6012 5.12206 18.2843 4.97312 17.908C4.8 17.4802 4.8 16.9201 4.8 15.8L4.8 14.8C4.8 13.6799 4.8 13.1198 4.97312 12.692C5.12206 12.3157 5.38185 11.9988 5.71014 11.7716C6.08349 11.5081 6.56566 11.4 7.53 11.4L16.47 11.4C17.4343 11.4 17.9168 11.5081 18.2905 11.7716C18.6188 11.9988 18.8781 12.3157 19.027 12.692C19.2 13.1198 19.2 13.6799 19.2 14.8Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className={`font-bold text-xl ${isScrolled ? 'text-primary-600' : 'text-white'}`}>MedZone</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              href="#home" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:bg-white/10'
              }`}
            >
              About
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('products')}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:bg-white/10'
                }`}
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link href="#painkillers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Painkillers
                  </Link>
                  <Link href="#antibiotics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Antibiotics
                  </Link>
                  <Link href="#multivitamins" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Multivitamins
                  </Link>
                  <Link href="#skincare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Skin Care
                  </Link>
                  <Link href="#pediatric" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Pediatric Medicines
                  </Link>
                  <Link href="#herbal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Herbal Remedies
                  </Link>
                </div>
              )}
            </div>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:bg-white/10'
                }`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link href="#manufacturing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Third-Party Manufacturing
                  </Link>
                  <Link href="#formulation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Product Formulation
                  </Link>
                  <Link href="#randd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    R&D
                  </Link>
                  <Link href="#distribution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Wholesale Distribution
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="#contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:bg-white/10'
              }`}
            >
              Contact
            </Link>
            
            <div className="ml-3">
              <a 
                href="tel:+923007654321" 
                className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" /> +92 300 7654321
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
              Home
            </Link>
            <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
              About
            </Link>
            
            {/* Mobile Products Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('mobile-products')}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'mobile-products' && (
                <div className="pl-4 space-y-1">
                  <Link href="#painkillers" className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                    Painkillers
                  </Link>
                  <Link href="#antibiotics" className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                    Antibiotics
                  </Link>
                  <Link href="#multivitamins" className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                    Multivitamins
                  </Link>
                  <Link href="#skincare" className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                    Skin Care
                  </Link>
                  <Link href="#pediatric" className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                    Pediatric Medicines
                  </Link>
                  <Link href="#herbal" className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                    Herbal Remedies
                  </Link>
                </div>
              )}
            </div>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('mobile-services')}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'mobile-services' && (
                <div className="pl-4 space-y-1">
                  <Link href="#manufacturing" className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                    Third-Party Manufacturing
                  </Link>
                  <Link href="#formulation" className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                    Product Formulation
                  </Link>
                  <Link href="#randd" className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                    R&D
                  </Link>
                  <Link href="#distribution" className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                    Wholesale Distribution
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
              Contact
            </Link>
            
            <a 
              href="tel:+923007654321" 
              className="flex items-center px-3 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" /> +92 300 7654321
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;