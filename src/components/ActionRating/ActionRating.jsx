import { useContext } from 'react';
import { SocketContext } from '../../providers/Socket'

const ActionRating = ({currentPlayer}) => {
    const socket = useContext(SocketContext)

    const actionScoreGiven = (score) => {
        console.log('here');
        socket.emit('action-score-given', score);
    }

    return (
        <div>
            {currentPlayer.socketId == socket.id ? (
                <>
                  <p>Please wait while others rate</p>
                </>
                
            ) : (
                <>
                  <button onClick={() => actionScoreGiven(3)}>Brilliant</button>
                  <button onClick={() => actionScoreGiven(2)}>Not Bad</button>
                  <button onClick={() => actionScoreGiven(1)}>Boring</button>
                </>
            )}
        </div>
    )
}

export default ActionRating;