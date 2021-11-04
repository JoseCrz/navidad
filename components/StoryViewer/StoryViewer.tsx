import Image from "next/image";
import { Box, Flex, Grid, Text, Heading, Container } from "@chakra-ui/react";
import { times } from "utils";
import type { Story } from "types";

type StoryViewerProps = {
  story: Story;
  totalStories: number;
  currentStoryIndex: number;
  storyProgress: number;

  onRequestNextStory: () => void;
  onRequestPrevStory: () => void;
};

export function StoryViewer({
  story,
  totalStories,
  currentStoryIndex,
  storyProgress,
  onRequestNextStory,
  onRequestPrevStory,
}: StoryViewerProps) {
  return (
    <Box width="100%" height="100%" position="relative">
      <StoryView
        key={story.title}
        story={story}
        totalStories={totalStories}
        currentStoryIndex={currentStoryIndex}
        storyProgress={storyProgress}
      />
      <StoryControls
        onRequestNextStory={onRequestNextStory}
        onRequestPrevStory={onRequestPrevStory}
      />
    </Box>
  );
}

type StoryViewProps = {
  story: Story;
  totalStories: number;
  currentStoryIndex: number;
  storyProgress: number;
};

function StoryView({
  story,
  totalStories,
  currentStoryIndex,
  storyProgress,
}: StoryViewProps) {
  return (
    <>
      <Image
        priority
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
              currentStoryIndex={currentStoryIndex}
              storyProgress={storyProgress}
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

type StoryControlProps = {
  onRequestNextStory: () => void;
  onRequestPrevStory: () => void;
};

function StoryControls({
  onRequestNextStory,
  onRequestPrevStory,
}: StoryControlProps) {
  return (
    <Flex position="absolute" width="100%" height="100%">
      <Box height="100%" width="50%" onClick={onRequestPrevStory} />
      <Box height="100%" width="50%" onClick={onRequestNextStory} />
    </Flex>
  );
}

type StoryStepsProps = {
  totalStories: number;
  currentStoryIndex: number;
  storyProgress: number;
};

function StorySteps({
  totalStories,
  currentStoryIndex,
  storyProgress,
}: StoryStepsProps) {
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
