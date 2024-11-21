"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SkillListItemProps } from "../components/SkillList";
import { SiAntdesign } from "react-icons/si";
import { AntDesignColorIcon } from "@/components/icons/AntDesignColor";

export const AntDesign: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="Ant Design"
      description="Helps designers/developers building beautiful products more flexible and working with happiness."
      icon={<SiAntdesign />}
      colorIcon={AntDesignColorIcon}
      href="https://ant.design/"
      {...props}
    />
  );
};
