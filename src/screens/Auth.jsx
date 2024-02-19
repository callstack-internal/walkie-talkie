import { Box, Button, Center } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Auth() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      localStorage.setItem("username", name);
      navigate("/mainScreen");
    } else {
      alert("Please enter a name");
    }
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
          <Button marginTop={7} colorScheme="blue" onClick={handleSubmit} >
            Join Walkie talkie
          </Button>
        </Center>
      </Box>
    </Center>
  );
}
