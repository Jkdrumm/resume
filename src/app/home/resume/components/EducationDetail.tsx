import { Stack, Text } from "@chakra-ui/react";

export type EducationDetailProps = {
  name: string;
  description: string | string[];
  date: string;
};

export const EducationDetail: React.FC<EducationDetailProps> = ({
  name,
  description,
  date,
}) => {
  return (
    <Stack gap={1}>
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
