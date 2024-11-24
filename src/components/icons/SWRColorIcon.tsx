import { Icon, type IconProps } from "@chakra-ui/react";
import { SiSwr } from "react-icons/si";

export const SWRColorIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon color="#fff" {...props}>
      <SiSwr />
    </Icon>
  );
};
