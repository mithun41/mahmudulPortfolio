import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import myImage from "../../assets/Mithun.jpg";

const Banner = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: -50 });
    }
  }, [controls, inView]);

  return (
    <section
      id="banner"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center px-6 md:px-20 py-10 overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500 opacity-20 blur-3xl animate-blob"
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-10 right-20 w-72 h-72 rounded-full bg-blue-700 opacity-20 blur-2xl animate-blob animation-delay-2000"
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-purple-700 opacity-15 blur-3xl animate-blob animation-delay-4000"
      />

      <div className="relative flex flex-col-reverse md:flex-row items-center gap-12 w-full max-w-6xl">
        {/* Left Text */}
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Hey, I'm{" "}
            <span className="text-cyan-400 hover:text-cyan-500 transition-colors cursor-pointer">
              Mahmudul Hasan
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
            A passionate{" "}
            <span className="font-semibold text-cyan-400">
              Front-End Developer
            </span>{" "}
            crafting responsive websites with{" "}
            <span className="font-semibold text-cyan-400">React</span>,{" "}
            <span className="font-semibold text-cyan-400">Firebase</span> &{" "}
            <span className="font-semibold text-cyan-400">Tailwind CSS</span>.
            Clean UI. Clean Code.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold px-8 py-3 rounded-2xl shadow-lg transition"
            >
              View Projects <FaArrowRight />
            </motion.a>
            <motion.a
              href="/Mahmudul-Hasan-cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 border-2 border-cyan-500 hover:border-cyan-600 text-cyan-500 hover:text-cyan-600 font-semibold px-8 py-3 rounded-2xl transition"
            >
              Download CV
            </motion.a>
          </div>

          <div className="flex justify-center md:justify-start gap-6 mt-8">
            <motion.a
              href="https://github.com/mithun41"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-300 hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub size={40} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mahmudul41/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-cyan-400 hover:text-cyan-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={40} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={myImage}
            alt="Mahmudul Hasan"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-cyan-400 hover:border-cyan-500 transition-all cursor-pointer"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
