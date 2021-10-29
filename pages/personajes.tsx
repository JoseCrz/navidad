import Head from "next/head";
import Image from "next/image";
import { Box, Flex, Circle, Text } from "@chakra-ui/react";
import { Navbar } from "components/Navbar";
import { Story } from "components/Story";

export default function Personajes() {
  return (
    <>
      <Head>
        <title>El Secreto de la Navidad</title>
        <meta
          name="description"
          content="Juguetron: El Secreto de la Navidad"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Box height="100vh" pt="56px">
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
              <Box textAlign="center" mx={2}>
                <Circle border="2px solid gray" overflow="hidden">
                  <Image
                    src="/esferin-profile.jpg"
                    alt="Imagen de Perfil de Esferin"
                    width="66px"
                    height="66px"
                  />
                </Circle>
                <Text>Esferin</Text>
              </Box>
              <Box textAlign="center" mx={2}>
                <Circle border="2px solid gray" overflow="hidden">
                  <Image
                    src="/esferin-profile.jpg"
                    alt="Imagen de Perfil de Esferin"
                    width="66px"
                    height="66px"
                  />
                </Circle>
                <Text>Esferin</Text>
              </Box>
              <Box textAlign="center" mx={2}>
                <Circle border="2px solid gray" overflow="hidden">
                  <Image
                    src="/esferin-profile.jpg"
                    alt="Imagen de Perfil de Esferin"
                    width="66px"
                    height="66px"
                  />
                </Circle>
                <Text>Esferin</Text>
              </Box>
            </Flex>
          </Flex>
          <Box height="calc(100vh - 172px)">
            <Story />
          </Box>
        </Box>
      </main>
    </>
  );
}
