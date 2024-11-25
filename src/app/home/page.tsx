"use client";
import { Box } from "@chakra-ui/react";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";

export default function Home() {
  return (
    <Box minH="100vh" pb="40">
      <Hero />
      <About />
    </Box>
  );
}

{
  /* <Flex flexDir="column" align="center">
          <Image
            src="/josh.jpg"
            alt="Photo of me"
            width="300"
            height="300"
            borderRadius={150}
          />
          This is me 🎷
        </Flex> */
}
