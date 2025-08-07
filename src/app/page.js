"use client";
import React, { useState, useCallback, memo } from "react";
import { FaGithub, FaLinkedin, FaFileAlt, FaSun, FaMoon } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";

// Social link button
const SocialLink = memo(({ href, icon: Icon, onClick, title }) => (
  <button
    onClick={
      onClick || (() => window.open(href, "_blank", "noopener,noreferrer"))
    }
    className="p-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 rounded-lg hover:bg-blue-500/10"
    title={title}
  >
    <Icon className="w-5 h-5" />
  </button>
));

// Skill badge (theme-aware)
const SkillBadge = memo(({ icon, name, isDarkMode }) => (
  <div
    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all duration-300 hover:scale-105
      ${
        isDarkMode
          ? "bg-blue-500/10 border border-blue-500/20 text-gray-300 hover:bg-blue-500/20 hover:border-blue-500/30"
          : "bg-blue-100 border border-blue-200 text-gray-800 hover:bg-blue-200 hover:border-blue-300"
      }`}
  >
    <img src={icon} alt={name} className="w-4 h-4" loading="lazy" />
    <span>{name}</span>
  </div>
));

// Tech tag (theme-aware)
const TechBadge = memo(({ tech, isDarkMode }) => (
  <span
    className={`px-3 py-1 rounded-full text-xs border transition-colors duration-300
      ${
        isDarkMode
          ? "bg-zinc-900 text-gray-400 border-zinc-800 group-hover:border-blue-500/20"
          : "bg-gray-200 text-gray-800 border-gray-300 group-hover:border-blue-400/30"
      }`}
  >
    {tech}
  </span>
));

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [buttonText, setButtonText] = useState("Copy email address");

  const about = {
    description:
      "A 20-year-old backend developer passionate about building scalable systems and efficient APIs. Currently exploring cloud technologies and microservices architecture, with a strong focus on creating robust, high-performance backend solutions.",
  };

  const education = [
    {
      school: "Amrit Campus",
      role: "Bachelors in Computer Science And Information Technology (Bsc.CSIT)",
      period: "Nov 2023 - ",
      logo: "amrit.jpg",
      current: true,
    },
    {
      school: "Himalaya Secondary School",
      role: "Computer Engineering (From Grade 9 to 12 )",
      period: "Apr 2019 - Jun 2023",
      logo: "himalaya.png",
      current: false,
    },
  ];

  const skills = [
    { name: "JavaScript", icon: "/javascript.svg" },
    { name: "Node js", icon: "/nodejs.svg" },
    { name: "Express", icon: "/express.svg" },
    { name: "Puppeteer", icon: "/puppeteer.svg" },
    { name: "MongoDB", icon: "/mongodb.svg" },
    { name: "Vercel", icon: "/vercel.svg" },
    { name: "GitHub", icon: "/github.svg" },
    { name: "Postman", icon: "/postman.svg" },
    { name: "Web Sockets", icon: "/socket.svg" },
    { name: "Postgres", icon: "/postgresql.svg" },
  ];

  const projects = [
    {
      title: "Inquizzit",
      description:
        "'Inquizzit' is a real-time quiz app where users can instantly generate questions based on any topic. Hosts can create rooms, invite players, and edit questions on the go. Players earn points for correct answers, with the top 3 winners announced. Built with Node.js, Socket.IO, and Groq API, it offers a smooth and interactive quiz experience.",
      isNew: true,
      image: "Inquizzit.png",
      technologies: ["Node.js", "Express", "Socket.io", "LLM"],
      link: "https://inquizzit.vercel.app/",
    },
    {
      title: "Grill My Reddit",
      description:
        "'Grill My Reddit' is an AI-powered Reddit roaster that humorously roasts users based on their recent Reddit comments and username. It fetches real-time user data using Reddit's API and crafts clever, personalized insults with the help of advanced AI. Just drop a Reddit username—and let the roasting begin!",
      isNew: false,
      image: "grillmyreddit.png",
      technologies: ["Node.js", "Express", "Reddit API", "Next", "LLM"],
      link: "https://grillmyreddit.vercel.app/",
    },
    {
      title: "The Samachar",
      description:
        "'The Samachar' is a news aggregator that uses custom-built scrapers with Puppeteer in Node.js to collect articles. It features AI-generated summaries, trending topics, and insights on how different sources cover the same news.",
      isNew: false,
      image: "thesamachar2.png",
      technologies: ["Node.js", "Express", "Puppeteer", "Next", "MongoDb"],
      link: "https://thesamachar.vercel.app/",
    },
    {
      title: "Video Streaming Backend API",
      description:
        "A comprehensive API for a video streaming platform, offering features like user authentication, video uploads, playlists, comments, community posts, and subscriptions. Built with Node.js and Express, it utilizes MongoDB for seamless data management and RESTful API architecture for efficient interactions.",
      isNew: false,
      image: "theapi.png",
      technologies: ["Node.js", "JavaScript", "MongoDB", "Express", "JWT"],
      link: "https://github.com/Aayush-khadka/Video-Streaming-Backend",
    },
  ];

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("Khadkaaayush90@gmail.com").then(() => {
      setButtonText("Copied!");
      setTimeout(() => setButtonText("Copy email address"), 2000);
    });
  }, []);

  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode
    ? "min-h-screen w-full bg-black text-gray-300"
    : "min-h-screen w-full bg-gray-50 text-gray-700";

  const cardClasses = isDarkMode
    ? "bg-zinc-950 border border-zinc-800 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
    : "bg-white border border-gray-200 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20";

  const textPrimary = isDarkMode ? "text-white" : "text-gray-900";
  const textSecondary = isDarkMode ? "text-gray-400" : "text-gray-600";
  const textMuted = isDarkMode ? "text-gray-500" : "text-gray-500";

  return (
    <div className={`${themeClasses} px-4 sm:px-6 transition-all duration-300`}>
      <div className="max-w-3xl mx-auto py-8 sm:py-12 md:py-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 animate-fade-in">
          <div className="relative group">
            <img
              src="/img.jpg"
              alt="Profile"
              className="w-20 h-20 sm:w-16 sm:h-16 rounded-full ring-2 ring-blue-500/20 shadow-md shadow-blue-500/10 transition-all duration-300 group-hover:scale-105 group-hover:ring-blue-500/40"
              loading="lazy"
            />
          </div>
          <div className="text-center sm:text-left flex-1">
            <h1
              className={`${textPrimary} font-bold text-2xl tracking-tight hover:text-blue-400 transition-colors duration-300`}
            >
              Aayush Khadka
            </h1>
            <p className={`text-sm ${textSecondary} mt-1`}>Backend Developer</p>
          </div>
          <div className="flex gap-2">
            <SocialLink
              href="#"
              icon={FaFileAlt}
              onClick={handleResumeClick}
              title="Download Resume"
            />
            <SocialLink
              href="https://github.com/Aayush-khadka"
              icon={FaGithub}
              title="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/aayush-khadka-0513931b0/"
              icon={FaLinkedin}
              title="LinkedIn"
            />
            <SocialLink
              href="#"
              icon={isDarkMode ? FaSun : FaMoon}
              onClick={toggleTheme}
              title={isDarkMode ? "Light Mode" : "Dark Mode"}
            />
          </div>
        </div>

        {/* About */}
        <section className="mb-12">
          <h2 className={`${textPrimary} mb-4 text-lg font-semibold`}>About</h2>
          <p className={`${textSecondary} leading-relaxed text-base`}>
            {about.description}
          </p>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className={`${textPrimary} mb-6 text-lg font-semibold`}>
            Education
          </h2>
          <div className="space-y-6 relative">
            <div className="absolute left-4 sm:left-6 top-6 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent" />

            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start gap-4 sm:gap-6 relative group hover:translate-x-1 transition-all duration-300"
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div>
                      <h3
                        className={`${textPrimary} font-medium group-hover:text-blue-400 transition-colors duration-300`}
                      >
                        {edu.school}
                      </h3>
                      <p className={`${textSecondary} text-sm mt-1`}>
                        {edu.role}
                      </p>
                    </div>
                    <span
                      className={`${textMuted} text-sm mt-2 sm:mt-0 flex items-center gap-2`}
                    >
                      {edu.period}
                      {edu.current && (
                        <span className="inline-flex items-center gap-1 text-green-400 text-xs bg-green-500/10 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                          Present
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className={`${textPrimary} mb-4 text-lg font-semibold`}>
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((skill, index) => (
              <SkillBadge key={index} {...skill} isDarkMode={isDarkMode} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="pb-12">
          <h2 className={`text-3xl font-bold ${textPrimary} text-center mb-4`}>
            My Work
          </h2>
          <p className={`${textMuted} text-center mb-8`}>
            Collected across different projects
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group ${cardClasses} rounded-xl overflow-hidden transition-all duration-300 flex flex-col`}
              >
                <div
                  className="w-full h-48 sm:h-64 overflow-hidden relative cursor-pointer"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                  {project.isNew && (
                    <span className="absolute top-3 right-3 px-2 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
                      New
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      View Project
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h3
                      className={`text-lg font-semibold ${textPrimary} group-hover:text-blue-400 flex items-center gap-2 transition-colors duration-300`}
                    >
                      {project.title}
                      <button
                        onClick={() => window.open(project.link, "_blank")}
                        className={`${textSecondary} hover:text-blue-400 hover:scale-110 transition-all duration-300 p-1 rounded`}
                      >
                        <AiOutlineExport className="w-4 h-4" />
                      </button>
                    </h3>
                  </div>
                  <p
                    className={`${textSecondary} text-sm mb-6 leading-relaxed`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <TechBadge
                        key={techIndex}
                        tech={tech}
                        isDarkMode={isDarkMode}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className={`text-sm ${textSecondary}`}>Want to work together?</p>
            <button
              onClick={handleCopyEmail}
              className="text-sm cursor-pointer px-3 py-1.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-all duration-300 hover:scale-105"
            >
              {buttonText}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
