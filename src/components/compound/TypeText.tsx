import { motion, MotionConfig } from "motion/react";
import { Text, type TextProps } from "@chakra-ui/react";

export type TypeTextProps = {
  text: string;
  isInView?: boolean;
  speed?: number;
} & TextProps;

export const TypeText: React.FC<TypeTextProps> = ({
  text,
  isInView,
  speed = 0.02,
  ...props
}) => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: speed,
        delayChildren: 0.25,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <Text {...props}>
        <MotionConfig transition={{ duration: speed }}>
          {text.split(/\\n|(?<!\\)\\n/).map((line, lineIndex) => (
            <span key={lineIndex}>
              {line.split("").map((char, charIndex) => (
                <motion.span
                  key={`${lineIndex}-${charIndex}`}
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                  }}
                >
                  {char}
                </motion.span>
              ))}
              {lineIndex < text.split(/\\n|(?<!\\)\\n/).length - 1 && <br />}
            </span>
          ))}
        </MotionConfig>
      </Text>
    </motion.div>
  );
};
