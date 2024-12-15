"use-client";
import { Box, Card } from "@chakra-ui/react";
import { Image } from "@/components/ui/image";
import { motion } from "motion/react";
import { Tag } from "@/components/ui/tag";

export const HeroCard: React.FC = () => {
  return (
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
              Hello, I&apos;m Josh. I live by a philosophy that it is important
              to make progress towards your goals every day, no matter how
              small. Even 1% a day may seem small, but that results in real
              progress when compounded. This philosophy extends to both my work
              and personal life. I enjoy the challenge of working with startups
              and learning new things on the fly.
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
  );
};
