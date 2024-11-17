"use client";
import React, { useRef, useEffect } from "react";
import { useMobileWindowHeight } from "../../hooks/useMobileWindowHeight";

type Crater = {
  /**
   * The x position of the crater relative to the center of the moon
   */
  x: number;
  /**
   * The y position of the crater relative to the center of the moon
   */
  y: number;
  /**
   * The size of the crater relative to the moon.
   * Assumes perfectly circular craters but will be stretched based on the angle to create an elliptical effect.
   * The further the crater is from the center of the moon, the more stretched it will be.
   */
  radius: number;
  /**
   * The factor by which to stretch to be elliptical.
   * Can make the crater look more like an ellipse than a circle if near the middle
   * or more like a circle if near the edge.
   */
  ellipticalFactor?: number;
};

export const MoonEffect: React.FC = () => {
  const { windowHeight, navbarHeight } = useMobileWindowHeight();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollHeight = useRef(
    typeof window === "undefined" ? 0 : window.scrollY
  );

  const canvasSize = useRef<"base" | "sm" | "md" | "lg" | "xl" | "2xl">("base");

  const craters = useRef<Crater[]>([
    { x: -100, y: -1975, radius: 70 },
    { x: 75, y: -1950, radius: 35 },
    { x: 250, y: -1900, radius: 45 },
    { x: -450, y: -1900, radius: 45 },
    { x: -350, y: -1875, radius: 65 },
    { x: 300, y: -1825, radius: 100 },
    { x: -700, y: -1825, radius: 120 },
    { x: 400, y: -1900, radius: 55 },
    { x: 600, y: -1850, radius: 25 },
    { x: 800, y: -1800, radius: 40 },
    { x: 640, y: -1775, radius: 85 },
    { x: 30, y: -1800, radius: 50 },
    { x: -50, y: -1850, radius: 30 },
    { x: -200, y: -1700, radius: 40 },
    { x: -230, y: -1800, radius: 30 },
    { x: 200, y: -1400, radius: 150 },
    { x: -500, y: -1550, radius: 150 },
    { x: -300, y: -1400, radius: 45 },
    { x: -100, y: -1600, radius: 65 },
    { x: -800, y: -1450, radius: 45 },
    { x: -1100, y: -1400, radius: 200 },
    { x: -900, y: -1600, radius: 50 },
    { x: -700, y: -1650, radius: 75 },
    { x: -650, y: -1750, radius: 25 },
    { x: -800, y: -1700, radius: 30 },
    { x: 450, y: -1750, radius: 25 },
    { x: 550, y: -1600, radius: 40 },
    { x: 650, y: -1625, radius: 30 },
    { x: 450, y: -1550, radius: 35 },
    { x: 200, y: -1650, radius: 50 },
    { x: -450, y: -1750, radius: 50 },
    { x: 50, y: -350, radius: 300 },
    { x: -1700, y: -750, radius: 75 },
    { x: -1550, y: -850, radius: 45 },
    { x: -1550, y: -1000, radius: 100 },
    { x: -1600, y: -1100, radius: 50 },
    { x: -1300, y: -1150, radius: 60 },
    { x: -1400, y: -1200, radius: 25 },
    { x: -1300, y: -1400, radius: 60 },
    { x: -1150, y: -1500, radius: 35 },
    { x: -1050, y: -1650, radius: 50 },
    { x: -1400, y: -1400, radius: 50 },
    { x: -1850, y: -600, radius: 50 },
    { x: -1950, y: -200, radius: 50 },
    { x: -1850, y: -350, radius: 45 },
    { x: -1800, y: -500, radius: 25 },
    { x: -1850, y: -100, radius: 20 },
    { x: -1925, y: 25, radius: 65 },
    { x: -1850, y: 200, radius: 50 },
    { x: -1925, y: 300, radius: 60 },
    { x: -1850, y: 425, radius: 25 },
    { x: -1800, y: 600, radius: 45 },
    { x: -1825, y: 750, radius: 55 },
    { x: -1600, y: 900, radius: 200 },
    { x: -1300, y: 850, radius: 30 },
    { x: -1500, y: 750, radius: 45 },
    { x: -1725, y: 525, radius: 45 },
    { x: -1375, y: 950, radius: 35 },
    { x: -1300, y: 1200, radius: 75 },
    { x: -1450, y: 1200, radius: 40 },
    { x: -1300, y: 1450, radius: 75 },
    { x: -1200, y: 1050, radius: 45 },
    { x: -1150, y: 1350, radius: 35 },
    { x: -1250, y: 1350, radius: 25 },
    { x: -1100, y: 1200, radius: 45 },
    { x: -900, y: 1225, radius: 30 },
    { x: -1000, y: 1500, radius: 50 },
    { x: -1150, y: 1575, radius: 30 },
    { x: -875, y: 1375, radius: 45 },
    { x: -400, y: 1300, radius: 25 },
    { x: -950, y: 1650, radius: 40 },
    { x: -775, y: 1550, radius: 85 },
    { x: -725, y: 1700, radius: 45 },
    { x: -650, y: 1825, radius: 65 },
    { x: -625, y: 1450, radius: 25 },
    { x: -650, y: 1350, radius: 55 },
    { x: -400, y: 1500, radius: 90 },
    { x: -425, y: 1750, radius: 55 },
    { x: -350, y: 1900, radius: 60 },
    { x: -250, y: 1850, radius: 45 },
    { x: -250, y: 1650, radius: 45 },
    { x: -100, y: 1200, radius: 45 },
    { x: -120, y: 1275, radius: 20 },
    { x: -200, y: 1400, radius: 50 },
    { x: 50, y: 1750, radius: 150 },
    { x: 20, y: 1850, radius: 60 },
    { x: 25, y: 1550, radius: 45 },
    { x: 175, y: 1925, radius: 55 },
    { x: 350, y: 1800, radius: 30 },
    { x: 325, y: 1575, radius: 40 },
    { x: 300, y: 1200, radius: 60 },
    { x: 150, y: 1350, radius: 30 },
    { x: 75, y: 1000, radius: 60 },
    { x: 125, y: 750, radius: 30 },
    { x: 100, y: 500, radius: 40 },
    { x: 250, y: 625, radius: 55 },
    { x: 500, y: 675, radius: 35 },
    { x: 375, y: 875, radius: 40 },
    { x: 475, y: 1050, radius: 40 },
    { x: 450, y: 1400, radius: 55 },
    { x: 500, y: 1800, radius: 60 },
    { x: 575, y: 1650, radius: 60 },
    { x: 650, y: 1850, radius: 35 },
    { x: 675, y: 1550, radius: 55 },
    { x: 600, y: 1250, radius: 20 },
    { x: 625, y: 900, radius: 35 },
    { x: 675, y: 1080, radius: 25 },
    { x: 750, y: 1200, radius: 35 },
    { x: 725, y: 1325, radius: 130 },
    { x: 800, y: 1675, radius: 50 },
    { x: 825, y: 1425, radius: 35 },
    { x: 825, y: 1000, radius: 45 },
    { x: 800, y: 900, radius: 20 },
    { x: 950, y: 1175, radius: 45 },
    { x: 925, y: 825, radius: 45 },
    { x: 775, y: 625, radius: 45 },
    { x: 1100, y: 1000, radius: 30 },
    { x: 1150, y: 775, radius: 60 },
    { x: 1025, y: 1350, radius: 45 },
    { x: 1000, y: 1550, radius: 55 },
    { x: 1050, y: 1475, radius: 80 },
    { x: 1250, y: 1500, radius: 40 },
    { x: 1400, y: 1400, radius: 40 },
    { x: 1250, y: 1350, radius: 50 },
    { x: 1150, y: 1200, radius: 20 },
    { x: 1200, y: 1050, radius: 60 },
    { x: 1300, y: 1150, radius: 40 },
    { x: 1275, y: 900, radius: 30 },
    { x: 1450, y: 1000, radius: 30 },
    { x: 1425, y: 900, radius: 55 },
    { x: 1700, y: 900, radius: 55 },
    { x: 1650, y: 850, radius: 40 },
    { x: 1600, y: 700, radius: 80 },
    { x: 1800, y: 500, radius: 35 },
    { x: 1750, y: 400, radius: 35 },
    { x: 1650, y: 300, radius: 25 },
    { x: 1600, y: 25, radius: 70 },
    { x: 1700, y: -25, radius: 35 },
    { x: 1850, y: 125, radius: 55 },
    { x: 1775, y: -75, radius: 45 },
    { x: 1875, y: -250, radius: 45 },
    { x: 1850, y: -500, radius: 30 },
    { x: 1775, y: -450, radius: 30 },
    { x: 1800, y: -650, radius: 65 },
    { x: 1750, y: -800, radius: 45 },
    { x: 1675, y: -850, radius: 25 },
    { x: 1500, y: -825, radius: 50 },
    { x: 1400, y: -1050, radius: 40 },
    { x: 1450, y: -1075, radius: 35 },
    { x: 1350, y: -890, radius: 35 },
    { x: 1150, y: -950, radius: 50 },
    { x: 1050, y: -1200, radius: 30 },
    { x: 1200, y: -1350, radius: 45 },
    { x: 1300, y: -1350, radius: 45 },
    { x: 900, y: -1650, radius: 45 },
    { x: 1000, y: -1500, radius: 60 },
    { x: 1100, y: -1650, radius: 35 },
    { x: 1150, y: -1550, radius: 35 },
    { x: 900, y: -800, radius: 35 },
    { x: 1100, y: -725, radius: 45 },
    { x: 800, y: -900, radius: 20 },
    { x: 850, y: -1125, radius: 35 },
    { x: 800, y: -1350, radius: 50 },
    { x: 750, y: -1500, radius: 35 },
    { x: 600, y: -1400, radius: 25 },
    { x: 450, y: -1150, radius: 50 },
    { x: 250, y: -1175, radius: 30 },
    { x: -100, y: -1200, radius: 40 },
    { x: -25, y: -950, radius: 25 },
    { x: -350, y: -200, radius: 35 },
    { x: -500, y: -250, radius: 25 },
    { x: -475, y: -50, radius: 20 },
    { x: -300, y: 0, radius: 40 },
    { x: -100, y: 100, radius: 60 },
    { x: 100, y: 250, radius: 40 },
    { x: 350, y: 0, radius: 40 },
    { x: 450, y: -200, radius: 20 },
    { x: 375, y: 200, radius: 35 },
    { x: 425, y: 300, radius: 40 },
    { x: 650, y: 275, radius: 30 },
    { x: 700, y: 350, radius: 30 },
    { x: 850, y: 400, radius: 40 },
    { x: 450, y: -700, radius: 400, ellipticalFactor: 1.25 },
    { x: 950, y: -200, radius: 400, ellipticalFactor: 1.5 },
    { x: 1500, y: -450, radius: 300, ellipticalFactor: 2 },
    { x: 1300, y: 350, radius: 350, ellipticalFactor: 1.75 },
    { x: -700, y: -800, radius: 600, ellipticalFactor: 1.5 },
    { x: -800, y: -800, radius: 600, ellipticalFactor: 1.5 },
    { x: -1200, y: -100, radius: 800, ellipticalFactor: 1.5 },
    { x: -600, y: 600, radius: 600, ellipticalFactor: 1.5 },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = windowHeight;
      canvasSize.current = (() => {
        if (window.innerWidth < 480) return "base";
        if (window.innerWidth < 768) return "sm";
        if (window.innerWidth < 992) return "md";
        if (window.innerWidth < 1280) return "lg";
        if (window.innerWidth < 1536) return "xl";
        return "2xl";
      })();
    };

    setCanvasSize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const moonSize = 2000;
      const centerX = canvas.width / 2;

      const [scrollSpeed, scaleSpeed] = (() => {
        switch (canvasSize.current) {
          case "base":
            return [2.5, 2];
          case "sm":
            return [0, 0];
          case "md":
            return [0, 0];
          case "lg":
            return [0, 0];
          case "xl":
            return [0, 0];
          case "2xl":
            return [1.33, 1];
          default:
            return [1, 1];
        }
      })();
      const baseYOffset = 200;

      const centerY = (() => {
        const baseY = moonSize + canvas.height - baseYOffset;
        const wouldBeY = baseY - scrollHeight.current * scrollSpeed;
        if (wouldBeY >= canvas.height / 2) return wouldBeY;
        return canvas.height / 2;
      })();

      const scale = (() => {
        const wouldBeScale =
          (moonSize - scrollHeight.current * scaleSpeed) / moonSize;
        if (centerY > canvas.height / 2) return wouldBeScale;
        return (
          (moonSize +
            (baseYOffset - canvas.height / 2 - moonSize) / scrollSpeed) /
          moonSize
        );
      })();

      // Moon glow
      ctx.shadowBlur = 25 * (1 / (scale ** 2 + scale * 3));
      ctx.shadowColor = "#B0B1B3";
      ctx.shadowOffsetX = 0; // No horizontal offset
      ctx.shadowOffsetY = 0; // No vertical offset

      // Draw the moon
      ctx.beginPath();
      ctx.arc(centerX, centerY, moonSize * scale, 0, Math.PI * 2, true);
      ctx.fillStyle = "#B0B1B3";
      ctx.fill();

      // Reset shadow
      ctx.shadowBlur = 0;

      /**
       * Draws a crater on the moon
       * @param x The x position of the crater relative to the center of the moon
       * @param y The y position of the crater relative to the center of the moon
       * @param radius The radius of the crater relative to the moon
       */
      const drawCrater = (
        x: number,
        y: number,
        radius: number,
        ellipticalFactor: number = 1
      ) => {
        // Set the radii to be angled outward based on the angle
        const angle = Math.atan2(y, x);

        const distance = Math.sqrt(x * x + y * y);
        const percentMaxDistance = distance / moonSize;

        // const radiusX =
        //   radius * scale + scale * 100 * (1 - percentMaxDistance ** 2);
        // const radiusY = radius * scale + scale * 100;

        const radiusX =
          radius *
          scale *
          (1 - percentMaxDistance * 0.9 ** 2) *
          ellipticalFactor;
        const radiusY = radius * scale;
        ctx.beginPath();
        ctx.ellipse(
          centerX + x * scale,
          centerY + y * scale,
          radiusX,
          radiusY,
          angle,
          0,
          Math.PI * 2,
          true
        );
        ctx.fillStyle = "#9F9FA1";
        ctx.fill();
      };

      // Draw craters on the moon
      craters.current.forEach((crater) =>
        drawCrater(crater.x, crater.y, crater.radius, crater.ellipticalFactor)
      );
    };

    requestAnimationFrame(animate);

    const handleResize = () => {
      setCanvasSize();
      requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      scrollHeight.current = window.scrollY;
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
      window.visualViewport.addEventListener("scroll", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (!window.visualViewport) return;
      window.visualViewport.removeEventListener("resize", handleResize);
      window.visualViewport.removeEventListener("scroll", handleResize);
    };
  }, [navbarHeight, windowHeight]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
      }}
    />
  );
};
