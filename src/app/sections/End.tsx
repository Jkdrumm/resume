import { TypeText } from "@/components/compound/TypeText";
import {
  HomeSection,
  HomeSectionInstanceProps,
} from "./components/HomeSection";
import { forwardRef } from "react";
import { Link } from "@/components/compound/Link";
import { Flex } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

export const End = forwardRef<HTMLDivElement, HomeSectionInstanceProps>(
  ({ scrollRef }, ref) => {
    return (
      <HomeSection ref={ref} scrollRef={scrollRef}>
        {({ isInView }) => (
          <Flex>
            <TypeText
              isInView={isInView}
              fontSize={{ base: "xl", md: "2xl" }}
              text={[
                "Looks like you've reached the end.\n\nThis is still a WIP so feel free to check back later for updates.\n\nClick to learn more",
                <Button
                  key="aboutMeLink"
                  variant="surface"
                  size="sm"
                  display="inline-block"
                  mt={-2}
                  ml={2}
                >
                  <Link href="/home" style={{ display: "inline-block" }}>
                    <TypeText
                      fontWeight="normal"
                      isInView={isInView}
                      fontSize={{ base: "xl", md: "2xl" }}
                      text="about me"
                      isNested
                    />
                  </Link>
                </Button>,
              ]}
            />
          </Flex>
        )}
      </HomeSection>
    );
  }
);

End.displayName = "End";
