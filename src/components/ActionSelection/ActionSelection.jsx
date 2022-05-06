import { useContext } from 'react';
import styles from './ActionSelection.module.scss';
import { SocketContext } from '../../providers/Socket'

const ActionSelection = ({currentPlayer, actions, truthOrDare, timer}) => {
    const socket = useContext(SocketContext)

    const actionSelected = (id) => {
        socket.emit('action-selected', id);
        console.log(timer)
    }

    return (
        <div>
            {currentPlayer.socketId == socket.id ? (
                <>
                    <p>Time for a {truthOrDare}</p>
                </>
                
            ) : (
                <>
                    {actions.map((action, i) => (
                        <li key={i}>
                            <button onClick={(() =>actionSelected(action.id))}>{action.text}</button>
                        </li>
                    ))}
                </>
            )}
            <p>{timer}</p>
        </div>
    )
}

export default ActionSelection;