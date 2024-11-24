"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SkillListItemProps } from "../components/SkillList";
import { LaunchDarklyColorIcon } from "@/components/icons/LaunchDarklyColorIcon";
import { LaunchDarklyIcon } from "@/components/icons/LaunchDarklyIcon";

export const LaunchDarkly: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="LaunchDarkly"
      description="Software powers the world. We help teams launch, control, and measure their digital products more easily than ever."
      icon={<LaunchDarklyIcon />}
      colorIcon={LaunchDarklyColorIcon}
      href="https://launchdarkly.com/"
      {...props}
    />
  );
};
