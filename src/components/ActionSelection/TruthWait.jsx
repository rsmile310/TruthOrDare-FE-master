import LoadingTextIcon from "../LoadingTextIcon";
import styles from "./ActionSelection.module.scss";

const TruthWait = ({ truthOrDare }) => {
  return (
    <div
      className={styles.truthWait}
      style={{
        backgroundImage:
          "url(/images/other/FRA-First-Player---Truth-Wait-Background.jpg)",
      }}
    >
      <div className={styles.textBox}>
        <p>
          ARE YOU
          <br /> READY to
          <br />
          <span>
            TELL THE
            <br /> {truthOrDare}?
          </span>
        </p>
      </div>

      <LoadingTextIcon text="Hold tight while other<br /> players vote for your truth…" />
    </div>
  );
};
export default TruthWait;
