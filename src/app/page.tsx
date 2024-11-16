"use client";
import { MotionButton } from "@/components/compound/MotionButton";
import { MotionText } from "@/components/compound/MotionText";
import StarField from "@/components/compound/StarField";
import { Box, Container } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { PrefetchKind } from "next/dist/client/components/router-reducer/router-reducer-types";

export default function Welcome() {
  const router = useRouter();
  const [pauseAnimation, setPauseAnimation] = useState(false);
  return (
    <Box minH="100vh" position="relative">
      <StarField pauseAnimation={pauseAnimation} />
      <Container py="8">
        <Box mt="24" display="flex" flexDir="column">
          <AnimatePresence>
            {!pauseAnimation && (
              <>
                <MotionText
                  key="name"
                  textStyle={{ base: "5xl", md: "6xl" }}
                  initial={{ opacity: 0, transform: "translateY(-20px)" }}
                  animate={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    transition: {
                      duration: 0.5,
                      delay: 0.5,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transform: "translateY(-20px)",
                    transition: {
                      duration: 0.5,
                    },
                  }}
                >
                  Joshua Drumm
                </MotionText>
                <MotionText
                  key="title"
                  textStyle="2xl"
                  initial={{ opacity: 0, transform: "translateY(-20px)" }}
                  animate={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    transition: {
                      duration: 0.5,
                      delay: 1,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transform: "translateY(-20px)",
                    transition: {
                      duration: 0.5,
                      delay: 0.5,
                    },
                  }}
                >
                  Software Engineer
                </MotionText>
                <MotionButton
                  key="button"
                  mt="2"
                  width={{ base: "100%", md: "min-content" }}
                  variant="outline"
                  initial={{ opacity: 0, transform: "translateY(-20px)" }}
                  animate={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    transition: {
                      duration: 0.5,
                      delay: 1.5,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transform: "translateY(-20px)",
                    transition: {
                      duration: 0.5,
                      delay: 1,
                    },
                  }}
                  onClick={() => {
                    setPauseAnimation(true);
                    router.prefetch("/home", { kind: PrefetchKind.FULL });
                    setTimeout(() => router.push("/home"), 3000);
                  }}
                >
                  Click here to explore <RiArrowRightLine />
                </MotionButton>
              </>
            )}
          </AnimatePresence>
        </Box>
        {/* Other content */}
      </Container>
    </Box>
  );
}
