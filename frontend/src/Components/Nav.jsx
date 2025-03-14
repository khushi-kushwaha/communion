import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const SidebarMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 px-4 md:px-8 flex justify-between items-center fixed w-full z-10">
      <img
        className="h-7"
        src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png"
        alt="Logo"
      />
      <button className="md:hidden" onClick={SidebarMenu}>
        <i className="ri-menu-line text-2xl"></i>
      </button>
      <div className="hidden md:flex gap-8">
        <a href="#home" className="hover:text-blue-500 font-medium transition-all">Home</a>
        <a href="#communities" className="hover:text-blue-500 font-medium transition-all">Communities</a>
        <a href="#events" className="hover:text-blue-500 font-medium transition-all">Events</a>
        <a href="#leaders" className="hover:text-blue-500 font-medium transition-all">Leaders</a>
        <a href="#support" className="hover:text-blue-500 font-medium transition-all">Support</a>
      </div>
    </nav>
  );
};

export default Nav;
