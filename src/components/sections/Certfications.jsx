import { useState, useEffect } from "react";
import {
  Award,
  ChevronRight,
  ChevronLeft,
  Calendar,
  BookOpen,
  Building,
} from "lucide-react";

export const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState(0);
  const certificates = [
    {
      id: 4,
      title: "Ethical Hacking",
      issuer: "NPTEL",
      date: "December 2024",
      type: "course",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745505976309-712039579.png",
    },
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
      type: "training",
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
    {
      id: 5,
      title: "Data Structures & Algorithms",
      issuer: "Udemy",
      date: "November 2023",
      type: "course",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745506298218-510910177.jpg",
    },
  ];

  const certTypes = [...new Set(certificates.map((cert) => cert.type))];
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredCertificates =
    activeFilter === "all"
      ? certificates
      : certificates.filter((cert) => cert.type === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("certifications");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    setActiveCertificate(0);
  }, [activeFilter]);

  const nextCertificate = () => {
    setActiveCertificate((prev) =>
      prev === filteredCertificates.length - 1 ? 0 : prev + 1
    );
  };

  const prevCertificate = () => {
    setActiveCertificate((prev) =>
      prev === 0 ? filteredCertificates.length - 1 : prev - 1
    );
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "course":
        return <BookOpen size={16} />;
      case "training":
        return <Building size={16} />;
      default:
        return <Award size={16} />;
    }
  };

  return (
    <section
      id="certifications"
      className="min-h-screen mx-auto flex flex-col items-center justify-center relative bg-gradient-to-b from-[#121212] to-[#181818] py-20 px-4 md:px-6"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-[#FFBE5E]/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-[#FCD26B]/5 blur-3xl"></div>
      </div>

      <div className="container max-w-5xl relative z-10">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl py-3 md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-amber-50/80 text-lg max-w-2xl mx-auto">
            Professional credentials that showcase my expertise and continuous
            learning journey
          </p>
        </div>

        {/* Filter buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300
              ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] text-[#121212] shadow-lg shadow-[#FFBE5E]/20"
                  : "bg-[#282829] text-amber-50/80 hover:bg-[#333333] hover:text-amber-50"
              }`}
          >
            All Certificates
          </button>

          {certTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize flex items-center
              ${
                activeFilter === type
                  ? "bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] text-[#121212] shadow-lg shadow-[#FFBE5E]/20"
                  : "bg-[#282829] text-amber-50/80 hover:bg-[#333333] hover:text-amber-50"
              }`}
            >
              <span className="mr-2">{getTypeIcon(type)}</span>
              {type}
            </button>
          ))}
        </div>

        {/* Certificate Showcase */}
        <div
          className={`bg-[#1E1E1F]/80 backdrop-blur-sm border border-[#383838] rounded-xl p-4 md:p-8 shadow-xl transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-3xl mb-8">
              {filteredCertificates.length > 1 && (
                <>
                  <button
                    onClick={prevCertificate}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 z-10 w-10 h-10 rounded-full bg-[#202022]/80 hover:bg-[#FFBE5E] text-amber-50 hover:text-[#121212] flex items-center justify-center transition-all duration-300 border border-[#383838] hover:border-[#FFBE5E]"
                    aria-label="Previous certificate"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextCertificate}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 z-10 w-10 h-10 rounded-full bg-[#202022]/80 hover:bg-[#FFBE5E] text-amber-50 hover:text-[#121212] flex items-center justify-center transition-all duration-300 border border-[#383838] hover:border-[#FFBE5E]"
                    aria-label="Next certificate"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Certificate display */}
              <div className="relative w-full aspect-[1.4/1] rounded-lg overflow-hidden border-2 border-[#383838] shadow-xl group">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

                <img
                  src={filteredCertificates[activeCertificate]?.imageUrl}
                  alt={filteredCertificates[activeCertificate]?.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 py-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white">
                        {filteredCertificates[activeCertificate]?.title}
                      </h4>
                      <p className="text-amber-50/90 mt-1 flex items-center">
                        <Building size={14} className="mr-1.5" />
                        {filteredCertificates[activeCertificate]?.issuer}
                      </p>
                    </div>

                    <div className="flex flex-col md:items-end">
                      <span className="inline-flex items-center px-3 py-1 bg-[#FFBE5E] text-[#121212] text-xs font-medium rounded-full capitalize self-start md:self-auto">
                        {getTypeIcon(
                          filteredCertificates[activeCertificate]?.type
                        )}
                        <span className="ml-1">
                          {filteredCertificates[activeCertificate]?.type}
                        </span>
                      </span>
                      <p className="text-amber-50/70 text-sm mt-1 flex items-center">
                        <Calendar size={14} className="mr-1.5" />
                        {filteredCertificates[activeCertificate]?.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination dots */}
              {filteredCertificates.length > 1 && (
                <div className="flex justify-center mt-4 gap-2">
                  {filteredCertificates.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCertificate(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeCertificate === index
                          ? "bg-[#FFBE5E] w-6"
                          : "bg-[#383838] hover:bg-[#FFBE5E]/50 w-2"
                      }`}
                      aria-label={`Go to certificate ${index + 1}`}
                    ></button>
                  ))}
                </div>
              )}
            </div>

            {/* Certificate description */}
            <div className="text-center max-w-2xl bg-[#202022] p-6 rounded-lg border border-[#383838] backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Award size={20} className="text-[#FFBE5E]" />
                <h4 className="text-lg font-medium text-[#FCD26B]">
                  {filteredCertificates[activeCertificate]?.title}
                </h4>
              </div>

              <p className="text-amber-50/80 mb-4">
                {filteredCertificates[activeCertificate]?.type === "training"
                  ? `This certificate validates my comprehensive training in ${filteredCertificates[activeCertificate]?.title} from ${filteredCertificates[activeCertificate]?.issuer}, showcasing my practical skills and knowledge in this area.`
                  : filteredCertificates[activeCertificate]?.type === "project"
                  ? `This project completion certificate demonstrates my ability to successfully develop and deploy the ${filteredCertificates[activeCertificate]?.title} project, applying concepts learned during my training.`
                  : `This certification from ${filteredCertificates[activeCertificate]?.issuer} validates my proficiency in ${filteredCertificates[activeCertificate]?.title}, enhancing my technical credentials and practical knowledge in this field.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
