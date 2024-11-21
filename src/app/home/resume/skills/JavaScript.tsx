"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiJavascript } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";
import { JavaScriptColorIcon } from "@/components/icons/JavaScriptColor";

export const JavaScript: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="JavaScript"
      description="JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions."
      icon={<SiJavascript />}
      colorIcon={JavaScriptColorIcon}
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      {...props}
    />
  );
};
