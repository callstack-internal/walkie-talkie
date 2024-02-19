import { Box, Button, Center } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useNameContext } from "../context/NameContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const { name, setName } = useNameContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setName(e.target.value);
  };
  
  const handleOnClick = () => {
    if (name != "") {
      navigate("/mainScreen");
    } else {
      alert("Please enter a name");
    }
  }

  return (
    <Center h="100vh">
      <Box w="300px">
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        <Center marginTop={5}>
          <Button marginTop={7} colorScheme="blue" onClick={handleOnClick}>
            Join Walkie talkie
          </Button>
        </Center>
      </Box>
    </Center>
  );
}
