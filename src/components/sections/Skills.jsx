import { useState, useEffect } from "react";
import { Code, Server, Paintbrush, Database, Layers, BarChart3 } from "lucide-react";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  const skillsData = [
    {
      icon: <Code size={32} />,
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745255152893-241692160.png" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745255224901-141389575.png" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745255257709-918509239.png" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745255296863-652128627.png" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745255331190-92093822.png" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745255362491-259194471.png" },
        { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745255408403-963217184.png" }
      ],
    },
    {
      icon: <Server size={32} />,
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745255446396-697644077.png" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745255746781-726585228.svg" }
      ],
    },
    {
      icon: <Database size={32} />,
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745255799657-127005071.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745255827365-499308097.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745255854704-433297226.svg" }
      ],
    },
    {
      icon: <Paintbrush size={32} />,
      title: "Design",
      skills: [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745256016140-690896384.svg" },
      ],
    },
    {
      icon: <Layers size={32} />,
      title: "Tools & platforms",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745256105395-831825517.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745256172037-555479199.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745256219756-833787179.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745256260788-398041634.svg" },
        { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745256303440-988572448.svg" },
        { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745256546124-516833033.svg" },
        { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745256489581-245770074.svg" },
        { name: "Digital Ocean", icon: "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745256449607-738710080.svg" }
      ],
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Others",
      skills: [
        { name: "CPP" , icon: " https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745256707776-201902165.svg "},
      ],
    },
  ];
  
  return (
    <section
      id="skills"
      className="min-h-screen mx-auto flex items-center justify-center relative bg-[#121212] py-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-[#FFBE5E]/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#FCD26B]/3 blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container max-w-7xl px-6 relative z-10">
        <div className="flex items-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FCD26B] via-[#FFBE5E] to-[#FCD26B] bg-clip-text text-transparent leading-tight tracking-tight">
            My Skills
          </h1>
          <div className="ml-6 h-1 flex-grow bg-gradient-to-r from-[#FFBE5E]/30 to-transparent rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="group relative h-full rounded-2xl bg-gradient-to-br from-[#1E1E1F]/80 to-[#252526]/80 backdrop-blur-lg border border-[#2A2A2C] hover:shadow-2xl hover:shadow-[#FFBE5E]/5 transition-all duration-500 hover:-translate-y-1">
                {/* Card glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FCD26B]/0 via-[#FFBE5E]/10 to-[#FCD26B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content container */}
                <div className="relative h-full p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-[#FFBE5E] bg-[#2A2A2C]/50 p-3 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="group/skill px-4 py-2 text-sm bg-[#2A2A2C]/50 text-[#E0E0E0] rounded-full hover:bg-[#383838]/70 transition-all duration-300 hover:text-[#FFBE5E] flex items-center gap-2 cursor-default transform hover:scale-105 hover:shadow-md hover:shadow-[#FFBE5E]/20"
                      >
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-5 h-5 object-contain group-hover/skill:animate-wiggle"
                        />
                        <span className="font-medium">{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};