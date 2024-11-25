"use client";
import { JDColorIcon } from "@/components/icons/JDColorIcon";
import { Image } from "@/components/ui/image";
import { Box, Center, Container, Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box minH="1000vh">
      <Container
        py="8"
        display="flex"
        // flexDir={{ base: "column", md: "row" }}
        gap="16px"
      >
        <Center w="inherit" p="40px">
          <JDColorIcon fontSize="256px" />
        </Center>
      </Container>
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
