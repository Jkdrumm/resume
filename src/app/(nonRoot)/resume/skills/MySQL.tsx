"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SkillListItemProps } from "../components/SkillList";
import { GrMysql } from "react-icons/gr";
import { MySQLColor } from "@/components/icons/MySQLColorIcon";

export const MySQL: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="MySQL"
      description="MySQL is the world's most popular open source database. With its proven performance, reliability and ease-of-use, MySQL has become the leading database choice for web-based applications, used by high profile web properties including Facebook, Twitter, YouTube, Yahoo! and many more."
      icon={<GrMysql />}
      colorIcon={MySQLColor}
      href="https://www.mysql.com/"
      {...props}
    />
  );
};
