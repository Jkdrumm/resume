"use client";
import { ReactColorIcon } from "@/components/icons/ReactColorIcon";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiReact } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";

export const ReactSkill: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="React"
      description="The library for web and native user interfaces."
      icon={<SiReact />}
      colorIcon={ReactColorIcon}
      href="https://react.dev/"
      {...props}
    />
  );
};
