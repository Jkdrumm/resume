"use client";
import { PostgresColorIcon } from "@/components/icons/PostgresColorIcon";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiPostgresql } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";

export const Postgres: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="Postgres"
      description="PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance."
      icon={<SiPostgresql />}
      colorIcon={PostgresColorIcon}
      href="https://www.postgresql.org/"
      {...props}
    />
  );
};
