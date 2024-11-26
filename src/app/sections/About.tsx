import { TypeText } from "@/components/compound/TypeText";
import { Container } from "@chakra-ui/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    // The 1 margin-top is to give some space between the hero and the about section so that the isInView prop isn't triggered too early
    <Container ref={ref} maxW="6xl" mt={1}>
      <TypeText
        isInView={isInView}
        fontSize={{ base: "xl", md: "2xl" }}
        text="Hello! I am a software engineer with a passion for creating seamless user experiences.\n\nI specialize in front-end development and have experience with a variety of technologies including React, TypeScript, and Next.JS.\n\nI am always looking for new opportunities to learn and grow as a developer."
      />
    </Container>
  );
};
