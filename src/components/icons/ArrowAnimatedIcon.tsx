import { Icon, type IconProps } from "@chakra-ui/react";
import { motion } from "motion/react";
import React from "react";

export const ArrowAnimatedIcon: React.FC<IconProps> = (props) => {
  return (
    <motion.div variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
      <Icon {...props}>
        <motion.svg viewBox="0 0 24 24">
          <motion.path
            d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.96788 9.11619L3.0321 10.8838L12 15.6315Z"
            fill="currentColor"
            // Have it "breathe"
            initial={{ scale: 1 }}
            animate={{ scale: 1.3 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </Icon>
    </motion.div>
  );
};
