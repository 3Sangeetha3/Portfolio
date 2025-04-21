import { useState, useEffect } from "react";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen mx-auto flex items-center justify-center relative bg-[#121212] py-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-[#FFBE5E]/10 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-[#FCD26B]/5 blur-3xl"></div>
      </div>

      <div className="container max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6 relative z-10">
        {/* Image section */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="absolute inset-0 -m-4 rounded-2xl border border-[#FFBE5E]/20"></div>
          <div className="absolute inset-0 -m-8 rounded-2xl border border-[#FFBE5E]/10"></div>
          <div className="w-64 h-80 md:w-80 md:h-96 relative rounded-2xl overflow-hidden border-2 border-[#FFBE5E]/30 shadow-xl shadow-[#FFBE5E]/20">
            <img
              src="https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745211660912-520444358.png"
              alt="Sangeetha Working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div
          className={`text-center md:text-left max-w-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] bg-clip-text text-transparent leading-tight">
            About Me
          </h2>
          
          <div className="space-y-6 text-amber-50">
            <p className="text-lg leading-relaxed">
              Ever wondered what happens when a love for coding meets a passion for
              design? You get someone like me—Hi, I'm Jadamal Sangeetha Choudhary, a
              Full-Stack Developer and UI/UX enthusiast who turns coffee into clean
              code and user-friendly experiences.
            </p>
            
            <p className="text-lg leading-relaxed">
              Based in Lovely Professional University, I'm currently sharpening my 
              skills as a Computer Science and Engineering student. My tech journey 
              kicked off with a simple question—how do websites work?—and has since 
              evolved into a full-blown obsession with building solutions that don't 
              just function but feel right.
            </p>
            
            <p className="text-lg leading-relaxed">
              I'm all about the big picture: creating tools that solve real problems
              while keeping users at the heart of it all. My work blends technical
              precision with a creative spark, ensuring every line of code and every
              pixel serves a purpose.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I'm not coding or sketching wireframes, I'm diving into the
              latest tech trends or flexing my problem-solving muscles on HackerRank
              and LeetCode. Got a challenge that needs a fresh perspective? Let's
              team up and build something extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};