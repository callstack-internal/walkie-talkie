import WalkieTalkieButton from "../components/WalkieTalkieButton";
import styles from "./MainScreen.module.css";

export default function MainScreen() {
  return (
    <div className={styles.main}>
      <WalkieTalkieButton />
    </div>
  );
}
