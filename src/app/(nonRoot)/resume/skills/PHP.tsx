"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SkillListItemProps } from "../components/SkillList";
import { PHPIcon } from "@/components/icons/PHPIcon";
import { PHPColorIcon } from "@/components/icons/PHPColorIcon";

export const PHP: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="PHP"
      description="A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world."
      icon={<PHPIcon />}
      colorIcon={PHPColorIcon}
      href="https://www.php.net/"
      {...props}
    />
  );
};
