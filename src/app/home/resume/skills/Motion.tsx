"use client";
import { MotionColorIcon } from "@/components/icons/MotionColorIcon";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SkillListItemProps } from "../components/SkillList";
import { MotionIcon } from "@/components/icons/MotionIcon";

export const Motion: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="Motion"
      description="A modern animation library for JavaScript and React."
      icon={<MotionIcon />}
      colorIcon={MotionColorIcon}
      href="https://motion.dev/"
      {...props}
    />
  );
};
