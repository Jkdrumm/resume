import { Icon, type IconProps } from "@chakra-ui/react";
import { SiNodedotjs } from "react-icons/si";

export const NodeJSColorIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon color="#5FA04E" {...props}>
      <SiNodedotjs />
    </Icon>
  );
};
