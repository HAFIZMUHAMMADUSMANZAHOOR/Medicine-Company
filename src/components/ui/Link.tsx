import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Link: React.FC<LinkProps> = ({ href, className, children, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Scroll to the element
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Call the additional onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a 
      href={href} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};