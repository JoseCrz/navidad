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
                border={isSelected ? "2px solid brown" : "2px solid gray"}
                overflow="hidden"
              >
                <Image
                  src={profile.avatar}
                  alt="Imagen de Perfil de Esferin"
                  width="66px"
                  height="66px"
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
