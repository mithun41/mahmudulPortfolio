import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 border-t border-cyan-700 py-6 text-center text-cyan-400">
      <p className="text-sm mb-2">
        © {new Date().getFullYear()} Mahmudul Hasan Mithun. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 mt-2">
        <a
          href="https://github.com/mithun41"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-200 transition"
          title="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/mahmudul41/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-200 transition"
          title="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
