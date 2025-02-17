// export default Portfolio;

// "use client";
// import React, { useState, useCallback, memo } from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { AiOutlineExport } from "react-icons/ai";

// // Memoized components remain the same...
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

//   // Adding back all the data objects
//   const about = {
//     description:
//       "19-year-old backend developer with a passion for building scalable systems and APIs. Currently diving deep into cloud technologies and microservices architecture, always looking to create efficient and robust solutions.",
//   };

//   const education = [
//     {
//       school: "Amrit Campus",
//       role: "Bachelors in Computer Science And Information Technology (Bsc.CSIT)",
//       period: "2023 - ",
//       logo: "amrit.jpg",
//       current: true,
//     },
//     {
//       school: "Himalaya Secondary School",
//       role: "Computer Engineering (From Grade 9 to +2)",
//       period: "2019 - 2023",
//       logo: "himalaya.png",
//       current: false,
//     },
//   ];

//   const skills = [
//     {
//       name: "JavaScript",
//       icon: "/javascript.svg",
//     },
//     {
//       name: "Node js",
//       icon: "/nodejs.svg",
//     },
//     {
//       name: "Express",
//       icon: "/express.svg",
//     },
//     {
//       name: "Puppeteer",
//       icon: "/puppeteer.svg",
//     },
//     {
//       name: "MongoDB",
//       icon: "/mongodb.svg",
//     },
//     {
//       name: "Vercel",
//       icon: "/vercel.svg",
//     },
//     {
//       name: "GitHub",
//       icon: "/github.svg",
//     },
//     {
//       name: "Postman",
//       icon: "/postman.svg",
//     },
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
//       setTimeout(() => {
//         setButtonText("Copy email address");
//       }, 2000);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black to-zinc-950 text-gray-300 py-8 sm:py-12 md:py-20 px-4 sm:px-6 max-w-3xl mx-auto">
//       {/* Header Section */}
//       <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
//         <div className="relative group">
//           <img
//             src="/img.jpg"
//             alt="Profile"
//             className="w-20 h-20 sm:w-16 sm:h-16 rounded-full ring-2 ring-blue-500/20 transition-transform duration-300 group-hover:scale-105"
//             loading="lazy"
//           />
//           <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         </div>
//         <div className="text-center sm:text-left">
//           <h1 className="text-white font-bold text-2xl tracking-tight hover:text-blue-400 transition-colors duration-300">
//             Aayush Khadka
//           </h1>
//           <p className="text-sm text-gray-400 tracking-wide mt-1">
//             Backend Developer
//           </p>
//         </div>
//         <div className="flex gap-4 sm:ml-auto mt-4 sm:mt-0">
//           <SocialLink href="https://github.com/Aayush-khadka" icon={FaGithub} />
//           <SocialLink
//             href="https://www.linkedin.com/in/aayush-khadka-0513931b0/"
//             icon={FaLinkedin}
//           />
//         </div>
//       </div>

//       {/* About Section */}
//       <section className="mb-12 sm:mb-16">
//         <h2 className="text-white mb-4 sm:mb-6 text-lg font-semibold">About</h2>
//         <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
//           {about.description}
//         </p>
//       </section>

//       {/* Education Section */}
//       <section className="mb-12 sm:mb-16">
//         <h2 className="text-white mb-6 sm:mb-8 text-lg font-semibold">
//           Education
//         </h2>
//         <div className="space-y-6 sm:space-y-8 relative">
//           <div className="absolute left-4 sm:left-6 top-0 w-px h-full bg-gradient-to-b from-blue-500/40 to-blue-500/10"></div>

//           {education.map((edu, index) => (
//             <div
//               key={index}
//               className="flex items-start gap-4 sm:gap-6 relative group"
//             >
//               <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 relative z-10 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500/40">
//                 <img
//                   src={edu.logo}
//                   alt={edu.school}
//                   className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full"
//                   loading="lazy"
//                 />
//               </div>

