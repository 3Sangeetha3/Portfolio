import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  Github,
  Linkedin,
} from "lucide-react";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen mx-auto flex items-center justify-center relative bg-[#121212] py-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-30 w-64 h-64 rounded-full bg-[#FFBE5E]/10 blur-3xl"></div>
        <div className="absolute bottom-40 left-30 w-72 h-72 rounded-full bg-[#FCD26B]/5 blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] bg-clip-text text-transparent leading-tight">
              Contact Me
            </h2>
            <div className="h-1 w-3/4 bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] rounded-full"></div>
          </div>
          <p className="text-amber-50/90 text-lg mt-6 max-w-3xl leading-relaxed">
            Have a project in mind or just want to chat about tech? I'd love to
            hear from you! Drop me a message using the form below and I'll get
            back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="bg-gradient-to-b from-[#1E1E1F] to-[#232323] rounded-2xl p-8 border border-[#383838] shadow-lg h-full">
              <h3 className="text-2xl font-bold text-amber-50 mb-8">
                Let's Connect
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#252525] rounded-lg border border-[#FFBE5E]/20">
                    <Mail className="text-[#FFBE5E]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-amber-50 font-medium mb-1">Email</h4>
                    <a
                      href="mailto:jadamalsangeetha@gmail.com"
                      className="text-amber-50/70 hover:text-[#FFBE5E] transition-colors"
                    >
                      jadamalsangeetha@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#252525] rounded-lg border border-[#FFBE5E]/20">
                    <Phone className="text-[#FFBE5E]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-amber-50 font-medium mb-1">Phone</h4>
                    <a
                      href="tel:+916303588169"
                      className="text-amber-50/70 hover:text-[#FFBE5E] transition-colors"
                    >
                      +91 6303588169
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#252525] rounded-lg border border-[#FFBE5E]/20">
                    <MapPin className="text-[#FFBE5E]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-amber-50 font-medium mb-1">Location</h4>
                    <p className="text-amber-50/70">
                      Lovely Professional University, Punjab, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-amber-50 font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/3Sangeetha3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#252525] rounded-lg border border-[#FFBE5E]/20 text-amber-50/70 hover:text-[#FFBE5E] hover:border-[#FFBE5E]/40 transition-all"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jadamalsangeetha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#252525] rounded-lg border border-[#FFBE5E]/20 text-amber-50/70 hover:text-[#FFBE5E] hover:border-[#FFBE5E]/40 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-b from-[#1E1E1F] to-[#232323] rounded-2xl p-8 border border-[#383838] shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-amber-50 text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#252525] rounded-lg border border-[#383838] focus:border-[#FFBE5E]/50 focus:ring-1 focus:ring-[#FFBE5E]/30 focus:outline-none transition-all text-amber-50 placeholder-amber-50/50"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-amber-50 text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#252525] rounded-lg border border-[#383838] focus:border-[#FFBE5E]/50 focus:ring-1 focus:ring-[#FFBE5E]/30 focus:outline-none transition-all text-amber-50 placeholder-amber-50/50"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-amber-50 text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-[#252525] rounded-lg border border-[#383838] focus:border-[#FFBE5E]/50 focus:ring-1 focus:ring-[#FFBE5E]/30 focus:outline-none transition-all text-amber-50 placeholder-amber-50/50"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mt-6 space-y-2">
                <label
                  htmlFor="message"
                  className="block text-amber-50 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full p-3 bg-[#252525] rounded-lg border border-[#383838] focus:border-[#FFBE5E]/50 focus:ring-1 focus:ring-[#FFBE5E]/30 focus:outline-none transition-all text-amber-50 placeholder-amber-50/50 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 w-full p-4 rounded-lg font-medium transition-all duration-300 ${
                    isSubmitting
                      ? "bg-[#383838] text-amber-50/50 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] text-[#121212] hover:shadow-lg hover:shadow-[#FFBE5E]/20 hover:-translate-y-1"
                  }`}
                  aria-label={isSubmitting ? "Sending message" : "Send message"}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="mt-4 p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-center">
                    Your message has been sent successfully! I'll get back to
                    you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-4 p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-center">
                    There was an error sending your message. Please try again or
                    contact me directly via email.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
