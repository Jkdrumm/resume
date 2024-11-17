"use client";
import React, { useRef, useEffect } from "react";

type Star = {
  position: Vector;
  mass: number;
  size: number;
  color: CanvasFillStrokeStyles["fillStyle"];
  velocity: Vector;
  velocityReduction: number;
  opacity: number;
};

type Vector = { x: number; y: number };

const GRAVITY = 0;
const SCALE = 3;
const RESTITUTION = 1; // Perfectly elastic collision
const MASS_VARIATION = 1;
// Density of stars per 100dp^2
const DENSITY = 1;
const TWINKLE_SIZE = 2;
const TWINKLE_CHANCE = 0.02;

export type StarFieldProps = {
  pauseAnimation?: boolean;
};

const StarField: React.FC<StarFieldProps> = ({ pauseAnimation }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);

  const isMouseDown = useRef(false);
  const mousePositon = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window?.innerWidth;
      canvas.height = window?.innerHeight;
    };

    handleResize();

    stars.current = Array.from(
      {
        length:
          ((canvasRef.current.width * canvasRef.current.height) / 1000) *
          DENSITY,
      },
      () => {
        const mass = Math.random() * MASS_VARIATION + 0.2;
        return {
          position: {
            x: Math.random() * (canvasRef.current?.width ?? 1000),
            y: Math.random() * (canvasRef.current?.height ?? 1000),
          },
          mass,
          size: Math.sqrt(mass / Math.PI) * SCALE,
          // Random color with 80% lightness that is yellow
          color: `hsl(${Math.random() * 60}, 100%, 80%)`,
          velocity: {
            x: Math.random() * 0.5 - 0.25,
            y: Math.random() * 0.5 - 0.25,
          },
          velocityReduction: 0,
          opacity: Math.random() * 0.5 + 0.5,
        };
      }
    );

    canvas.width = window?.innerWidth;
    canvas.height = window?.innerHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.current.forEach((star) => {
        const gravitationalForce = getGravitationalForce(
          canvas,
          star,
          stars.current,
          GRAVITY
        ) || {
          x: 0,
          y: 0,
        };

        // Update velocity with gravitational force
        star.velocity.x -= gravitationalForce.x / star.mass;
        star.velocity.y -= gravitationalForce.y / star.mass;

        if (star.velocityReduction) {
          star.velocity.x *= 1 - star.velocityReduction;
          star.velocity.y *= 1 - star.velocityReduction;
        }

        // Update position
        star.position.x += star.velocity.x;
        star.position.y += star.velocity.y;

        // Wrap stars to the opposite edge if they move out of view
        star.position.x = constrainXToCanvas(star.position.x, canvas);
        star.position.y = constrainYToCanvas(star.position.y, canvas);

        // Slow down stars for a smooth transition
        if (star.velocityReduction)
          if (star.velocityReduction * 1.02 < 1) star.velocityReduction *= 1.02;
          else star.velocityReduction = 1;

        drawStarWrapping(canvas, ctx, star);
      });

      if (isMouseDown.current) {
        stars.current.forEach((star) => {
          let dx = star.position.x - mousePositon.current.x;
          if (dx > canvas.width / 2) dx -= canvas.width;
          if (dx < -canvas.width / 2) dx += canvas.width;
          let dy = star.position.y - mousePositon.current.y;
          if (dy > canvas.height / 2) dy -= canvas.height;
          if (dy < -canvas.height / 2) dy += canvas.height;
          const distance = Math.max(Math.hypot(dx, dy), 50);
          const force = -10 / distance ** 2;
          const angle = Math.atan2(dy, dx);
          star.velocity.x += (Math.cos(angle) * force) / star.mass;
          star.velocity.y += (Math.sin(angle) * force) / star.mass;
        });
      }

      requestAnimationFrame(animate);
    };

    animate();

    const onMouseDown = () => (isMouseDown.current = true);
    const onMouseUp = () => (isMouseDown.current = false);
    const onMouseMove = (e: MouseEvent) => {
      mousePositon.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [stars]);

  useEffect(() => {
    // Slow all stars down when pauseAnimation is true
    if (!pauseAnimation) return;
    setTimeout(() => {
      stars.current.forEach((star) => {
        star.velocityReduction = 0.01;
      });
    }, 2000);
  }, [stars, pauseAnimation]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "black",
        opacity: pauseAnimation ? 0 : 1,
        // ease out opacity transition delay 2s
        transition: "opacity 1s ease-out 2.5s",
      }}
    />
  );
};

