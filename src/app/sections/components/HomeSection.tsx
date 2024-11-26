import { ArrowAnimatedIcon } from "@/components/icons/ArrowAnimatedIcon";
import { Flex, Container, Button } from "@chakra-ui/react";
import { useInView } from "motion/react";
import { forwardRef, useRef } from "react";

export type HomeSectionProps = {
  children?:
    | React.ReactNode
    | (({ isInView }: { isInView: boolean }) => React.ReactNode);
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export type HomeSectionInstanceProps = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const HomeSection = forwardRef<HTMLDivElement, HomeSectionProps>(
  ({ children, scrollRef }, flexRef) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });
    return (
      <Flex
        ref={flexRef}
        as="section"
        h="100vh"
        justifyItems="center"
        flexDir="column"
        alignItems="center"
      >
        <Container
          ref={ref}
          h="75vh"
          maxW="6xl"
          // mt={1}
          display="flex"
          flexDir="column"
          alignItems="center"
          py="16"
          gap="16px"
          justifyContent="center"
        >
          {typeof children === "function" ? children({ isInView }) : children}
        </Container>
        {scrollRef?.current && (
          <Flex flex="1" flexDir="column" justify="flex-end" pb="40px">
            <Button variant="plain" mb="100px" p="0px">
              <ArrowAnimatedIcon
                alignSelf="flex-end"
                fontSize="6xl"
                onClick={() => {
                  scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </Button>
          </Flex>
        )}
      </Flex>
    );
  }
);

HomeSection.displayName = "HomeSection";