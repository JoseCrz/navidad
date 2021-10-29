import { Container } from "@chakra-ui/react";
import type { ContainerProps } from "@chakra-ui/react";

export function Section({ children, ...rest }: ContainerProps) {
  return (
    <section>
      <Container px={8} py={12} {...rest}>
        {children}
      </Container>
    </section>
  );
}
