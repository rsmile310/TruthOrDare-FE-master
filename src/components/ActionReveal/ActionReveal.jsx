import { useContext, useState } from "react";
import styles from "./ActionReveal.module.scss";
import { SocketContext } from "../../providers/Socket";
import WhitePillButton from "../WhitePillButton";
import Camera from "../Camera";

const ActionReveal = ({ currentPlayer, action, truthOrDare }) => {
  const socket = useContext(SocketContext);
  const actionPerformed = (id) => {
    socket.emit("action-performed");
  };
  const [showCamera, setShowCamera] = useState(false);
  const handleCloseCamera = () => {
    setShowCamera(false);
  };
  return (
    <div
      className={styles.actionReveal}
      style={{
        backgroundImage: `${
          currentPlayer.socketId === socket.id
            ? "url(/images/other/FRA-First-Player---Truth-Reveal---BACKGROUND.jpg)"
            : "url(/images/other/FRA-Second-Player---Truth-Reveal---BACKGROUND.jpg)"
        }`,
      }}
    >
      <div>
        <h1 className={styles.playerName}>{currentPlayer.name}</h1>
        <div className={styles.texBox}>
          <h6>
            Your {truthOrDare} is
            <br />
            {action.text}
          </h6>
        </div>
        {currentPlayer.socketId === socket.id ? (
          <div className={styles.btnBox}>
            <WhitePillButton
              onStart={() => setShowCamera(true)}
              text="FILM THE MOMENT"
            />
            <WhitePillButton
              onStart={() => actionPerformed(action.id)}
              text="DONE"
            />
          </div>
        ) : (
          <div className={styles.btnBox}>
            <WhitePillButton
              onStart={() => setShowCamera(true)}
              text="FILM THE MOMENT"
            />
          </div>
        )}
      </div>
      {showCamera && <Camera onClose={handleCloseCamera} />}
    </div>
  );
};

export default ActionReveal;
