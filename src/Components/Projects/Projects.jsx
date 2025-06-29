import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import projects1 from "../../assets/freelance-marketplace.jpg";
import projects2 from "../../assets/volonteer-management.jpg";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#DDF6D2] px-6 md:px-20 py-20">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        My Projects
      </h2>

      {/* Project 1 */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 mb-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={projects1}
            alt="Freelance Task Marketplace"
            className="rounded-xl shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Freelance Task Marketplace
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            A platform where users can post and take freelance tasks in
            real-time. Includes user auth, dashboard, and bidding system.
          </p>
          {/* Freelance Task Marketplace Tech Stack */}
          <div className="flex gap-2 flex-wrap justify-center md:justify-start mb-6">
            <div className="bg-[#F0DB4F] text-black px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <SiJavascript className="text-lg" /> JavaScript
            </div>
            <div className="bg-[#61DBFB] text-black px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <FaReact className="text-lg" /> React
            </div>
            <div className="bg-[#FFCA28] text-black px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <SiFirebase className="text-lg" /> Firebase
            </div>
            <div className="bg-[#06B6D4] text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <SiTailwindcss className="text-lg" /> Tailwind
            </div>
            <div className="bg-[#47A248] text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <SiMongodb className="text-lg" /> MongoDB
            </div>
          </div>

          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <a
              href="http://chemical-board.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 flex items-center gap-2 transition"
            >
              Live Site <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/mithun41/freelance-task-marketplace-client"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-700 text-blue-700 px-5 py-2 rounded-xl hover:bg-blue-700 hover:text-white flex items-center gap-2 transition"
            >
              Repository <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 mb-16 flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={projects2}
            alt="Volunteer Management"
            className="rounded-xl shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Volunteer Management
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            An app to manage volunteers and events. Users can apply, post, and
            track volunteer tasks. Built with MERN stack.
          </p>
          {/* Freelance Task Marketplace Tech Stack */}
          <div className="flex gap-2 flex-wrap justify-center md:justify-start mb-6">
            <div className="bg-[#F0DB4F] text-black px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <SiJavascript className="text-lg" /> JavaScript
            </div>
            <div className="bg-[#61DBFB] text-black px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <FaReact className="text-lg" /> React
            </div>
            <div className="bg-[#FFCA28] text-black px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <SiFirebase className="text-lg" /> Firebase
            </div>
            <div className="bg-[#06B6D4] text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <SiTailwindcss className="text-lg" /> Tailwind
            </div>
            <div className="bg-[#47A248] text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <SiMongodb className="text-lg" /> MongoDB
            </div>
          </div>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <a
              href="http://disagreeable-kitten.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 flex items-center gap-2 transition"
            >
              Live Site <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/mithun41/volunteer-management-client"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-700 text-blue-700 px-5 py-2 rounded-xl hover:bg-blue-700 hover:text-white flex items-center gap-2 transition"
            >
              Repository <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 mb-8 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={projects2}
            alt="Portfolio Website"
            className="rounded-xl shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Personal Portfolio Website
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            My personal portfolio showcasing skills, projects, and contact info.
            Built with React, Tailwind, and React Router.
          </p>
          {/* Freelance Task Marketplace Tech Stack */}
          <div className="flex gap-2 flex-wrap justify-center md:justify-start mb-6">
            <div className="bg-[#F0DB4F] text-black px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <SiJavascript className="text-lg" /> JavaScript
            </div>
            <div className="bg-[#61DBFB] text-black px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <FaReact className="text-lg" /> React
            </div>
            <div className="bg-[#FFCA28] text-black px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <SiFirebase className="text-lg" /> Firebase
            </div>
            <div className="bg-[#06B6D4] text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <SiTailwindcss className="text-lg" /> Tailwind
            </div>
            <div className="bg-[#47A248] text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <SiMongodb className="text-lg" /> MongoDB
            </div>
          </div>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <a
              href="http://disagreeable-kitten.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 flex items-center gap-2 transition"
            >
              Live Site <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/mithun41/volunteer-management-client"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-700 text-blue-700 px-5 py-2 rounded-xl hover:bg-blue-700 hover:text-white flex items-center gap-2 transition"
            >
              Repository <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
