import LoadingTextIcon from "../LoadingTextIcon";
import styles from "./ActionSelection.module.scss";

const TruthWait = () => {
  return (
    <div
      className={styles.truthWait}
      style={{
        backgroundImage:
          "url(/images/other/FRA-First-Player---Truth-Wait-Background.jpg)",
      }}
    >
      <LoadingTextIcon text='Hold tight while other<br /> players vote for your truth…' />
    </div>
  );
};
export default TruthWait;
