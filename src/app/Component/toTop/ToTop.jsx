"use client";

import { useState, useEffect } from "react";
import "./totop.css";

function ToTop() {
  const [scrollBtnActive, setScrollBtnActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        console.log(window.scrollY)
        setScrollBtnActive(true);
      } else {
        setScrollBtnActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="toTop">
      {scrollBtnActive && (
        <button className="bg-violet-500 text-white p-3" onClick={toTopScroll}>
          ^
        </button>
      )}
    </div>
  );
}

export default ToTop;
