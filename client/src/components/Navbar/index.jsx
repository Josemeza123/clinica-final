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
          <img src={logo} alt="logo" className="w-40 h-40 text-white p-2" />
          {/* <span className="ml-3 text-xl">Tailblocks</span> */}
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {pages.map((page, index) => (
            <Link key={index} to={page.url} className="mr-5 hover:bg-blue-300">
              {page.link}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
