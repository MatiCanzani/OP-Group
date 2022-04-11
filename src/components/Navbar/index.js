import React, { useState } from "react";
import { Menu, Line1, Line2, Line3, Toggle, NavToggle  } from "./NavbarModeulesStyles";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { AnchorLink } from "gatsby-plugin-anchor-links";

gsap.registerPlugin(TextPlugin);

const Nav = () => {
  const [active, setActive] = useState("menu");
  const [togglerIcon, setTogglerIcon] = useState(NavToggle);
  const handleToggle = () => {
    active === "menu" ? setActive("menu nav__active") : setActive("menu");

    // toggle action
    togglerIcon === NavToggle
      ? setTogglerIcon("nav__toggle toggle")
      : setTogglerIcon(NavToggle);
  };

  const closeMenu = () => {
    active === "menu nav__active"
      ? setActive("menu")
      : setActive("menu nav__active");
      
    togglerIcon === "nav__toggle toggle"
      ? setTogglerIcon("nav__toggle")
      : setTogglerIcon("nav__toggle toggle");
  };

  return (
    <>
      <Menu>
        <div className={active}>
          <AnchorLink
            to="/#about"
            className="menu-item"
            activeClassName="active"
          >
            <span onClick={closeMenu}>about</span>
          </AnchorLink>
          <AnchorLink
            to="/#services"
            className="menu-item"
            activeClassName="active"
          >
            <span onClick={closeMenu}>services</span>
          </AnchorLink>
          <AnchorLink
            to="/#works"
            className="menu-item"
            activeClassName="active"
          >
            <span onClick={closeMenu}>Portfolio</span>
          </AnchorLink>

          <AnchorLink
            to="/#contact"
            className="menu-item"
            activeClassName="active"
          >
            <span onClick={closeMenu}>contact</span>
          </AnchorLink>
        </div>
        <Toggle
          onClick={handleToggle}
          onKeyDown={handleToggle}
          className={NavToggle}
        >
          <Line1 />
          <Line2 />
          <Line3 />
        </Toggle>
      </Menu>
    </>
  );
};

export default Nav;
