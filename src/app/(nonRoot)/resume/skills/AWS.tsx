"use client";
import { AWSColorIcon } from "@/components/icons/AWSColorIcon";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { FaAws } from "react-icons/fa6";
import { SkillListItemProps } from "../components/SkillList";

export const AWS: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="AWS"
      description="Whether you're looking for generative AI, compute power, database storage, content delivery, or other functionality, AWS has the services to help you build sophisticated applications with increased flexibility, scalability, and reliability."
      icon={<FaAws />}
      colorIcon={AWSColorIcon}
      href="https://aws.amazon.com/"
      {...props}
    />
  );
};
