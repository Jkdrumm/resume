"use client";
import { Grid } from "@chakra-ui/react";
import { HeroCard } from "./components/HeroCard";
// import { SkillCard } from "./components/SkillCard";

export default function Home() {
  return (
    <>
      <HeroCard />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        flexDir={{ base: "column", md: "row" }}
        width="inherit"
        gap={8}
        flex="1"
        mt={16}
        mb={{ base: 48, md: 0 }}
        alignItems="stretch"
      >
        {/* <SkillCard
          title="Front-End Specialist"
          description="Proficient in TypeScript, React, and modern front-end development tools like Ant Design, Chakra UI, and React Motion"
          color="blue.400"
        />
        <SkillCard
          title="Backend Developer"
          description="Experienced with Node.js and building RESTful APIs"
          color="green.400"
        />
        <SkillCard
          title="DevOps Enthusiast"
          description="Familiar with Docker and CI/CD pipelines using GitHub Actions"
          color="red.400"
        />
        <SkillCard
          title="Clean Code Advocate"
          description="Believes in writing clean, maintainable code that is easy to understand and refactor"
          color="teal.400"
        />
        <SkillCard
          title="Design Implementer"
          description="Adept at using Figma to implement beautiful, responsive designs"
          color="pink.400"
        />
        <SkillCard
          title="Team Collaborator"
          description="Experienced in working with cross-functional teams to deliver high-quality software products"
          color="cyan.400"
        />
        <SkillCard
          title="Technical Documenter"
          description="Skilled in writing clear, concise documentation for both technical and non-technical audiences"
          color="purple.400"
        />
        <SkillCard
          title="Feedback Proponent"
          description="Enjoys giving and receiving constructive feedback to improve both personal and team performance"
          color="orange.400"
        />
        <SkillCard
          title="Proactive Problem Solver"
          description="Able to work independently and take initiative to solve problems and deliver results"
          color="red.400"
        />
        <SkillCard
          // Add an extra in MD only because 9 is not divisible into the two columnns used in MD
          display={{ base: "none", md: "block", lg: "none" }}
          title="And More!"
          description="Always eager to learn new technologies and take on new challenges"
          color="magenta"
        /> */}
      </Grid>
    </>
  );
}