//               <div className="flex-1">
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
//                   <div>
//                     <h3 className="text-white font-medium flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300">
//                       {edu.school}
//                     </h3>
//                     <p className="text-gray-400 text-sm mt-1">{edu.role}</p>
//                   </div>
//                   <span className="text-gray-500 text-sm mt-2 sm:mt-0">
//                     {edu.period}
//                     {edu.current && (
//                       <span className="ml-2 text-green-400 text-xs bg-green-500/10 px-2 py-0.5 rounded-full">
//                         • Present
//                       </span>
//                     )}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="mb-12 sm:mb-16">
//         <h2 className="text-white mb-4 sm:mb-6 text-lg font-semibold">
//           Skills
//         </h2>
//         <div className="flex flex-wrap gap-2 sm:gap-3">
//           {skills.map((skill, index) => (
//             <SkillBadge key={index} {...skill} />
//           ))}
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="pb-12 sm:pb-16">
//         <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-3 sm:mb-4">
//           My Work
//         </h2>
//         <p className="text-gray-500 text-center mb-8 sm:mb-12">
//           Collected across different projects
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 flex flex-col"
//             >
//               <div className="w-full h-48 sm:h-64 overflow-hidden">
//                 {project.image && (
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                 )}
//               </div>

//               <div className="p-6 sm:p-8 flex-1 flex flex-col">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300">
//                     {project.title}
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-1.5 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
//                     >
//                       <AiOutlineExport className="w-4 h-4 sm:w-5 sm:h-5" />
//                     </a>
//                   </h3>
//                 </div>

//                 <p className="text-gray-400 text-sm mb-6">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   {project.technologies.map((tech, techIndex) => (
//                     <TechBadge key={techIndex} tech={tech} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Copy Email Section */}
//         <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-between text-white-500 gap-4">
//           <div className="flex flex-col sm:flex-row items-center gap-2">
//             <p className="text-sm">Want to work together?</p>
//             <p
//               className="text-sm cursor-pointer px-3 py-1.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-all duration-300 hover:scale-105"
//               onClick={handleCopyEmail}
//             >
//               {buttonText}
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;

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
//       period: "2023 - ",
//       logo: "amrit.jpg",
//       current: true,
//     },
//     {
//       school: "Himalaya Secondary School",
//       role: "Computer Engineering (From Grade 9 to +2)",
//       period: "2019 - 2023",
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
//     <div className="min-h-screen bg-gradient-to-b from-black to-zinc-950 text-gray-300 py-8 sm:py-12 md:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
//       {/* Header Section - Now with subtle animation */}
//       <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-12 sm:mb-16 animate-fade-in">
//         <div className="relative group">
//           <img
//             src="/img.jpg"
//             alt="Profile"
//             className="w-20 h-20 sm:w-16 sm:h-16 rounded-full ring-2 ring-blue-500/20 transition-all duration-300 group-hover:scale-105 group-hover:ring-blue-500/40"
//             loading="lazy"
//           />
//           <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
//         </div>
//         <div className="text-center sm:text-left">
//           <h1 className="text-white font-bold text-2xl tracking-tight hover:text-blue-400 transition-colors duration-300">
//             Aayush Khadka
//           </h1>
//           <p className="text-sm text-gray-400 tracking-wide mt-1">
//             Backend Developer
//           </p>
//         </div>
//         <div className="flex gap-4 sm:ml-auto mt-4 sm:mt-0">
//           <SocialLink href="https://github.com/Aayush-khadka" icon={FaGithub} />
//           <SocialLink
//             href="https://www.linkedin.com/in/aayush-khadka-0513931b0/"
//             icon={FaLinkedin}
//           />
//         </div>
//       </div>

//       {/* About Section - Added subtle fade animation */}
//       <section className="mb-12 sm:mb-16 animate-fade-in">
//         <h2 className="text-white mb-4 sm:mb-6 text-lg font-semibold">About</h2>
//         <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
//           {about.description}
//         </p>
//       </section>

