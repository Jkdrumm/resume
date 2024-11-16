import { MoonEffect } from "@/components/compound/MoonEffect";
import { Box, Container, Text } from "@chakra-ui/react";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function HomeLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <Box minH="100vh" position="relative">
      <MoonEffect />
      <Box
        as="header"
        top="0"
        left="0"
        right="0"
        height="60px"
        borderBottom={{ base: "1px solid #e2e8f0" }}
      >
        <Container
          alignItems="center"
          justifyContent="center"
          display="flex"
          h="inherit"
          gap="16px"
        >
          <Text>{"Joshua Drumm"}</Text>
          <Link href="/home">Home</Link>
          <Link href="/resume">Resume</Link>
        </Container>
      </Box>
      {children}
    </Box>
  );
}
