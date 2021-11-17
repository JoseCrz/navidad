import { useState } from "react";
import Image from "next/image";
import type { ImageProps } from "next/image";
import type { BoxProps } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Text,
  Heading,
  AspectRatio,
  Circle,
} from "@chakra-ui/react";
import { Layout } from "components/Layout";
import { Carousel } from "components/Carousel";
import { Iframe } from "components/Iframe";

import { profiles } from "data/profiles";

//Images
import bannerMobile1 from "public/playlist-photos/playlist-banner-mobile-1.png";
import bannerMobile2 from "public/playlist-photos/playlist-banner-mobile-2.png";
import bannerMobile3 from "public/playlist-photos/playlist-banner-mobile-3.png";

import bannerDesktop1 from "public/playlist-photos/playlist-banner-desktop-1.png";
import bannerDesktop2 from "public/playlist-photos/playlist-banner-desktop-2.png";
import bannerDesktop3 from "public/playlist-photos/playlist-banner-desktop-3.png";

const playlistsUrls = [
  "https://open.spotify.com/embed/playlist/2brXEqzvKpG5w3pNjFR8Lp?theme=0",
  "https://open.spotify.com/embed/playlist/50RxNoCdppA4nBbpsWbbBT?theme=0",
  "https://open.spotify.com/embed/playlist/2FpjIlJO4fvaMuHMNAr9Lq?theme=0",
];

export default function Playlist() {
  const [activePlaylist, setActivePlaylist] = useState(0);

  const playlistId = playlistsUrls[activePlaylist];

  return (
    <Layout bg="black" minHeight="100vh" pb={14}>
      <Box
        display={["block", "block", "block", "none"]}
        height="253px"
        // maxWidth={["375px", "100%"]}
        position="relative"
      >
        <Carousel
          onItemChange={(activeSlide) => {
            if (window.innerWidth < 1920) {
              setActivePlaylist(activeSlide);
            }
          }}
        >
          <CarouselImage priority src={bannerMobile1} />
          <CarouselImage src={bannerMobile2} />
          <CarouselImage src={bannerMobile3} />
        </Carousel>
      </Box>
      <Box
        display={["none", "none", "none", "block"]}
        height="253px"
        // maxWidth={["375px", "100%"]}
        position="relative"
      >
        <Carousel
          onItemChange={(activeSlide) => {
            if (window.innerWidth >= 1920) {
              setActivePlaylist(activeSlide);
            }
          }}
        >
          <CarouselImage priority src={bannerDesktop1} />
          <CarouselImage src={bannerDesktop2} />
          <CarouselImage src={bannerDesktop3} />
        </Carousel>
      </Box>

      <Flex
        as="section"
        mt={["-85px", "-95px"]}
        px={[8, 20]}
        direction={["column", "row"]}
        justifyContent="space-between"
        position="relative"
      >
        <Box mr={[0, 6]}>
          <Heading color="white" fontSize={["24px"]}>
            Playlist
          </Heading>
          <Text mt={3} color="white" fontSize="small" lineHeight="shorter">
            ¡Nada como escuchar una buena playlist navideña junto a tu familia!
            Contagia de espíritu navideño a todos en casa con esta playlist.
          </Text>
          <Box
            mt={10}
            overflow="hidden"
            borderRadius="xl"
            height={["380px", "642px"]}
            maxWidth="351px"
            sx={{
              WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            }}
          >
            <Iframe key={playlistId} src={playlistId} />
          </Box>
        </Box>
        <Box py={[12, 0]}>
          <Heading color="white">Actividad</Heading>
          <Text
            mt={3}
            mb={9}
            color={["whiteAlpha.700", "white"]}
            fontSize="small"
            lineHeight="shorter"
          >
            Todos están en mood Navidad, no dudes en entrar a una de nuestras
            playlist y sumarte a la diversión.
          </Text>
          {profiles.map((profile, index) => (
            <Flex
              key={playlistsUrls[index]}
              alignItems="center"
              justifyContent="space-around"
              mb={3}
            >
              <Circle
                overflow="hidden"
                position="relative"
                size="66px"
                mr={[0, 4]}
              >
                <Image
                  priority
                  src={profile.avatar}
                  alt={`Imagen de Perfil de ${profile.name}`}
                  layout="fill"
                  objectFit="cover"
                  sizes="50vw"
                  placeholder="blur"
                />
              </Circle>
              <SpotifySong src={playlistsUrls[index]} />
            </Flex>
          ))}
        </Box>
      </Flex>
    </Layout>
  );
}

function CarouselImage(props: ImageProps) {
  return (
    <AspectRatio
      ratio={[375 / 253, 768 / 253]}
      maxWidth="100%"
      maxHeight="253px"
    >
      <Image
        alt="phoenix playing"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        {...props}
      />
    </AspectRatio>
  );
}

type SpotifySongProps = {
  src: string;
} & BoxProps;

function SpotifySong({ src, ...rest }: SpotifySongProps) {
  return (
    <Box
      mt={3}
      overflow="hidden"
      borderRadius="xl"
      sx={{
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
      width={["253px", "225px"]}
      {...rest}
    >
      <Iframe src={src} height="80" />
    </Box>
  );
}
