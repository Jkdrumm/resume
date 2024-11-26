"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SkillListItemProps } from "../components/SkillList";
import { SiNestjs } from "react-icons/si";
import { NestJSColorIcon } from "@/components/icons/NestJSColorIcon";

export const NestJS: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="NestJS"
      description="A progressive Node.js framework for building efficient, reliable and scalable server-side applications."
      icon={<SiNestjs />}
      colorIcon={NestJSColorIcon}
      href="https://nestjs.com/"
      {...props}
    />
  );
};
