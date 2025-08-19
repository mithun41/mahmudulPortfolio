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
import { motion } from "framer-motion";

const badgeClass =
  "flex items-center gap-2 bg-cyan-700 bg-opacity-30 text-cyan-300 px-5 py-3 rounded-xl shadow-md text-base font-semibold whitespace-nowrap select-none cursor-default hover:bg-cyan-600 hover:text-white transition";

const skillsList = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase" },
  { icon: <SiVite className="text-purple-500" />, name: "Vite" },
  { icon: <FaGithub className="text-gray-300" />, name: "GitHub" },
  { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
  { icon: null, name: "VS Code" },
];

// Animation duration (seconds)
const scrollDuration = 25;

const Skills = () => {
  const badges = skillsList.map(({ icon, name }, i) => (
    <span key={i} className={badgeClass}>
      {icon} {name}
    </span>
  ));

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  w-full py-24 overflow-hidden"
    >
      <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400 tracking-wide">
        My Skills
      </h2>

      <div className="relative w-full overflow-hidden select-none ">
        {/* Right to left marquee */}
        <motion.div
          className="flex gap-8 whitespace-nowrap px-12 py-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: scrollDuration,
            ease: "linear",
          }}
        >
          {badges}
          {badges}
          {badges}
        </motion.div>

        {/* Left to right marquee */}
        <motion.div
          className="flex gap-8 whitespace-nowrap px-12 py-6 mt-8"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: scrollDuration,
            ease: "linear",
          }}
        >
          {badges}
          {badges}
          {badges}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
