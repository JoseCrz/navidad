import { useState } from "react";
import { Box } from "@chakra-ui/react";

import { Layout } from "components/Layout";
import { ProfileSelector } from "components/ProfileSelector";
import { StoryViewer } from "components/StoryViewer";

import { profiles } from "data/profiles";

export default function Personajes() {
  const [selectedProfileIndex, setSelectedProfileIndex] = useState(0);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const selectedProfile = profiles[selectedProfileIndex];
  const currentStory = selectedProfile.stories[currentStoryIndex];

  function nextStory() {
    setCurrentStoryIndex((prev) => prev + 1);
  }

  function nextProfile() {
    setCurrentStoryIndex(0);
    setSelectedProfileIndex((prev) => (prev + 1) % profiles.length);
  }

  return (
    <Layout height="100vh" bg="blackAlpha.800">
      <Box maxWidth="487px" mx="auto">
        <ProfileSelector
          profiles={profiles}
          selectedIndex={selectedProfileIndex}
          onSelectProfile={(selectedIndex) =>
            setSelectedProfileIndex(selectedIndex)
          }
        />
        <Box height="calc(100vh - 172px)">
          <StoryViewer
            key={selectedProfile.name}
            story={currentStory}
            totalStories={selectedProfile.stories.length}
            onStoryCompleted={nextStory}
            onStoriesCompleted={nextProfile}
          />
        </Box>
      </Box>
    </Layout>
  );
}
