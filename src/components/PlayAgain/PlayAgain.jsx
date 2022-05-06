import { useContext } from 'react';
import { SocketContext } from '../../providers/Socket'

const PlayAgain = () => {
    const socket = useContext(SocketContext)

    const playAgain = () => {
        socket.emit('play-again');
    }

    const aboutEnactus = () => {
        
    }

    return (   
        <>
            <button onClick={playAgain}>Play Again</button>
            <button onClick={aboutEnactus}>About Enactus</button>  
        </>
    )
}

export default PlayAgain;