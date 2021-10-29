import { useState } from "react";
import Image from "next/image";
import { Flex, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { Menu } from "./Menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Flex
        position="fixed"
        top="0"
        width="100%"
        bg="brown"
        height="56px"
        justifyContent="space-between"
        alignItems="center"
        px={4}
        zIndex="banner"
      >
        <Image
          src="/juguetron-logo.svg"
          alt="Juguetron logo"
          width="126.602px"
          height="24.618"
        />
        <Button bg="transparent" padding={0}>
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
