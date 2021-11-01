import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export function Carousel({ children }: { children: React.ReactNode }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const totalSlides = React.Children.count(children) - 1;

  function nextSlide() {
    setActiveSlide((prev) => (prev + 1 > totalSlides ? 0 : prev + 1));
  }

  function prevSlide() {
    setActiveSlide((prev) => (prev - 1 < 0 ? totalSlides : prev - 1));
  }
  return (
    <Box width="inherit" height="inherit" position="relative">
      {React.Children.map(children, (child, index) => {
        return (
          <CarouselItem slideNumber={index} activeSlide={activeSlide}>
            {child}
          </CarouselItem>
        );
      })}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        width="100%"
        height="100%"
      >
        <Box position="absolute" left={0} top="calc(50% - 40px)">
          <Button
            py={6}
            px={0}
            borderTopRightRadius="2xl"
            borderBottomRightRadius="2xl"
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            bg="whiteAlpha.800"
            onClick={prevSlide}
          >
            <ChevronLeftIcon boxSize="9" />
          </Button>
        </Box>
        <Box position="absolute" right={0} top="calc(50% - 40px)">
          <Button
            px={0}
            py={6}
            borderTopLeftRadius="2xl"
            borderBottomLeftRadius="2xl"
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
            bg="whiteAlpha.800"
            onClick={nextSlide}
          >
            <ChevronRightIcon boxSize={9} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

type CarouselItemProps = {
  children: React.ReactNode;
  slideNumber: number;
  activeSlide: number;
};

function CarouselItem({
  children,
  slideNumber,
  activeSlide,
}: CarouselItemProps) {
  const isActive = slideNumber === activeSlide;
  return (
    <Box
      position="absolute"
      opacity={isActive ? 1 : 0}
      aria-hidden={isActive ? false : true}
      transition="opacity 600ms ease-in-out 0s, visibility 600ms ease-in-out 0s;"
    >
      {children}
    </Box>
  );
}
