import WhitePillButton from "../WhitePillButton";
import styles from "./TruthOrDareSelection.module.scss";

const TruthOrDareStart = ({ onStart, currentPlayerName }) => {
  return (
    <div
      className={styles.TruthOrDareStart}
      style={{
        backgroundImage:
          "url(/images/other/FRA-First-Player---Truth-Dare---BACKGROUND.jpg)",
      }}
    >
      <div className={styles.textBox}>
        <h1>{currentPlayerName}</h1>
        <p>IT'S YOUR TURN!</p>
      </div>
      <div className={styles.btnBox}>
        <WhitePillButton onStart={() => onStart("truth")} text={"Truth"} />
        <h2>OR</h2>
        <WhitePillButton onStart={() => onStart("dare")} text={"Dare"} />
      </div>
    </div>
  );
};
export default TruthOrDareStart;
