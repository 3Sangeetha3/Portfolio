import { Github, Code2, LinkedinIcon, DownloadIcon, Monitor, Layers, PaintBucket } from "lucide-react";
import { useState, useEffect } from "react";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1gVjua-fMJOoqvfEDczSL9NV7yLAbLzu5/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen mx-auto flex items-center justify-center relative bg-[#121212]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-30 w-64 h-64 rounded-full bg-[#FFBE5E]/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-30 w-72 h-72 rounded-full bg-[#FCD26B]/5 blur-3xl"></div>
      </div>

      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 px-6 relative z-10">
        {/* Text content */}
        <div
          className={`text-center md:text-left max-w-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-5xl py-3 md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] bg-clip-text text-transparent leading-tight">
            Hello, I'm Sangeetha
          </h1>
          <p className="text-amber-50 text-lg md:text-xl mb-8 leading-relaxed">
            I am a passionate full-stack developer specializing in the MERN
            stack, crafting secure and efficient web applications that deliver
            exceptional user experiences.
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
            <span className="px-3 py-1 bg-[#1E1E1F] text-[#FFBE5E] rounded-full text-sm flex items-center gap-1 border border-[#FFBE5E]/20">
              <Layers size={14} /> Full-stack Development
            </span>
            <span className="px-3 py-1 bg-[#1E1E1F] text-[#FFBE5E] rounded-full text-sm flex items-center gap-1 border border-[#FFBE5E]/20">
              <PaintBucket size={14} /> UI/UX Developer
            </span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/3Sangeetha3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] text-[#121212] font-medium rounded-lg shadow-lg hover:shadow-[#FFBE5E]/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://leetcode.com/3Sangeetha3"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 px-6 py-3 bg-[#1E1E1F] text-[#FFBE5E] font-medium rounded-lg shadow-lg hover:shadow-[#FFBE5E]/10 hover:bg-[#202022] transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <span className="absolute inset-0 rounded-lg p-0.5 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#FCD26B] group-hover:to-[#FFBE5E] transition-all duration-300 -z-10"></span>
              <span className="absolute inset-0 bg-[#1E1E1F] rounded-lg -z-10 group-hover:bg-[#202022] transition-colors group-hover:inset-0.5"></span>
              <Code2 size={20} />
              Leetcode
            </a>
            <a
              href="https://www.linkedin.com/in/jadamalsangeetha/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 px-6 py-3 bg-[#1E1E1F] text-[#FFBE5E] font-medium rounded-lg shadow-lg hover:shadow-[#FFBE5E]/10 hover:bg-[#202022] transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <span className="absolute inset-0 rounded-lg p-0.5 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#FCD26B] group-hover:to-[#FFBE5E] transition-all duration-300 -z-10"></span>
              <span className="absolute inset-0 bg-[#1E1E1F] rounded-lg -z-10 group-hover:bg-[#202022] transition-colors group-hover:inset-0.5"></span>
              <LinkedinIcon size={20} />
              LinkedIn
            </a>
            
            {/* Resume Download Button */}
            <button
              onClick={handleDownloadResume}
              className="relative flex items-center gap-2 px-6 py-3 bg-[#1E1E1F] text-[#FFBE5E] font-medium rounded-lg shadow-lg hover:shadow-[#FFBE5E]/10 hover:bg-[#202022] transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <span className="absolute inset-0 rounded-lg p-0.5 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#FCD26B] group-hover:to-[#FFBE5E] transition-all duration-300 -z-10"></span>
              <span className="absolute inset-0 bg-[#1E1E1F] rounded-lg -z-10 group-hover:bg-[#202022] transition-colors group-hover:inset-0.5"></span>
              <DownloadIcon size={20} />
              Download Resume
            </button>
          </div>

          <div className="mt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-[#FCD26B] hover:text-[#FFBE5E] transition-colors font-medium"
            >
              View My Work
              <svg
                className="w-5 h-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Image section */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Decorative rings */}
          <div className="absolute inset-0 -m-4 rounded-full border border-[#FFBE5E]/20 animate-pulse"></div>
          <div className="absolute inset-0 -m-8 rounded-full border border-[#FFBE5E]/10"></div>
          <div className="w-64 h-64 md:w-96 md:h-96 relative rounded-full overflow-hidden border-2 border-[#FFBE5E]/50 shadow-xl shadow-[#FFBE5E]/20">
            <img
              src="https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745211660912-520444358.png"
              alt="Sangeetha Choudhary"
              className="w-full h-full object-cover"
            />
            {/* Highlight overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFBE5E]/10 to-transparent"></div>
          </div>
          {/* Status indicator */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#1E1E1F]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-[#FFBE5E]/30">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs text-amber-50">Available for work</span>
          </div>
        </div>
      </div>
    </section>
  );
};