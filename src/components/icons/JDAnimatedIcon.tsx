import { Icon, type IconProps } from "@chakra-ui/react";
import { motion, type Variants } from "motion/react";
import {
  JDSharedPathDBottom,
  JDSharedPathDTop,
  JDSharedPathJ,
} from "./shared/JDShared";

const iconVariants: Variants = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
};

const iconVariantsD: Variants = {
  initial: { pathLength: 0.116 },
  animate: { pathLength: 0.884 },
};

export const JDAnimatedIcon: React.FC<IconProps> = (props) => {
  return (
    <motion.div variants={{ initial: {}, animate: {} }}>
      <Icon {...props}>
        <motion.svg viewBox="0 0 100 100">
          <defs>
            <linearGradient
              id="blue-yellow-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#007BFF" />
              <stop offset="50%" stopColor="#00CFFF" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
            <mask id="j-motion-mask">
              <motion.path
                d="M8 75 A1 1 0 0 0 42 75 L42 -1"
                fill="none"
                stroke="white"
                strokeWidth="16"
                variants={iconVariants}
              />
            </mask>
            <mask id="d-motion-mask-top">
              <motion.path
                d="M50 8 L58 8 A42 42 0 0 1 92 42 L 92 50"
                fill="none"
                stroke="white"
                strokeWidth="16"
                variants={iconVariantsD}
              />
            </mask>
            <mask id="d-motion-mask-bottom">
              <motion.path
                d="M92 50 L92 58 A42 42 0 0 1 58 92 L50 92"
                fill="none"
                stroke="white"
                strokeWidth="16"
                variants={iconVariantsD}
              />
            </mask>
          </defs>
          <g fill="url(#blue-yellow-gradient)">
            <motion.path d={JDSharedPathJ} mask="url(#j-motion-mask)" />
            <motion.path d={JDSharedPathDTop} mask="url(#d-motion-mask-top)" />
            <motion.path
              d={JDSharedPathDBottom}
              mask="url(#d-motion-mask-bottom)"
            />
          </g>
        </motion.svg>
      </Icon>
    </motion.div>
  );
};
