import { useContext } from "react";
import styles from "./Lobby.module.scss";
import { SocketContext } from "../../providers/Socket";
import { PLAYER_STATUS } from "../../const";
import WhitePillButton from "../WhitePillButton";
import Player from "./Player";
// import LoadingIcon from '/images/other/loading.svg'

const Lobby = ({ players, room, lobbyOwner }) => {
  const socket = useContext(SocketContext);

  const startGame = () => {
    socket.emit("start-game");
  };
  return (
    <div>
      <div className={styles.playerListBox}>
        <div>
          {players.map(
            (player, i) =>
              player.playerStatus != PLAYER_STATUS.DISCONNECTED && (
                <Player key={i} name={player.name} avatar={player.avatar} />
              )
          )}
        </div>
      </div>
      <div className={styles.btnBox}>
        {lobbyOwner ? (
          players.filter(
            (player) => player.playerStatus === PLAYER_STATUS.READY
          ).length < 2 ? (
            ""
          ) : (
            <WhitePillButton
              className={styles.btn}
              onStart={startGame}
              text={"START GAME"}
            />
          )
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Lobby;
