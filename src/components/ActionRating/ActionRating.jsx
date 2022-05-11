import styles from "./ActionRating.module.scss";
import { useContext } from "react";
import { SocketContext } from "../../providers/Socket";
import Navbar from "../Navbar";
import ActionRatingStart from "./ActionRatingStart";
import ActionRatingWait from "./ActionRatingWait";

const ActionRating = ({ currentPlayer, truthOrDare }) => {
  const socket = useContext(SocketContext);
  const onStart = (score) => {
    socket.emit("action-score-given", score);
  };

  return (
    <div className={styles.actionRating}>
      <Navbar />
      {currentPlayer.socketId === socket.id ? (
        <ActionRatingWait truthOrDare={truthOrDare} />
      ) : (
        <ActionRatingStart onStart={onStart} truthOrDare={truthOrDare} />
      )}
    </div>
  );
};

export default ActionRating;
