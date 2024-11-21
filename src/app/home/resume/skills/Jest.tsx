"use client";
import { TanStackColorIcon } from "@/components/icons/TanStackColor";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiJest } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";

export const Jest: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="Jest"
      description="Jest is a delightful JavaScript Testing Framework with a focus on simplicity."
      icon={<SiJest />}
      colorIcon={TanStackColorIcon}
      href="https://jestjs.io/"
      {...props}
    />
  );
};
