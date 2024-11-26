"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiPython } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";
import { PythonColorIcon } from "@/components/icons/PythonColorIcon";

export const Python: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="Python"
      description="Python is a programming language that lets you work quickly and integrate systems more effectively."
      icon={<SiPython />}
      colorIcon={PythonColorIcon}
      href="https://www.python.org/"
      {...props}
    />
  );
};
