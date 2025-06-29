import React from "react";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <a href="#projects" className="hover:text-blue-700 transition">
          Projects
        </a>
      </li>
      <li>
        <a href="#skills" className="hover:text-blue-700 transition">
          Skills
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-blue-700 transition">
          About Me
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-blue-700 transition">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#DDF6D2] shadow-sm sticky top-0 z-50 px-22">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
        <a href="#banner" className=" text-xl">
          MHMithun
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="/Mahmudul-Hasan-cv.pdf"
          className="inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-700 hover:text-white transition font-medium"
          download
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
