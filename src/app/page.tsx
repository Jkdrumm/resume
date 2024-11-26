"use client";
import { Box } from "@chakra-ui/react";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  return (
    <Box minH="100vh">
      <Hero scrollRef={aboutRef} />
      <About ref={aboutRef} />
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
