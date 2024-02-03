import React from "react";
import { NavLink } from "react-router-dom";
import { TfiShoppingCart } from "react-icons/tfi";
import "react-dom";
import "../styles/App.css";

function Nav() {
  function Openlists() {
    const a = document.querySelector(".hamburger");
    const b = document.querySelector(".navlists");
    a.classList.toggle("active");
    b.classList.toggle("active");
  }
  return (
    <>
      <div className="navlists">
        <ul className="lists">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <div className="linkanima"></div>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <div className="linkanima"></div>
          </li>
          <li>
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
            <div className="linkanima01"></div>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <div className="linkanima02"></div>
          </li>
          <li>
            <NavLink to="/cart" className="nav-cartico">
              <TfiShoppingCart />
            </NavLink>
            <div className="linkanima03"></div>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={Openlists}>
        <div className="nline"></div>
        <div className="nline"></div>
        <div className="nline"></div>
      </div>
    </>
  );
}

export default Nav;
