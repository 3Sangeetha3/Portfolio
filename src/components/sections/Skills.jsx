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
        "HTML5/CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "JavaScript",
        "React.js",
        "Material UI"
      ],
    },
    {
      icon: <Server size={32} />,
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      icon: <Database size={32} />,
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      icon: <Paintbrush size={32} />,
      title: "Design",
      skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    },
    {
      icon: <Layers size={32} />,
      title: "Tools & platforms",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Vercel",
        "Netlify",
        "cloudflare",
        "Digital Ocean",
      ],
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Others",
      skills: ["Data Structures", "Algorithms", "Problem Solving"],
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
                    <h3 className="text-2xl font-bold text-shadow-white]">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-[#282829] text-[#FAFAFA] rounded-full hover:bg-[#383838] transition-colors duration-200 hover:text-[#FFBE5E]"
                      >
                        {skill}
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
