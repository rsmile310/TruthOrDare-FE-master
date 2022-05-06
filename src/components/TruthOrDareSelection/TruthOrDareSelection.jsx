import { useContext } from 'react';
import styles from './TruthOrDareSelection.module.scss';
import { SocketContext } from '../../providers/Socket'

const TruthOrDareSelection = ({currentPlayer}) => {
    const socket = useContext(SocketContext)

    const truthOrDareSelected = (truthOrDare) => {
        socket.emit('tord-selected', truthOrDare);
    }

    return (
        <div>
            {currentPlayer.socketId == socket.id ? (
                <>
                    <button onClick={(() => truthOrDareSelected('truth'))}>Truth</button>
                    <button onClick={(() => truthOrDareSelected('dare'))}>Dare</button>
                </>
                
            ) : (
                <>
                    <p>Waiting for {currentPlayer.name}</p>
                </>
            )}
            
        </div>
    )
}

export default TruthOrDareSelection;