import { MotionHeading } from "@/components/compound/MotionHeading";
import { MotionText } from "@/components/compound/MotionText";
import { ArrowAnimatedIcon } from "@/components/icons/ArrowAnimatedIcon";
import { JDAnimatedIcon } from "@/components/icons/JDAnimatedIcon";
import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import { motion, MotionConfig, type Variants } from "motion/react";
import React from "react";

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.25,
    },
  },
};

const headingVariants: Variants = {
  initial: { rotateX: -90, opacity: 0 },
  animate: { rotateX: 0, opacity: 1 },
};

export const Hero: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <Box h="100vh" justifyItems="center">
        <Container
          py="16"
          display="flex"
          gap="16px"
          maxW="4xl"
          h="75vh"
          justifyContent="center"
          alignItems="center"
        >
          <MotionConfig transition={{ duration: 0.5 }}>
            <Flex
              w="inherit"
              flexDir={{ base: "column", md: "row" }}
              align={{ base: "center", md: "flex-end" }}
              gap={12}
            >
              <JDAnimatedIcon fontSize={{ base: 250, lg: 350 }} />
              <VStack align={{ base: "center", md: "flex-start" }}>
                <MotionHeading
                  size={{ base: "5xl", lg: "6xl" }}
                  transformOrigin="50% 100% 0px"
                  transform="perspective(500px)"
                  variants={headingVariants}
                >
                  Joshua Drumm
                </MotionHeading>
                <MotionText
                  textStyle="xl"
                  transformOrigin="50% 100% 0px"
                  transform="perspective(500px)"
                  variants={headingVariants}
                >
                  Software Engineer
                </MotionText>
              </VStack>
            </Flex>
          </MotionConfig>
        </Container>
        <ArrowAnimatedIcon fontSize="6xl" />
      </Box>
    </motion.div>
  );
};
