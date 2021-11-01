import { useEffect, useState } from "react";
import { Box, Flex, Grid, Text, Heading, Container } from "@chakra-ui/react";
import { times } from "utils";
import type { Story } from "types";

type StoryViewerProps = {
  stories: Story[];
  onStoriesCompleted: () => void;
};

export function StoryViewer({ stories, onStoriesCompleted }: StoryViewerProps) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const currentStory = stories[currentStoryIndex];
  const [currentStoryProgress, setCurrentStoryProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryProgress((prev) => prev + 1);
    }, 150); // change time interval as needed -> 15000 / seconds total you wish each story to last

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentStoryProgress === 100) {
      if (currentStoryIndex + 1 == stories.length) {
        onStoriesCompleted();
      } else {
        setCurrentStoryIndex((prevIndex) => {
          if (prevIndex === stories.length - 1) return 0;

          return prevIndex + 1;
        });

        setCurrentStoryProgress(0);
      }
    }
  }, [
    currentStoryProgress,
    stories.length,
    currentStoryIndex,
    onStoriesCompleted,
  ]);

  return (
    <Box
      width="100%"
      height="100%"
      position="relative"
      sx={{
        background: `url("${currentStory.pictureUrl}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <StoryOverlay>
        <StoryHeader>
          <StorySteps
            totalSteps={stories.length}
            currentStoryProgress={currentStoryProgress}
            currentStoryIndex={currentStoryIndex}
          />
          <Heading
            as="h3"
            size="md"
            color="whiteAlpha.800"
            letterSpacing="widest"
          >
            {currentStory.title}
          </Heading>
        </StoryHeader>
        <StoryDescription description={currentStory.description} />
      </StoryOverlay>
    </Box>
  );
}

type StoryStepsProps = {
  totalSteps: number;
  currentStoryProgress: number;
  currentStoryIndex: number;
};

function StorySteps({
  totalSteps,
  currentStoryProgress,
  currentStoryIndex,
}: StoryStepsProps) {
  return (
    <Grid templateColumns={`repeat(${totalSteps}, 1fr)`} gap={3} my={6}>
      {times(totalSteps, (index: number) => {
        const progress =
          index === currentStoryIndex
            ? currentStoryProgress
            : index < currentStoryIndex
            ? 100
            : 0;

        return <Step key={`step-${index}`} progress={progress} />;
      })}
    </Grid>
  );
}

type StepProps = {
  progress: number;
};

function Step({ progress }: StepProps) {
  return (
    <Box height="4px" width="100%" bg="blackAlpha.600">
      <Box
        bg="white"
        height="inherit"
        transition="width 0.1s linear"
        willChange="width"
        width={`${progress}%`}
      />
    </Box>
  );
}

type StoryOverlayProps = {
  children: React.ReactNode;
};

function StoryOverlay({ children }: StoryOverlayProps) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      position="absolute"
      top="0"
      right="0"
      left="0"
      bottom="0"
    >
      {children}
    </Flex>
  );
}
type StoryHeaderProps = {
  children: React.ReactNode;
};

function StoryHeader({ children }: StoryHeaderProps) {
  return <Container>{children}</Container>;
}

type StoryDescriptionProps = {
  description: string;
};

function StoryDescription({ description }: StoryDescriptionProps) {
  return (
    <Container pb="100px">
      <Text color="whiteAlpha.900">{description}</Text>
    </Container>
  );
}
