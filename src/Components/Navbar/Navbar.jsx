import React from "react";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <a href="#projects" className="hover:text-cyan-400 transition">
          Projects
        </a>
      </li>
      <li>
        <a href="#skills" className="hover:text-cyan-400 transition">
          Skills
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-cyan-400 transition">
          About Me
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-cyan-400 transition">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 shadow-md sticky top-0 z-50 px-6 md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-cyan-400 hover:text-cyan-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-50 mt-3 w-52 p-2 shadow-lg text-cyan-400"
          >
            {menu}
          </ul>
        </div>
        <a
          href="#banner"
          className="text-xl font-bold text-cyan-400 hover:text-cyan-200 transition"
        >
          MHMithun
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-cyan-400">{menu}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="/Mahmudul-Hasan-cv.pdf"
          className="inline-flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-gray-900 transition font-medium"
          download
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
