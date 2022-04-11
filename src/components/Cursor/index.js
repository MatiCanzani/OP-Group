import React, { useRef, useEffect } from "react";
import { CursorOutline, CursorDot }from "./CursorMoluleStyles.js";
import { gsap } from "gsap";

const Cursor = () => {
  const dotOutline = useRef();
  const dot = useRef();

  useEffect(() => {
    if (dot.current) {
      gsap.set(dot.current, { xPercent: -50, yPercent: -50 });
      gsap.set(dotOutline.current, { xPercent: -50, yPercent: -50 });
      window.addEventListener("mousemove", (e) => {
        gsap.to(dot.current, {
          duration: 0.9,
          x: e.clientX,
          y: e.clientY,
        });
        gsap.to(dotOutline.current, { duration: 0, x: e.clientX, y: e.clientY });
      });
    }
  });

  return (
    <>
      <CursorOutline ref={dot} />
      <CursorDot ref={dotOutline} />
    </>
  );
};

export default Cursor;
