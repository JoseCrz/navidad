import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Flex, Button, Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { Menu } from "./Menu";
import { LinkStyled } from "./LinkStyled";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Flex
        position="fixed"
        top="0"
        width="100%"
        bg="brand.red"
        height="56px"
        justifyContent="space-between"
        alignItems="center"
        px={4}
        zIndex="banner"
      >
        <Link href="/">
          <a style={{ display: "flex" }}>
            <Image
              src="/juguetron-logo.svg"
              alt="Juguetron logo"
              width="126.602px"
              height="24.618"
            />
          </a>
        </Link>
        <Box display={["none", "none", "block"]}>
          <LinkStyled
            href="/"
            color="white"
            _hover={{ color: "brand.text.yellow" }}
          >
            Inicio
          </LinkStyled>
          <LinkStyled
            href="/personajes"
            color="white"
            _hover={{ color: "brand.text.yellow" }}
            ml={5}
          >
            Conocer personajes
          </LinkStyled>
          <LinkStyled
            href="/playlist"
            color="white"
            _hover={{ color: "brand.text.yellow" }}
            ml={5}
          >
            Escuchar la playlist
          </LinkStyled>
          <LinkStyled
            href="/chat"
            color="white"
            _hover={{ color: "brand.text.yellow" }}
            ml={5}
          >
            Haz tu carta
          </LinkStyled>
          <LinkStyled
            href="/regalos"
            color="white"
            _hover={{ color: "brand.text.yellow" }}
            ml={5}
          >
            Regalos
          </LinkStyled>
          <LinkStyled
            href="/premios"
            color="white"
            _hover={{ color: "brand.text.yellow" }}
            ml={5}
          >
            Juega y gana
          </LinkStyled>
        </Box>
        <Button
          bg="transparent"
          padding={0}
          display={["block", "block", "none"]}
        >
          <HamburgerIcon
            color="white"
            width="32px"
            height="32px"
            onClick={() => setIsOpen(true)}
          />
        </Button>
      </Flex>
      {isOpen && <Menu onRequestClose={() => setIsOpen(false)} />}
    </>
  );
}
