import { useContext } from "react";
import styles from "./ActionSelection.module.scss";
import { SocketContext } from "../../providers/Socket";
import TruthWait from "./TruthWait";
import TruthSelect from "./TruthSelect";
import Navbar from "../Navbar";

const ActionSelection = ({ currentPlayer, actions, truthOrDare, timer }) => {
  const socket = useContext(SocketContext);

  const actionSelected = (id) => {
    socket.emit("action-selected", id);
    console.log(id);
  };

  return (
    <div>
      <Navbar />
      {currentPlayer.socketId == socket.id ? (
        <TruthWait />
      ) : (
        <TruthSelect actions={actions} actionSelected={(id)=>actionSelected(id)} />
      )}
    </div>
  );
};

export default ActionSelection;
