import LoadingIcon from "../LoadingIcon/LoadIcon";
import RateTitleText from "../RateTitleText.jsx";
import WhitePillButton from "../WhitePillButton/index.jsx";
import styles from "./ActionRating.module.scss";
const ActionRatingStart = ({ onStart, truthOrDare }) => {
  return (
    <div
      className={styles.actionRatingStart}
      style={{
        backgroundImage:
          "url(/images/other/FRA-Second-Player---End-Round-_-Vote---BACKGROUND.jpg)",
      }}
    >
      <RateTitleText truthOrDare={truthOrDare} top={"14%"} />
      <div className={styles.btnBox}>
        <WhitePillButton onStart={() => onStart(3)} text={"Brilliant"} />
        <WhitePillButton onStart={() => onStart(2)} text={"Not Bad"} />
        <WhitePillButton onStart={() => onStart(1)} text={"Boring"} />
        <LoadingIcon />
      </div>
    </div>
  );
};
export default ActionRatingStart;
