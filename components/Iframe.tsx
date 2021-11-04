import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Loader } from "./Loader";

type IframeProps = React.HTMLProps<HTMLIFrameElement>;

export function Iframe(props: IframeProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader />}
      <Box
        width="inherit"
        height="inherit"
        opacity={isLoading ? 0 : 1}
        willChange="opacity"
        transition="opacity 600ms ease-in-out 0s, visibility 600ms ease-in-out 0s;"
      >
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          allow="encrypted-media"
          onLoad={() => setIsLoading(false)}
          {...props}
        />
      </Box>
    </>
  );
}
