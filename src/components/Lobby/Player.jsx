import styles from "./Lobby.module.scss";

const Player = (props) => {
  const { name, avatar } = props;
  return (
    <div className={styles.playerNameBox}>
      <img
        width="51px"
        height="53px"
        src={avatar}
        alt=""
      />
      <div className={styles.playerName}>
        <p>{name}</p>
      </div>
    </div>
  );
};
export default Player;