const getGravitationalForce = (
  canvas: HTMLCanvasElement,
  star: Star,
  stars: Star[],
  gravity: number
) => {
  if (gravity === 0) return { x: 0, y: 0 };
  return stars.reduce(
    (acc, otherStar) => {
      if (star === otherStar) return acc;

      let dx = star.position.x - otherStar.position.x;
      if (dx > canvas.width / 2) dx -= canvas.width;
      if (dx < -canvas.width / 2) dx += canvas.width;
      let dy = star.position.y - otherStar.position.y;
      if (dy > canvas.height / 2) dy -= canvas.height;
      if (dy < -canvas.height / 2) dy += canvas.height;
      const distance = Math.hypot(dx, dy);

      // Check for collision and handle it
      if (distance < star.size + otherStar.size) {
        handleCollision(star, otherStar, canvas);
        return acc; // Skip gravitational force if colliding
      }

      // Gravitational force calculation
      const force = (GRAVITY * star.mass * otherStar.mass) / distance ** 2;
      const angle = Math.atan2(dy, dx);
      const forceX = Math.cos(angle) * force;
      const forceY = Math.sin(angle) * force;

      return { x: acc.x + forceX, y: acc.y + forceY };
    },
    { x: 0, y: 0 }
  );
};

const handleCollision = (
  star1: Star,
  star2: Star,
  canvas: HTMLCanvasElement
) => {
  const dx = star1.position.x - star2.position.x;
  const dy = star1.position.y - star2.position.y;
  const distance = Math.hypot(dx, dy);

  // Normal vector
  const nx = dx / distance;
  const ny = dy / distance;

  // Relative velocity
  const dvx = star1.velocity.x - star2.velocity.x;
  const dvy = star1.velocity.y - star2.velocity.y;

  // Velocity along the normal
  const velocityAlongNormal = dvx * nx + dvy * ny;

  // If stars are moving away from each other, do nothing
  if (velocityAlongNormal > 0) return;

  // Calculate impulse scalar with restitution
  const impulse =
    (-(1 + RESTITUTION) * velocityAlongNormal) /
    (1 / star1.mass + 1 / star2.mass);

  // Apply impulse to each star
  star1.velocity.x += (impulse * nx) / star1.mass;
  star1.velocity.y += (impulse * ny) / star1.mass;
  star2.velocity.x -= (impulse * nx) / star2.mass;
  star2.velocity.y -= (impulse * ny) / star2.mass;

  // Separate stars to avoid overlapping
  const overlap = star1.size + star2.size - distance;
  const separationFactor = overlap / 2;
  star1.position.x += nx * separationFactor;
  star1.position.x = constrainXToCanvas(star1.position.x, canvas);
  star1.position.y += ny * separationFactor;
  star1.position.y = constrainYToCanvas(star1.position.y, canvas);
  star2.position.x -= nx * separationFactor;
  star2.position.x = constrainXToCanvas(star2.position.x, canvas);
  star2.position.y -= ny * separationFactor;
  star2.position.y = constrainYToCanvas(star2.position.y, canvas);
};

const constrainXToCanvas = (x: number, canvas: HTMLCanvasElement) => {
  if (x < 0) return x + canvas.width;
  if (x > canvas.width) return x - canvas.width;
  return x;
};

const constrainYToCanvas = (y: number, canvas: HTMLCanvasElement) => {
  if (y < 0) return y + canvas.height;
  if (y > canvas.height) return y - canvas.height;
  return y;
};

const drawStarWrapping = (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  star: Star
) => {
  const drawPositions = [star.position];
  const twinkle = Math.random() < TWINKLE_CHANCE;
  // If on an edge, draw a second star on the opposite edge for continuity
  if (star.position.x < star.size * TWINKLE_SIZE)
    drawPositions.push({
      x: star.position.x + canvas.width,
      y: star.position.y,
    });
  else if (star.position.x > canvas.width - star.size * TWINKLE_SIZE)
    drawPositions.push({
      x: star.position.x - canvas.width,
      y: star.position.y,
    });
  if (star.position.y < star.size * TWINKLE_SIZE)
    drawPositions.push({
      x: star.position.x,
      y: star.position.y + canvas.height,
    });
  else if (star.position.y > canvas.height - star.size * TWINKLE_SIZE)
    drawPositions.push({
      x: star.position.x,
      y: star.position.y - canvas.height,
    });

  drawPositions.forEach((position) => {
    ctx.fillStyle = star.color;
    drawStar(ctx, position, star.size);
    if (twinkle) drawTwinkle(ctx, position, star.size);
  });
};

const drawStar = (
  ctx: CanvasRenderingContext2D,
  position: Vector,
  size: number
) => {
  ctx.beginPath();
  ctx.arc(position.x, position.y, size, 0, Math.PI * 2);
  ctx.fill();
};

const drawTwinkle = (
  ctx: CanvasRenderingContext2D,
  position: Vector,
  size: number
) => {
  ctx.beginPath();
  ctx.arc(position.x, position.y, size * TWINKLE_SIZE, 0, Math.PI * 2);
  ctx.fill();
};

export default StarField;
