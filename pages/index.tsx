import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Flex,
  AspectRatio,
  Text,
  Heading,
  Stack,
  Button,
} from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

import { Layout } from "components/Layout";
import logo from "public/el-secreto-logo.png";
import background from "public/background.svg";
import train from "public/train.png";

import { profiles } from "data/profiles";

const highlights = [
  {
    text: "Leímos y vimos nuestro cuento de Navidad.",
    amount: "65,305  veces",
  },
  {
    text: "Nuestro árbol de los deseos se lleno con.",
    amount: "20,968 esferas",
  },
  {
    text: "Descubrieron El Secreto de la Navidad.",
    amount: "26,745 personas",
  },
];

export default function Home() {
  return (
    <Layout>
      <Box as="section" bg="brand.green" width="100%" position="relative">
        <AspectRatio
          ratio={1200 / 1083}
          width="100%"
          height="auto"
          position="absolute"
          top="0"
        >
          <Image priority src={background} alt="" layout="fill" />
        </AspectRatio>
        <HomeContainer
          alignItems={["unset", "center"]}
          display={["block", "block", "block", "flex"]}
          flexDirection={["column", "column", "column", "row-reverse"]}
          pt={[null, null, 10, 10]}
        >
          <Box
            width={["100%", "100%", "100%", "50%"]}
            pl={[0, 0, 0, 10]}
            mx="auto"
          >
            <AspectRatio ratio={1212 / 1350} width="100%" height="auto">
              <Image
                priority
                src={logo}
                alt="El Secreto de la Navidad Logo"
                layout="fill"
              />
            </AspectRatio>
          </Box>
          <Box
            mt={[0, 0, 0, 0]}
            width={["100%", "100%", "100%", "50%"]}
            pr={[0, 0, 0, 10]}
            position="relative"
          >
            <Heading
              as="h2"
              fontSize={["50px", "50px", "50px", "72px"]}
              maxWidth={["330px", "100%"]}
              color="brand.text.white"
              textAlign={["left", "left", "center"]}
            >
              <Box as="span" color="brand.text.yellow">
                Bienvenido{" "}
              </Box>
              de nuevo a esta gran aventura.
            </Heading>
            <Text
              fontWeight="700"
              mt={7}
              color="brand.text.white"
              lineHeight="shorter"
              fontSize={["md", "md", "20px"]}
              textAlign={["left", "left", "center"]}
            >
              Estás por descubrir extraordinarias historias de nuestros
              personajes Mari, Doggy y Esferín. Ahora la diversión está mientras
              escuchas una de nuestras increíbles playlist, mientras descargas
              sorpresas o juegas y ¡ganas premios! Pero lo mejor será escribir tu
              carta a Santa o Los Reyes Magos.
            </Text>
          </Box>
        </HomeContainer>
      </Box>
      <Box as="section" bg="brand.bg.yellow">
        <HomeContainer
          display={["block", "block", "flex"]}
          pos="relative"
          alignItems={["unset", "center"]}
          justifyContent={["unset", "unset", "center"]}
          pb={[5, 5, 10]}
          pt={[12, 12, "120px", "120px"]}
        >
          <Box>
            <Heading
              fontSize={["40px", "50px", "50px", "72px"]}
              color="brand.text.red"
            >
              Recordemos lo que pasamos juntos la{" "}
              <Box as="span" color="brand.text.green">
                Navidad
              </Box>{" "}
              anterior.
            </Heading>
            <Box
              mt={[6, 6, 14]}
              bg="brand.teal"
              borderRadius="20px"
              pt="69px"
              pb="102px"
              px={["69px", "69px", "120px"]}
              boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)"
              position="relative"
            >
              <Stack
                spacing={["49px", 9, 9, 14]}
                direction={["column", "column", "column", "row"]}
                justifyContent="center"
                alignItems="center"
                height={["auto", "auto", "auto", "525px"]}
              >
                {highlights.map((highlight, index) => (
                  <Box key={`key-${index}`} textAlign="center" color="white">
                    <Text fontSize="22px" lineHeight="shorter">
                      {highlight.text}
                    </Text>
                    <Text
                      fontWeight="700"
                      fontSize={["32px", "32px", "32px", "90px"]}
                      lineHeight="1"
                    >
                      {highlight.amount}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Box>
            <Flex justify="center" mt="-12">
              <AspectRatio
                ratio={161 / 125}
                width={["100%", "194px"]}
                height={["auto"]}
              >
                <Image src={train} alt="" layout="fill" />
              </AspectRatio>
            </Flex>
          </Box>
        </HomeContainer>
      </Box>
      <Box as="section" bg="brand.tealLighter">
        <HomeContainer pt={[12, 12, 20, 20]}>
          <Heading
            fontSize={["50px", "50px", "50px", "72px"]}
            color="brand.teal"
          >
            Conoce a nuestros personajes
          </Heading>
          <Flex
            flexDirection={["column", "column", "column", "row"]}
            justifyContent={["unset", "unset", "unset", "space-between"]}
            mt={[9, 9, 9, 60]}
            mx={[-8, -8, -8, 0]}
          >
            {profiles.map((profile, index) => {
              const cardColor = ["brand.teal", "brand.red", "brand.greenLight"][
                index
              ];

              return (
                <Box
                  display={["flex", "flex", "flex", "block"]}
                  mt={[index > 0 ? "-6" : "0", null, null, 0]}
                  key={profile.name}
                  bg={cardColor}
                  borderRadius="2xl"
                  p={8}
                  width={["100%", "100%", "100%", "305px"]}
                  justifyContent="space-between"
                  boxShadow="sm"
                  position="relative"
                >
                  <Box
                    width={["48%", "48%", "48%", "100%"]}
                    mt={[0, 0, 0, -32]}
                  >
                    <AspectRatio ratio={165 / 188} width="100%" height="auto">
                      <Image
                        src={profile.picture}
                        alt="Esferin"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                      />
                    </AspectRatio>
                  </Box>
                  <Box
                    mt={[0, 0, 0, 8]}
                    maxWidth={["48%", "48%", "48%", "100%"]}
                    color="white"
                  >
                    <Heading as="h3" size="xl" fontFamily="body">
                      {profile.name}
                    </Heading>
                    <Text fontSize="xs" lineHeight="short">
                      {profile.description}
                    </Text>
                    <Link href={`/personajes?char=${index}`} passHref>
                      <Button
                        as="a"
                        bg="brand.tealLighter"
                        color="brand.teal"
                        textTransform="uppercase"
                        letterSpacing="wider"
                        boxShadow="sm"
                        mt={3}
                        py={2}
                        px={4}
                      >
                        Entrar
                      </Button>
                    </Link>
                  </Box>
                </Box>
              );
            })}
          </Flex>
        </HomeContainer>
      </Box>
    </Layout>
  );
}

function HomeContainer(props: BoxProps) {
  return (
    <Box
      width="100%"
      minHeight="calc(100vh - 56px)"
      maxWidth="1200px"
      mx="auto"
      px={[8, 8, "158px", 16]}
      py={[12, 12, 40, 40]}
      {...props}
    />
  );
}
