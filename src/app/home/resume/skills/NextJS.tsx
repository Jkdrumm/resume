"use client";
import { NextColorIcon } from "@/components/icons/NextColor";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiNextdotjs } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";

export const NextJS: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="Next.js"
      description="Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components."
      icon={<SiNextdotjs />}
      colorIcon={NextColorIcon}
      href="https://nextjs.org/"
      {...props}
    />
  );
};
