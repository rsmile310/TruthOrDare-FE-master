import { useContext } from 'react';
import { SocketContext } from '../../providers/Socket'

const EndRound = ({currentPlayer}) => {
    const socket = useContext(SocketContext)

    const nextRound = () => {
        socket.emit('next-round');
    }

    const endGame = () => {
        socket.emit('end-game');
    }

    return (
        <div>
            {currentPlayer.socketId == socket.id ? (
                <>
                    <button onClick={nextRound}>Spin Again</button>
                    <button onClick={endGame}>End Game</button>  
                </>
                
            ) : (
                <>
                 <p>Waiting for next round to begin.</p>
                </>
            )}
        </div>
    )
}

export default EndRound;