import { useState, useEffect } from "react";
import { BookOpen, Briefcase, Award, Download } from "lucide-react";

export const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1t8bQHs0bdvH4LVBk35zqoUNN60StDrlk/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section
      id="resume"
      className="min-h-screen mx-auto flex items-center justify-center relative bg-[#121212] py-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-[#FFBE5E]/10 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-[#FCD26B]/5 blur-3xl"></div>
      </div>

      <div className="container max-w-7xl px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] bg-clip-text text-transparent leading-tight border-b border-[#FFBE5E]/20 pb-4">
          Resume
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education Section */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-[#FFBE5E]" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Education
              </h2>
            </div>

            <div className="relative ml-3 border-l-2 border-[#FFBE5E]/30 pl-8 space-y-12">
              <div className="relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-[#FFBE5E]"></div>
                <h3 className="text-xl font-bold text-white">
                  Lovely Professional University
                </h3>
                <p className="text-[#FFBE5E] font-medium">Aug 2022 — Present</p>
                <p className="text-amber-50 mt-2">
                  Computer Science and Engineering — CGPA: 8.04
                </p>
                <p className="text-amber-50/70 mt-1">Jalandhar, Punjab</p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-[#FFBE5E]"></div>
                <h3 className="text-xl font-bold text-white">
                  Aditya Educational Institutions
                </h3>
                <p className="text-[#FFBE5E] font-medium">
                  Apr 2020 — Mar 2022
                </p>
                <p className="text-amber-50 mt-2">
                  Intermediate — Percentage: 90.5%
                </p>
                <p className="text-amber-50/70 mt-1">
                  East Godavari, Andhra Pradesh
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-[#FFBE5E]"></div>
                <h3 className="text-xl font-bold text-white">
                  Sarada Convent (E.M) High School
                </h3>
                <p className="text-[#FFBE5E] font-medium">
                  Apr 2019 — Mar 2020
                </p>
                <p className="text-amber-50 mt-2">
                  Matriculation — Percentage: 96.5%
                </p>
                <p className="text-amber-50/70 mt-1">
                  East Godavari, Andhra Pradesh
                </p>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-[#FFBE5E]" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Projects
              </h2>
            </div>

            <div className="relative ml-3 border-l-2 border-[#FFBE5E]/30 pl-8 space-y-12">
              <div className="relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-[#FFBE5E]"></div>
                <h3 className="text-xl font-bold text-white">Weather-Zone</h3>
                <p className="text-[#FFBE5E] font-medium">
                  Mar 2025 - Mar 2025
                </p>
                <p className="text-amber-50/70 italic mt-1">
                  React.js, Tailwind CSS, OpenWeatherMap API
                </p>
                <p className="text-amber-50 mt-2">
                  Developed a responsive weather dashboard featuring real-time
                  data, 5-day forecast, temperature unit toggle, dark mode, and
                  optimized performance.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-[#FFBE5E]"></div>
                <h3 className="text-xl font-bold text-white">PicLink</h3>
                <p className="text-[#FFBE5E] font-medium">
                  Mar 2025 - Mar 2025
                </p>
                <p className="text-amber-50/70 italic mt-1">
                  React.js, Node.js, ExpressJs, Tailwind CSS, GitHub's Octokit
                  API
                </p>
                <p className="text-amber-50 mt-2">
                  Built an image hosting platform with GitHub integration,
                  enabling repository-based CDN hosting and advanced API
                  management.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-[#FFBE5E]"></div>
                <h3 className="text-xl font-bold text-white">Writely</h3>
                <p className="text-[#FFBE5E] font-medium">
                  Jun 2024 - Mar 2025
                </p>
                <p className="text-amber-50/70 italic mt-1">
                  React.js, Node.js, ExpressJs, MongoDB, Tailwind CSS
                </p>
                <p className="text-amber-50 mt-2">
                  Created a social blogging platform with secure authentication,
                  email verification, and full CRUD operations for articles and
                  profiles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Co-curricular & Skills Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Co-curricular Activities */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-[#FFBE5E]" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Co-curricular
              </h2>
            </div>

            <div className="relative ml-3 border-l-2 border-[#FFBE5E]/30 pl-8">
              <div className="relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-[#FFBE5E]"></div>
                <h3 className="text-xl font-bold text-white">
                  GDSC LPU | Web Team Member
                </h3>
                <p className="text-[#FFBE5E] font-medium">
                  Sep 2024 — Jan 2025
                </p>
                <p className="text-amber-50 mt-2">
                  Developed full-stack projects using React.js, Node.js,
                  MongoDB, and Express.js in an Agile environment, contributing
                  to TechnOcean and GDSC WOW events.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              My Skills
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-amber-50 font-medium">
                    Frontend Development
                  </span>
                  <span className="text-[#FFBE5E]">85%</span>
                </div>
                <div className="h-3 w-full bg-[#282829] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-amber-50 font-medium">
                    Backend Development
                  </span>
                  <span className="text-[#FFBE5E]">75%</span>
                </div>
                <div className="h-3 w-full bg-[#282829] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-amber-50 font-medium">
                    UI/UX Design
                  </span>
                  <span className="text-[#FFBE5E]">70%</span>
                </div>
                <div className="h-3 w-full bg-[#282829] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-amber-50 font-medium">
                    Data Structures & Algorithms
                  </span>
                  <span className="text-[#FFBE5E]">80%</span>
                </div>
                <div className="h-3 w-full bg-[#282829] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Button*/}
        <div className="mt-20 flex justify-center">
          <button
            onClick={handleResumeClick}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] text-black font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-[#FFBE5E]/20 hover:scale-105"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};
