import React from 'react';
import { ArrowRight, Code, Cpu, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden hero-section">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 floating">
          <Code size={60} className="text-yellow-400" />
        </div>
        <div className="absolute top-20 right-20 floating" style={{animationDelay: '1s'}}>
          <Cpu size={50} className="text-purple-500" />
        </div>
        <div className="absolute bottom-20 left-20 floating" style={{animationDelay: '2s'}}>
          <Zap size={40} className="text-yellow-400" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo - Only CES */}
        <div className="flex justify-center items-center mb-8">
          <div className="relative">
            <img 
              src="/ces-logo-main.png" 
              alt="Computer Engineers' Society" 
              className="w-32 h-32 object-contain glow-logo logo-pulse"
            />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient">Computer Engineers'</span>
          <br />
          <span className="text-white">Society</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
          Innovate. Build. Inspire.
        </p>

        {/* Subtitle */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Official Computer Science & Engineering Department Club of 
          <span className="text-yellow-400 font-semibold"> Siliguri Institute of Technology</span>
        </p>

        {/* CTA Button */}
        <button className="glow-button bg-yellow-400 text-black px-12 py-4 rounded-full text-xl font-semibold inline-flex items-center space-x-3 hover:bg-yellow-300 transition-all duration-300" >
          <a href='/Campus-2-Corporate'>Join Our Community</a>
          <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;