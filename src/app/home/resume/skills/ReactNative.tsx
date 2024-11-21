"use client";
import { ReactColorIcon } from "@/components/icons/ReactColorIcon";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiReact } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";

export const ReactNative: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="React Native"
      description="React Native brings the best parts of developing with React to native development. It's a best-in-class JavaScript library for building user interfaces."
      icon={<SiReact />}
      colorIcon={ReactColorIcon}
      href="https://reactnative.dev/"
      {...props}
    />
  );
};
