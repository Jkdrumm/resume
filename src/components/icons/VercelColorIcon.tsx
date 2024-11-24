import { Icon, type IconProps } from "@chakra-ui/react";
import { SiVercel } from "react-icons/si";

export const VercelColorIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon color="#fff" {...props}>
      <SiVercel />
    </Icon>
  );
};
