import { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Flex, Grid, Text, Heading, Container } from "@chakra-ui/react";
import { times } from "utils";
import type { Story } from "types";

type StoryViewerProps = {
  story: Story;
  totalStories: number;
  onStoryCompleted: () => void;
  onStoriesCompleted: () => void;
};

export function StoryViewer({
  story,
  totalStories,
  onStoryCompleted,
  onStoriesCompleted,
}: StoryViewerProps) {
  return (
    <Box width="100%" height="100%" position="relative">
      <StoryView
        story={story}
        totalStories={totalStories}
        onStoryCompleted={onStoryCompleted}
        onStoriesCompleted={onStoriesCompleted}
      />
      <StoryControls />
    </Box>
  );
}

type StoryViewProps = {
  story: Story;
  totalStories: number;
  onStoryCompleted: () => void;
  onStoriesCompleted: () => void;
};

function StoryView({
  story,
  totalStories,
  onStoryCompleted,
  onStoriesCompleted,
}: StoryViewProps) {
  return (
    <>
      <Image
        priority
        key={story.title}
        src={story.picture}
        alt={story.alt}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
      />
      <StoryOverlay>
        <Flex flexDirection="column" justifyContent="space-between">
          <StoryHeader>
            <StorySteps
              totalStories={totalStories}
              onStoryCompleted={onStoryCompleted}
              onStoriesCompleted={onStoriesCompleted}
            />
            <Heading
              as="h3"
              size="md"
              color="whiteAlpha.800"
              letterSpacing="widest"
            >
              {story.title}
            </Heading>
          </StoryHeader>
          <StoryDescription description={story.description} />
        </Flex>
      </StoryOverlay>
    </>
  );
}

function StoryControls() {
  return (
    <Flex position="absolute" width="100%" height="100%">
      <Box height="100%" width="50%" bg="#ff000038" />
      <Box height="100%" width="50%" bg="#0000ff30" />
    </Flex>
  );
}

type StoryStepsProps = {
  totalStories: number;
  onStoryCompleted: () => void;
  onStoriesCompleted: () => void;
};

function StorySteps({
  totalStories,
  onStoryCompleted,
  onStoriesCompleted,
}: StoryStepsProps) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const [storyProgress, setStoryProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStoryProgress((prev) => prev + 1);
    }, 36); // change time interval as needed -> 15000 / seconds total you wish each story to last

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (storyProgress === 100) {
      if (currentStoryIndex + 1 === totalStories) {
        onStoriesCompleted();
      } else {
        onStoryCompleted();
        setStoryProgress(0);
        setCurrentStoryIndex((prevIndex) => {
          if (prevIndex === totalStories - 1) return 0;

          return prevIndex + 1;
        });
      }
    }
  }, [
    onStoryCompleted,
    storyProgress,
    setCurrentStoryIndex,
    totalStories,
    currentStoryIndex,
    onStoriesCompleted,
  ]);

  return (
    <Grid templateColumns={`repeat(${totalStories}, 1fr)`} gap={3} my={6}>
      {times(totalStories, (index: number) => {
        const progress =
          index === currentStoryIndex
            ? storyProgress
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
    <Box height="4px" width="100%" bg="whiteAlpha.600">
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
    <Flex position="absolute" top="0" right="0" left="0" bottom="0">
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
