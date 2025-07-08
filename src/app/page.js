// "use client";
// import React, { useState, useCallback, memo } from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { AiOutlineExport } from "react-icons/ai";

// const SocialLink = memo(({ href, icon: Icon }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="p-1.5 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
//   >
//     <Icon className="w-5 h-5" />
//   </a>
// ));

// const SkillBadge = memo(({ icon, name }) => (
//   <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-gray-300 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
//     <img src={icon} alt={name} className="w-4 h-4" loading="lazy" />
//     <span>{name}</span>
//   </div>
// ));

// const TechBadge = memo(({ tech }) => (
//   <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-gray-400 border border-zinc-800 group-hover:border-blue-500/20 transition-colors duration-300">
//     {tech}
//   </span>
// ));

// const Portfolio = () => {
//   const [buttonText, setButtonText] = useState("Copy email address");

//   const about = {
//     description:
//       "19-year-old backend developer with a passion for building scalable systems and APIs. Currently diving deep into cloud technologies and microservices architecture, always looking to create efficient and robust solutions.",
//   };

//   const education = [
//     {
//       school: "Amrit Campus",
//       role: "Bachelors in Computer Science And Information Technology (Bsc.CSIT)",
//       period: " Nov 2023 - ",
//       logo: "amrit.jpg",
//       current: true,
//     },
//     {
//       school: "Himalaya Secondary School",
//       role: "Computer Engineering (From Grade 9 to +2)",
//       period: " Apr 2019 - Jun 2023",
//       logo: "himalaya.png",
//       current: false,
//     },
//   ];

//   const skills = [
//     { name: "JavaScript", icon: "/javascript.svg" },
//     { name: "Node js", icon: "/nodejs.svg" },
//     { name: "Express", icon: "/express.svg" },
//     { name: "Puppeteer", icon: "/puppeteer.svg" },
//     { name: "MongoDB", icon: "/mongodb.svg" },
//     { name: "Vercel", icon: "/vercel.svg" },
//     { name: "GitHub", icon: "/github.svg" },
//     { name: "Postman", icon: "/postman.svg" },
//   ];

//   const projects = [
//     {
//       title: "The Samachar",
//       description:
//         "'The Samachar' is a news aggregator that uses custom-built scrapers with Puppeteer in Node.js to collect articles. It features AI-generated summaries, trending topics, and insights on how different sources cover the same news.",
//       isNew: true,
//       image: "thesamachar.png",
//       technologies: ["Node.js", "Express", "Puppeteer", "Next", "MongoDb"],
//       link: "https://thesamachar.vercel.app/",
//     },
//     {
//       title: "Video Streaming Backend API",
//       description:
//         "A comprehensive API for a video streaming platform, offering features like user authentication, video uploads, playlists, comments, community posts, and subscriptions. Built with Node.js and Express, it utilizes MongoDB for seamless data management and RESTful API architecture for efficient interactions.",
//       isNew: false,
//       image: "theapi.png",
//       technologies: ["Node.js", "JavaScript", "MongoDB", "Express", "JWT"],
//       link: "https://github.com/Aayush-khadka/Video-Streaming-Backend",
//     },
//   ];

//   const handleCopyEmail = useCallback(() => {
//     navigator.clipboard.writeText("Khadkaaayush90@gmail.com").then(() => {
//       setButtonText("Copied!");
//       setTimeout(() => setButtonText("Copy email address"), 2000);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen w-full bg-black text-gray-300 px-4 sm:px-6">
//       <div className="max-w-3xl mx-auto py-8 sm:py-12 md:py-20">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-12 animate-fade-in">
//           <div className="relative group">
//             <img
//               src="/img.jpg"
//               alt="Profile"
//               className="w-20 h-20 sm:w-16 sm:h-16 rounded-full ring-2 ring-blue-500/20 shadow-md shadow-blue-500/10 transition-all duration-300 group-hover:scale-105 group-hover:ring-blue-500/40"
//               loading="lazy"
//             />
//           </div>
//           <div className="text-center sm:text-left">
//             <h1 className="text-white font-bold text-2xl tracking-tight hover:text-blue-400 transition-colors duration-300">
//               Aayush Khadka
//             </h1>
//             <p className="text-sm text-gray-400 mt-1">Backend Developer</p>
//           </div>
//           <div className="flex gap-4 sm:ml-auto mt-4 sm:mt-0">
//             <SocialLink
//               href="https://github.com/Aayush-khadka"
//               icon={FaGithub}
//             />
//             <SocialLink
//               href="https://www.linkedin.com/in/aayush-khadka-0513931b0/"
//               icon={FaLinkedin}
//             />
//           </div>
//         </div>

