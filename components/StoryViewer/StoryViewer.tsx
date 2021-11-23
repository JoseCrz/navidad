import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Grid, Container, Icon, Button } from "@chakra-ui/react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { times } from "utils";
import type { Story } from "types";

type StoryViewerProps = {
  story: Story;
  totalStories: number;
  currentStoryIndex: number;
  storyProgress: number;
  isPlaying: boolean;
  onRequestNextStory: () => void;
  onRequestPause: () => void;
  onRequestPrevStory: () => void;
};

export function StoryViewer({
  story,
  totalStories,
  currentStoryIndex,
  storyProgress,
  isPlaying,
  onRequestNextStory,
  onRequestPause,
  onRequestPrevStory,
}: StoryViewerProps) {
  return (
    <Box width="100%" height="100%" position="relative">
      <StoryView
        key={story.id}
        story={story}
        totalStories={totalStories}
        currentStoryIndex={currentStoryIndex}
        storyProgress={storyProgress}
      />
      <StoryControls
        isPlaying={isPlaying}
        currentStoryIndex={currentStoryIndex}
        totalStories={totalStories}
        onRequestNextStory={onRequestNextStory}
        onRequestPause={onRequestPause}
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
        alt=""
        layout="fill"
        objectFit="cover"
        placeholder="blur"
      />
      <StoryOverlay>
        <Flex flexDirection="column" width="100%">
          <StoryHeader>
            <StorySteps
              totalStories={totalStories}
              currentStoryIndex={currentStoryIndex}
              storyProgress={storyProgress}
            />
          </StoryHeader>
        </Flex>
      </StoryOverlay>
    </>
  );
}

type StoryControlProps = {
  onRequestNextStory: () => void;
  onRequestPause: () => void;
  onRequestPrevStory: () => void;
  isPlaying: boolean;
  currentStoryIndex: number;
  totalStories: number;
};

function StoryControls({
  onRequestNextStory,
  onRequestPause,
  onRequestPrevStory,
  isPlaying,
  currentStoryIndex,
  totalStories,
}: StoryControlProps) {
  return (
    <Grid
      templateColumns="1fr 2fr 1fr"
      position="absolute"
      width="100%"
      height="100%"
    >
      <Box height="100%" onClick={onRequestPrevStory} />
      <Box height="100%" onClick={onRequestPause} />
      <Box height="100%" onClick={onRequestNextStory} />
      <Container position="absolute" top={0} mt={8}>
        <Flex width="100%" justifyContent="flex-end">
          <Icon
            role="button"
            aria-label="Pausar historia"
            color="white"
            as={isPlaying ? BsPauseFill : BsPlayFill}
            width={10}
            height={10}
            onClick={onRequestPause}
          />
        </Flex>
      </Container>
      {currentStoryIndex + 1 === totalStories && (
        <Flex
          position="absolute"
          bottom="73px"
          width="100%"
          justifyContent="center"
        >
          <Link href="/playlist" passHref>
            <Button
              as="a"
              bg="brand.tealLighter"
              color="brand.teal"
              textTransform="uppercase"
              letterSpacing="wider"
              boxShadow="md"
              mt={3}
              py={2}
              px={4}
            >
              Entrar
            </Button>
          </Link>
        </Flex>
      )}
    </Grid>
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
    <Grid
      templateColumns={`repeat(${totalStories}, 1fr)`}
      gap={3}
      mt={6}
      mb={5}
    >
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

// type StoryDescriptionProps = {
//   description: string;
// };

// function StoryDescription({ description }: StoryDescriptionProps) {
//   return (
//     <Container pb="100px">
//       <Text color="whiteAlpha.900">{description}</Text>
//     </Container>
//   );
// }
