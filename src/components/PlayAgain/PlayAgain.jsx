import styles from "./PlayAgain.module.scss";
import { useContext } from "react";
import { SocketContext } from "../../providers/Socket";
import WhitePillButton from "../WhitePillButton";
import Navbar from "../Navbar";
import HeaderText from "../HeaderText";

const PlayAgain = () => {
  const socket = useContext(SocketContext);

  const playAgain = () => {
    socket.emit("play-again");
  };

  const aboutEnactus = () => {};

  return (
    <div
      className="mainPage"
      style={{
        display: "flex",
        backgroundImage:
          "url(/images/other/FRA-All-Players---Play-Again---BACKGROUND.jpg)",
      }}
    >
      <Navbar />
      <div className={styles.textBox}>
        <HeaderText text={"Thanks for playing!"} />
      </div>
      <div className={styles.btnBox}>
        <WhitePillButton text={"PLAY AGAIN"} onStart={playAgain} />
        <WhitePillButton text={"ABOUT ENACTUS"} onStart={aboutEnactus} />
      </div>
    </div>
  );
};

export default PlayAgain;
