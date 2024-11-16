import { useState, useEffect } from "react";
import "./useMobileWindowHeight.css";

/**
 * Dynamically sets the height of the window to the height of the viewport.
 * Useful for mobile devices where the window height is not the height of the viewport because of the address bar.
 * @returns windowHeight: The height of the window
 */
export const useMobileWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    let viewportDetector: HTMLDivElement | null;
    const addViewportDetector = () => {
      viewportDetector = document.querySelector(".viewport-height-detector");
      if (viewportDetector) return;
      viewportDetector = document.createElement("div");
      viewportDetector.className = "viewport-height-detector";
      document.body.appendChild(viewportDetector);
      window.addEventListener("scroll", handleScroll);
    };

    const removeViewportDetector = () => {
      viewportDetector = document.querySelector(".viewport-height-detector");
      if (viewportDetector) document.body.removeChild(viewportDetector);
      window.removeEventListener("scroll", handleScroll);
    };

    const handleScroll = () => {
      const detectorHeight =
        viewportDetector?.getBoundingClientRect().height ?? window.innerHeight;
      setWindowHeight(detectorHeight);
      setNavbarHeight(detectorHeight - window.innerHeight);
    };

    const handleResize = () => {
      // If on a mobile device and no viewport, add it
      if (window.innerWidth <= 768 && !viewportDetector) addViewportDetector();
      else if (window.innerWidth > 768 && viewportDetector)
        removeViewportDetector();
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      removeViewportDetector();
    };
  }, []);

  return { windowHeight, navbarHeight };
};
