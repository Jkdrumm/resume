import { TypeText } from "@/components/compound/TypeText";
import {
  HomeSection,
  HomeSectionInstanceProps,
} from "./components/HomeSection";
import { forwardRef } from "react";

export const About = forwardRef<HTMLDivElement, HomeSectionInstanceProps>(
  ({ scrollRef }, ref) => {
    return (
      <HomeSection ref={ref} scrollRef={scrollRef}>
        {({ isInView }) => (
          <TypeText
            isInView={isInView}
            fontSize={{ base: "xl", md: "2xl" }}
            text="Hello! I am a software engineer with a passion for creating seamless user experiences.\n\nI specialize in front-end development and have experience with a variety of technologies including React, TypeScript, and Next.JS.\n\nI am always looking for new opportunities to learn and grow as a developer."
          />
        )}
      </HomeSection>
    );
  }
);

About.displayName = "About";
