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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-30 left-30 w-64 h-64 rounded-full bg-[#FFBE5E]/10 blur-3xl"></div>
        <div className="absolute bottom-15 right-20 w-72 h-72 rounded-full bg-[#FCD26B]/5 blur-3xl"></div>
      </div>
      <div className="container max-w-7xl px-6 relative z-10">
        <div className="flex items-center mb-12 pb-">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] bg-clip-text text-transparent leading-tight">
            My Skills
          </h1>
          <div className="ml-4 h-1 flex-grow bg-gradient-to-r from-[#FFBE5E]/20 to-transparent rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl bg-[#1E1E1F] hover:bg-[#202022] transition-all duration-300 hover:shadow-lg hover:shadow-[#FFBE5E]/10">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] group-hover:opacity-100">
                  <div className="absolute inset-[1px] bg-[#1E1E1F] rounded-2xl"></div>
                </div>
                {/* Content container */}
                <div className="relative h-full p-12 z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-[#FFBE5E] bg-[#282829] p-3 rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-[#282829] text-[#FAFAFA] rounded-full hover:bg-[#383838] transition-colors duration-200 hover:text-[#FFBE5E] flex items-center gap-1"
                      >
                        <img 
                          src={skill.icon} 
                          alt="" 
                          className="w-4 h-4 object-contain"
                        />
                        {skill.name}
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