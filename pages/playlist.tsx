import Image from "next/image";
import type { ImageProps } from "next/image";
import { Box, Flex, Text, Heading, AspectRatio } from "@chakra-ui/react";
import { Layout } from "components/Layout";
import { Carousel } from "components/Carousel";

import { Iframe } from "components/Iframe";

//Images
import phoenixImage1 from "public/playlist-photos/phoenix-1.jpeg";
import phoenixImage2 from "public/playlist-photos/phoenix-2.jpeg";
import phoenixImage3 from "public/playlist-photos/phoenix-3.jpeg";
import phoenixImage4 from "public/playlist-photos/phoenix-4.jpeg";

export default function Playlist() {
  return (
    <Layout bg="black" minHeight="100vh" pb={14}>
      <Box
        height="253px"
        // maxWidth={["375px", "100%"]}
        position="relative"
      >
        <Carousel>
          <CarouselImage priority src={phoenixImage1} />
          <CarouselImage src={phoenixImage2} />
          <CarouselImage src={phoenixImage3} />
          <CarouselImage src={phoenixImage4} />
        </Carousel>
      </Box>

      <Flex
        as="section"
        mt={["-20", "-16"]}
        px={[8, 20]}
        direction={["column", "row"]}
        justifyContent="space-between"
        position="relative"
      >
        <Box mr={[0, 6]}>
          <Heading color="white">Playlist</Heading>
          <Text
            mt={3}
            color="whiteAlpha.700"
            fontSize="small"
            lineHeight="shorter"
          >
            Nunc sit amet dictum dolor, a vehicula lectus. Nullam accumsan
            tortor eget tincidunt ornare. Fusce egestas turpis mauris, vel
            scelerisque diam venenatis vel.
          </Text>
          <Box
            mt={10}
            overflow="hidden"
            borderRadius="xl"
            height={["380px", "642px"]}
          >
            <Iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXauSRu0mFos4?theme=0" />
          </Box>
        </Box>
        <Box py={[12, 0]}>
          <Heading color="white">Actividad</Heading>
          <Text
            mt={3}
            color="whiteAlpha.700"
            fontSize="small"
            lineHeight="shorter"
          >
            Nunc sit amet dictum dolor, a vehicula lectus. Nullam accumsan
            tortor eget tincidunt ornare. Fusce egestas turpis mauris, vel
            scelerisque diam venenatis vel.
          </Text>
          <Box mt={9} overflow="hidden" borderRadius="xl">
            <Iframe
              src="https://open.spotify.com/embed/track/4pi6QNR8vL1IesR8R7UU4l?theme=0"
              height="80"
            />
          </Box>
          <Box mt={3} overflow="hidden" borderRadius="xl">
            <Iframe
              src="https://open.spotify.com/embed/track/6tXfYX7BHCaafCy4so09gf?theme=0"
              height="80"
            />
          </Box>
          <Box mt={3} overflow="hidden" borderRadius="xl">
            <Iframe
              src="https://open.spotify.com/embed/track/4tZwZVNhVCeBQYQtgQN5vW?theme=0"
              height="80"
            />
          </Box>
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
