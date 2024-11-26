import { Box, Flex } from "@chakra-ui/react";
import { motion } from "motion/react";
import React from "react";
import { JDColorIcon } from "../icons/JDColorIcon";

export type IconBackgroundProps = {
  size?: number;
};

export const IconBackground: React.FC<IconBackgroundProps> = ({
  size = 15,
}) => {
  return (
    <Flex position="fixed" w="100%" h="100%" align="center" justify="center">
      <motion.div
        style={{
          maskSize: `${size}px ${size}px`,
          maskImage: "radial-gradient(black 0px, transparent 1px)",
        }}
        initial={{
          maskPosition: "0px 0px",
        }}
        animate={{
          maskPosition: `${size}px ${size}px`,
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        <Box
          data-framer-component-type="SVG"
          data-framer-name="Logo"
          aria-hidden="true"
          imageRendering="pixelated"
          flexShrink={0}
          opacity={0.5}
        >
          <Box width="100%" height="100%" aspectRatio="inherit">
            <Box width="100%" height="100%">
              <JDColorIcon
                fontSize={{
                  base: "350px",
                  sm: "450px",
                  md: "700px",
                  lg: "800px",
                  xl: "800px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Flex>
  );
};
