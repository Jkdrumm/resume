import {
  Card,
  CardRootProps,
  HTMLChakraProps,
  useToken,
} from "@chakra-ui/react";
import { motion, useAnimationFrame } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export type SkillCardProps = {
  /**
   * The title of the skill card
   */
  title: string;
  /**
   * The description of the skill card
   */
  description: string;
  /**
   * The color of the skill card
   */
  color: CardRootProps["color"];
  /**
   * The duration of the animation in milliseconds
   */
  duration?: number;
  /**
   * The size of the animation in pixels
   */
  size?: number;
  /**
   * The mobile height animation offset in pixels
   */
  mobileHeightAnimationOffset?: number;
  /**
   * The mobile height animation gap in pixels
   */
  mobileHeightAnimationGap?: number;
} & HTMLChakraProps<"div">;

export const SkillCard: React.FC<SkillCardProps> = ({
  style,
  title,
  description,
  color,
  duration = 1000,
  size = 10,
  mobileHeightAnimationOffset = 100,
  mobileHeightAnimationGap = 32,
  ...props
}) => {
  const [isMedium, setIsMedium] = useState(false);

  // Using our own media query logic instead of Chakra's useMediaQuery hook since it has issues with SSR
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 48em)");
    const handleMediaChange = (e: MediaQueryListEvent) =>
      setIsMedium(e.matches);
    setIsMedium(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const componentRef = useRef<HTMLDivElement>(null);
  const [colorRGB] = useToken("colors", [color as string]);
  const animationRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const position = useRef<number>(0);

  const [isInCenter, setIsInCenter] = useState(false);

  useAnimationFrame((_, delta) => {
    const shouldAnimateMd = isMedium && isHovering;
    const shouldAnimateBase = !isMedium && isInCenter;
    const shouldAnimate =
      !animationRef.current || (!shouldAnimateMd && !shouldAnimateBase);
    if (shouldAnimate) return;
    position.current += (delta / duration) * size;
    animationRef.current.style.maskPosition = `${position.current}px ${position.current}px`;
  });

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const updateYPosition = () => {
      if (!componentRef.current || isMedium) return;

      const rect = componentRef.current.getBoundingClientRect();
      const yPosition = rect.top;

      const boundingHeight = rect.height ?? 0;

      setIsInCenter(
        yPosition <=
          (window.innerHeight + boundingHeight) / 2 -
            mobileHeightAnimationOffset &&
          yPosition >=
            (window.innerHeight - boundingHeight) / 2 -
              mobileHeightAnimationOffset -
              mobileHeightAnimationGap
      );
    };

    // Initialize state and add listeners
    updateYPosition();
    window.addEventListener("scroll", updateYPosition);
    window.addEventListener("resize", updateYPosition);

    return () => {
      window.removeEventListener("scroll", updateYPosition);
      window.removeEventListener("resize", updateYPosition);
    };
  }, [isMedium, mobileHeightAnimationGap, mobileHeightAnimationOffset]);

  return (
    <motion.div
      ref={componentRef}
      variants={{
        initial: { scale: 1 },
        animate: { scale: 1.05 },
      }}
      whileHover={isMedium ? { scale: 1.05 } : undefined}
      animate={!isMedium && isInCenter ? "animate" : "initial"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ flex: 1, display: "flex", ...style }}
    >
      <Card.Root borderColor={color} width="100%" {...props}>
        <motion.div
          ref={animationRef}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            maskSize: `${size}px ${size}px`,
            maskImage: "radial-gradient(black 0px, transparent 1px)",
            background: `linear-gradient(225deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 1) 100%), ${colorRGB}`,
          }}
        />
        <Card.Body zIndex="base">
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Body>
      </Card.Root>
    </motion.div>
  );
};
