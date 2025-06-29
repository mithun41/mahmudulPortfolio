import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="bg-[#DDF6D2] px-6 md:px-20 py-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        About Me
      </h2>

      <div className=" mx-auto text-gray-700 text-lg leading-relaxed">
        <p className="mb-6 bg-[#ECFAE5] p-4 rounded-2xl">
          Hello! I’m{" "}
          <span className="font-semibold text-blue-700">
            Mahmudul Hasan Mithun
          </span>
          , a passionate front-end developer from Bangladesh. My programming
          journey started with a deep curiosity about how websites work, which
          soon turned into a love for writing clean, interactive, and functional
          code. I completed the full web development course from Programming
          Hero, where I built hands-on projects using HTML, CSS, JavaScript,
          React, Firebase, and MongoDB.
        </p>

        <p className="mb-6 bg-[#ECFAE5] p-4 rounded-2xl">
          I enjoy working on real-world problems, designing modern UIs, and
          building smooth user experiences. Whether it’s crafting a
          pixel-perfect landing page or building a full-stack app, I love
          bringing ideas to life through code. My favorite tools include React,
          Tailwind CSS, and Firebase — and I'm always open to learning new
          technologies that help improve performance and user experience.
        </p>

        <p className="mb-6 bg-[#ECFAE5] p-4 rounded-2xl">
          Outside of programming, I enjoy spending time in nature, watching tech
          documentaries, and exploring street photography. I also like
          experimenting with design ideas in Figma, even if it's just for fun. I
          believe staying curious both in tech and in life helps me grow as a
          developer and as a person.
        </p>

        <p className="bg-[#ECFAE5] p-4 rounded-2xl">
          I’m a strong believer in continuous learning, collaboration, and
          building meaningful things. If you’re looking for someone who codes
          with passion and is always ready to improve, then I’d love to connect!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
