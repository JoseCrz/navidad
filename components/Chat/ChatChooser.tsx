import Image from "next/image";
import type { ImageProps } from "next/image";
import Link from "next/link";
import type { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { Box, Flex, Circle, Text } from "@chakra-ui/react";

import reyesProfile from "public/reyes-profile.png";
import santaProfile from "public/santa-profile.png";

export function ChatChooser() {
  return (
    <Flex
      bg="white"
      width="100%"
      minHeight="116px"
      justifyContent="center"
      boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)"
      zIndex="1"
      position="relative"
    >
      <Flex alignItems="center">
        <ChatOption
          href="/chat/santa"
          src={santaProfile}
          alt="Image de perfil de Santa"
        >
          Santa
        </ChatOption>
        <ChatOption
          href="/chat/reyes"
          src={reyesProfile}
          alt="Imagen de perfil de los Reyes magos"
        >
          Reyes
        </ChatOption>
      </Flex>
    </Flex>
  );
}

type ChatOptionProps = {
  href: LinkProps["href"];
  src: ImageProps["src"];
  alt: ImageProps["alt"];
  children: React.ReactNode;
};
function ChatOption({ href, src, alt, children }: ChatOptionProps) {
  const router = useRouter();

  const isSelected = href === router.pathname;
  return (
    <Link href={href} passHref>
      <a>
        <Box textAlign="center" mx={2}>
          <Circle
            border={isSelected ? "3px solid brown" : "3px solid gray"}
            overflow="hidden"
            position="relative"
            size="66px"
          >
            <Image
              priority
              src={src}
              alt={alt}
              layout="fill"
              objectFit="cover"
              sizes="50vw"
              placeholder="blur"
            />
          </Circle>
          <Text>{children}</Text>
        </Box>
      </a>
    </Link>
  );
}
