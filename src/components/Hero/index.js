import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import {HeroContainer} from"./HeroMoluleStyles";
import Scroll from "../Scroll";

const Hero = () => {
  const boxRef = useRef();
  useEffect(() => {
    gsap.from(boxRef.current, { opacity: "0", delay: 0.9 });
    gsap.to(boxRef.current, { opacity: "1", duration: "2", delay: "2" });
  });


  
  return (
    <HeroContainer >
      <Scroll />
    </HeroContainer>
  );
};

export default Hero;
