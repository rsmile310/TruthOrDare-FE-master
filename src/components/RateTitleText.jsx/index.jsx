import styles from "./index.module.scss";

const RateTitleText = (props) => {
  const { truthOrDare, top } = props;
  return (
    <div className={styles.rateTitleText} style={{ top: `${top}` }}>
      <h1>RATE</h1>
      <h2>THE</h2>
      <h1>{truthOrDare}</h1>
    </div>
  );
};
export default RateTitleText;
