import Link from "next/link";
import type { LinkProps } from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";

type LinkStyledProps = {
  href: LinkProps["href"];
} & ChakraLinkProps;

export function LinkStyled({ children, href, ...rest }: LinkStyledProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </Link>
  );
}
