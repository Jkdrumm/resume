"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SkillListItemProps } from "../components/SkillList";
import { SiSwr } from "react-icons/si";
import { SWRColorIcon } from "@/components/icons/SWRColorIcon";

export const SWR: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="SWR"
      description="SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data."
      icon={<SiSwr />}
      colorIcon={SWRColorIcon}
      href="https://swr.vercel.app/"
      {...props}
    />
  );
};
