"use client";
import { JDColorIcon } from "@/components/icons/JDColorIcon";
import { Box, Container, Flex, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function HomeLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <Box
        position="fixed"
        top="0"
        w="100%"
        height="90px"
        zIndex={1}
        backgroundColor="transparent"
        backgroundImage="radial-gradient(#00000088 1px, rgb(15, 17, 21) 1px)"
        backdropFilter="blur(4px)"
        backgroundSize="4px 4px"
        mask="linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)"
        opacity="1"
      />
      <Flex
        position="fixed"
        as="header"
        top="0"
        w="100%"
        height="60px"
        flexDir="row"
        align="center"
        p={4}
        zIndex={1}
      >
        <Link href="/">
          <JDColorIcon fontSize="45px" />
        </Link>
        <Container
          alignItems="center"
          justifyContent="center"
          display="flex"
          h="inherit"
          fontSize="20px"
          fontWeight="bold"
        >
          <HStack gap="16px">
            <Link href="/">Home</Link>
            <Link href="/home/resume">Resume</Link>
          </HStack>
        </Container>
      </Flex>
      <Container pt="90px">{children}</Container>
    </>
  );
}