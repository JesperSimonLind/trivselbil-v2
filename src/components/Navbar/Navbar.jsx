import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <a href="#hem">
        <div className="app__navbar-logo">
          <img src={images.trivselLogo} alt="Nordanå Tvätt logotyp" />
        </div>
      </a>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#hem">Hem</a>
        </li>
        <li className="p__opensans">
          <a href="#tjanster">Våra Tjänster</a>
        </li>
        <li className="p__opensans">
          <a href="#om">Om oss</a>
        </li>
        <li className="p__opensans">
          <a href="#kontakt">Kontakt</a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay slide-bottom">
            <AiOutlineClose
              color="#fff"
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#hem" onClick={() => setToggleMenu(false)}>
                  Hem
                </a>
              </li>
              <li className="p__opensans">
                <a href="#tjanster" onClick={() => setToggleMenu(false)}>
                  Våra Tjänster
                </a>
              </li>
              <li className="p__opensans">
                <a href="#om" onClick={() => setToggleMenu(false)}>
                  Om oss
                </a>
              </li>
              <li className="p__opensans">
                <a href="#kontakt" onClick={() => setToggleMenu(false)}>
                  Kontakta
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
