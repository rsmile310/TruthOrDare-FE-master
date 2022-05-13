import { useContext, useEffect } from "react";
import { SocketContext } from "../../providers/Socket";
import TruthWait from "./TruthWait";
import TruthSelect from "./TruthSelect";

const ActionSelection = ({ currentPlayer, actions, truthOrDare }) => {
  const socket = useContext(SocketContext);
  const actionSelected = (id) => {
    socket.emit("action-selected", id);
  };
  useEffect(() => {
    console.log(truthOrDare);
  });
  return (
    <div>
      {currentPlayer.socketId === socket.id ? (
        <TruthWait truthOrDare={truthOrDare} />
      ) : (
        <TruthSelect
          actions={actions}
          actionSelected={(id) => actionSelected(id)}
          truthOrDare={truthOrDare}
        />
      )}
    </div>
  );
};

export default ActionSelection;
