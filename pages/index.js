import Head from "next/head";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>El Secreto de la Navidad</title>
        <meta
          name="description"
          content="Juguetron: El Secreto de la Navidad"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Container>
  );
}
