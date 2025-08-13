import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';
import Events from './components/Events';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <div id="about" className="fade-in">
        <About />
      </div>
      <div id="members" className="fade-in">
        <Members />
      </div>
      <div id="events" className="fade-in">
        <Events />
      </div>
      <div id="faq" className="fade-in">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;