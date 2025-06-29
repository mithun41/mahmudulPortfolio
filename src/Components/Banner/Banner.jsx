import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import myImage from "../../assets/Mithun.jpg"; // Replace with your image

const Banner = () => {
  return (
    <section
      id="banner"
      className="bg-[#CAE8BD] min-h-screen flex items-center justify-center px-6 md:px-20 py-10"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 w-full max-w-6xl">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug mb-4">
            Hey, I'm <span className="text-blue-700">Mahmudul Hasan</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto md:mx-0">
            A passionate{" "}
            <span className="font-semibold text-blue-600">
              Front-End Developer
            </span>{" "}
            crafting responsive websites with{" "}
            <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Firebase</span> &{" "}
            <span className="font-semibold">Tailwind CSS</span>. Clean UI. Clean
            Code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition font-medium"
            >
              View Projects <FaArrowRight />
            </a>
            <a
              href="/Mahmudul-Hasan-cv.pdf"
              className="inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-700 hover:text-white transition font-medium"
              download
            >
              Download CV
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-4 my-4 ">
            <a
              href="https://github.com/mithun41"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333] hover:text-black transition"
              title="GitHub"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/mahmudul41/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] hover:text-blue-800 transition"
              title="LinkedIn"
            >
              <FaLinkedin size={40} />
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={myImage}
            alt="Mahmudul Hasan"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
