import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { PropsWithChildren } from "react";

export type LinkProps = PropsWithChildren<{
  href: NextLinkProps["href"];
}>;

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <ChakraLink asChild>
      <NextLink href={href}>{children}</NextLink>
    </ChakraLink>
  );
};
