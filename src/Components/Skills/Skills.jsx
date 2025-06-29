import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiVite,
  SiFigma,
} from "react-icons/si";

const badgeClass =
  "flex items-center gap-2 bg-[#ECFAE5] text-gray-800 px-4 py-2 rounded-lg shadow text-sm font-medium";

const Skills = () => {
  return (
    <section id="skills" className="bg-[#CAE8BD] px-6 md:px-20 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        My Skills
      </h2>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
        <span className={badgeClass}>
          <FaHtml5 className="text-orange-600" /> HTML
        </span>
        <span className={badgeClass}>
          <FaCss3Alt className="text-blue-600" /> CSS
        </span>
        <span className={badgeClass}>
          <SiJavascript className="text-yellow-500" /> JavaScript
        </span>
        <span className={badgeClass}>
          <FaReact className="text-cyan-500" /> React
        </span>
        <span className={badgeClass}>
          <SiTailwindcss className="text-teal-500" /> Tailwind
        </span>
        <span className={badgeClass}>
          <FaNodeJs className="text-green-700" /> Node.js
        </span>
        <span className={badgeClass}>
          <SiMongodb className="text-green-600" /> MongoDB
        </span>
        <span className={badgeClass}>
          <SiFirebase className="text-yellow-500" /> Firebase
        </span>
        <span className={badgeClass}>
          <SiVite className="text-purple-600" /> Vite
        </span>
        <span className={badgeClass}>
          <FaGithub className="text-black" /> GitHub
        </span>
        <span className={badgeClass}>
          <SiFigma className="text-pink-600" /> Figma
        </span>
        <span className={badgeClass}> VS Code</span>
      </div>
    </section>
  );
};

export default Skills;
