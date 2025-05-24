export interface Product {
  id: number;
  name: string;
  description: string;
  dosage: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
}