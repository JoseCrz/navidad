import Image from "next/image";
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
import logo from "public/el-secreto-logo.svg";

export default function Home() {
  return (
    <Layout>
      <Box as="section" bg="darkgray" width="100%">
        <HomeContainer
          alignItems={["unset", "center"]}
          display={["block", "block", "block", "flex"]}
          flexDirection={["column", "column", "column", "row-reverse"]}
        >
          <Box
            width={["100%", "100%", "67%", "50%"]}
            pl={[0, 0, 0, 10]}
            mx="auto"
          >
            <AspectRatio ratio={300 / 259} width="100%" height="auto">
              <Image
                priority
                src={logo}
                alt="El Secreto de la Navidad Logo"
                layout="fill"
              />
            </AspectRatio>
          </Box>
          <Box
            mt={["114px", "114px", "114px", 0]}
            width={["100%", "100%", "100%", "50%"]}
            pr={[0, 0, 0, 10]}
          >
            <Heading
              as="h2"
              fontSize={["50px", "50px", "50px", "72px"]}
              maxWidth={["330px", "100%"]}
            >
              Que gusto verte de vuelta un año más
            </Heading>
            <Text fontWeight="700" mt={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              faucibus dolor sit amet porttitor cursus. Morbi consectetur
              convallis ornare.
            </Text>
          </Box>
        </HomeContainer>
      </Box>
      <Box as="section" bg="lightgray">
        <HomeContainer
          display={["block", "block", "flex"]}
          alignItems={["unset", "center"]}
          justifyContent={["unset", "unset", "center"]}
        >
          <Box>
            <Heading fontSize={["50px", "50px", "50px", "72px"]}>
              Recordemos lo que hicimos el año anterior
            </Heading>
            <Box
              mt={[6, 6, 14]}
              bg="white"
              borderRadius="20px"
              py={10}
              boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)"
            >
              <Stack
                spacing={[6, 6, 6, 14]}
                direction={["column", "column", "column", "row"]}
                justifyContent="center"
                alignItems="center"
                height={["auto", "auto", "auto", "525px"]}
              >
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <Box key={`key-${index}`} textAlign="center">
                    <Text
                      fontWeight="700"
                      fontSize={["32px", "32px", "32px", "90px"]}
                      lineHeight="1"
                    >
                      100
                    </Text>
                    <Text>Premios Repartidos</Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </HomeContainer>
      </Box>
      <Box as="section" bg="darkgray">
        <HomeContainer>
          <Heading fontSize={["50px", "50px", "50px", "72px"]}>
            Conoce a nuestros personajes
          </Heading>
          <Flex
            flexDirection={["column", "column", "column", "row"]}
            justifyContent={["unset", "unset", "unset", "space-between"]}
            mt={[9, 9, 9, 60]}
            mx={[-8, -8, -8, 0]}
          >
            {[1, 2, 3].map((_, index) => (
              <Box
                display={["flex", "flex", "flex", "block"]}
                mt={[index > 0 ? "-5" : "0", index > 0 ? "-9" : "0", null, 0]}
                key={index}
                bg={`gray.${index + 2}00`}
                borderRadius="2xl"
                p={8}
                width={["100%", "100%", "100%", "305px"]}
                justifyContent="space-between"
                boxShadow="sm"
                position="relative"
              >
                <Box width={["48%", "48%", "48%", "100%"]} mt={[0, 0, 0, -32]}>
                  <AspectRatio ratio={165 / 188} width="100%" height="auto">
                    <Image src="/esferin.jpg" alt="Esferin" layout="fill" />
                  </AspectRatio>
                </Box>
                <Box mt={[0, 0, 0, 8]} maxWidth={["48%", "48%", "48%", "100%"]}>
                  <Heading as="h3" color="gray" size="xl" fontFamily="body">
                    Esferin
                  </Heading>
                  <Text fontSize="xs" lineHeight="short">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas ex felis, vehicula vitae gravida in, tempus nec
                    orci.
                  </Text>
                  <Button
                    bg="darkgray"
                    color="white"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    boxShadow="sm"
                    mt={3}
                    py={2}
                    px={4}
                  >
                    Enabled
                  </Button>
                </Box>
              </Box>
            ))}
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
