import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronUp, MessageCircle } from 'lucide-react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Chat from './components/Chat';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Services />
        <Catalog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop isVisible={isScrolled} />
      <Chat />
    </div>
  );
}

export default App;