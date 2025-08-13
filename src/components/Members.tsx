import { useState } from 'react';
import { Github, Linkedin, Twitter, Users, Code, Megaphone, Settings } from 'lucide-react';

const Members = () => {
  const [activeCategory, setActiveCategory] = useState<string>('organizers');

  const teamCategories = [
    { id: 'organizers', name: 'Organizers', icon: <Users size={20} />, color: 'text-yellow-400' },
    { id: 'management', name: 'Management', icon: <Settings size={20} />, color: 'text-green-400' },
    { id: 'technical', name: 'Technical Team', icon: <Code size={20} />, color: 'text-blue-400' },
    { id: 'social', name: 'Social Media & Content', icon: <Megaphone size={20} />, color: 'text-pink-400' }
  ];

  // Updated team data according to the organizational structure
  const teamMembers = {
    organizers: [
      {
        name: "Arunangshu Nag",
        position: "Working President",
        year: "4th Year CSE",
        image: "/team/IMG20241027104203 - Arunangshu Nag.jpg",
        quote: "Leading innovation through collaboration",
        social: { linkedin: "https://www.linkedin.com/in/arunangshu-nag", github: "#", twitter: "#" }
      },
      {
        name: "Arpan Dey",
        position: "Team Coordinator",
        year: "3rd Year CSE",
        image: "/team/Formal Photo - Arpan Dey.png",
        quote: "Coordinating teams for maximum impact",
        social: { linkedin: "https://www.linkedin.com/in/arpan-dey-75696821b/", github: "https://github.com/ARPAN0109", twitter: "#" }
      },
      {
        name: "Arnav Biswas",
        position: "Secretary",
        year: "3rd Year CSE",
        image: "/team/Arnav.jpg",
        quote: "Organizing excellence in every event",
        social: { linkedin: "https://www.linkedin.com/in/arnav-biswas-663775306/", github: "https://github.com/ArnavBiswas", twitter: "#" }
      },
      {
        name: "Rimi Dutta",
        position: "Joint Secretary",
        year: "2nd Year CSE",
        image: "/team/myphoto - Rimi Dutta.jpeg",
        quote: "Supporting organizational excellence",
        social: { linkedin: "https://www.linkedin.com/in/rimi-dutta-00b138243/", github: "https://github.com/rimidutta", twitter: "#" }
      }
    ],
    management: [
      {
        name: "Amol Kumar",
        position: "Team Lead",
        year: "3rd Year CSE",
        image: "/team/IMG_20240921_115220 - Amol kumar.jpg",
        quote: "Leading teams to success",
        social: { linkedin: "https://www.linkedin.com/in/amol-kumar-3522a6330", github: "https://github.com/Amol9934", twitter: "#" }
      },
      {
        name: "Arpan Dey",
        position: "Executive Member",
        year: "3rd Year CSE",
        image: "/team/Formal Photo - Arpan Dey.png",
        quote: "Executing management strategies",
        social: { linkedin: "https://www.linkedin.com/in/arpan-dey-75696821b/", github: "https://github.com/ARPAN0109", twitter: "#" }
      },
      {
        name: "Naman Raj",
        position: "Executive Member",
        year: "2nd Year CSE",
        image: "/team/Naman.jpg",
        quote: "Executing plans with precision",
        social: { linkedin: "https://linkedin.com/in/naman-raj", github: "https://github.com/rajnaman330", twitter: "#" }
      },
      {
        name: "Suryashis Banerjee",
        position: "Associate Member",
        year: "2nd Year CSE",
        image: "/team/suryashisbanerjee - SURYASHIS BANERJEE.jpg",
        quote: "Managing resources for maximum impact",
        social: { linkedin: "https://www.linkedin.com/in/suryashis-banerjee-847614265", github: "https://github.com/Suryashis4", twitter: "#" }
      },
      {
        name: "Rimi Dutta",
        position: "Associate Member",
        year: "2nd Year CSE",
        image: "/team/myphoto - Rimi Dutta.jpeg",
        quote: "Managing operations efficiently",
        social: { linkedin: "https://www.linkedin.com/in/rimi-dutta-00b138243/", github: "https://github.com/rimidutta", twitter: "#" }
      },
      {
        name: "Gautam Raj",
        position: "Junior Associate Member",
        year: "1st Year CSE",
        image: "/team/IMG-20250315-WA0007 - Gautam Raj.jpg",
        quote: "Learning and contributing to management",
        social: { linkedin: "https://www.linkedin.com/in/gautam-raj-a24567286", github: "#", twitter: "#" }
      },
    ],
    technical: [
      {
        name: "Ratnojit Saha",
        position: "Team Lead",
        year: "3rd Year CSE",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
        quote: "Leading technical innovation",
        social: { linkedin: "#", github: "#", twitter: "#" }
      },
      {
        name: "Dripta Majumdar",
        position: "Executive Member",
        year: "3rd Year CSE",
        image: "/team/IMG-20241227-WA0060 - Dripta Majumdar.jpg",
        quote: "Code is poetry in motion",
        social: { linkedin: "https://www.linkedin.com/in/dripta-majumdar-03d", github: "https://github.com/dripta-majumdar", twitter: "#" }
      },
      {
        name: "Swarnadeep Saha Poddar",
        position: "Associate Member",
        year: "3rd Year CSE",
        image: "/team/Screenshot_2025_0315_181548 - Swarnadeep Saha Poddar.jpg",
        quote: "Building the digital future",
        social: { linkedin: "https://linkedin.com/in/swarnadeep-saha-poddar", github: "https://github.com/swarnade/", twitter: "#" }
      },
      {
        name: "Md Iftikhar Hossain",
        position: "Junior Associate Member",
        year: "1st Year CSE",
        image: "/team/IMG-20231011-WA0049 - Iftikhar Hossain.jpg",
        quote: "Bridging development and operations",
        social: { linkedin: "https://www.linkedin.com/in/iftikhar-hossain-89196428a", github: "https://github.com/iftu987", twitter: "#" }
      },
      {
        name: "Nimesh Sharma",
        position: "Junior Associate Member",
        year: "1st Year CSE",
        image: "/team/Gumba - Nimesh Sharma.jpg",
        quote: "Turning ideas into reality through code",
        social: { linkedin: "https://www.linkedin.com/in/nimesh-sharma-5aa961286/", github: "https://github.com/NimeshXTV", twitter: "#" }
      },
    ],
    social: [
      {
        name: "Aniket Kumar",
        position: "Team Lead",
        year: "3rd Year CSE",
        image: "/team/IMG20250307163020 (1) - Aniket kumar.jpg",
        quote: "Leading social media engagement",
        social: { linkedin: "https://in.linkedin.com/in/aniket-kumar-7bb50b318", github: "https://github.com/Aniket4477", twitter: "#" }
      },
      {
        name: "Debangan Dutta",
        position: "Executive Member",
        year: "2nd Year CSE",
        image: "/team/College photo - Debangan Dutta.JPG",
        quote: "Creating engaging digital content",
        social: { linkedin: "https://www.linkedin.com/in/debangan-dutta-78399a1b8", github: "#", twitter: "#" }
      },
      {
        name: "Shreya Prasad",
        position: "Associate Member",
        year: "2nd Year CSE",
        image: "/team/IMG-20250213-WA0040 - Shreya prasad.jpg",
        quote: "Building vibrant online communities",
        social: { linkedin: "https://www.linkedin.com/in/shreya-prasad-0b1397252", github: "https://github.com/shreya282802", twitter: "#" }
      },
      {
        name: "Meher Ghimiray",
        position: "Associate Member",
        year: "1st Year CSE",
        image: "/team/IMG_20230129_145417 - Meher Ghimiray.jpg",
        quote: "Crafting stories that inspire",
        social: { linkedin: "https://www.linkedin.com/in/meherghimiray/", github: "https://github.com/mehertastic", twitter: "#" }
      },
      {
        name: "Abhisek Ray",
        position: "Junior Associate Member",
        year: "1st Year CSE",
        image: "/team/Abhisekh.jpg",
        quote: "Growing social media presence",
        social: { linkedin: "https://www.linkedin.com/in/abhisek-ray-375ba9297", github: "#", twitter: "#" }
      }
    ]
  };

  const getCategoryColor = (categoryId: string) => {
    const category = teamCategories.find(cat => cat.id === categoryId);
    return category?.color || 'text-yellow-400';
  };

  const renderMemberCard = (member: any, categoryId: string) => (
    <div className="card-hover group">
      <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className={`font-medium ${getCategoryColor(categoryId)}`}>{member.position}</p>
            {member.department && (
              <p className="text-gray-300 text-sm">{member.department}</p>
            )}
            {member.year && (
              <p className="text-gray-300 text-sm">{member.year}</p>
            )}
          </div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-gray-300 italic mb-4 text-center flex-1">"{member.quote}"</p>
          <div className="flex space-x-4 justify-center">
            {member.social.linkedin && member.social.linkedin !== "#" && member.social.linkedin !== "" && (
              <a 
                href={member.social.linkedin.startsWith('http') ? member.social.linkedin : `https://${member.social.linkedin}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            )}
            {member.social.github && member.social.github !== "#" && member.social.github !== "" && member.social.github !== "NA" && member.social.github !== "Na" && member.social.github !== "None" && (
              <a 
                href={member.social.github.startsWith('http') ? member.social.github : `https://${member.social.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {member.social.twitter && member.social.twitter !== "#" && (
              <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animated-underline inline-block">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The passionate individuals driving our community forward
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {teamCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-yellow-400 text-black shadow-lg transform scale-105'
                  : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 border border-gray-600'
              }`}
            >
              <span className={activeCategory === category.id ? 'text-black' : category.color}>
                {category.icon}
              </span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers[activeCategory as keyof typeof teamMembers]?.map((member, index) => (
            <div key={index}>
              {renderMemberCard(member, activeCategory)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;