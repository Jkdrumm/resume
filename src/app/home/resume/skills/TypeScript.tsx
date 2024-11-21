"use client";
import { ChakraColorIcon } from "@/components/icons/ChakraColor";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiTypescript } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";

export const TypeScript: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="TypeScript"
      description="Chakra UI is a component system for building products with speed."
      icon={<SiTypescript />}
      colorIcon={ChakraColorIcon}
      href="https://www.typescriptlang.org/"
      {...props}
    />
  );
};
