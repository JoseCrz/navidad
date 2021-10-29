import { Box, Flex, Text, Heading, Container } from "@chakra-ui/react";
import { times } from "utils";

export function Story() {
  return (
    <Box
      width="100%"
      height="100%"
      position="relative"
      sx={{
        background: "url('/story-photos/story-1.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <StoryOverlay />
    </Box>
  );
}

function StoryOverlay() {
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
      <StoryHeader />
      <StoryDescription />
    </Flex>
  );
}

function StoryHeader() {
  return (
    <Container>
      <StorySteps totalSteps={4} />
      <Heading as="h3" size="md" color="whiteAlpha.700">
        Titulo
      </Heading>
    </Container>
  );
}

function StoryDescription() {
  return (
    <Container pb="100px">
      <Text color="whiteAlpha.900">
        Aliquam lacinia ipsum lacus, eget rutrum sem eleifend vulputate. Cras
        vestibulum blandit sem, eu sagittis nibh bibendum nec. Duis at varius
        lorem.
      </Text>
    </Container>
  );
}

type StoryStepsProps = {
  totalSteps: number;
};

function StorySteps({ totalSteps }: StoryStepsProps) {
  return (
    <Flex my={6}>
      {times(totalSteps, (index: number) => {
        return <Step totalSteps={totalSteps} stepNumber={index} />;
      })}
    </Flex>
  );
}

type StepProps = {
  totalSteps: number;
  stepNumber: number;
};

function Step({ totalSteps, stepNumber }: StepProps) {
  const currentStep = stepNumber + 1;

  return (
    <Box
      position="relative"
      height="4px"
      width="77px"
      bg="blackAlpha.600"
      mr={currentStep === totalSteps ? 0 : 3}
    >
      {/* <Box position="absolute" /> */}
    </Box>
  );
}
