import { Icon, type IconProps } from "@chakra-ui/react";
import { SiSocketdotio } from "react-icons/si";

export const SocketIOColorIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon color="#FFF" {...props}>
      <SiSocketdotio />
    </Icon>
  );
};
