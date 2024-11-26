"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiTypescript } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";
import { TypeScriptColorIcon } from "@/components/icons/TypeScriptColorIcon";

export const TypeScript: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="TypeScript"
      description="TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
      icon={<SiTypescript />}
      colorIcon={TypeScriptColorIcon}
      href="https://www.typescriptlang.org/"
      {...props}
    />
  );
};
