import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Elias Gabriel</Text>
          <Text color="gray.300" fontSize="small">
            gabrielmuller708@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gabriel Muller"
        src="https://github.com/gabrielmuller1.png"
      />
    </Flex>
  );
}
