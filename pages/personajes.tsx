import { useState } from "react";
import { Box } from "@chakra-ui/react";

import { Layout } from "components/Layout";
import { ProfileSelector } from "components/ProfileSelector";
import { StoryViewer } from "components/StoryViewer";

import { profiles } from "data/profiles";

export default function Personajes() {
  const [selectedProfileIndex, setSelecterProfileIndex] = useState(0);

  const selectedProfile = profiles[selectedProfileIndex];

  return (
    <Layout height="100vh" bg="blackAlpha.800">
      <Box maxWidth="487px" mx="auto">
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
    </Layout>
  );
}
