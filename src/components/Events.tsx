import { useState } from 'react';
import { Calendar, MapPin, ExternalLink, Users, Clock, CheckCircle } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  participants: string;
  registrationOpen?: boolean;
  winner?: string;
  speaker?: string;
  contributions?: string;
  certification?: string;
  projects?: string;
  repositories?: string;
}

const Events = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingEvents= [
        {
      title: "Introduction to Kali Linux & Cybersecurity",
      date: "25th August , 2025",
      location: "Hackerrank",
      description: "Dive into the world of ethical hacking and cybersecurity with this hands-on Online Bootcamp. Whether you're a beginner or tech enthusiast, this session is tailored to introduce you to powerful tools and real-world applications.",
      image: "https://i.postimg.cc/2yPDcy6j/Introduction-To-Linux-Kali.jpg",
      participants: "All Departments",
      winner: "Top 10 Coders",
      speaker: "Swarnadeep Saha Poddar",
      link:"https://docs.google.com/forms/d/e/1FAIpQLSdZsZ2nSylyBSvG7dc9Xxh7iLgpP066hD_szVnIbSw5NjhjBg/viewform"
    }
  ];

  const pastEvents = [
            {
      title: "Introduction to Kali Linux & Cybersecurity",
      date: "12th & 13th July 2025",
      location: "Microsoft Teams",
      description: "Dive into the world of ethical hacking and cybersecurity with this hands-on Online Bootcamp. Whether you're a beginner or tech enthusiast, this session is tailored to introduce you to powerful tools and real-world applications.",
      image: "https://i.postimg.cc/2yPDcy6j/Introduction-To-Linux-Kali.jpg",
      participants: "All Departments",
      winner: "Top 10 Coders",
      speaker: "Swarnadeep Saha Poddar",
      link:"https://docs.google.com/forms/d/e/1FAIpQLSdZsZ2nSylyBSvG7dc9Xxh7iLgpP066hD_szVnIbSw5NjhjBg/viewform"
    },
            {
      title: "SIT HACKAVERSE 2025",
      date: "March 15-17, 2025",
      location: "SIT Campus",
      description: "Annual hackathon bringing together the brightest minds to solve real-world problems with innovative solutions.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      participants: "200+",
      registrationOpen: true
    },
        {
      title: "SIT HACKAVERSE 2025",
      date: "March 15-17, 2025",
      location: "SIT Campus",
      description: "Annual hackathon bringing together the brightest minds to solve real-world problems with innovative solutions.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      participants: "200+",
      registrationOpen: true
    },
    {
      title: "DevFest Siliguri",
      date: "February 10, 2025",
      location: "Virtual Event",
      description: "Developer festival featuring workshops on latest technologies, networking sessions, and expert talks.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      participants: "150+",
      registrationOpen: true
    },
    {
      title: "AI/ML Workshop Series",
      date: "January 20-22, 2025",
      location: "Lab 1, CS Department",
      description: "Comprehensive workshop series covering machine learning fundamentals, neural networks, and practical applications.",
      image: "https://images.pexels.com/photos/8438965/pexels-photo-8438965.jpeg?auto=compress&cs=tinysrgb&w=600",
      participants: "80+",
      registrationOpen: false
    },
    {
      title: "Git & GitHub Masterclass",
      date: "July 20, 2024",
      location: "Virtual Event",
      description: "Complete guide to version control, collaborative development, and open source contribution workflows.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
      participants: "180",
      repositories: "50+ created"
    },
    {
      title: "Quiz-o-mania: A Technical Quiz Competition",
      date: "September 18, 2024",
      location: "CSE Seminar Hall, SIT",
      description: "Quiz-O-Mania, a thrilling technical quiz competition, brought together 35+ teams from various departments. The event, graced by our Hon’ble Principal Dr. Mithun Chakraborty and Heads of Departments, unfolded across three rounds. The grand success of the event highlighted the enthusiasm, teamwork, and technical knowledge of all participants.",
      image: "/Brown Giveaway Winner Announcement Instagram Post (3).png",
      participants: "35+"
    },
    {
      title: "Code Bites 4.0: Coding Competition",
      date: "September 25, 2024",
      location: "Programming Lab 1",
      description: "With the success of previous editions, the Computer Engineers' Society hosted Code Bites 4.0, an exhilarating coding competition on HackerRank. Participants from various departments tackled curated problem statements under time constraints. The top 10 coders were awarded mementos and certificates, while all attendees received participation certificates and goodies, celebrating the team's talent and dedication.",
      image: "/ces-mascot.png",
      participants: "Multiple Departments",
      winner: "Top 10 Coders",
      speaker: "Chief Guest: Dr. Mithun Chakraborty"
    }
  ];

  const renderEventCard = (event: Event, isUpcoming: boolean) => (
    <div className="card-hover group">
      <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${
              isUpcoming 
                ? 'bg-yellow-400 text-black' 
                : 'bg-green-500 text-white'
            }`}>
              {isUpcoming ? <Clock size={14} /> : <CheckCircle size={14} />}
              <span>{isUpcoming ? 'Upcoming' : 'Completed'}</span>
            </span>
          </div>
          {isUpcoming && event.registrationOpen && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-white animate-pulse">
                Registration Open
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-300 text-sm">
              <Calendar size={16} className="mr-2 text-yellow-400" />
              {event.date}
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <MapPin size={16} className="mr-2 text-purple-500" />
              {event.location}
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <Users size={16} className="mr-2 text-green-400" />
              {event.participants} Participants
            </div>
          </div>

          {/* Additional info for past events */}
          {!isUpcoming && (
            <div className="mb-4 space-y-1">
              {event.winner && (
                <div className="text-sm text-yellow-400">
                  🏆 Winner: {event.winner}
                </div>
              )}
              {event.speaker && (
                <div className="text-sm text-purple-400">
                  🎤 Speaker: {event.speaker}
                </div>
              )}
              {event.contributions && (
                <div className="text-sm text-green-400">
                  💻 {event.contributions}
                </div>
              )}
              {event.certification && (
                <div className="text-sm text-blue-400">
                  📜 Certification: {event.certification}
                </div>
              )}
              {event.projects && (
                <div className="text-sm text-orange-400">
                  🚀 {event.projects}
                </div>
              )}
              {event.repositories && (
                <div className="text-sm text-cyan-400">
                  📂 {event.repositories}
                </div>
              )}
            </div>
          )}
          
          <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
            {event.description}
          </p>
          
          <button className={`w-full py-3 rounded-full font-semibold inline-flex items-center justify-center space-x-2 transition-all duration-300 ${
            isUpcoming
              ? 'bg-yellow-400 hover:bg-yellow-300 text-black'
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}>
            <span><a href={event.link}>{isUpcoming ? 'Register Now' : 'View Gallery'}</a></span>
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animated-underline inline-block">
            Events & Activities
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join us in our journey of learning, building, and growing together
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-full p-1 border border-gray-700">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-yellow-400 text-black shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'past'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'upcoming' ? (
            upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, index) => (
                <div key={index}>
                  {renderEventCard(event, true)}
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="bg-gray-800 rounded-2xl p-12 border border-gray-700">
                  <Calendar size={64} className="mx-auto text-gray-500 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">No Upcoming Events</h3>
                  <p className="text-gray-400 text-lg max-w-md mx-auto">
                    Stay tuned! We're planning exciting events and activities. 
                    Follow us on social media to get notified when we announce new events.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                      <a href='https://discord.gg/BTUTH7Ez'>Join Our Discord</a>
                      <ExternalLink size={16} />
                    </button>
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                      <span><a href="https://chat.whatsapp.com/JUDeBoRDKz9AUI56VyWFD8">Join us</a></span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )
          ) : (
            pastEvents.map((event, index) => (
              <div key={index}>
                {renderEventCard(event, false)}
              </div>
            ))
          )}
        </div>

        {/* Call to Action */}

      </div>
    </section>
  );
};

export default Events;