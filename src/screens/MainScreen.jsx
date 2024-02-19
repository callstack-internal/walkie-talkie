import styles from "./MainScreen.module.css";
import WalkieTalkieButton from "../components/WalkieTalkieButton";
import Username from "../components/Username";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CameraView from "../components/CameraView";

export default function MainScreen() {
  const username = useRef("");
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);

  const getUserName = () => {
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername) {
      navigate("/");
    } else {
      username.current = storedUsername;
    }
  };

  getUserName();

  return (
    <div className={styles.main}>
      <CameraView isPressed={isPressed} />
      <WalkieTalkieButton isPressed={isPressed} setIsPressed={setIsPressed} />
      {username.current ? (
        <Username username={username.current} isTalking={false} />
      ) : null}
    </div>
  );
}
