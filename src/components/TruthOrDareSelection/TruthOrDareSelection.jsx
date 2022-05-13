import { useContext } from "react";
import { SocketContext } from "../../providers/Socket";
import TruthOrDareWait from "./TruthOrDareWait";
import TruthOrDareStart from "./TruthOrDareStart";

const TruthOrDareSelection = ({ currentPlayer }) => {
  const socket = useContext(SocketContext);

  const truthOrDareSelected = (truthOrDare) => {
    socket.emit("tord-selected", truthOrDare);
  };
  console.log(currentPlayer);
  return (
    <div>
      {currentPlayer.socketId === socket.id ? (
        <TruthOrDareStart
          onStart={truthOrDareSelected}
          currentPlayerName={currentPlayer.name}
        />
      ) : (
        <TruthOrDareWait currentPlayerName={currentPlayer.name} />
      )}
    </div>
  );
};

export default TruthOrDareSelection;
