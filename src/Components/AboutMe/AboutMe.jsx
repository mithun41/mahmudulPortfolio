import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen px-6 md:px-20 py-24 flex flex-col justify-center"
    >
      <h2 className="text-5xl font-extrabold text-center mb-16 text-cyan-400 tracking-wide">
        About Me
      </h2>

      <motion.div
        className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="bg-gray-800 bg-opacity-60 p-8 rounded-3xl shadow-xl border border-cyan-700">
          Hello! I’m{" "}
          <span className="font-semibold text-cyan-400">
            Mahmudul Hasan Mithun
          </span>
          , a passionate front-end developer from Bangladesh. My programming
          journey started with a deep curiosity about how websites work, which
          soon turned into a love for writing clean, interactive, and functional
          code. I completed the full web development course from Programming
          Hero, where I built hands-on projects using HTML, CSS, JavaScript,
          React, Firebase, and MongoDB.
        </p>

        <p className="bg-gray-800 bg-opacity-60 p-8 rounded-3xl shadow-xl border border-cyan-700">
          I enjoy working on real-world problems, designing modern UIs, and
          building smooth user experiences. Whether it’s crafting a
          pixel-perfect landing page or building a full-stack app, I love
          bringing ideas to life through code. My favorite tools include React,
          Tailwind CSS, and Firebase — and I'm always open to learning new
          technologies that help improve performance and user experience.
        </p>

        <p className="bg-gray-800 bg-opacity-60 p-8 rounded-3xl shadow-xl border border-cyan-700">
          Outside of programming, I enjoy spending time in nature, watching tech
          documentaries, and exploring street photography. I also like
          experimenting with design ideas in Figma, even if it's just for fun. I
          believe staying curious both in tech and in life helps me grow as a
          developer and as a person.
        </p>

        <p className="bg-gray-800 bg-opacity-60 p-8 rounded-3xl shadow-xl border border-cyan-700">
          I’m a strong believer in continuous learning, collaboration, and
          building meaningful things. If you’re looking for someone who codes
          with passion and is always ready to improve, then I’d love to connect!
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
