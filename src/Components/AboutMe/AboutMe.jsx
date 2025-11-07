import { motion } from "framer-motion";
import myPhoto from "../../assets/Mithunn.jpg";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 px-6 md:px-20"
    >
      {/* Section Heading */}
      <h2 className="text-5xl font-extrabold text-cyan-400 mb-16 text-center tracking-wide">
        About Me
      </h2>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left - Image */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-cyan-500 w-full">
            <img
              src={myPhoto}
              alt="Mahmudul Hasan Mithun"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          className="w-full md:w-2/3 space-y-6 text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="bg-gray-800 bg-opacity-60 p-6 rounded-3xl shadow-xl border border-cyan-700">
            Hi! I’m{" "}
            <span className="font-semibold text-cyan-400">
              Mahmudul Hasan Mithun
            </span>
            , a front-end developer from Bangladesh. I build interactive,
            responsive web applications using React, Tailwind CSS, Firebase, and
            MongoDB.
          </p>

          <p className="bg-gray-800 bg-opacity-60 p-6 rounded-3xl shadow-xl border border-cyan-700">
            I enjoy designing modern UIs, solving real-world problems, and
            creating smooth user experiences. I’m always eager to learn new
            technologies that improve performance and usability.
          </p>

          <p className="bg-gray-800 bg-opacity-60 p-6 rounded-3xl shadow-xl border border-cyan-700">
            Outside programming, I enjoy exploring nature, street photography,
            and experimenting with designs in Figma. Continuous learning and
            collaboration are at the heart of everything I do.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
