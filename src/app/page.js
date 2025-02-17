"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaExport } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";
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
    {
      name: "JavaScript",
      icon: "/javascript.svg",
    },
    {
      name: "Node js",
      icon: "/nodejs.svg",
    },
    {
      name: "Express",
      icon: "/express.svg",
    },
    {
      name: "Puppeteer",
      icon: "/puppeteer.svg",
    },
    {
      name: "MongoDB",
      icon: "/mongodb.svg",
    },
    {
      name: "Vercel",
      icon: "/vercel.svg",
    },
    {
      name: "GitHub",
      icon: "/github.svg",
    },
    {
      name: "Postman",
      icon: "/postman.svg",
    },
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
      title: "Video Streaming Backend",
      description:
        "A comprehensive API for a video streaming platform, offering features like user authentication, video uploads, playlists, comments, community posts, and subscriptions. Built with Node.js and Express, it utilizes MongoDB for seamless data management and RESTful API architecture for efficient interactions.",
      isNew: false,
      image: "theapi.png",
      technologies: ["Node.js", "JavaScript", "MongoDB", "Express", "JWT"],
      link: "https://github.com/Aayush-khadka/Video-Streaming-Backend",
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Khadkaaayush90@gmail.com").then(() => {
      setButtonText("Copied!");

      setTimeout(() => {
        setButtonText("Copy email address");
      }, 2000);
    });
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 py-20 px-4 sm:px-6 max-w-3xl mx-auto">
      {/* Header Section */}
      <div className="flex items-center gap-6 mb-16">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-16 h-16 rounded-full ring-2 ring-blue-500/20"
        />
        <div>
          <h1 className="text-white font-bold text-2xl tracking-tight">
            Aayush Khadka
          </h1>
          <p className="text-sm text-gray-400 tracking-wide mt-1">
            Backend Developer
          </p>
        </div>
        <div className="flex gap-4 ml-auto">
          <a
            href="https://github.com/Aayush-khadka"
            className="p-1.5 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/aayush-khadka-0513931b0/"
            className="p-1.5 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
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
      <section className="mb-16">
        <h2 className="text-white mb-8 text-lg font-semibold">Education</h2>
        <div className="space-y-8 relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 w-px h-full bg-blue-500/20"></div>

          {education.map((edu, index) => (
            <div key={index} className="flex items-start gap-6 relative">
              {/* Circle with image */}
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 relative z-10">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-8 h-8 object-cover rounded-full"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-medium flex items-center gap-2">
                      {edu.school}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{edu.role}</p>
                  </div>
                  <span className="text-gray-500 text-sm">
                    {edu.period}
                    {edu.current && (
                      <span className="ml-2 text-green-400 text-xs">
                        • Present
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
      <section className="mb-16">
        <h2 className="text-white mb-6 text-lg font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-gray-300"
            >
              <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="pb-16">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          My Work
        </h2>
        <p className="text-gray-500 text-center mb-12">
          Collected across different projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-zinc-700 flex flex-col"
            >
              {/* Full-Width Image Section */}
              <div className="w-full h-64 overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    {project.title}
                    <a
                      href={project.link}
                      className="p-1.5 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <AiOutlineExport className="w-5 h-5" />
                    </a>
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Copy Email Section */}
        <div className="mt-12 flex items-center justify-between text-white-500">
          <div className="flex items-center gap-2">
            <p className="text-sm">Want to work together?</p>
            <p
              className="text-sm cursor-pointer hover:text-gray-400 transition-colors"
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
