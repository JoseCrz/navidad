import Head from "next/head";
import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export function Layout(props: BoxProps) {
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
      <Box as="main" pt="56px" {...props} />
    </>
  );
}
