"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SkillListItemProps } from "../components/SkillList";
import { SiI18Next } from "react-icons/si";
import { ReactI18NextColorIcon } from "@/components/icons/ReactI18NextColorIcon";

export const ReactI18Next: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="React-i18next"
      description="React-i18next is a powerful internationalization framework for React / React Native which is based on i18next."
      icon={<SiI18Next />}
      colorIcon={ReactI18NextColorIcon}
      href="https://react.i18next.com/"
      {...props}
    />
  );
};
