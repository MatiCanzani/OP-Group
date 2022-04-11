import React from "react";
// import { Link } from "gatsby";
import Navbar from "../Navbar";
import { StaticImage } from "gatsby-plugin-image";
import { Link, Container } from "./HeaderMoluleStyles.js";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = () => {
  return (
    <Container>
      <Link>
        <AnchorLink to="/">
          <StaticImage
            src="../../images/oplogo.png"
            alt="OP Group"
            layout="constrained"
            height={80}
          />
        </AnchorLink>
      </Link>
      <Navbar />
    </Container>
  );
};

export default Header;
