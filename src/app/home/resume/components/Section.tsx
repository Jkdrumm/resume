import { Flex, Heading, Icon, Stack, type StackProps } from "@chakra-ui/react";
import React from "react";

export type SectionProps = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
} & StackProps;

export const Section: React.FC<SectionProps> = ({
  title,
  icon,
  children,
  ...rest
}) => {
  return (
    <Stack w="100%">
      <Flex gap={1} borderBottom="1px solid" mb={2} align="center">
        {icon && <Icon fontSize="1.125rem">{icon}</Icon>}
        <Heading size="lg">{title}</Heading>
      </Flex>
      <Stack gap={2} {...rest}>
        {children}
      </Stack>
    </Stack>
  );
};
