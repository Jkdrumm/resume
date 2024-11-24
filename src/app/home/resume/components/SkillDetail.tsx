import { Link, type LinkProps } from "@/components/compound/Link";
import { Rating, type RatingProps } from "@/components/ui/rating";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa6";

export type SkillDetailProps = {
  name: string;
  level: RatingProps["value"];
  icon?: React.ReactNode;
  href?: LinkProps["href"];
};

export const SkillDetail: React.FC<SkillDetailProps> = ({
  name,
  level,
  icon,
  href,
}) => {
  const label = (
    <Flex gap={1}>
      {icon && <Icon>{icon}</Icon>}
      <Text textStyle="xs">{name}</Text>
    </Flex>
  );
  return (
    <Flex justify="space-between">
      {href ? (
        <Link href={href} isExternal>
          {label}
        </Link>
      ) : (
        label
      )}
      <Rating readOnly size="sm" icon={<FaCircle />} value={level} />
    </Flex>
  );
};
