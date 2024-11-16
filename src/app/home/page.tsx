"use client";
import { Image } from "@/components/ui/image";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <Box minH="1000vh" position="relative">
        <Container
          py="8"
          display="flex"
          flexDir={{ base: "column", md: "row" }}
          gap="16px"
        >
          <Flex flexDir="column" align="center">
            <Image
              src="/josh.jpg"
              alt="Photo of me"
              width="300"
              height="300"
              borderRadius={9999}
            />
            This is me 🎷
          </Flex>
          <Box flex="1">
            <Heading textStyle="6xl">Hello</Heading>
            <Flex gap="16px" w="inherit" flexDir="column">
              <Text textStyle="md">
                I am Joshua Drumm. I am a software engineer, musician, cyclist,
                and perpetual learner.
              </Text>
              <Flex flexDir="column" gap="8px" maxW="600px"></Flex>
            </Flex>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
}
