import styles from "./PlayAgain.module.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SocketContext } from "../../providers/Socket";
import WhitePillButton from "../WhitePillButton";
import HeaderText from "../HeaderText";

const PlayAgain = () => {
  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const playAgain = () => {
    socket.emit("play-again");
    navigate("/createhomepage");
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
      <div className={styles.textBox}>
        <HeaderText text={"Thanks for playing!"} />
        <div className={styles.mainTextBox}>
          <p>
            THE TOP
            <br />
            TRUTH:
            <br /> <span>ALEX</span>
          </p>
          <p>
            THE BEST
            <br />
            DARE:
            <br /> <span>STEN</span>
          </p>
        </div>
      </div>
      <div className={styles.btnBox}>
        <WhitePillButton text={"PLAY AGAIN"} onStart={playAgain} />
        <WhitePillButton text={"ABOUT ENACTUS"} onStart={aboutEnactus} />
      </div>
    </div>
  );
};

export default PlayAgain;
