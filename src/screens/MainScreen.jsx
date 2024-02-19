import styles from "./MainScreen.module.css";
import WalkieTalkieButton from "../components/WalkieTalkieButton";
import Username from "../components/Username";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function MainScreen() {
  const username = useRef("");
  const navigate = useNavigate();

  const getUserName = () => {
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername) {
      navigate("/")
    } else {
      username.current = storedUsername;
    }
  }

  getUserName();

  return (
    <div className={styles.main}>
      <WalkieTalkieButton />
      { username.current ? 
      <Username username={username.current} isTalking={false} />
      : null }
    </div>
  );
}
