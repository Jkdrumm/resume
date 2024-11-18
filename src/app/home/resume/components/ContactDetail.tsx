import { Link, type LinkProps } from "@/components/compound/Link";
import { Flex, Icon, Text } from "@chakra-ui/react";

export type ContactDetailProps = {
  href: LinkProps["href"];
  isExternal?: boolean;
  icon: React.ReactNode;
  label: string;
};

export const ContactDetail: React.FC<ContactDetailProps> = ({
  href,
  isExternal,
  icon,
  label,
}) => {
  return (
    <Link href={href} isExternal={isExternal}>
      <Flex gap={1}>
        {icon && <Icon>{icon}</Icon>}
        <Text textStyle="xs">{label}</Text>
      </Flex>
    </Link>
  );
};
