import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      id="Home"
      className="flex z-10 justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white"
    >
      <h1 className="w-full  text-3xl font-bold text-[#00df9a]">Demo-Project</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link
            activeClass="active"
            to="#Home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="#Home"> Home </a>
          </Link>
        </li>

        <li className="p-4">
          <Link
            activeClass="active"
            to="Company"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="#Company"> Company </a>
          </Link>
        </li>

        <li className="p-4">
          <Link
            activeClass="active"
            to="Services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="#Services"> Services </a>
          </Link>
        </li>

        <li className="p-4">
          <Link
            activeClass="active"
            to="OfferWall"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="#OfferWall">OfferWall</a>
          </Link>
        </li>

        <li className="p-4">
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            <a href="#Contact">Contact </a>
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose className="fixed" size={20} />
        ) : (
          <AiOutlineMenu className="fixed" size={15} />
        )}
      </div>
      <ul
        className={
          nav
            ? "  fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >


        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Demo-Project
        </h1>
        <li className="p-4 border-b border-gray-600">
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="#Home"> Home </a>
          </Link>
        </li>

        <li className="p-4 border-b border-gray-600">
          <Link
            activeClass="active"
            to="Company"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="#Company"> Company </a>
          </Link>
        </li>

        <li className="p-4 border-b border-gray-600">
          <Link
            activeClass="active"
            to="Services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="#Services"> Services </a>
          </Link>
        </li>

        <li className="p-4 border-b border-gray-600">
          <Link
            activeClass="active"
            to="OfferWall"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="#OfferWall">OfferWall</a>
          </Link>
        </li>

        <li className="p-4">
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="#Contact">Contact </a>
          </Link>
        </li>
            
      </ul>
    </div>
  );
};

export default Navbar;
