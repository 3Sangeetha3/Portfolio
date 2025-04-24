import { useState, useEffect } from "react";
import { BookOpen, Calendar, Award, ChevronRight, Code } from "lucide-react";

export const Trainings = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState(0);

  const certificates = [
    {
      id: 1,
      title: "Training Completion Certificate",
      issuer: "Cipher Schools",
      date: "July 2024",
      type: "training",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745474403128-569291240.png",
    },
    {
      id: 2,
      title: "Project Completion Certificate",
      issuer: "Cipher Schools",
      date: "July 2024",
      type: "project",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745474892266-348404129.png",
    },
    {
      id: 3,
      title: "DSA Interview Preparation",
      issuer: "Cipher Schools",
      date: "September 2024",
      type: "training",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745475483634-23503638.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("trainings");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="trainings"
      className="min-h-screen mx-auto flex flex-col items-center justify-center relative bg-[#121212] py-20 px-6"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-[#FFBE5E]/5 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-[#FCD26B]/5 blur-3xl"></div>
      </div>
      <div className="container max-w-5xl relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl py-3 md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] bg-clip-text text-transparent">
            Training & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-amber-50/80 text-lg max-w-2xl mx-auto">
            Professional development and hands-on training that has shaped my
            technical expertise
          </p>
        </div>

        {/* Training cards */}
        <div className="space-y-8">
          {/* MERN Training Card */}
          <div
            className={`bg-[#1E1E1F] border border-[#383838] rounded-xl p-6 md:p-8 shadow-lg transition-all duration-1000 delay-300 hover:shadow-[#FFBE5E]/10 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#383838] flex items-center justify-center shadow-inner shadow-black/30">
                  <BookOpen size={32} className="text-[#FFBE5E]" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#FAFAFA]">
                    Cipher Schools
                  </h3>
                  <div className="flex items-center mt-2 md:mt-0 text-amber-50/70 space-x-2">
                    <Calendar size={16} />
                    <span className="text-sm">Jun' 24 - Jul' 24</span>
                  </div>
                </div>
                <h4 className="text-lg font-medium text-[#FCD26B] mb-4">
                  Summer Training in Full Stack Development using MERN
                </h4>
                <ul className="space-y-4 text-amber-50/90">
                  <li className="flex items-start gap-3">
                    <ChevronRight
                      size={20}
                      className="text-[#FFBE5E] flex-shrink-0 mt-1"
                    />
                    <p>
                      Developed core React and Node.js skills by building a
                      Tic-Tac-Toe game and a command-line "Notes" app, mastering
                      component structure, state management, and file-based data
                      handling.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight
                      size={20}
                      className="text-[#FFBE5E] flex-shrink-0 mt-1"
                    />
                    <p>
                      Created "Writely," a full-stack blogging platform with
                      MongoDB, Express, React, and Node.js-implemented JWT-based
                      authentication for secure sign-up/login, post creation,
                      tagging, and commenting to practice end-to-end data flow.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight
                      size={20}
                      className="text-[#FFBE5E] flex-shrink-0 mt-1"
                    />
                    <p>
                      Explored new frameworks and tools through weekly projects
                      and live sessions - built RESTful APIs, resolved CORS
                      issues, optimised database operations, and utilised
                      Tailwind CSS for rapid UI styling.
                    </p>
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-[#282829] rounded-full text-sm text-amber-50/80">
                    React.js
                  </span>
                  <span className="px-3 py-1 bg-[#282829] rounded-full text-sm text-amber-50/80">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-[#282829] rounded-full text-sm text-amber-50/80">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 bg-[#282829] rounded-full text-sm text-amber-50/80">
                    Express.js
                  </span>
                  <span className="px-3 py-1 bg-[#282829] rounded-full text-sm text-amber-50/80">
                    JWT Auth
                  </span>
                  <span className="px-3 py-1 bg-[#282829] rounded-full text-sm text-amber-50/80">
                    RESTful APIs
                  </span>
                  <span className="px-3 py-1 bg-[#282829] rounded-full text-sm text-amber-50/80">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* DSA Training Card */}
          <div
            className={`bg-[#1E1E1F] border border-[#383838] rounded-xl p-6 md:p-8 shadow-lg transition-all duration-1000 delay-500 hover:shadow-[#FFBE5E]/10 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#383838] flex items-center justify-center shadow-inner shadow-black/30">
                  <Code size={32} className="text-[#FFBE5E]" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#FAFAFA]">
                    Cipher Schools
                  </h3>
                  <div className="flex items-center mt-2 md:mt-0 text-amber-50/70 space-x-2">
                    <Calendar size={16} />
                    <span className="text-sm">Sep' 24</span>
                  </div>
                </div>
                <h4 className="text-lg font-medium text-[#FCD26B] mb-4">
                  Data Structures & Algorithms - Interview Preparation
                </h4>
                <ul className="space-y-4 text-amber-50/90">
                  <li className="flex items-start gap-3">
                    <ChevronRight
                      size={20}
                      className="text-[#FFBE5E] flex-shrink-0 mt-1"
                    />
                    <p>
                      Mastered essential data structures including arrays,
                      linked lists, stacks, queues, trees, and graphs, with
                      in-depth understanding of their implementation and
                      optimization.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight
                      size={20}
                      className="text-[#FFBE5E] flex-shrink-0 mt-1"
                    />
                    <p>
                      Developed strong problem-solving skills through practicing
                      algorithmic techniques like recursion, dynamic
                      programming, greedy algorithms, and backtracking on
                      various coding problems.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight
                      size={20}
                      className="text-[#FFBE5E] flex-shrink-0 mt-1"
                    />
                    <p>
                      Learned time and space complexity analysis, code
                      optimization techniques, and interview strategies
                      specifically designed for technical interviews at leading
                      tech companies.
                    </p>
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-[#282829] rounded-full text-sm text-amber-50/80">
                    Data Structures
                  </span>
                  <span className="px-3 py-1 bg-[#282829] rounded-full text-sm text-amber-50/80">
                    Algorithms
                  </span>
                  <span className="px-3 py-1 bg-[#282829] rounded-full text-sm text-amber-50/80">
                    Problem Solving
                  </span>
                  <span className="px-3 py-1 bg-[#282829] rounded-full text-sm text-amber-50/80">
                    Time Complexity
                  </span>
                  <span className="px-3 py-1 bg-[#282829] rounded-full text-sm text-amber-50/80">
                    Interview Prep
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">
              <span className="inline-flex items-center gap-2">
                <Award className="text-[#FFBE5E]" />
                Certifications
              </span>
            </h3>
            <p className="text-amber-50/80 max-w-2xl mx-auto">
              Verified credentials that showcase my professional development and
              achievement
            </p>
          </div>
          <div className="bg-[#1E1E1F] border border-[#383838] rounded-xl p-6 md:p-8 shadow-lg">
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {certificates.map((cert, index) => (
                <button
                  key={cert.id}
                  onClick={() => setActiveCertificate(index)}
                  className={`px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2
                  ${
                    activeCertificate === index
                      ? "bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] text-[#121212]"
                      : "bg-[#282829] text-amber-50/80 hover:bg-[#333333]"
                  }`}
                >
                  <Award size={16} />
                  {cert.title}
                </button>
              ))}
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-2xl aspect-[1.4/1] rounded-lg overflow-hidden mb-6 border-2 border-[#383838] shadow-xl">
                <img
                  src={certificates[activeCertificate].imageUrl}
                  alt={certificates[activeCertificate].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h4 className="text-xl font-bold text-white">
                    {certificates[activeCertificate].title}
                  </h4>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-amber-50/90">
                      {certificates[activeCertificate].issuer}
                    </p>
                    <p className="text-amber-50/70 text-sm">
                      {certificates[activeCertificate].date}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-center text-amber-50/70 text-sm max-w-xl">
                {activeCertificate === 0
                  ? "This certificate was awarded upon successful completion of the Summer Training in Full Stack Development using MERN stack at Cipher Schools."
                  : activeCertificate === 1
                  ? "This project completion certificate was awarded for successfully building and deploying the 'Writely' blogging platform project at Cipher Schools."
                  : "This certificate was awarded for successfully completing the Data Structures & Algorithms Interview Preparation training at Cipher Schools."}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] text-[#121212] font-medium rounded-lg shadow-lg hover:shadow-[#FFBE5E]/20 transition-all duration-300 hover:-translate-y-1"
          >
            View My Projects
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
