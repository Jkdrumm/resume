import { Flex, IconProps, Stack, Text } from "@chakra-ui/react";
import { IconBaseProps } from "react-icons";

export type ExperiencDetailProps = {
  name: string;
  description: string;
  icon?: React.ComponentType<IconBaseProps> | React.ComponentType<IconProps>;
};

export const ExtrasDetail: React.FC<ExperiencDetailProps> = ({
  name,
  description,
  icon: Icon,
}) => {
  return (
    <Stack gap={1}>
      <Stack>
        <Flex justify="space-between" flexDir="row" gap={1}>
          <Flex gap={1} flexDir="column">
            <Flex gap={1}>
              {Icon && (
                <Icon style={{ fontSize: "1.5rem", alignSelf: "center" }} />
              )}
              <Text textStyle={{ base: "lg", md: "md" }} fontWeight="semibold">
                {name}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Stack>
      <Text textStyle={{ base: "sm", md: "xs" }}>{description}</Text>
    </Stack>
  );
};
