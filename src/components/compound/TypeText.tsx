import { motion, MotionConfig, Variants } from "motion/react";
import { Text, type TextProps } from "@chakra-ui/react";
import { Fragment, type ReactNode } from "react";

export type TypeTextProps = {
  text: string | (string | ReactNode)[];
  newLinePauseMultiplier?: number;
  punctuationPauseMultiplier?: number;
  isInView?: boolean;
  isNested?: boolean;
} & TextProps;

export const TypeText: React.FC<TypeTextProps> = ({
  text,
  newLinePauseMultiplier = 8,
  punctuationPauseMultiplier = 6,
  isInView,
  isNested = false,
  ...props
}) => {
  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.025,
        delayChildren: isNested ? 0 : 0.25, // Delay for top-level only
      },
    },
  };

  const textVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const renderContent = (content: string | ReactNode, index: number) => {
    if (typeof content !== "string") {
      // ReactNode content
      return (
        <motion.span key={index} variants={textVariants}>
          {" "}
          {content}
        </motion.span>
      );
    }

    // String content with line breaks
    const lines = content.split(/\\n|\n/);
    return (
      <span key={index}>
        {lines.map((line, lineIndex) => {
          // Split punctuation, but only if there's a space afterwards.
          const sentences = line.split(/(?<=[.,!?])\s/);
          return (
            <Fragment key={`${index}-${lineIndex}`}>
              {sentences.map((sentence, sentenceIndex) => (
                <Fragment key={`${index}-${lineIndex}-${sentenceIndex}`}>
                  {sentenceIndex > 0 && (
                    <motion.span variants={textVariants}> </motion.span>
                  )}
                  <Text display="inline" {...props}>
                    {sentence.split("").map((char, charIndex) => (
                      <motion.span
                        key={`${index}-${lineIndex}-${charIndex}`}
                        variants={textVariants}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </Text>
                  {sentenceIndex < sentences.length - 1 &&
                    Array.from({ length: punctuationPauseMultiplier }).map(
                      (_, i) => <motion.span key={i} variants={textVariants} />
                    )}
                </Fragment>
              ))}
              {lineIndex < lines.length - 1 && (
                <>
                  {Array.from({ length: newLinePauseMultiplier }).map(
                    (_, i) => (
                      <motion.span key={i} variants={textVariants} />
                    )
                  )}
                  <br />
                </>
              )}
            </Fragment>
          );
        })}
      </span>
    );
  };

  const content = Array.isArray(text)
    ? text.map((item, index) => renderContent(item, index))
    : renderContent(text, 0);

  return (
    <motion.div
      variants={containerVariants}
      initial={isNested ? undefined : "initial"} // Allow parent to control animation
      animate={isInView ? "animate" : isNested ? undefined : "initial"} // Inherit parent's animation
      style={{
        display: isNested ? "inline" : "inline-block",
      }}
    >
      <MotionConfig transition={{ duration: 0 }}>{content}</MotionConfig>
    </motion.div>
  );
};
