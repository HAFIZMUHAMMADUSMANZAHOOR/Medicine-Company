import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry'
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: 'General Inquiry'
      });
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">Contact Us</h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Have questions or need more information? Our team is here to help you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-primary-800 text-white rounded-lg shadow-xl overflow-hidden h-full">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="mb-8 text-primary-100">
                  We'd love to hear from you. Please reach out using any of the following methods.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-white/10 p-3 rounded-full text-secondary-400">
                        <MapPin className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Address</h4>
                      <p className="text-primary-100">45 Pharma Road, Industrial Area, Lahore, Pakistan</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-white/10 p-3 rounded-full text-secondary-400">
                        <Phone className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <p className="text-primary-100">+92 300 7654321</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-white/10 p-3 rounded-full text-secondary-400">
                        <Mail className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-primary-100">support@medzone.pk</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-bold mb-4">Working Hours</h4>
                  <div className="space-y-2 text-primary-100">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary-800">Send Us a Message</h3>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Business Partnership">Business Partnership</option>
                      <option value="Career Opportunity">Career Opportunity</option>
                      <option value="Technical Support">Technical Support</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;