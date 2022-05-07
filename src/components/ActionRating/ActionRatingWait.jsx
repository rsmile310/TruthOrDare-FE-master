import LoadingIcon from "../LoadingIcon/LoadIcon.jsx";
import LoadingTextIcon from "../LoadingTextIcon/index.jsx";
import RateTitleText from "../RateTitleText.jsx";
import styles from "./ActionRating.module.scss";
const ActionRatingWait = ({ truthOrDare }) => {
  return (
    <div
      className={styles.actionRatingWait}
      style={{
        backgroundImage:
          "url(/images/other/FRA-First-Player---Done-_-Wait-Rate---BACKGROUND.jpg)",
      }}
    >
      {/* <p>Please wait while others rate</p> */}
      <RateTitleText truthOrDare={truthOrDare} top={"29%"} />
      <LoadingTextIcon
        text={"Please wait whilst the other<br /> players rate the truth…"}
      />
    </div>
  );
};
export default ActionRatingWait;
