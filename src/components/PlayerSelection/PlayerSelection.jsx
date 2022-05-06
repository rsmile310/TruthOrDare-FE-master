import "./style.scss";
import { PLAYER_STATUS } from "../../const";
import { SocketContext } from "../../providers/Socket";
import Navbar from "../Navbar";

const PlayerSelection = ({ players, currentPlayer }) => {
  return (
    <div
      className='playerSelBox'
      style={{
        backgroundImage:
          "url(/images/other/FRA-Second-Player---Player-Pick---BACKGROUND.jpg)",
      }}
    >
      <Navbar />
      
      {/* <p>Picking a player from</p>
      <ul>
        {players.map(
          (player, i) =>
            player.playerStatus != PLAYER_STATUS.DISCONNECTED &&
            !player.hasPlayed && <li key={i}>{player.name}</li>
        )}
      </ul>
      <p>(its going to be {currentPlayer.name})</p> */}
    </div>
  );
};

export default PlayerSelection;
