import Image from "next/image";
import Link from "next/link";
import type { LinkProps } from "next/link";
import {
  Box,
  Flex,
  Container,
  VStack,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

type MenuProps = {
  onRequestClose: () => void;
};

export function Menu({ onRequestClose }: MenuProps) {
  return (
    <Box
      bg="brand.red"
      position="fixed"
      top={0}
      right={0}
      bottom={0}
      left={0}
      zIndex={9999}
    >
      <Flex
        bg="brand.red"
        height="56px"
        justifyContent="space-between"
        alignItems="center"
        px={4}
      >
        <Image
          src="/juguetron-logo.svg"
          alt="Juguetron logo"
          width="126.602px"
          height="24.618"
        />
        <Button bg="transparent" padding={0}>
          <CloseIcon
            color="white"
            width="20px"
            height="20px"
            onClick={onRequestClose}
          />
        </Button>
      </Flex>
      <Container mt={14} px={7}>
        <nav role="navigation">
          <VStack alignItems="flex-end" spacing={6}>
            <NavItem href="/">Inicio</NavItem>
            <NavItem href="/personajes">Conocer personajes</NavItem>
            <NavItem href="/playlist">Escuchar la playlist</NavItem>
            <NavItem href="/chat">Haz tu carta</NavItem>
            {/* <NavItem href="/juega">Juega y Gana</NavItem> */}
          </VStack>
        </nav>
      </Container>
    </Box>
  );
}

type NavItemProps = {
  children: React.ReactNode;
} & LinkProps;

function NavItem({ children, href, ...rest }: NavItemProps) {
  return (
    <Link href={href} passHref {...rest}>
      <ChakraLink fontSize="32px" fontWeight="700" color="white">
        {children}
      </ChakraLink>
    </Link>
  );
}
