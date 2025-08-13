import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I join CES?",
      answer: "You can join CES by filling out our online registration form or visiting our office during working hours. Membership is open to all students of SIT, regardless of their branch or year of study."
    },
    {
      question: "Who can participate in events?",
      answer: "Most of our events are open to all SIT students. Some specialized workshops may have prerequisites, which will be clearly mentioned in the event description. External participants are welcome for select events."
    },
    {
      question: "Do I need coding experience to join?",
      answer: "Not at all! CES welcomes students of all skill levels. We organize events and workshops specifically designed for beginners, and our community is always ready to help newcomers learn and grow."
    },
    {
      question: "Will I get certificates for participation?",
      answer: "Yes, we provide certificates for most of our events, workshops, and competitions. Certificates are digitally signed and can be used to showcase your participation in technical activities."
    },
    {
      question: "What kind of events does CES organize?",
      answer: "We organize a wide variety of events including hackathons, coding competitions, tech talks, workshops on emerging technologies, career guidance sessions, and networking events with industry professionals."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animated-underline inline-block">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Got questions? We've got answers. Find the most common questions about CES below.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-750 transition-colors duration-200"
              >
                <h3 className="text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp size={24} className="text-yellow-400" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400" />
                  )}
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg mb-4">
            Still have questions? Feel free to reach out to us!
          </p>
          <button className="glow-button bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;