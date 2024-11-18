import { Rating, type RatingProps } from "@/components/ui/rating";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa6";

export type SkillDetailProps = {
  name: string;
  icon?: React.ReactNode;
  level: RatingProps["value"];
};

export const SkillDetail: React.FC<SkillDetailProps> = ({
  name,
  icon,
  level,
}) => {
  return (
    <Flex justify="space-between">
      <Flex gap={1}>
        {icon && <Icon>{icon}</Icon>}
        <Text textStyle="xs">{name}</Text>
      </Flex>
      <Rating readOnly size="sm" icon={<FaCircle />} value={level} />
    </Flex>
  );
};
