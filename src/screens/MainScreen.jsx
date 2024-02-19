import styles from "./MainScreen.module.css";
import WalkieTalkieButton from "../components/WalkieTalkieButton";
import Username from "../components/Username";

export default function MainScreen() {
  return (
    <div className={styles.main}>
      <WalkieTalkieButton />
      <Username username="John Doe" isTalking={true} />
      <Username username="Jane Doe" isTalking={false} />
      <Username username="John Smith" isTalking={false} />
      <Username username="Jane Smith" isTalking={false} />
    </div>
  );
}
