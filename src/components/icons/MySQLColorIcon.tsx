import { Icon, type IconProps } from "@chakra-ui/react";
import { GrMysql } from "react-icons/gr";

export const MySQLColor: React.FC<IconProps> = (props) => {
  return (
    <Icon color="#00758F" {...props}>
      <GrMysql />
    </Icon>
  );
};
