"use client";
import { MoonEffect } from "@/components/compound/MoonEffect";
import { Box, Container, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function HomeLayout({ children }: Readonly<PropsWithChildren>) {
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
            <Link href="/home/resume">Resume</Link>
          </Container>
        </Box>
        <Container>{children}</Container>
      </Box>
    </motion.div>
  );
}
