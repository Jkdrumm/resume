"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiNodedotjs } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";
import { NodeJSColorIcon } from "@/components/icons/NodeJSColorIcon";

export const NodeJS: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="NodeJS"
      description="Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts."
      icon={<SiNodedotjs />}
      colorIcon={NodeJSColorIcon}
      href="https://nodejs.org/en"
      {...props}
    />
  );
};
