import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaReact } from "react-icons/fa";
import {
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import projects1 from "../../assets/freelance-marketplace.jpg";
import projects2 from "../../assets/volonteer-management.jpg";

const techColors = {
  javascript: "bg-yellow-400 text-gray-900",
  react: "bg-cyan-400 text-gray-900",
  firebase: "bg-yellow-300 text-gray-900",
  tailwind: "bg-cyan-500 text-white",
  mongodb: "bg-green-600 text-white",
};

const ProjectCard = ({
  img,
  alt,
  title,
  desc,
  tech,
  live,
  repo,
  reverse,
  delay,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
    else controls.start({ opacity: 0, y: 50 });
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, delay }}
        className={`bg-gray-800 rounded-2xl shadow-lg p-8 mb-16 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-10`}
      >
        <div
          onClick={() => setModalOpen(true)}
          title="Click to view full image"
          className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-xl cursor-pointer relative"
          style={{ height: 280 }}
        >
          <img
            src={img}
            alt={alt}
            className="w-full h-full object-cover object-top transition-transform duration-300 ease-in-out hover:scale-150 hover:z-50 hover:absolute hover:top-0 hover:left-0"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-semibold text-cyan-400 mb-4 hover:text-cyan-500 cursor-default">
            {title}
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">{desc}</p>

          <div className="flex gap-3 flex-wrap justify-center md:justify-start mb-6">
            {tech.map(({ icon: Icon, name, color }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.1 }}
                className={`${color} px-4 py-1 rounded-full flex items-center gap-2 text-sm font-semibold shadow-md cursor-default`}
              >
                <Icon className="text-lg" /> {name}
              </motion.div>
            ))}
          </div>

          <div className="flex gap-5 justify-center md:justify-start flex-wrap">
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 text-gray-900 px-6 py-2 rounded-2xl flex items-center gap-2 shadow-md hover:bg-cyan-600 transition"
            >
              Live Site <FaExternalLinkAlt />
            </motion.a>
            <motion.a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-cyan-500 text-cyan-500 px-6 py-2 rounded-2xl flex items-center gap-2 shadow-md hover:bg-cyan-600 hover:text-gray-900 transition"
            >
              Repository <FaGithub />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 cursor-pointer"
        >
          <img
            src={img}
            alt={alt}
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-5 right-5 text-white bg-gray-800 bg-opacity-70 rounded-full p-2 text-2xl font-bold hover:bg-gray-700 transition"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  const projectsData = [
    {
      img: projects1,
      alt: "Freelance Task Marketplace",
      title: "Freelance Task Marketplace",
      desc: "A platform where users can post and take freelance tasks in real-time. Includes user auth, dashboard, and bidding system.",
      tech: [
        {
          icon: SiJavascript,
          name: "JavaScript",
          color: techColors.javascript,
        },
        { icon: FaReact, name: "React", color: techColors.react },
        { icon: SiFirebase, name: "Firebase", color: techColors.firebase },
        { icon: SiTailwindcss, name: "Tailwind", color: techColors.tailwind },
        { icon: SiMongodb, name: "MongoDB", color: techColors.mongodb },
      ],
      live: "http://chemical-board.surge.sh/",
      repo: "https://github.com/mithun41/freelance-task-marketplace-client",
      reverse: false,
    },
    {
      img: projects2,
      alt: "Volunteer Management",
      title: "Volunteer Management",
      desc: "An app to manage volunteers and events. Users can apply, post, and track volunteer tasks. Built with MERN stack.",
      tech: [
        {
          icon: SiJavascript,
          name: "JavaScript",
          color: techColors.javascript,
        },
        { icon: FaReact, name: "React", color: techColors.react },
        { icon: SiFirebase, name: "Firebase", color: techColors.firebase },
        { icon: SiTailwindcss, name: "Tailwind", color: techColors.tailwind },
        { icon: SiMongodb, name: "MongoDB", color: techColors.mongodb },
      ],
      live: "http://disagreeable-kitten.surge.sh/",
      repo: "https://github.com/mithun41/volunteer-management-client",
      reverse: true,
    },
    {
      img: projects2,
      alt: "Portfolio Website",
      title: "Personal Portfolio Website",
      desc: "My personal portfolio showcasing skills, projects, and contact info. Built with React, Tailwind, and React Router.",
      tech: [
        {
          icon: SiJavascript,
          name: "JavaScript",
          color: techColors.javascript,
        },
        { icon: FaReact, name: "React", color: techColors.react },
        { icon: SiFirebase, name: "Firebase", color: techColors.firebase },
        { icon: SiTailwindcss, name: "Tailwind", color: techColors.tailwind },
        { icon: SiMongodb, name: "MongoDB", color: techColors.mongodb },
      ],
      live: "http://disagreeable-kitten.surge.sh/",
      repo: "https://github.com/mithun41/volunteer-management-client",
      reverse: false,
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen px-6 md:px-20 py-20 text-gray-300"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
        My Projects
      </h2>
      {projectsData.map((proj, i) => (
        <ProjectCard key={i} {...proj} delay={i * 0.3} />
      ))}
    </section>
  );
};

export default Projects;
