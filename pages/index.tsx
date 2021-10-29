import Head from "next/head";
import Image from "next/image";
import {
  Container,
  Box,
  Flex,
  Center,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Home() {
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
      <Flex
        bg="brown"
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
          <HamburgerIcon color="white" width="32px" height="32px" />
        </Button>
      </Flex>
      <main>
        <Container bg="darkgray" px={8}>
          <Center pt={16}>
            <Image
              src="/el-secreto-logo.svg"
              alt="El Secreto de la Navidad Logo"
              width="300px"
              height="259px"
            />
          </Center>
          <Box mt="114px">
            <Heading as="h1" fontSize="50px" maxWidth="330px">
              Que gusto verte de vuelta un año más
            </Heading>
            <Text fontWeight="700" mt={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              faucibus dolor sit amet porttitor cursus. Morbi consectetur
              convallis ornare.
            </Text>
          </Box>
        </Container>
      </main>
    </>
  );
}
