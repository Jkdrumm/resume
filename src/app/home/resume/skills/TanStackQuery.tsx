"use client";
import { TanStackColorIcon } from "@/components/icons/TanStackColorIcon";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiReactquery } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";

export const TanStackQuery: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="TanStack Query"
      description="Powerful asynchronous state management for TS/JS, React, Solid, Vue, Svelte and Angular."
      icon={<SiReactquery />}
      colorIcon={TanStackColorIcon}
      href="https://tanstack.com/query/latest"
      {...props}
    />
  );
};
