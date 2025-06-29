import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#DDF6D2" }}
      className="border-t border-gray-300 py-6  text-center text-gray-700"
    >
      <p className="text-sm mb-2">
        © {new Date().getFullYear()} Mahmudul Hasan Mithun. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 mt-2">
        <a
          href="https://github.com/mithun41"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition"
          title="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/mahmudul41/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-700 transition"
          title="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
