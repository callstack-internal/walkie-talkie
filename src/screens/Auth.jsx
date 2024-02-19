import { Box, Button, Center } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useNameContext } from "../context/NameContext";

export default function Auth() {
  const { name, setName } = useNameContext();
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Center h="100vh">
      <Box w="300px">
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        <Center marginTop={5}>
          <Button marginTop={7} colorScheme="blue">
            Join Walkie talkie
          </Button>
        </Center>
      </Box>
    </Center>
  );
}
