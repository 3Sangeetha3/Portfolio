import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Award,
  Code,
  Users,
  BookOpen,
  EllipsisVertical,
} from "lucide-react";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-amber-50 text-lg hover:text-[#FCD36C] transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-amber-50 text-lg hover:text-[#FCD36C] transition-colors">
          <EllipsisVertical className="w-5 h-5" />
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#202022] border border-[#383838] z-50 left-1/2 transform -translate-x-1/2">
          <div className="py-1 rounded-md bg-[#202022] shadow-xs">
            <a
              href="#trainings"
              className="flex items-center px-4 py-3 text-sm text-amber-50 hover:bg-[#282829] hover:text-[#FCD36C] transition-colors"
            >
              <BookOpen className="mr-3 h-4 w-4 text-[#FFBE5E]" />
              <span>Trainings</span>
            </a>
            <a
              href="#certifications"
              className="flex items-center px-4 py-3 text-sm text-amber-50 hover:bg-[#282829] hover:text-[#FCD36C] transition-colors"
            >
              <Award className="mr-3 h-4 w-4 text-[#FFBE5E]" />
              <span>Certifications</span>
            </a>
            {/* <a
              href="#open-source"
              className="flex items-center px-4 py-3 text-sm text-amber-50 hover:bg-[#282829] hover:text-[#FCD36C] transition-colors"
            >
              <Code className="mr-3 h-4 w-4 text-[#FFBE5E]" />
              <span>Open-Source</span>
            </a> */}
            <a
              href="#co-curricular"
              className="flex items-center px-4 py-3 text-sm text-amber-50 hover:bg-[#282829] hover:text-[#FCD36C] transition-colors"
            >
              <Users className="mr-3 h-4 w-4 text-[#FFBE5E]" />
              <span>Co-curricular Activities</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
