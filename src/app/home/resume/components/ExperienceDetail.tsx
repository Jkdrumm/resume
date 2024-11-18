import { List, Stack, Text } from "@chakra-ui/react";

export type ExperiencDetailProps = {
  company: string;
  title: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
};

export const ExperienceDetail: React.FC<ExperiencDetailProps> = ({
  company,
  title,
  startDate,
  endDate,
  description,
  highlights,
}) => {
  return (
    <Stack gap={1}>
      <Text textStyle="lg" fontWeight="semibold">
        {company}
      </Text>
      <Text textStyle="md" fontWeight="semibold">
        {title}
      </Text>
      <Text textStyle="sm">
        {startDate} - {endDate ?? "Present"}
      </Text>
      <Text textStyle="sm">{description}</Text>
      <List.Root>
        {highlights.map((d) => (
          <List.Item key={d} textStyle="sm">
            {d}
          </List.Item>
        ))}
      </List.Root>
    </Stack>
  );
};
