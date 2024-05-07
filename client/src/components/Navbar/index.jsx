import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = [
    { url: "/", link: "Home" },
    { url: "/nosotros", link: "Nosotros" },
    { url: "/especialidades", link: "Especialidades" },
    { url: "/intranet", link: "Intranet" },
  ];
  return (
    <header className="text-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="logo" className="w-20 h-20 text-white p-2" />
          {/* <span className="ml-3 text-xl">Tailblocks</span> */}
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {pages.map((page, index) => (
            <Link key={index} to={page.url} className="mr-5 hover:bg-blue-300">
              {page.link}
            </Link>
          ))}
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Ingresar
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
