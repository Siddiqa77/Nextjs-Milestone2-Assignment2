import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container-one">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <Link href="/">
            {" "}
            <li>
              <a href="#">Home</a>
            </li>
          </Link>
          <Link href="/about">
            {" "}
            <li>
              <a href="#">About</a>
            </li>
          </Link>
          <Link href="/contact">
            {" "}
            <li>
              <a href="#">Contact</a>
            </li>
          </Link>
        </ul>
        <h1 className="logo">Sage & Salt</h1>
      </div>
    </nav>
  );
};

export default Navbar;
