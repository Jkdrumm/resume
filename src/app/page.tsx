"use client";
import { Box } from "@chakra-ui/react";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { IconBackground } from "@/components/compound/IconBackground";
import { HomeSections } from "./sections/components/HomeSections";
import { End } from "./sections/End";

export default function Home() {
  return (
    <Box minH="100vh">
      <IconBackground />
      <HomeSections sections={[Hero, About, End]} />
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
