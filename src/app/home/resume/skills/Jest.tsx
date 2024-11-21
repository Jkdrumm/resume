"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiJest } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";
import { JestColorIcon } from "@/components/icons/JestColorIcon";

export const Jest: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="Jest"
      description="Jest is a delightful JavaScript Testing Framework with a focus on simplicity."
      icon={<SiJest />}
      colorIcon={JestColorIcon}
      href="https://jestjs.io/"
      {...props}
    />
  );
};
