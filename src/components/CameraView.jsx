import { useEffect, useRef } from "react";

export default function CameraView() {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 500, height: 720 }, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return (
    <>
      <video ref={videoRef} src={videoRef.srcObject}></video>
    </>
  );
}
