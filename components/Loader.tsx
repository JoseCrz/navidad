import { Center, Spinner } from "@chakra-ui/react";

export function Loader() {
  return (
    <Center>
      <Spinner
        color="white"
        emptyColor="whiteAlpha.500"
        size="md"
        thickness="4px"
        speed="0.80s"
      />
    </Center>
  );
}
