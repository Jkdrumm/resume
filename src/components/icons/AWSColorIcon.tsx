import { Icon, type IconProps } from "@chakra-ui/react";
import { FaAws } from "react-icons/fa6";

export const AWSColorIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon color="#fff" {...props}>
      <FaAws />
    </Icon>
  );
};