//       {/* Enhanced Education Section */}
//       <section className="mb-12 sm:mb-16">
//         <h2 className="text-white mb-6 sm:mb-8 text-lg font-semibold">
//           Education
//         </h2>
//         <div className="space-y-6 sm:space-y-8 relative">
//           <div className="absolute left-4 sm:left-6 top-0 w-px h-full bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent">
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-blue-500/20 blur-sm" />
//           </div>

//           {education.map((edu, index) => (
//             <div
//               key={index}
//               className="flex items-start gap-4 sm:gap-6 relative group hover:transform hover:translate-x-1 transition-all duration-300"
//             >
//               <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 flex items-center justify-center flex-shrink-0 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500/40 group-hover:from-blue-500/30">
//                 <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
//                 <img
//                   src={edu.logo}
//                   alt={edu.school}
//                   className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full relative z-10"
//                   loading="lazy"
//                 />
//               </div>

//               <div className="flex-1 p-1">
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
//                   <div>
//                     <h3 className="text-white font-medium flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300">
//                       {edu.school}
//                     </h3>
//                     <p className="text-gray-400 text-sm mt-1">{edu.role}</p>
//                   </div>
//                   <span className="text-gray-500 text-sm mt-2 sm:mt-0 flex items-center gap-2">
//                     {edu.period}
//                     {edu.current && (
//                       <span className="inline-flex items-center gap-1 text-green-400 text-xs bg-green-500/10 px-2 py-0.5 rounded-full">
//                         <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
//                         Present
//                       </span>
//                     )}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Skills Section - Added subtle animation */}
//       <section className="mb-12 sm:mb-16">
//         <h2 className="text-white mb-4 sm:mb-6 text-lg font-semibold">
//           Skills
//         </h2>
//         <div className="flex flex-wrap gap-2 sm:gap-3">
//           {skills.map((skill, index) => (
//             <SkillBadge key={index} {...skill} />
//           ))}
//         </div>
//       </section>

//       {/* Projects Section - Enhanced cards */}
//       <section className="pb-12 sm:pb-16">
//         <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-3 sm:mb-4">
//           My Work
//         </h2>
//         <p className="text-gray-500 text-center mb-8 sm:mb-12">
//           Collected across different projects
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 flex flex-col"
//             >
//               <div className="w-full h-48 sm:h-64 overflow-hidden relative">
//                 {project.image && (
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                 )}
//                 {project.isNew && (
//                   <span className="absolute top-2 right-2 px-2 py-1 bg-blue-500/90 text-white text-xs rounded-full">
//                     New
//                   </span>
//                 )}
//               </div>

//               <div className="p-6 sm:p-8 flex-1 flex flex-col">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300">
//                     {project.title}
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-1.5 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
//                     >
//                       <AiOutlineExport className="w-4 h-4 sm:w-5 sm:h-5" />
//                     </a>
//                   </h3>
//                 </div>

//                 <p className="text-gray-400 text-sm mb-6">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   {project.technologies.map((tech, techIndex) => (
//                     <TechBadge key={techIndex} tech={tech} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contact Section - Enhanced with animation */}
//         <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-between text-white-500 gap-4">
//           <div className="flex flex-col sm:flex-row items-center gap-2">
//             <p className="text-sm">Want to work together?</p>
//             <p
//               className="text-sm cursor-pointer px-3 py-1.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-all duration-300 hover:scale-105"
//               onClick={handleCopyEmail}
//             >
//               {buttonText}
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;

"use client";
import React, { useState, useCallback, memo } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";

