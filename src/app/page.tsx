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