//         {/* About */}
//         <section className="mb-12">
//           <h2 className="text-white mb-4 text-lg font-semibold">About</h2>
//           <p className="text-gray-400 leading-relaxed text-base">
//             {about.description}
//           </p>
//         </section>

//         {/* Education */}
//         <section className="mb-12">
//           <h2 className="text-white mb-6 text-lg font-semibold">Education</h2>
//           <div className="space-y-6 relative">
//             <div className="absolute left-4 sm:left-6 top-0 w-px h-full bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent" />
//             {education.map((edu, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-4 sm:gap-6 relative group hover:translate-x-1 transition-all duration-300"
//               >
//                 <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:border-blue-500/40">
//                   <img
//                     src={edu.logo}
//                     alt={edu.school}
//                     className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex flex-col sm:flex-row sm:justify-between">
//                     <div>
//                       <h3 className="text-white font-medium group-hover:text-blue-400">
//                         {edu.school}
//                       </h3>
//                       <p className="text-gray-400 text-sm mt-1">{edu.role}</p>
//                     </div>
//                     <span className="text-gray-500 text-sm mt-2 sm:mt-0 flex items-center gap-2">
//                       {edu.period}
//                       {edu.current && (
//                         <span className="inline-flex items-center gap-1 text-green-400 text-xs bg-green-500/10 px-2 py-0.5 rounded-full">
//                           <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
//                           Present
//                         </span>
//                       )}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Skills */}
//         <section className="mb-12">
//           <h2 className="text-white mb-4 text-lg font-semibold">Skills</h2>
//           <div className="flex flex-wrap gap-2 sm:gap-3">
//             {skills.map((skill, index) => (
//               <SkillBadge key={index} {...skill} />
//             ))}
//           </div>
//         </section>