const SocialLink = memo(({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-1.5 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
  >
    <Icon className="w-5 h-5" />
  </a>
));

const SkillBadge = memo(({ icon, name }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-gray-300 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
    <img src={icon} alt={name} className="w-4 h-4" loading="lazy" />
    <span>{name}</span>
  </div>
));

const TechBadge = memo(({ tech }) => (
  <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-gray-400 border border-zinc-800 group-hover:border-blue-500/20 transition-colors duration-300">
    {tech}
  </span>
));

const Portfolio = () => {
  const [buttonText, setButtonText] = useState("Copy email address");

  const about = {
    description:
      "19-year-old backend developer with a passion for building scalable systems and APIs. Currently diving deep into cloud technologies and microservices architecture, always looking to create efficient and robust solutions.",
  };

  const education = [
    {
      school: "Amrit Campus",
      role: "Bachelors in Computer Science And Information Technology (Bsc.CSIT)",
      period: "2023 - ",
      logo: "amrit.jpg",
      current: true,
    },
    {
      school: "Himalaya Secondary School",
      role: "Computer Engineering (From Grade 9 to +2)",
      period: "2019 - 2023",
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
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-950 text-gray-300 py-8 sm:py-12 md:py-20 px-4 sm:px-6 max-w-3xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-12 sm:mb-16 animate-fade-in">
        <div className="relative group">
          <img
            src="/img.jpg"
            alt="Profile"
            className="w-20 h-20 sm:w-16 sm:h-16 rounded-full ring-2 ring-blue-500/20 transition-all duration-300 group-hover:scale-105 group-hover:ring-blue-500/40"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-white font-bold text-2xl tracking-tight hover:text-blue-400 transition-colors duration-300">
            Aayush Khadka
          </h1>
          <p className="text-sm text-gray-400 tracking-wide mt-1">
            Backend Developer
          </p>
        </div>
        <div className="flex gap-4 sm:ml-auto mt-4 sm:mt-0">
          <SocialLink href="https://github.com/Aayush-khadka" icon={FaGithub} />
          <SocialLink
            href="https://www.linkedin.com/in/aayush-khadka-0513931b0/"
            icon={FaLinkedin}
          />
        </div>
      </div>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-white mb-6 text-lg font-semibold">About</h2>
        <p className="text-gray-400 leading-relaxed text-base">
          {about.description}
        </p>
      </section>

      {/* Education Section */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-white mb-6 sm:mb-8 text-lg font-semibold">
          Education
        </h2>
        <div className="space-y-6 sm:space-y-8 relative">
          <div className="absolute left-4 sm:left-6 top-0 w-px h-full bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-blue-500/20 blur-sm" />
          </div>

          {education.map((edu, index) => (
            <div
              key={index}
              className="flex items-start gap-4 sm:gap-6 relative group hover:transform hover:translate-x-1 transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 flex items-center justify-center flex-shrink-0 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500/40 group-hover:from-blue-500/30">
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full relative z-10"
                  loading="lazy"
                />
              </div>

              <div className="flex-1 p-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-white font-medium flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300">
                      {edu.school}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{edu.role}</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 sm:mt-0 flex items-center gap-2">
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

      {/* Skills Section */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-white mb-4 sm:mb-6 text-lg font-semibold">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skills.map((skill, index) => (
            <SkillBadge key={index} {...skill} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="pb-12 sm:pb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-3 sm:mb-4">
          My Work
        </h2>
        <p className="text-gray-500 text-center mb-8 sm:mb-12">
          Collected across different projects
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-full h-48 sm:h-64 overflow-hidden relative">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                {project.isNew && (
                  <span className="absolute top-2 right-2 px-2 py-1 bg-blue-500/90 text-white text-xs rounded-full">
                    New
                  </span>
                )}
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                    >
                      <AiOutlineExport className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-6">
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

        {/* Contact Section */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-between text-white-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p className="text-sm">Want to work together?</p>
            <p
              className="text-sm cursor-pointer px-3 py-1.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-all duration-300 hover:scale-105"
              onClick={handleCopyEmail}
            >
              {buttonText}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
