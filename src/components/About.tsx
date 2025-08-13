import React from 'react';
import { ExternalLink } from 'lucide-react';

const About = () => {
  const cards = [
    {
      title: "Siliguri Institute of Technology",
      icon: <img src="/sit-logo-main.png" alt="CES Logo" className="w-16 h-16 object-contain glow-logo" />,
      description: "Established in 1999 under Techno India Group. Largest private institute in North Bengal. Offers B.Tech, MBA, MCA, BCA, B.Sc, and more.",
      buttonText: "Visit SIT",
      buttonColor: "bg-red-600 hover:bg-red-700",
      links:"https://www.sittechno.org/"
    },
    {
      title: "Our Mascot",
      icon: <img src="/ces-mascot-main.png" alt="CES Mascot" className="w-16 h-16 object-contain glow-logo" />,
      description: "Meet our friendly mascot! This cheerful robot represents innovation, creativity, and the enthusiastic spirit that drives our Computer Engineers' Society community forward.",
      buttonText:null,
      buttonColor: null
    },
    {
      title: "Computer Engineers' Society",
      icon: <img src="/ces-logo-main.png" alt="CES Logo" className="w-16 h-16 object-contain glow-logo" />,
      description: "Official CSE department club. Helps students grow through events, webinars, hackathons, and collaborative technical projects.",
      buttonText: "Join CES",
      buttonColor: "bg-yellow-400 hover:bg-yellow-300 text-black",
      links:"https://chat.whatsapp.com/JUDeBoRDKz9AUI56VyWFD8"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animated-underline inline-block">
            About Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn more about our institution, community, and mission
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="card-hover bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {card.description}
                </p>
                {card.buttonText && (
                  <button className={`${card.buttonColor} px-8 py-3 rounded-full font-semibold inline-flex items-center space-x-2 transition-all duration-300`}>
                    <a href={card.links}>{card.buttonText}</a>
                    <ExternalLink size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;