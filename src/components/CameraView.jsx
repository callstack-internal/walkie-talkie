import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function CameraView({ isPressed }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPressed) {
      navigator.mediaDevices
        .getUserMedia({ video: { width: 200, height: 250 }, audio: true })
        .then((stream) => {
          const video = document.querySelector("video");
          video.srcObject = stream;
          video.onlodadmetadata = () => {
            videoRef.current.play();
          };
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isPressed]);

  return (
    <Box position="absolute" top="20px" left="20px">
      {isPressed && <video id="video" autoPlay></video>}
    </Box>
  );
}

CameraView.propTypes = {
  isPressed: PropTypes.bool.isRequired,
};
