import { Box, Text, Heading } from "@chakra-ui/react";
import { Layout } from "components/Layout";
import { Section } from "components/Section";

export default function Playlist() {
  return (
    <Layout bg="black">
      <Section>
        <Heading color="white" size="md">
          Playlist
        </Heading>
        <Text
          mt={3}
          color="whiteAlpha.700"
          fontSize="small"
          lineHeight="shorter"
        >
          Nunc sit amet dictum dolor, a vehicula lectus. Nullam accumsan tortor
          eget tincidunt ornare. Fusce egestas turpis mauris, vel scelerisque
          diam venenatis vel.
        </Text>
        <Box mt={10} overflow="hidden" borderRadius="xl">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXauSRu0mFos4?theme=0"
            width="100%"
            height="380"
            frameBorder="0"
            allowTransparency
            allow="encrypted-media"
          />
        </Box>
      </Section>
      <Section>
        <Heading color="white" size="md">
          Actividad
        </Heading>
        <Text
          mt={3}
          color="whiteAlpha.700"
          fontSize="small"
          lineHeight="shorter"
        >
          Nunc sit amet dictum dolor, a vehicula lectus. Nullam accumsan tortor
          eget tincidunt ornare. Fusce egestas turpis mauris, vel scelerisque
          diam venenatis vel.
        </Text>
        <Box mt={9} overflow="hidden" borderRadius="xl">
          <iframe
            src="https://open.spotify.com/embed/track/4pi6QNR8vL1IesR8R7UU4l?theme=0"
            width="100%"
            height="80"
            frameBorder="0"
            allowTransparency
            allow="encrypted-media"
          />
        </Box>
        <Box mt={3} overflow="hidden" borderRadius="xl">
          <iframe
            src="https://open.spotify.com/embed/track/6tXfYX7BHCaafCy4so09gf?theme=0"
            width="100%"
            height="80"
            frameBorder="0"
            allowTransparency
            allow="encrypted-media"
          />
        </Box>
        <Box mt={3} overflow="hidden" borderRadius="xl">
          <iframe
            src="https://open.spotify.com/embed/track/4tZwZVNhVCeBQYQtgQN5vW?theme=0"
            width="100%"
            height="80"
            frameBorder="0"
            allowTransparency
            allow="encrypted-media"
          />
        </Box>
      </Section>
    </Layout>
  );
}
