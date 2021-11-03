import { Box, Container } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

export function Section({ children, ...props }: BoxProps) {
  return (
    <Box as="section" {...props}>
      <Container px={8} py={12}>
        {children}
      </Container>
    </Box>
  );
}
