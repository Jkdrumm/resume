"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SkillListItemProps } from "../components/SkillList";
import { SyncFusionColorIcon } from "@/components/icons/SyncFusionColorIcon";
import { SyncFusionIcon } from "@/components/icons/SyncFusionIcon";

export const SyncFusion: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="SyncFusion"
      description="The World's Best UI Component Suite for Building Powerful Web, Desktop, and Mobile Apps."
      icon={<SyncFusionIcon />}
      colorIcon={SyncFusionColorIcon}
      href="https://www.syncfusion.com/"
      {...props}
    />
  );
};
