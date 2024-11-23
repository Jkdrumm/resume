"use client";
import { RedisColorIcon } from "@/components/icons/RedisColorIcon";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiRedis } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";

export const Redis: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="Redis"
      description="The library for web and native user interfaces."
      icon={<SiRedis />}
      colorIcon={RedisColorIcon}
      href="https://redis.io/"
      {...props}
    />
  );
};
