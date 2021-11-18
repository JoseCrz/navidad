import { useState, useEffect, useLayoutEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

import { Layout } from "components/Layout";
import { ProfileSelector } from "components/ProfileSelector";
import { StoryViewer } from "components/StoryViewer";

import { profiles } from "data/profiles";

export default function Personajes() {
  const { query } = useRouter();

  const queryIndex = query.char ? parseInt(query.char as string) : 0;

  const [selectedProfileIndex, setSelectedProfileIndex] = useState(0);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const [storyProgress, setStoryProgress] = useState(0);

  const selectedProfile = profiles[selectedProfileIndex];
  const currentStory = selectedProfile.stories[currentStoryIndex];

  const nextStory = useCallback(() => {
    setIsPlaying(true);
    if (currentStoryIndex + 1 === selectedProfile.stories.length) {
      nextProfile();
    } else {
      setStoryProgress(0);
      setCurrentStoryIndex((prev) => prev + 1);
    }
  }, [currentStoryIndex, selectedProfile.stories.length]);

  useLayoutEffect(() => {
    setSelectedProfileIndex(queryIndex);
  }, [queryIndex]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (isPlaying) {
        setStoryProgress((prevProgress) => prevProgress + 1);
      }
    }, 36);

    return () => window.clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (storyProgress === 100) {
      nextStory();
    }
  }, [storyProgress, nextStory]);

  useEffect(() => {
    setIsPlaying(true);
  }, [selectedProfile]);

  function nextProfile() {
    setStoryProgress(0);
    setCurrentStoryIndex(0);
    setSelectedProfileIndex((prev) => (prev + 1) % profiles.length);
  }

  function prevProfile() {
    setStoryProgress(0);
    setCurrentStoryIndex(0);
    setSelectedProfileIndex(
      (prev) => (prev - 1 + profiles.length) % profiles.length
    );
  }

  function prevStory() {
    setIsPlaying(true);
    if (currentStoryIndex - 1 < 0) {
      prevProfile();
    } else {
      setStoryProgress(0);
      setCurrentStoryIndex((prev) => prev - 1);
    }
  }

  function togglePlay() {
    setIsPlaying((prevPlaying) => !prevPlaying);
  }

  return (
    <Layout height="100vh" bg="blackAlpha.800">
      <Box maxWidth="487px" mx="auto">
        <ProfileSelector
          profiles={profiles}
          selectedIndex={selectedProfileIndex}
          onSelectProfile={(selectedIndex) => {
            setStoryProgress(0);
            setCurrentStoryIndex(0);
            setSelectedProfileIndex(selectedIndex);
          }}
        />
        <Box height="calc(100vh - 172px)">
          <StoryViewer
            key={selectedProfile.name}
            story={currentStory}
            storyProgress={storyProgress}
            totalStories={selectedProfile.stories.length}
            currentStoryIndex={currentStoryIndex}
            onRequestNextStory={nextStory}
            onRequestPause={togglePlay}
            onRequestPrevStory={prevStory}
          />
        </Box>
      </Box>
    </Layout>
  );
}
