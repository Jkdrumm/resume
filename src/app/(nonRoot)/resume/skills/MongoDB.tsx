"use client";
import { MongoDBColorIcon } from "@/components/icons/MognoDBColorIcon";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiMongodb } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";

export const MongoDB: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="MongoDB"
      description="You don't need a separate database to support transactions, rich search, or gen AI. The world's most popular document database is now the world's most versatile developer data platform."
      icon={<SiMongodb />}
      colorIcon={MongoDBColorIcon}
      href="https://www.mongodb.com/"
      {...props}
    />
  );
};
