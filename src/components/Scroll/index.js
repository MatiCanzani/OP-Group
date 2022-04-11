import React, { useState } from "react";

import { ScrollIcon } from "./ScrollMoluleStyles.js";

const Scroll = () => {
  const isBrowser = typeof window !== "undefined";
  const [scroll, setScroll] = useState(true);
  if (isBrowser) {
    const handleScroll = () => {
      window.scrollY <= 80 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
  }
  return (
    <>
      <div className={scroll ? "scroll" : "scroll__hidden"}>
        <ScrollIcon>
          <span></span>
          <p>scroll</p>
        </ScrollIcon>
      </div>
    </>
  );
};

export default Scroll;
