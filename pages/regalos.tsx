import Image from "next/image";
import type { ImageProps } from "next/image";
import { Layout } from "components";
import {
  Box,
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
  Link,
} from "@chakra-ui/react";
import type { GridItemProps, LinkProps, FlexProps } from "@chakra-ui/react";

import stickersImg from "public/regalos/stickers.png";
import cartaSantaImg from "public/regalos/carta-santa.png";
import cartaReyesImg from "public/regalos/carta-reyes.png";
import memoramaImg from "public/regalos/memorama.png";
import wallpaperImg from "public/regalos/wallpaper.png";

export default function Regalos() {
  return (
    <Layout bg="brand.bg.yellow">
      <Box px={8} py={9}>
        <Heading color="brand.text.green" fontSize={["50px"]}>
          Regalos
        </Heading>
        <Text
          mt={[3]}
          color="white"
          fontWeight="bold"
          fontSize={["16px"]}
          lineHeight="shorter"
        >
          ¿Qué sería de una increíble e inolvidable Navidad sin regalos? Es por
          eso que en El Secreto de la Navidad tenemos los mejores solo para ti
          ¡Descúbrelos!
        </Text>

        <Box mt={6}>
          <Grid
            minHeight="calc((170px * 4) + 20px)"
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(4, 1fr)"
            gap="10px"
          >
            <GiftsGridItem bg="#4DA505" colSpan={2}>
              <GridImage src={stickersImg} sizes="84vw" />
              <GridCTA href="https://sticker.ly/s/MF8PFB" pb={4} />
            </GiftsGridItem>
            <GiftsGridItem bg="#F80123" colSpan={1}>
              <GridImage src={cartaSantaImg} sizes="50vw" />
              <GridCTA
                href="https://drive.google.com/uc?id=1GlHwQmnzXX1eUY5lpIyCDxH9Z9Gpmysg&export=download"
                justifyContent="flex-end"
                fontSize="10px"
                pb={3}
                paddingRight={3}
              />
            </GiftsGridItem>
            <GiftsGridItem bg="#5DBFBB" colSpan={1}>
              <GridImage src={cartaReyesImg} sizes="50vw" />
              <GridCTA
                href="https://drive.google.com/uc?id=1DJwXQAVh50sATdJuMqryKgjGFIIYTGUx&export=download"
                justifyContent="flex-start"
                fontSize="10px"
                pb={3}
                paddingLeft={3}
              />
            </GiftsGridItem>
            <GiftsGridItem bg="#217361" colSpan={1} rowSpan={2}>
              <GridImage src={memoramaImg} sizes="50vw" />
              <GridCTA
                href="https://drive.google.com/uc?id=1QbySPfdDY6H9rcwCSwpL1MRadggh1kJb&export=download"
                pb={["89px"]}
              />
            </GiftsGridItem>
            <GiftsGridItem bg="#4DA505" colSpan={1} rowSpan={2}>
              <GridImage src={wallpaperImg} sizes="50vw" />
              <GridCTA
                href="https://drive.google.com/uc?id=1_j4SJt_SlXPmKp5Ei2RcU3gWcZzIdScs&export=download"
                pb={["89px"]}
              />
            </GiftsGridItem>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
}

function GiftsGridItem(props: GridItemProps) {
  return (
    <GridItem
      position="relative"
      borderRadius="16px"
      overflow="hidden"
      boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)"
      {...props}
    />
  );
}

function GridImage(props: ImageProps) {
  return (
    <Image
      priority
      alt=""
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      placeholder="blur"
      {...props}
    />
  );
}

type GridCTAProps = {
  href: LinkProps["href"];
  fontSize?: LinkProps["fontSize"];
} & FlexProps;

function GridCTA({ href, fontSize = "14px", ...rest }: GridCTAProps) {
  return (
    <Flex
      position="absolute"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="flex-end"
      {...rest}
    >
      <Link
        href="https://sticker.ly/s/MF8PFB"
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
        fontSize={fontSize}
      >
        Descargar
      </Link>
    </Flex>
  );
}
