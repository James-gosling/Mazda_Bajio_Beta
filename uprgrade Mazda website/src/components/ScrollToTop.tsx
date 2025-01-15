import React from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  isVisible: boolean;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;