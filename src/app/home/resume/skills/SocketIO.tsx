"use client";
import { SocketIOColorIcon } from "@/components/icons/SocketIOColorIcon";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiSocketdotio } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";

export const SocketIO: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="Socket.IO"
      description="Bidirectional and low-latency communication for every platform."
      icon={<SiSocketdotio />}
      colorIcon={SocketIOColorIcon}
      href="https://socket.io/"
      {...props}
    />
  );
};
