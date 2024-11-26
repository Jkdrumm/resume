"use client";
import { VercelColorIcon } from "@/components/icons/VercelColorIcon";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiVercel } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";

export const Vercel: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="Vercel"
      description="Vercel enables the world to ship the best products. Vercel's Frontend Cloud provides the developer experience and infrastructure to build, scale, and secure a faster, more personalized web."
      icon={<SiVercel />}
      colorIcon={VercelColorIcon}
      href="https://vercel.com/about"
      {...props}
    />
  );
};
