import {
  Link as ChakraLink,
  type LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = {
  href: NextLinkProps["href"];
  isExternal?: boolean;
} & Omit<ChakraLinkProps, "asChild">;

export const Link: React.FC<LinkProps> = ({
  href,
  isExternal,
  children,
  ...props
}) => {
  const withExternal = isExternal
    ? { rel: "noopener noreferrer", target: "_blank" }
    : {};
  return (
    <ChakraLink as={NextLink} href={href} {...withExternal} {...props}>
      {children}
    </ChakraLink>
  );
};
