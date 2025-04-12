import { useEffect } from "react";
import { Menu, EllipsisVertical, Pointer, X } from "lucide-react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[#121212] z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out 
                    ${
                      menuOpen
                        ? "h-screen opacity-100 pointer-events-auto"
                        : "h-0 opacity-0 pointer-events-none"
                    }`}
    >
      <div className="absolute inset-0 bg-amber backdrop-blur-md"> </div>

      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-amber-50 hover:text-[#FCD36C] p-2 rounde-full text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        <X className="w-6 h-6" />
      </button>
      <a
        href="#home"
        className="fixed top-6 left-6 mx-auto text-2xl font-bold text-[#FCD36C] hover:text-[#FFBE5E] transition duration-300"
      >
        Sangeetha <span className="text-xs text-amber-50">| CSE Student</span>
      </a>

      <div className="relative z-10 flex flex-col items-center w-full max-w-md">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#FCD36C]/10 blur-3xl"></div>
        <div className="flex flex-col items-center space-y-6 py-12">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-amber-50 hover:text-[#FCD36C] hover:scale-105 my-4 transform transition-transform duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-amber-50 hover:text-[#FCD36C] hover:scale-105 my-4 transform transition-transform duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            About
          </a>
          <a
            href="#resume"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-amber-50 hover:text-[#FCD36C] hover:scale-105 my-4 transform transition-transform duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Resume
          </a>
          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-amber-50 hover:text-[#FCD36C] hover:scale-105 my-4 transform transition-transform duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-amber-50 my-4 hover:text-[#FCD36C] hover:scale-105 transform transition-transform duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-amber-50 my-4 hover:text-[#FCD36C] hover:scale-105 transform transition-transform duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Contact
          </a>
          <a
            href="#more"
            onClick={() => setMenuOpen(false)}
            className={`p-2 rounded-full bg-[#FCD36C]/10 hover:bg-[#FFBE5E]/30 text-2xl font-semibold text-amber-50 hover:text-[#FCD36C] my-4 hover:scale-105 transform transition-transform duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <EllipsisVertical className="text-amber-400"/>
          </a>
        </div>
      </div>
    </div>
  );
};
