import { Flex, Stack, Text } from "@chakra-ui/react";
import { SkillList, SkillListProps } from "./SkillList";
import { Link, LinkProps } from "@/components/compound/Link";
import { LuExternalLink } from "react-icons/lu";
import { IconBaseProps } from "react-icons";

export type ExperiencDetailProps = {
  name: string;
  href: LinkProps["href"];
  description: string;
  icon?: React.ComponentType<IconBaseProps>;
  skills?: SkillListProps["skills"];
};

export const PersonalProjectDetail: React.FC<ExperiencDetailProps> = ({
  name,
  href,
  description,
  icon: Icon,
  skills,
}) => {
  return (
    <Stack gap={1}>
      <Stack>
        <Flex
          justify="space-between"
          flexDir={{ base: "column", md: "row" }}
          gap={1}
        >
          <Link href={href} isExternal color="inherit">
            <Flex gap={1}>
              {Icon && (
                <Icon style={{ fontSize: "1.5rem", alignSelf: "center" }} />
              )}
              <Text textStyle="lg" fontWeight="semibold">
                {name}
              </Text>
              <LuExternalLink size="1rem" style={{ alignSelf: "center" }} />
            </Flex>
          </Link>
          {skills && <SkillList skills={skills} />}
        </Flex>
      </Stack>
      <Text textStyle="sm">{description}</Text>
    </Stack>
  );
};
