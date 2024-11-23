import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Contacts } from "./sections/Contacts";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Extras } from "./sections/Extras";

export default function Resume() {
  return (
    <Flex justifyContent="center" my={12}>
      <Box
        w={850}
        borderRadius={4}
        overflow="hidden"
        boxShadow={{ base: "md", md: "2xl" }}
      >
        <Flex
          flexDir="column"
          justify="center"
          bg="yellow.500"
          color="gray.950"
          p={6}
        >
          <Heading size="4xl">Joshua Drumm</Heading>
          <Text textStyle="xl">Software Engineer</Text>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 4 }}>
          <GridItem colSpan={1}>
            <Flex flexDir="column" height="100%" bg="gray.700" p={4} gap={4}>
              <Contacts />
              <Skills />
              <Education />
              <Extras display={{ base: "none", md: "inherit" }} />
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 3 }}>
            <Flex flexDir="column" bg="gray.300" color="gray.950" p={4} gap={6}>
              <Experience />
              <Projects />
              <Extras display={{ base: "inherit", md: "none" }} />
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
