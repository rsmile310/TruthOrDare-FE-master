import "./style.scss";
import { useEffect, useState } from "react";

import HeaderText from "../../components/HeaderText";
import Lobby from "../../components/Lobby/Lobby";
import Navbar from "../../components/Navbar";
import LoadingIcon from "../../components/LoadingIcon/LoadIcon";

const GameLobbyPage = (props) => {
  const { players, room, lobbyOwner } = props;
  const [data, setData] = useState({});
  const temp = "Waiting for " + players[0].name + " to<br /> start the game...";
  const dataConfig = [
    {
      headerText: "Game Lobby",
      alertText: "SCAN THE QR CODE <br />TO JOIN THE GAME!",
      background:
        "/images/other/FRA-First-Player---Lobby-_-QR-Code-BACKGROUND.jpg",
    },
    {
      headerText: temp,
      alertText: "",
      background:
        "/images/other/FRA-Second-Player---Lobby-_-Waiting---BACKGROUND.jpg",
    },
  ];
  useEffect(() => {
    lobbyOwner ? setData(dataConfig[0]) : setData(dataConfig[1]);
  }, []);
  return (
    <div
      className="gameLobbyPage"
      style={{
        backgroundImage: `url(${data.background})`,
      }}
    >
      <Navbar />
      <HeaderText text={data.headerText} />
      {!lobbyOwner ? (
        <div className="loadingIconBox">
          <LoadingIcon />
        </div>
      ) : (
        ""
      )}
      <h2 dangerouslySetInnerHTML={{ __html: data.alertText }} />
      {/* <h1>Found room {roomId}</h1> */}
      <Lobby players={players} room={room} lobbyOwner={lobbyOwner} />
    </div>
  );
};
export default GameLobbyPage;
