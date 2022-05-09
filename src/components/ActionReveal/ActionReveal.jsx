import { useContext } from "react";
import styles from "./ActionReveal.module.scss";
import { SocketContext } from "../../providers/Socket";
import Navbar from "../Navbar";
import WhitePillButton from "../WhitePillButton";

const ActionReveal = ({ currentPlayer, action, truthOrDare }) => {
  const socket = useContext(SocketContext);

  const actionPerformed = (id) => {
    socket.emit("action-performed");
  };

  return (
    <div
      className={styles.actionReveal}
      style={{
        backgroundImage:
          "url(/images/other/FRA-Second-Player---Truth-Reveal---BACKGROUND.jpg)",
      }}
    >
      <Navbar />
      <div>
        <h1>{currentPlayer.name}</h1>
        <div className={styles.texBox}>
          <h6>
            Your {truthOrDare} is
            <br />
            {action.text}
          </h6>
        </div>
        <div className={styles.btnBox}>
          {currentPlayer.socketId == socket.id && (
            <WhitePillButton
              onStart={() => actionPerformed(action.id)}
              text="DONE"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionReveal;
