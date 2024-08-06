import React from "react";
import { Link } from "react-router-dom";
import "./css/NavBar.css";


export default function NavBar() {
  const onclickMenu = () => {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
  };

  return (
    <div id="navigation">
      <div id="menu" className="ms-auto" onClick={onclickMenu}>
        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>
      </div>

      <div className="row nav" id="nav">
        <div className="col-lg-4" id="nav-items">
          <ul className="nav1 text-4xl font-extrabold">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
        <div className="col-lg-6" id="nav-items">
          <h1 className="text-3xl font-extrabold font-mono text-[#050A44]">
            Let's do a project together?
          </h1>

          <h1 className="text-lg lg:text-xl mt-4">
            Use my contacts below if you need to put a project on the move, let’s work on it!
          </h1>
          <h1 className="text-sm lg:text-xl mt-2">
            <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
            <a href="mailto:aryanverma7065@gmail.com" className="transition">aryanverma7065@gmail.com</a>
          </h1>

          <button className="border-2 mt-4 custombtn border-black px-6 py-2 my-4 text-base font-mono hover:text-white hover:bg-black hover:border-black tracking-widest font-semibold">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
}
