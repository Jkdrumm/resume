import { Link } from "@/components/compound/Link";
import { MotionButton } from "@/components/compound/MotionButton";
import { MotionHeading } from "@/components/compound/MotionHeading";
import { MotionText } from "@/components/compound/MotionText";
import { JDAnimatedIcon } from "@/components/icons/JDAnimatedIcon";
import { Flex, HStack, VStack } from "@chakra-ui/react";
import { motion, MotionConfig, type Variants } from "motion/react";
import React from "react";
import {
  HomeSection,
  HomeSectionInstanceProps,
} from "./components/HomeSection";

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
  initial: { rotateX: -90, skewX: -13, opacity: 0 },
  animate: { rotateX: 0, skewX: 1, opacity: 1 },
};

export const Hero: React.FC<HomeSectionInstanceProps> = ({ scrollRef }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <HomeSection scrollRef={scrollRef}>
        <MotionConfig transition={{ duration: 0.5 }}>
          <Flex
            w="inherit"
            justify="center"
            flexDir={{ base: "column", md: "row" }}
            align={{ base: "center", md: "flex-end" }}
            gap={12}
          >
            <JDAnimatedIcon fontSize={{ base: 250, lg: 350 }} />
            <VStack align={{ base: "center", md: "flex-start" }}>
              <MotionHeading
                size={{ base: "5xl", lg: "6xl" }}
                transformOrigin="bottom"
                variants={headingVariants}
              >
                Joshua Drumm
              </MotionHeading>
              <HStack gap={4}>
                <MotionText
                  textStyle="xl"
                  transformOrigin="bottom"
                  variants={headingVariants}
                >
                  Software Engineer
                </MotionText>
                <MotionButton
                  asChild
                  bg="#00CFFF"
                  transformOrigin="bottom"
                  variants={headingVariants}
                >
                  <Link href="/resume">About Me</Link>
                </MotionButton>
              </HStack>
            </VStack>
          </Flex>
        </MotionConfig>
      </HomeSection>
      {/* Causes a delay without having to explicitly pass the timing */}
      {/* <motion.div variants={headingVariants} />
        <motion.div variants={headingVariants} />
        <Flex flex="1" flexDir="column" justify="flex-end" pb="120px">
          <ArrowAnimatedIcon alignSelf="flex-end" fontSize="6xl" />
        </Flex> */}
      {/* </Flex> */}
    </motion.div>
  );
};
