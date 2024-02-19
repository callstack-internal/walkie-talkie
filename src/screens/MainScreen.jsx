import styles from "./MainScreen.module.css";
import WalkieTalkieButton from "../components/WalkieTalkieButton";
import Username from "../components/Username";
import CameraView from "../components/CameraView";
import { useState } from "react";

export default function MainScreen() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className={styles.main}>
      <CameraView isPressed={isPressed} />
      <WalkieTalkieButton isPressed={isPressed} setIsPressed={setIsPressed} />
      <Username username="John Doe" isTalking={true} />
      <Username username="Jane Doe" isTalking={false} />
      <Username username="John Smith" isTalking={false} />
      <Username username="Jane Smith" isTalking={false} />
    </div>
  );
}
