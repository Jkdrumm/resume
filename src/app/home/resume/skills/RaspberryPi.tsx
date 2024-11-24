"use client";
import { RaspberryPiColorIcon } from "@/components/icons/RaspberryPiColorIcon";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiRaspberrypi } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";

export const RaspberryPi: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="Raspberry Pi"
      description="From industries large and small, to the kitchen table tinkerer, to the classroom coder, we make computing accessible and affordable for everybody."
      icon={<SiRaspberrypi />}
      colorIcon={RaspberryPiColorIcon}
      href="https://www.raspberrypi.com/"
      {...props}
    />
  );
};
