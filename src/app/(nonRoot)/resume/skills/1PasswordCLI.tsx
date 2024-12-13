"use client";
import { OnePasswordColorIcon } from "@/components/icons/1PasswordColorIcon";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { Si1Password } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";

export const OnePasswordCLI: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="1Password CLI"
      description="1Password CLI brings 1Password to your terminal. Sign in to 1Password CLI with your fingerprint, and securely access everything you need during development."
      icon={<Si1Password />}
      colorIcon={OnePasswordColorIcon}
      href="https://developer.1password.com/docs/cli"
      {...props}
    />
  );
};
