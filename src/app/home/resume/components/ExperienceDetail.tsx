import { Flex, type IconProps, List, Stack, Text } from "@chakra-ui/react";
import { FaCalendarDays } from "react-icons/fa6";
import { SkillList, SkillListProps } from "./SkillList";

export type ExperiencDetailProps = {
  company: string;
  title: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
  icon?: React.ComponentType<IconProps>;
  skills?: SkillListProps["skills"];
};

export const ExperienceDetail: React.FC<ExperiencDetailProps> = ({
  company,
  title,
  startDate,
  endDate,
  description,
  highlights,
  icon: Icon,
  skills,
}) => {
  return (
    <Stack gap={1}>
      <Flex justify="space-between">
        <Stack>
          <Flex gap={1}>
            {Icon && <Icon fontSize="1.5rem" alignSelf="center" />}
            <Text textStyle="lg" fontWeight="semibold">
              {company}
            </Text>
          </Flex>
          <Text textStyle="md" fontWeight="semibold">
            {title}
          </Text>
          <Flex>
            <Flex gap={1}>
              <FaCalendarDays size="1rem" />
              <Text textStyle="sm">
                {startDate} - {endDate ?? "Present"}
              </Text>
            </Flex>
          </Flex>
        </Stack>
        {skills && <SkillList skills={skills} />}
      </Flex>
      <Text textStyle="sm">{description}</Text>
      <List.Root>
        {highlights.map((d) => (
          <List.Item key={d} textStyle="xs">
            {d}
          </List.Item>
        ))}
      </List.Root>
    </Stack>
  );
};
