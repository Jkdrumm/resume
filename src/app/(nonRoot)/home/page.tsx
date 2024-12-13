"use client";
import { Box, Card, Grid, useMediaQuery } from "@chakra-ui/react";
import { Image } from "@/components/ui/image";
import { motion } from "motion/react";
import { Tag } from "@/components/ui/tag";
import { SkillCard } from "./components/SkillCard";

export default function Home() {
  // Media query for md size but not lg
  const [isMedium] = useMediaQuery(
    ["(min-width: 48em) and (max-width: 63em)"],
    { ssr: false }
  );
  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Card.Root
          flexDirection={{ base: "col", md: "row" }}
          overflow="hidden"
          alignItems="center"
        >
          <Image
            src="/josh.jpg"
            alt="Photo of me"
            size="1891"
            w={{ base: "100%", md: "300px" }}
            h={{ base: "100%", md: "300px" }}
          />
          <Box>
            <Card.Body gap={4}>
              <Card.Title
                fontSize="2xl"
                textAlign={{ base: "center", md: "left" }}
              >
                This is me 🎷
              </Card.Title>
              <Card.Description>
                Hello, I&apos;m Josh. I live by a philosophy that it is
                important to make progress towards your goals every day, no
                matter how small. Even 1% a day may seem small, but that results
                in real progress when compounded. This philosophy extends to
                both my work and personal life. I enjoy the challenge of working
                with startups and learning new things on the fly.
              </Card.Description>
            </Card.Body>
            <Card.Footer display="flex" flexWrap="wrap">
              <Tag>Front End</Tag>
              <Tag>Full Stack</Tag>
              <Tag>Startups</Tag>
              <Tag>Collaborator</Tag>
              <Tag>Documentation Reader</Tag>
              <Tag>Responsive Design</Tag>
              <Tag>Self Starter</Tag>
              <Tag>Clean Code Advocate</Tag>
              <Tag>Feedback Oriented</Tag>
              <Tag>Mentor</Tag>
            </Card.Footer>
          </Box>
        </Card.Root>
      </motion.div>
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
        <SkillCard
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
        {/* Add an extra in MD only because 9 is not divisible into the two columnns used*/}
        {isMedium && (
          <SkillCard
            title="And More!"
            description="Always eager to learn new technologies and take on new challenges"
            color="magenta"
          />
        )}
      </Grid>
    </>
  );
}
