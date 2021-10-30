import { useEffect, useState } from "react";
import { Box, Flex, Text, Heading, Container } from "@chakra-ui/react";
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
    }, 36);

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
    <Flex my={6}>
      {times(totalSteps, (index: number) => {
        const progress =
          index === currentStoryIndex
            ? currentStoryProgress
            : index < currentStoryIndex
            ? 100
            : 0;

        return (
          <Step
            key={`step-${index}`}
            totalSteps={totalSteps}
            stepNumber={index}
            progress={progress}
          />
        );
      })}
    </Flex>
  );
}

type StepProps = {
  totalSteps: number;
  stepNumber: number;
  progress: number;
};

function Step({ totalSteps, stepNumber, progress }: StepProps) {
  const currentStep = stepNumber + 1;
  return (
    <Box
      height="4px"
      width="77px"
      bg="blackAlpha.600"
      mr={currentStep === totalSteps ? 0 : 3}
    >
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
