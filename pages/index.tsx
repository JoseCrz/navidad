import Image from "next/image";
import {
  Box,
  Flex,
  AspectRatio,
  Text,
  Heading,
  VStack,
  Button,
} from "@chakra-ui/react";

import { Layout } from "components/Layout";
import { Section } from "components/Section";
import logo from "public/el-secreto-logo.svg";

export default function Home() {
  return (
    <Layout>
      <Section
        bg="darkgray"
        height={["auto", "100vh"]}
        display={["block", "flex"]}
        alignItems={["unset", "center"]}
      >
        <AspectRatio ratio={300 / 259} width="100%" height="auto">
          <Image
            priority
            src={logo}
            alt="El Secreto de la Navidad Logo"
            layout="fill"
          />
        </AspectRatio>
        <Box mt="114px">
          <Heading as="h2" fontSize="50px" maxWidth={["330px", "100%"]}>
            Que gusto verte de vuelta un año más
          </Heading>
          <Text fontWeight="700" mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            faucibus dolor sit amet porttitor cursus. Morbi consectetur
            convallis ornare.
          </Text>
        </Box>
      </Section>
      <Section
        bg="lightgray"
        height={["auto", "100vh"]}
        display={["block", "flex"]}
        alignItems={["unset", "center"]}
      >
        <Heading fontSize="50px">
          Recordemos lo que hicimos el año anterior
        </Heading>
        <Box
          mt={6}
          bg="white"
          borderRadius="20px"
          py={10}
          boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)"
        >
          <VStack spacing={6}>
            <Box textAlign="center">
              <Text fontWeight="700" fontSize="32px">
                100
              </Text>
              <Text>Premios Repartidos</Text>
            </Box>
            <Box textAlign="center">
              <Text fontWeight="700" fontSize="32px">
                100
              </Text>
              <Text>Premios Repartidos</Text>
            </Box>
            <Box textAlign="center">
              <Text fontWeight="700" fontSize="32px">
                100
              </Text>
              <Text>Premios Repartidos</Text>
            </Box>
            <Box textAlign="center">
              <Text fontWeight="700" fontSize="32px">
                100
              </Text>
              <Text>Premios Repartidos</Text>
            </Box>
            <Box textAlign="center">
              <Text fontWeight="700" fontSize="32px">
                100
              </Text>
              <Text>Premios Repartidos</Text>
            </Box>
          </VStack>
        </Box>
      </Section>
      <Section
        bg="darkgray"
        height={["auto", "100vh"]}
        display={["block", "flex"]}
        alignItems={["unset", "center"]}
      >
        <Heading fontSize="50px">Conoce a nuestros personajes</Heading>
        <Flex flexDirection="column" mt={9} mx={-8}>
          {[1, 2, 3].map((_, index) => (
            <Flex
              mt={index > 0 ? "-5" : "0"}
              key={index}
              bg={`gray.${index + 2}00`}
              borderRadius="2xl"
              p={8}
              width="100%"
              justifyContent="space-between"
              boxShadow="sm"
            >
              <Box maxWidth="48%">
                <Image
                  src="/esferin.jpg"
                  alt="Esferin"
                  width="165px"
                  height="188px"
                />
              </Box>
              <Box maxWidth="48%">
                <Heading as="h3" color="gray" size="xl" fontFamily="body">
                  Esferin
                </Heading>
                <Text fontSize="xs" lineHeight="short">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas ex felis, vehicula vitae gravida in, tempus nec orci.
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
            </Flex>
          ))}
        </Flex>
      </Section>
    </Layout>
  );
}
