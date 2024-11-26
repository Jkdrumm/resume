"use client";
import { ChakraColorIcon } from "@/components/icons/ChakraColorIcon";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { ChakraIcon } from "@/components/icons/ChakraIcon";
import { SkillListItemProps } from "../components/SkillList";

export const ChakraUI: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="Chakra UI"
      description="Chakra UI is a component system for building products with speed."
      icon={<ChakraIcon />}
      colorIcon={ChakraColorIcon}
      href="https://www.chakra-ui.com/"
      {...props}
    />
  );
};
