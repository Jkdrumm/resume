import { type IconProps, Stack, Text } from "@chakra-ui/react";
import React from "react";

export type EducationDetailProps = {
  name: string;
  description: string | string[];
  date: string;
  icon?: React.ComponentType<IconProps>;
};

export const EducationDetail: React.FC<EducationDetailProps> = ({
  name,
  description,
  date,
  icon: Icon,
}) => {
  return (
    <Stack gap={1}>
      {Icon && (
        <Icon
          fontSize="100px"
          mb="-30px"
          mt="-30px"
          alignSelf="center"
          overflow="hidden"
          clip="auto"
          color="gray.700"
        />
      )}
      <Text textStyle="lg" fontWeight="semibold">
        {name}
      </Text>
      {typeof description === "string" ? (
        <Text textStyle="sm">{description}</Text>
      ) : (
        description.map((d) => (
          <Text key={d} textStyle="sm">
            {d}
          </Text>
        ))
      )}
      <Text textStyle="xs">{date}</Text>
    </Stack>
  );
};