//         {/* Projects */}
//         <section className="pb-12">
//           <h2 className="text-3xl font-bold text-white text-center mb-4">
//             My Work
//           </h2>
//           <p className="text-gray-500 text-center mb-8">
//             Collected across different projects
//           </p>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="group bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col"
//               >
//                 <div className="w-full h-48 sm:h-64 overflow-hidden relative">
//                   {project.image && (
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       loading="lazy"
//                     />
//                   )}
//                   {project.isNew && (
//                     <span className="absolute top-2 right-2 px-2 py-1 bg-blue-500/90 text-white text-xs rounded-full">
//                       New
//                     </span>
//                   )}
//                 </div>
//                 <div className="p-6 flex-1 flex flex-col">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 flex items-center gap-2">
//                       {project.title}
//                       <a
//                         href={project.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
//                       >
//                         <AiOutlineExport className="w-4 h-4" />
//                       </a>
//                     </h3>
//                   </div>
//                   <p className="text-gray-400 text-sm mb-6">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mt-auto">
//                     {project.technologies.map((tech, techIndex) => (
//                       <TechBadge key={techIndex} tech={tech} />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Contact */}
//         <div className="mt-10 text-center">
//           <p className="text-sm mb-2">Want to work together?</p>
//           <button
//             className="text-sm font-medium px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 text-white"
//             onClick={handleCopyEmail}
//           >
//             {buttonText}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
"use client";
import React, { useState, useCallback, memo, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";
import {
  ChevronDown,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
} from "lucide-react";

const SocialLink = memo(({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-3 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
  >
    <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
    <Icon className="w-5 h-5 relative z-10" />
  </a>
));

const SkillBadge = memo(({ icon, name, index }) => (
  <div
    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 cursor-pointer group"
    style={{
      animationDelay: `${index * 100}ms`,
      animation: "fadeInUp 0.6s ease-out forwards",
    }}
  >
    <img
      src={icon}
      alt={name}
      className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
      loading="lazy"
    />
    <span>{name}</span>
  </div>
));

const TechBadge = memo(({ tech }) => (
  <span className="px-3 py-1.5 bg-zinc-900 rounded-full text-xs text-gray-400 border border-zinc-800 group-hover:border-blue-500/30 transition-all duration-300 hover:bg-zinc-800">
    {tech}
  </span>
));

const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

const Portfolio = () => {
  const [buttonText, setButtonText] = useState("Copy email address");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const about = {
    description:
      "19-year-old backend developer with a passion for building scalable systems and APIs. Currently diving deep into cloud technologies and microservices architecture, always looking to create efficient and robust solutions.",
  };

  const education = [
    {
      school: "Amrit Campus",
      role: "Bachelors in Computer Science And Information Technology (Bsc.CSIT)",
      period: " Nov 2023 - ",
      logo: "amrit.jpg",
      current: true,
    },
    {
      school: "Himalaya Secondary School",
      role: "Computer Engineering (From Grade 9 to +2)",
      period: " Apr 2019 - Jun 2023",
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
  ];

  const projects = [
    {
      title: "The Samachar",
      description:
        "'The Samachar' is a news aggregator that uses custom-built scrapers with Puppeteer in Node.js to collect articles. It features AI-generated summaries, trending topics, and insights on how different sources cover the same news.",
      isNew: true,
      image: "thesamachar.png",
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

  return (
    <div className="min-h-screen w-full bg-black text-gray-300 px-4 sm:px-6 relative overflow-hidden">
      <FloatingParticles />

      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-black pointer-events-none" />

      <div className="max-w-4xl mx-auto py-8 sm:py-12 md:py-20 relative z-10">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-6 mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            <img
              src="/img.jpg"
              alt="Profile"
              className="w-24 h-24 sm:w-20 sm:h-20 rounded-full ring-2 ring-blue-500/30 shadow-xl shadow-blue-500/20 transition-all duration-300 group-hover:scale-105 group-hover:ring-blue-500/50 relative z-10"
              loading="lazy"
            />
          </div>
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-white font-bold text-3xl sm:text-2xl tracking-tight hover:text-blue-400 transition-colors duration-300 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Aayush Khadka
            </h1>
            <p className="text-base text-gray-400 mt-2 flex items-center gap-2 justify-center sm:justify-start">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Backend Developer
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-2 justify-center sm:justify-start">
              <MapPin className="w-4 h-4" />
              Kathmandu, Nepal
            </div>
          </div>
          <div className="flex gap-2 sm:ml-auto">
            <SocialLink
              href="https://github.com/Aayush-khadka"
              icon={FaGithub}
            />
            <SocialLink
              href="https://www.linkedin.com/in/aayush-khadka-0513931b0/"
              icon={FaLinkedin}
            />
            <SocialLink href="#contact" icon={Mail} />
          </div>
        </div>

        {/* About */}
        <section
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/30 rounded-2xl p-8 border border-zinc-800/50 backdrop-blur-sm">
            <h2 className="text-white mb-6 text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                A
              </span>
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {about.description}
            </p>
          </div>
        </section>

        {/* Education */}
        <section
          className={`mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-white mb-8 text-2xl font-bold flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm">
              <Calendar className="w-4 h-4" />
            </span>
            Education
          </h2>
          <div className="space-y-6 relative">
            <div className="absolute left-6 top-0 w-px h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start gap-6 relative group hover:translate-x-2 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-8 h-8 object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 bg-zinc-900/30 rounded-xl p-6 border border-zinc-800/50 group-hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <div>
                      <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors duration-300">
                        {edu.school}
                      </h3>
                      <p className="text-gray-400 mt-1">{edu.role}</p>
                    </div>
                    <span className="text-gray-500 text-sm flex items-center gap-2">
                      {edu.period}
                      {edu.current && (
                        <span className="inline-flex items-center gap-1 text-green-400 text-xs bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
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
        <section
          className={`mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-white mb-8 text-2xl font-bold flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              S
            </span>
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <SkillBadge key={index} {...skill} index={index} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          className={`pb-16 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">
              Crafted with passion and precision
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col backdrop-blur-sm hover:scale-105"
              >
                <div className="w-full h-48 sm:h-64 overflow-hidden relative">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {project.isNew && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs rounded-full font-medium animate-pulse">
                      New
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-blue-500/10"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <TechBadge key={techIndex} tech={tech} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <div
          id="contact"
          className={`text-center bg-gradient-to-r from-zinc-900/50 to-zinc-800/30 rounded-2xl p-8 border border-zinc-800/50 backdrop-blur-sm transition-all duration-1000 delay-1100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-400 mb-6">
            Ready to turn your ideas into reality?
          </p>
          <button
            className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
            onClick={handleCopyEmail}
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg" />
            <span className="relative flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {buttonText}
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
