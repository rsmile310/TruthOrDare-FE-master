import "./style.scss";
import { PLAYER_STATUS } from "../../const";
import { SocketContext } from "../../providers/Socket";
import Navbar from "../Navbar";
import { useEffect, useRef, useState } from "react";

const PlayerSelection = ({ players, currentPlayer }) => {
  const [data, setData] = useState("");
  const defaultPlayers = [
    {
      name: "Alex",
      avatar: "/images/avatar/Face 1.png",
    },
    {
      name: "Simon",
      avatar: "/images/Face 1.png",
    },
    {
      name: "Sten",
      avatar: "/images/Face 1.png",
    },
    {
      name: "James",
      avatar: "/images/Face 1.png",
    },
    {
      name: "Olivia",
      avatar: "/images/Face 1.png",
    },
    {
      name: "Valentyna",
      avatar: "/images/Face 1.png",
    },
  ];
  let bottle = useRef(null);
  let AMOUNT_OF_ITEMS = 6; // change this if there is a different amount of items
  let segment_width = 360 / AMOUNT_OF_ITEMS;
  useEffect(() => {
    setTimeout(() => spin(), 5000);
  }, []);
  const spin = () => {
    setData(true);
    setTimeout(() => stop(), 8000);
  };
  const stop = () => {
    setData(false);
    let matrix = getComputedStyle(bottle.current).transform;
    let values = matrix.split("(")[1];
    values = values.split(")")[0];
    values = values.split(",");
    let angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));

    if (angle < 0) {
      angle = Math.abs(180 + angle) + 180;
    }

    // check which item the bottle is pointing to
    let winner = Math.ceil((angle + segment_width / 2) / segment_width);
    if (winner == 7) winner = 1;
    console.log(defaultPlayers[Number(winner - 1)]);
  };

  // const randomFloat = (min = 4, max = 6) => {
  //   return Math.random() * (max - min + 1) + min;
  // };

  
  return (
    <div
      className="playerSelBox"
      style={{
        backgroundImage:
          "url(/images/other/FRA-Second-Player---Player-Pick---BACKGROUND.jpg)",
      }}
    >
      <Navbar />
      <div className="spinBox">
        <div>
          <ul className="circle-container">
            {defaultPlayers.map((e, index) => (
              <li key={index}>
                <div>
                  <p className="my-0">{e.name}</p>
                  <img
                    width="51px"
                    height="51px"
                    src="/images/avatar/Face 1.png"
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="bottleBox">
            <img
              ref={bottle}
              className={`bottle rotate ${data ? "active" : ""}`}
              src="/images/other/bottle1.png"
            />
          </div>
          <img
            className="spinCircle"
            src="/images/other/SPIN CIRCLE@2x.png"
            alt=""
          />
        </div>
      </div>
      {/* <p>Picking a player from</p>
      <ul>
        {players.map(
          (player, i) =>
            player.playerStatus != PLAYER_STATUS.DISCONNECTED &&
            !player.hasPlayed && <li key={i}>{player.name}</li>
        )}
      </ul>
      <p>(its going to be {currentPlayer.name})</p> */}
    </div>
  );
};

export default PlayerSelection;
