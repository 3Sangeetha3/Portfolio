import { Github, Code2, LinkedinIcon, DownloadIcon, Monitor, Layers, PaintBucket } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Typed from 'typed.js';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const typedElementRef = useRef(null);
  let typedInstance;

  useEffect(() => {
    setIsVisible(true);

    // Initialize Typed.js
    if (typedElementRef.current) {
      typedInstance = new Typed(typedElementRef.current, {
        strings: [
          "Sangeetha"
        ],
        typeSpeed: 50,
        backSpeed: 80,
        backDelay: 500,
        loop: true,
      });
    }
    
    // Cleanup function
    return () => {
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
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
      className="min-h-screen mx-auto flex items-center justify-center relative bg-[#121212] px-4 py-20 md:py-0"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 md:top-40 left-10 md:left-30 w-32 md:w-64 h-32 md:h-64 rounded-full bg-[#FFBE5E]/10 blur-3xl"></div>
        <div className="absolute bottom-20 md:bottom-40 right-10 md:right-30 w-40 md:w-72 h-40 md:h-72 rounded-full bg-[#FCD26B]/5 blur-3xl"></div>
      </div>

      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 md:px-6 relative z-10">
        {/* Text content */}
        <div
          className={`text-center md:text-left max-w-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl m-0 font-bold bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] bg-clip-text text-transparent leading-tight mb-2">
            Hello, I'm
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 font-bold bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] bg-clip-text text-transparent leading-tight">
            <span ref={typedElementRef}></span>
          </h1>
          <p className="text-amber-50 text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed px-2 md:px-0">
            I am a passionate full-stack developer specializing in the MERN
            stack, crafting secure and efficient web applications that deliver
            exceptional user experiences.
          </p>
 
          {/* Skill Tags */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6 md:mb-8 px-2 md:px-0">
            <span className="px-2 md:px-3 py-1 bg-[#1E1E1F] text-[#FFBE5E] rounded-full text-xs md:text-sm flex items-center gap-1 border border-[#FFBE5E]/20">
              <Layers size={12} className="md:w-4 md:h-4" /> Full-stack Development
            </span>
            <span className="px-2 md:px-3 py-1 bg-[#1E1E1F] text-[#FFBE5E] rounded-full text-xs md:text-sm flex items-center gap-1 border border-[#FFBE5E]/20">
              <PaintBucket size={12} className="md:w-4 md:h-4" /> UI/UX Developer
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-4 justify-center md:justify-start px-2 md:px-0">
            <a
              href="https://github.com/3Sangeetha3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] text-[#121212] font-medium rounded-lg shadow-lg hover:shadow-[#FFBE5E]/20 transition-all duration-300 hover:-translate-y-1 text-sm md:text-base"
            >
              <Github size={18} className="md:w-5 md:h-5" />
              GitHub
            </a>
            <a
              href="https://leetcode.com/3Sangeetha3"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-[#1E1E1F] text-[#FFBE5E] font-medium rounded-lg shadow-lg hover:shadow-[#FFBE5E]/10 hover:bg-[#202022] transition-all duration-300 hover:-translate-y-1 overflow-hidden group text-sm md:text-base"
            >
              <span className="absolute inset-0 rounded-lg p-0.5 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#FCD26B] group-hover:to-[#FFBE5E] transition-all duration-300 -z-10"></span>
              <span className="absolute inset-0 bg-[#1E1E1F] rounded-lg -z-10 group-hover:bg-[#202022] transition-colors group-hover:inset-0.5"></span>
              <Code2 size={18} className="md:w-5 md:h-5" />
              Leetcode
            </a>
            <a
              href="https://www.linkedin.com/in/jadamalsangeetha/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-[#1E1E1F] text-[#FFBE5E] font-medium rounded-lg shadow-lg hover:shadow-[#FFBE5E]/10 hover:bg-[#202022] transition-all duration-300 hover:-translate-y-1 overflow-hidden group text-sm md:text-base"
            >
              <span className="absolute inset-0 rounded-lg p-0.5 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#FCD26B] group-hover:to-[#FFBE5E] transition-all duration-300 -z-10"></span>
              <span className="absolute inset-0 bg-[#1E1E1F] rounded-lg -z-10 group-hover:bg-[#202022] transition-colors group-hover:inset-0.5"></span>
              <LinkedinIcon size={18} className="md:w-5 md:h-5" />
              LinkedIn
            </a>
            
            {/* Resume Download Button */}
            <button
              onClick={handleDownloadResume}
              className="relative flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-[#1E1E1F] text-[#FFBE5E] font-medium rounded-lg shadow-lg hover:shadow-[#FFBE5E]/10 hover:bg-[#202022] transition-all duration-300 hover:-translate-y-1 overflow-hidden group text-sm md:text-base"
            >
              <span className="absolute inset-0 rounded-lg p-0.5 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#FCD26B] group-hover:to-[#FFBE5E] transition-all duration-300 -z-10"></span>
              <span className="absolute inset-0 bg-[#1E1E1F] rounded-lg -z-10 group-hover:bg-[#202022] transition-colors group-hover:inset-0.5"></span>
              <DownloadIcon size={18} className="md:w-5 md:h-5" />
              Download Resume
            </button>
          </div>

          <div className="mt-6 md:mt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-[#FCD26B] hover:text-[#FFBE5E] transition-colors font-medium text-sm md:text-base"
            >
              View My Work
              <svg
                className="w-4 h-4 md:w-5 md:h-5 animate-bounce"
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
          className={`relative transition-all duration-1000 delay-300 mt-8 md:mt-0 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Decorative rings */}
          <div className="absolute inset-0 -m-2 md:-m-4 rounded-full border border-[#FFBE5E]/20 animate-pulse"></div>
          <div className="absolute inset-0 -m-4 md:-m-8 rounded-full border border-[#FFBE5E]/10"></div>
          <div className="w-48 h-48 md:w-64 lg:w-96 md:h-64 lg:h-96 relative rounded-full overflow-hidden border-2 border-[#FFBE5E]/50 shadow-xl shadow-[#FFBE5E]/20 mx-auto">
            <img
              src="https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745211660912-520444358.png"
              alt="Sangeetha Choudhary"
              className="w-full h-full object-cover"
            />
            {/* Highlight overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFBE5E]/10 to-transparent"></div>
          </div>
          {/* Status indicator */}
          <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 flex items-center gap-1 md:gap-2 bg-[#1E1E1F]/80 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full border border-[#FFBE5E]/30">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs text-amber-50">Available for work</span>
          </div>
        </div>
      </div>
    </section>
  );
};