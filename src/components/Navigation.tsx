import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Users, Calendar, HelpCircle } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: <Code size={18} /> },
    { name: 'Members', href: '#members', icon: <Users size={18} /> },
    { name: 'Events', href: '#events', icon: <Calendar size={18} /> },
    { name: 'FAQ', href: '#faq', icon: <HelpCircle size={18} /> }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <img 
              src="/ces-logo-main.png" 
              alt="Computer Engineers' Society" 
              className="w-12 h-12 object-contain glow-logo"
            />
            <div className="hidden lg:block">
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">Computer Engineers' Society</span>
                <span className="text-yellow-400 text-sm font-medium">Siliguri Institute of Technology</span>
              </div>
            </div>
            <div className="hidden md:block lg:hidden">
              <span className="text-white font-semibold text-lg">Computer Engineers' Society</span>
            </div>
            <div className="block md:hidden">
              <span className="text-white font-semibold text-base">CES</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200 group"
              >
                <span className="group-hover:text-yellow-400 transition-colors duration-200">
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
            
            {/* CTA Button */}
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
              <a href='https://chat.whatsapp.com/JUDeBoRDKz9AUI56VyWFD8'>Join Us</a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-yellow-400 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-gray-900/95 backdrop-blur-md rounded-2xl mt-2 p-4 border border-gray-800">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-3 w-full text-left py-3 px-4 text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <button className="w-full bg-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;