import { useState } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Navbar } from "components/Navbar";
import { ProfileSelector } from "components/ProfileSelector";
import { StoryViewer } from "components/StoryViewer";
import { profiles } from "data/profiles";

export default function Personajes() {
  const [selectedProfileIndex, setSelecterProfileIndex] = useState(0);

  const selectedProfile = profiles[selectedProfileIndex];

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
      <Box as="main" height="100vh" pt="56px">
        <ProfileSelector
          profiles={profiles}
          selectedIndex={selectedProfileIndex}
          onSelectProfile={(selectedIndex) =>
            setSelecterProfileIndex(selectedIndex)
          }
        />
        <Box height="calc(100vh - 172px)">
          <StoryViewer
            key={selectedProfile.name}
            stories={selectedProfile.stories}
            onStoriesCompleted={() =>
              setSelecterProfileIndex((prev) => {
                if (prev + 1 === profiles.length) return 0;
                return prev + 1;
              })
            }
          />
        </Box>
      </Box>
    </>
  );
}
