import { useState } from "react";
import Image from "next/image";
import { Box, Flex, Container, Heading, Text, Button } from "@chakra-ui/react";
import { Layout } from "components/Layout";
import { ChatChooser } from "components/Chat/ChatChooser";

import elf1 from "public/chat-elf-1.png";
import elf2 from "public/chat-elf-2.png";
import gift from "public/chat-gift.png";
import chatArrow from "public/chat-arrow.svg";

type ChatWelcomeProps = {
  onRequestInit: () => void;
};

function ChatWelcome({ onRequestInit }: ChatWelcomeProps) {
  return (
    <>
      <Box position="absolute" top={0} right={0}>
        <Image priority src={elf1} alt="" width="171px" height="250px" />
      </Box>
      <Box position="absolute" bottom={0} right={0}>
        <Image priority src={elf2} alt="" width="171px" height="250px" />
      </Box>
      <Box position="absolute" bottom={0} left={0}>
        <Image priority src={gift} alt="" width="229px" height="131px" />
      </Box>
      <Container>
        <Heading
          color="white"
          fontSize="50px"
          lineHeight="shorter"
          mt="32"
          fontWeight="normal"
        >
          Chat
          <br />
          Mágico
        </Heading>
        <Box mt="16" maxWidth="297px">
          <Text color="brand.text.blue" fontWeight="bold" lineHeight="shorter">
            ¿Cómo te has portado?
            <br />
            ¿Cumpliste con tus tareas diarias?
            <br />
            ¿Dijiste mentiras?
          </Text>
          <Text color="white" fontWeight="bold" lineHeight="shorter">
            Todo eso te preguntará Santa y probablemente los Reyes Magos lo
            vieron, pero bueno, nada mejor que tu mismo platiques con ellos y
            les digas lo sucedido.
          </Text>
          <Text color="brand.text.blue" fontWeight="bold" lineHeight="shorter">
            ¡Ah! Y no olvides pedir tus regalos.
          </Text>
        </Box>
        <Flex width="100%" justifyContent="center" mt="14">
          <Button
            background="white"
            color="brand.text.blue"
            textTransform="uppercase"
            letterSpacing="widest"
            onClick={onRequestInit}
          >
            Entrar al chat
          </Button>
        </Flex>
      </Container>
    </>
  );
}

function ChatStarter() {
  return (
    <Box maxWidth="487px" mx="auto">
      <ChatChooser />
      <Container height="100%" textAlign="center">
        <Box textAlign="left" mt="10">
          <Image src={chatArrow} width="215" height="222" alt="" />
        </Box>
        <Box maxWidth="254px" mx="auto">
          <Heading color="white" fontWeight="normal" mt="8" fontSize="24px">
            Chatea con Santa o con los Reyes Magos
          </Heading>
          <Text color="brand.text.blue" mt={4}>
            Selecciona el perfil y comienza a escribir
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default function Chat() {
  const [isInitialized, setIsInitialized] = useState(false);

  const initialize = () => setIsInitialized(true);
  return (
    <Layout>
      <Box
        minHeight="calc(100vh - 56px)"
        backgroundColor="brand.cyan"
        backgroundImage="url('/chat-background.svg')"
        backgroundPosition="center"
        backgroundSize="cover"
        position="relative"
        paddingTop="1px"
      >
        {isInitialized ? (
          <ChatStarter />
        ) : (
          <ChatWelcome onRequestInit={initialize} />
        )}
      </Box>
    </Layout>
  );
}
