
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';
import Events from './components/Events';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Apti from './components/Apti';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Different page locations */}
        <Route path="/" element={    <div className="min-h-screen bg-black text-white">
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
    </div>} />
     <Route path="/Campus-2-Corporate" element={<Apti />} />
      </Routes>
    </Router>
  );
}

export default App;
