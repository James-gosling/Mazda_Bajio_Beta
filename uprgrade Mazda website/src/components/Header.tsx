import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', text: 'Sobre Mí' },
    { href: '#services', text: 'Servicios' },
    { href: '#catalogo', text: 'Catálogo' },
    { href: '#testimonials', text: 'Testimonios' },
    { href: '#contact', text: 'Contacto' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#top" className="flex items-center space-x-2">
            <img 
              src="https://storage.googleapis.com/a1aa/image/f8hwdS2tl41ub6i8Xrug4TxfzmJWLfbwkfueND33TqNhpwveE.jpg" 
              alt="Mazda Logo" 
              className="h-12"
            />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Mazda Querétaro
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-red-500' : 'text-white hover:text-red-400'
                }`}
              >
                {link.text}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white absolute top-20 left-0 w-full shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;