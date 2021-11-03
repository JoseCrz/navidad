import Image from "next/image";
import { Box, Flex, Circle, Text } from "@chakra-ui/react";
import type { Profile } from "types";

type ProfileSelectorProps = {
  profiles: Profile[];
  selectedIndex: number;
  onSelectProfile: (profileIndex: number) => void;
};
export function ProfileSelector({
  profiles,
  selectedIndex,
  onSelectProfile,
}: ProfileSelectorProps) {
  return (
    <Flex
      bg="white"
      width="100%"
      minHeight="116px"
      justifyContent="center"
      boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)"
      zIndex="1"
      position="relative"
    >
      <Flex alignItems="center">
        {profiles.map((profile, profileIndex) => {
          const isSelected = profileIndex === selectedIndex;
          return (
            <Box
              key={profile.name}
              textAlign="center"
              mx={2}
              onClick={() => onSelectProfile(profileIndex)}
            >
              <Circle
                border={isSelected ? "3px solid brown" : "3px solid gray"}
                overflow="hidden"
                position="relative"
                size="66px"
              >
                <Image
                  priority
                  src={profile.avatar}
                  alt={`Imagen de Perfil de ${profile.name}`}
                  layout="fill"
                  objectFit="cover"
                  sizes="50vw"
                  placeholder="blur"
                />
              </Circle>
              <Text>{profile.name}</Text>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
}
