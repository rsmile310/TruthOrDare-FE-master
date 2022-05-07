import styles from "./TruthOrDareSelection.module.scss";
import LoadingTextIcon from "../LoadingTextIcon";

const TruthOrDareWait = ({ currentPlayerName }) => {
  const waitingText =
    "Waiting for " + currentPlayerName + " to pick <br /> truth or dare...";
  return (
    <div
      className={styles.truthOrDareWait}
      style={{
        backgroundImage:
          "url(/images/other/FRA-Second-Player---Truth-Dare---BACKGROUND.jpg)",
      }}
    >
      <div className={styles.playerNameBox}>
        <p>IT’S</p>
        <h1>{currentPlayerName}</h1>
      </div>
      <div>
        <LoadingTextIcon text={waitingText} />
      </div>
    </div>
  );
};
export default TruthOrDareWait;
