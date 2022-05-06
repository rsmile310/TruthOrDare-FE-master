import { useContext } from 'react';
import styles from './ActionReveal.module.scss';
import { SocketContext } from '../../providers/Socket'

const ActionReveal = ({currentPlayer, action, truthOrDare}) => {
    const socket = useContext(SocketContext)

    const actionPerformed = (id) => {
        socket.emit('action-performed');
    }

    return (
        <div>
            {currentPlayer.socketId == socket.id ? (
                <>
                    <p>{currentPlayer.name}</p>
                    <p>Your {truthOrDare} is</p>
                    <p>{action.text}</p>
                    <button onClick={() => actionPerformed(action.id)}>Done!</button>
                </>
                
            ) : (
                <>
                  <p>The votes are in!</p>
                  <p>{action.text}</p>
                </>
            )}
        </div>
    )
}

export default ActionReveal;