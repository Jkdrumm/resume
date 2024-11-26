import { motion, MotionConfig } from "motion/react";
import { Text, type TextProps } from "@chakra-ui/react";

export type TypeTextProps = {
  text: string;
  isInView?: boolean;
} & TextProps;

export const TypeText: React.FC<TypeTextProps> = ({
  text,
  isInView,
  ...props
}) => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.025,
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
        <MotionConfig transition={{ duration: 0.025 }}>
          {text.split("\n").map((line, lineIndex) => (
            <motion.div
              key={lineIndex}
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
              }}
              style={{ display: "inline-block" }}
              transition={{
                delay: lineIndex * 0.5, // Add a delay for each line
              }}
            >
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
              {lineIndex < text.split("\n").length - 1 && <br />}
            </motion.div>
          ))}
        </MotionConfig>
      </Text>
    </motion.div>
  );
};
