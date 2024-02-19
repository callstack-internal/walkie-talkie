import { Button } from "@chakra-ui/react";
import { FaMicrophone } from "react-icons/fa";
import PropTypes from "prop-types";

function WalkieTalkieButton({ isPressed, setIsPressed }) {
  const handleMouseDown = () => {
    setIsPressed(true);
    // Add "on press" logic here,
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    // Add "on release" logic here
  };

  return (
    <Button
      leftIcon={<FaMicrophone />}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      // for mobile devices
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      bg={isPressed ? "red.500" : "green.500"}
      color="white"
      _hover={{
        bg: isPressed ? "red.600" : "green.600",
      }}
      _active={{
        bg: isPressed ? "red.700" : "green.700",
      }}
      height={150}
      width={150}
      borderRadius="full"
      shadow={"2xl"}
    >
      {isPressed ? "Release to Send" : "Press to Talk"}
    </Button>
  );
}
WalkieTalkieButton.propTypes = {
  isPressed: PropTypes.bool.isRequired,
  setIsPressed: PropTypes.func.isRequired,
};
export default WalkieTalkieButton;
