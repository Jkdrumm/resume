import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "@/components/compound/Link";
import { TbWorldWww } from "react-icons/tb";

export default function Resume() {
  return (
    <Flex justifyContent="center" my={12}>
      <Box w={850} borderRadius={4} overflow="hidden">
        <Flex flexDir="column" justify="center" bg="green" p={6}>
          <Heading size="4xl">Joshua Drumm</Heading>
          <Text textStyle="xl">Software Engineer</Text>
        </Flex>
        <SimpleGrid columns={[2, 4]}>
          <GridItem colSpan={[1, 1]}>
            <Box bg="red" p={4}>
              <Heading size="lg" borderBottom="1px solid" mb={2}>
                CONTACT
              </Heading>
              <Stack gap={2}>
                <Link href="mailto:jkdrumm1@gmail.com">
                  <Flex gap={1}>
                    <MdEmail />
                    <Text textStyle="xs">jkdrumm1@gmail.com</Text>
                  </Flex>
                </Link>
                <Link
                  href="https://maps.app.goo.gl/mGPAai6qqdC7jJTP7"
                  isExternal
                >
                  <Flex gap={1}>
                    <FaLocationDot />
                    <Text textStyle="xs">Edmond, OK</Text>
                  </Flex>
                </Link>
                <Link href="https://www.jkdrumm.com">
                  <Flex gap={1}>
                    <TbWorldWww />
                    <Text textStyle="xs">www.jkdrumm.com</Text>
                  </Flex>
                </Link>
              </Stack>
            </Box>
          </GridItem>
          <GridItem colSpan={[1, 3]}>
            <Box bg="blue">TEST</Box>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
