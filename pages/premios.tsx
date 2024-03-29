import { Layout } from "components";
import Image from "next/image";
import {
  Box,
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
  Link,
} from "@chakra-ui/react";

import regalosImg from "public/premios-photos/regalos.png";
import lolRevealImg from "public/premios-photos/lol-reveal.png";

export default function Premios() {
  return (
    <Layout bg="brand.green">
      <Box display={["block", "block", "flex"]}>
        <Box
          bg="brand.green"
          h="auto"
          w={["100%", "100%", "30%"]}
          p={4}
          color="white"
        >
          <Heading
            pb="5"
            fontWeight="500"
            fontSize={["40px", "70px", "35px"]}
            lineHeight={["40px", "60px", "40px"]}
            mt="5"
          >
            ¡Tú también puedes ganar premios increíbles participando en nuestras
            dinámicas!
          </Heading>
          ¡Creamos la dinámica perfecta para que te diviertas y ganes premios
          increíbles! Descubre cuales son. Tienes hasta el 3 de enero del 2022 para
          participar.
          <Flex flexDirection="column" alignItems="center">
            <Box width="200px" display="flex">
              <Image
                priority
                src={regalosImg}
                alt="Regalos"
                placeholder="blur"
              />
            </Box>
            <Box
              boxShadow="2xl"
              bgColor="white"
              maxWidth="350px"
              borderRadius="13px"
            >
              <Grid
                templateColumns="repeat(1, 1fr)"
                color="brand.green"
                fontWeight="700"
                textAlign="center"
                padding="15px"
                gap="2"
              >
                <Box lineHeight="30px">
                  <Text>
                    {/* <Box as="span" fontSize='32px'>
                  1
                  </Box> */}
                  </Text>
                  <Text fontSize="32px">
                  ¡Tú también puedes ganar increíbles regalos participando en nuestras dinámicas!
                    <br />
                  </Text>
                  {/* *En tarjeta de regalo para compras en tienda */}
                </Box>
                {/* <Box lineHeight='30px'>
                <Text>
                  <Box as="span" fontSize='32px'>
                  2
                  </Box>
                  do lugar
                  </Text>
                  <Text fontSize='32px'>
                  $3,000 <br/>
                  mxn*
                  </Text>
                </Box>
                <Box lineHeight='30px'>
                <Text>
                  <Box as="span" fontSize='32px'>
                  3
                  </Box>
                  er lugar
                  </Text>
                  <Text fontSize='32px'>
                  $2,000 <br/>
                  mxn*
                  </Text>
                </Box> */}
              </Grid>
            </Box>
          </Flex>
        </Box>
        <Box w={["100%", "100%", "70%"]}>
          <Box bgColor="#DF3F8E" h="auto" marginTop={["-70px", null, 0]}>
            <Box pt={["100px", null, 0]}>
              <Grid>
                <GridItem>
                  <Link
                  href="https://a.cstmapp.com/p/924180"
                  target="_blank">
                    <Image
                      priority
                      src={lolRevealImg}
                      alt="El próximo 29 de diciembre te espera una súper LOL Suprise."
                      placeholder="blur"
                      layout="responsive"
                    />
                  </Link>
                </GridItem>
                <GridItem position="relative">
                  <Flex
                    // position="absolute"
                    bgColor="#DF3F8E"
                    width="100%"
                    height="100%"
                    justifyContent="center"
                    alignItems="flex-start"
                    zIndex="2"
                  >
                    <Link
                      href="https://a.cstmapp.com/p/924180"
                      target="_blank"
                      fontWeight="bold"
                      rel="noopener noreferrer"
                      background="brand.tealLighter"
                      color="brand.text.blue"
                      textTransform="uppercase"
                      letterSpacing="widest"
                      boxShadow="lg"
                      borderRadius="4px"
                      mt='5'
                      mb='5'
                      py={2}
                      px={3}
                      fontSize="15px"
                    >
                      Participar
                    </Link>
                  </Flex>
                  {/* <Image
                    src={bkgbuttomImg}
                    alt="rompecabezas sorteo"
                    layout="responsive"
                    // objectFit="cover"
                    // objectPosition="center"
                  /> */}
                </GridItem>
              </Grid>
            </Box>
          </Box>
          {/* <Box bgColor="#58BCB9" h="auto">
            <Box>
              <Grid>
                <GridItem>
                  <Image
                    priority
                    src={TriviaImg}
                    alt="rompecabezas sorteo"
                    placeholder="blur"
                  />
                </GridItem>
                <GridItem position="relative">
                  <Flex
                    position="absolute"
                    width="100%"
                    height="100%"
                    justifyContent="center"
                    alignItems="flex-start"
                    zIndex="2"
                  >
                    <Link
                      href="https://a.cstmapp.com/p/923801"
                      target="_blank"
                      fontWeight="bold"
                      rel="noopener noreferrer"
                      background="brand.tealLighter"
                      color="brand.text.blue"
                      textTransform="uppercase"
                      letterSpacing="widest"
                      boxShadow="lg"
                      borderRadius="4px"
                      py={2}
                      px={3}
                      fontSize="15px"
                    >
                      Participar
                    </Link>
                  </Flex>
                  <Image
                    src={bkgtriviaImg}
                    alt="rompecabezas sorteo"
                    layout="responsive"
                    // objectFit="cover"
                    // objectPosition="center"
                  />
                </GridItem>
              </Grid>
            </Box>
          </Box> */}
        </Box>
      </Box>
    </Layout>
  );
}
