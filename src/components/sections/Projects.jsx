import { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Code,
  Filter,
  ChevronLeft,
  ChevronRight,
  Package,
} from "lucide-react";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isHovering, setIsHovering] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const section = document.getElementById("projects");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    const initialIndices = {};
    projects.forEach((project) => {
      initialIndices[project.id] = 0;
    });
    setCurrentImageIndex(initialIndices);
  }, []);

  const nextImage = (projectId, imagesLength, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % imagesLength,
    }));
  };

  const prevImage = (projectId, imagesLength, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + imagesLength) % imagesLength,
    }));
  };

  const projects = [
    {
      id: 1,
      title: "Brand Model Variant Selector",
      description:
        "A lightweight and efficient npm package for motorcycle data selection with 126 brands, 108 models, and 166 variants. Features comprehensive database, optimized filtering, and with automated CI/CD pipeline.",
      images: [
        "https://cdn.jsdelivr.net/gh/3Sangeetha3/writely-images-cdn@main/npm.png",
      ],
      tags: ["Node.js", "NPM Package", "Open Source", "CI/CD", "fullstack"],
      liveLink: "https://www.npmjs.com/package/brand-model-variant-selector",
      githubLink: "https://github.com/3Sangeetha3/brand-model-variant-selector",
      isPackage: true,
      completedDate: "Nov 2025",
      startedDate: "Sep 2025"
    },
    {
      id: 2,
      title: "Weather-Zone",
      description:
        "Responsive weather dashboard featuring real-time data, 5-day forecast, temperature unit toggle, and dark mode with optimized performance.",
      images: [
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745321863722-74316342.png",
      ],
      tags: ["React.js", "Tailwind CSS", "API Integration", "frontend"],
      liveLink: "https://weather-zone-sangeetha.vercel.app/",
      githubLink: "https://github.com/3Sangeetha3/Weather-Zone",
    },
    {
      id: 3,
      title: "PicLink",
      description:
        "Image hosting platform with GitHub integration, enabling repository-based CDN hosting and advanced API management.",
      images: [
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745321591928-596412311.png",
      ],
      tags: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "fullstack"],
      liveLink: "https://piclink.vercel.app/",
      githubLink: "https://github.com/3Sangeetha3/PicLink",
    },
    {
      id: 4,
      title: "Writely",
      description:
        "Social blogging platform with secure authentication, email verification, and full CRUD operations for articles and profiles.",
      images: [
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745322192545-933518085.png",
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745332538265-775510015.png",
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745332578049-722635369.png",
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745333271647-382596422.png",
      ],
      tags: ["React.js", "Node.js", "MongoDB", "Express.js", "fullstack"],
      liveLink: "https://writely.3sangeetha3.tech/",
      githubLink: "https://github.com/3Sangeetha3/Writely",
    },
    {
      id: 5,
      title: "KOZA",
      description:
        "This is an E-commerce frontend website made with HTML, CSS, javascript and Bootstrap.",
      images: [
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745331339584-671009405.png",
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745332779335-980914552.png",
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745332801802-304517729.png",
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745332828756-621664853.png",
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745332855405-606308614.png",
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745332877001-989505044.png",
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745332895829-201376106.png",
      ],
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "frontend"],
      liveLink: "https://e-commerce-frontend-cj4.pages.dev/",
      githubLink: "https://github.com/3Sangeetha3/Koza-website",
    },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedFilter));

  return (
    <section
      id="projects"
      className="min-h-screen mx-auto relative bg-[#121212] py-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-[#FFBE5E]/10 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-[#FCD26B]/5 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-12 md:mb-16">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] bg-clip-text text-transparent leading-tight">
              Projects
            </h1>
            <div className="h-1 w-3/4 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] rounded-full"></div>
          </div>
          <p className="text-amber-50/90 text-base sm:text-lg mt-4 md:mt-6 max-w-3xl leading-relaxed">
            Here are some of my recent projects that showcase my skills in
            front-end and back-end development, including open source contributions and NPM packages. 
            Each project demonstrates different aspects of my technical abilities and problem-solving
            approach, from full-stack web applications to published packages with automated CI/CD.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 md:mb-16">
          <div className="flex items-center mr-2 text-amber-50/80">
            <Filter size={16} className="mr-1 sm:mr-2" />
            <span className="text-xs sm:text-sm uppercase tracking-wider font-medium">
              Filter:
            </span>
          </div>
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium ${
              selectedFilter === "all"
                ? "bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] text-[#121212]"
                : "bg-[#1E1E1F] text-amber-50/90 hover:bg-[#282829] border border-transparent hover:border-[#FFBE5E]/20"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setSelectedFilter("frontend")}
            className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium ${
              selectedFilter === "frontend"
                ? "bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] text-[#121212]"
                : "bg-[#1E1E1F] text-amber-50/90 hover:bg-[#282829] border border-transparent hover:border-[#FFBE5E]/20"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setSelectedFilter("fullstack")}
            className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium ${
              selectedFilter === "fullstack"
                ? "bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] text-[#121212]"
                : "bg-[#1E1E1F] text-amber-50/90 hover:bg-[#282829] border border-transparent hover:border-[#FFBE5E]/20"
            }`}
          >
            Full Stack
          </button>
          <button
            onClick={() => setSelectedFilter("Open Source")}
            className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium ${
              selectedFilter === "Open Source"
                ? "bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] text-[#121212]"
                : "bg-[#1E1E1F] text-amber-50/90 hover:bg-[#282829] border border-transparent hover:border-[#FFBE5E]/20"
            }`}
          >
            Open Source
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className="bg-gradient-to-b from-[#1E1E1F] to-[#232323] rounded-2xl overflow-hidden border border-[#383838] shadow-lg h-full flex flex-col"
                onMouseEnter={() => setIsHovering(project.id)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                  <div
                    className={`absolute inset-0 z-10 transition-opacity duration-300 ${
                      isHovering === project.id ? "opacity-0" : "opacity-100"
                    }`}
                  ></div>
                  <div className="relative w-full h-full">
                    {project.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ${
                          currentImageIndex[project.id] === imgIndex
                            ? "opacity-100"
                            : "opacity-0"
                        } ${
                          isHovering === project.id
                            ? "scale-110 filter brightness-50"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                  {project.images.length > 1 && isHovering === project.id && (
                    <>
                      <button
                        onClick={(e) =>
                          prevImage(project.id, project.images.length, e)
                        }
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-[#121212]/80 text-[#FFBE5E] p-2 rounded-full hover:bg-[#121212] transition-all duration-300"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={(e) =>
                          nextImage(project.id, project.images.length, e)
                        }
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-[#121212]/80 text-[#FFBE5E] p-2 rounded-full hover:bg-[#121212] transition-all duration-300"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
                        {project.images.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex((prev) => ({
                                ...prev,
                                [project.id]: dotIndex,
                              }));
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              currentImageIndex[project.id] === dotIndex
                                ? "bg-[#FFBE5E] w-4"
                                : "bg-white/50 hover:bg-white/80"
                            }`}
                            aria-label={`Go to image ${dotIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 z-20 ${
                      isHovering === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="flex gap-5">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-[#FFBE5E] text-[#121212] rounded-full hover:bg-[#FCD26B] transition-all duration-300 hover:scale-110 shadow-lg"
                        aria-label={project.isPackage ? "View NPM package" : "View live site"}
                      >
                        {project.isPackage ? <Package size={20} /> : <ExternalLink size={20} />}
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-[#121212] text-[#FFBE5E] rounded-full hover:bg-[#202022] transition-all duration-300 hover:scale-110 border border-[#FFBE5E]/30 shadow-lg"
                        aria-label="View GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Project content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-amber-50 flex-1">
                      {project.title}
                    </h3>
                    {project.isPackage && (
                      <span className="ml-2 px-2 py-1 text-xs font-medium bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] text-[#121212] rounded-full">
                        NPM Package
                      </span>
                    )}
                  </div>
                  {project.startedDate && project.completedDate && (
                    <p className="text-xs text-amber-50/60 mb-2">
                      {project.startedDate} - {project.completedDate}
                    </p>
                  )}
                  <p className="text-amber-50/70 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                    {project.tags
                      .filter(
                        (tag) => tag !== "frontend" && tag !== "fullstack"
                      )
                      .map((tag, i) => (
                        <span
                          key={i}
                          className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full border ${
                            tag === "Open Source"
                              ? "bg-green-500/10 text-green-400 border-green-400/20"
                              : tag === "NPM Package"
                              ? "bg-red-500/10 text-red-400 border-red-400/20"
                              : "bg-[#252525] text-[#FFBE5E] border-[#FFBE5E]/20"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="https://github.com/3Sangeetha3"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#1E1E1F] text-[#FFBE5E] font-medium rounded-xl shadow-lg hover:shadow-[#FFBE5E]/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
          >
            <span className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-[#FCD26B]/0 to-[#FFBE5E]/0 group-hover:from-[#FCD26B] group-hover:to-[#FFBE5E] transition-all duration-300 -z-10"></span>

            <span className="absolute inset-0 bg-[#1E1E1F] rounded-xl -z-10 group-hover:bg-[#202022] transition-colors group-hover:inset-0.5"></span>
            <Code size={18} className="sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">View More Projects</span>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] group-hover:w-full transition-all duration-500"></span>
          </a>
        </div>
      </div>
    </section>
  );
};
