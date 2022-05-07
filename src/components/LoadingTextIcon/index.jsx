import styles from "./index.module.scss";
import LoadingIcon from "../LoadingIcon/LoadIcon";

const LoadingTextIcon = ({ text }) => {
  return (
    <div className={styles.LoadingBox}>
      {text && <p dangerouslySetInnerHTML={{__html: text}} />}
      <LoadingIcon />
    </div>
  );
};
export default LoadingTextIcon;
