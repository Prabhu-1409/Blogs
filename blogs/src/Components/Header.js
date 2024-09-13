import React from "react";
import "./Header.css";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

function Header() {
  return (
    <div className="header">
      <div>
        <p className="text1">EVERYTHING IS PERSONAL.INCLUDING THIS BLOG</p>
      </div>
      <div>
        <p className="text2" style={{ fontFamily: "tinos" }}>
          Train of Exploration
        </p>
      </div>
      <div>
        <div>
          <ul className="list">
            <span className="first-border"></span>
            <li>Home</li>
            <li>About</li>
            <li>My Blog</li>
            <li>Contact</li>
            <li>
              <div className="icons">
                <a>
                  <FaInstagram size={25} className="icon"></FaInstagram>
                </a>
                <a>
                  <CiLinkedin size={25} className="icon"></CiLinkedin>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
