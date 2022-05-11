import styles from './EndRound.module.scss'
import { useContext, useEffect } from "react";
import { SocketContext } from "../../providers/Socket";
import LoadingTextIcon from "../LoadingTextIcon";
import Navbar from "../Navbar";
import WhitePillButton from '../WhitePillButton';

const EndRound = ({ currentPlayer }) => {
  // useEffect(()=>{
  //   console.log(currentPlayer)
  // },[])
  const socket = useContext(SocketContext);
    console.log(socket)
  const nextRound = () => {
    socket.emit("next-round");
  };

  const endGame = () => {
    socket.emit("end-game");
  };

  return (
    <div className='mainPage' style={{backgroundImage: 'url(/images/other/FRA-First-Player---End-Round-Rating-_-Next---BACKGROUND.jpg)'}}>
      <Navbar />
      <div className={styles.textBox}>
        <p>THAT WAS...</p>
        <h1>BRILLIANT</h1>
      </div>

      {currentPlayer.socketId === socket.id ? (
        <div className={styles.btnBox}>
          <WhitePillButton onStart={nextRound} text={'NEXT ROUND'} />
          <WhitePillButton onStart={endGame} text={'END GAME'} />
        </div>
      ) : (
        <LoadingTextIcon text={'Waiting for the next round<br /> to begin…'}/>
      )}
    </div>
  );
};

export default EndRound;
