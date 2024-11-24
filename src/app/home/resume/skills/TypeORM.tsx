"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SkillListItemProps } from "../components/SkillList";
import { SiTypeorm } from "react-icons/si";
import { TypeORMColorIcon } from "@/components/icons/TypeORMColorIcon";

export const TypeORM: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="TypeORM"
      description="TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES2021). Its goal is to always support the latest JavaScript features and provide additional features that help you to develop any kind of application that uses databases - from small applications with a few tables to large-scale enterprise applications with multiple databases."
      icon={<SiTypeorm />}
      colorIcon={TypeORMColorIcon}
      href="https://typeorm.io/"
      {...props}
    />
  );
};
