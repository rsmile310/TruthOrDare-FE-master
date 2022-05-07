import { useEffect, useState, useContext, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  SERVER_URL,
  GAME_STATUS,
  PLAYER_STATUS,
  LOBBY_STATUS,
} from "../../const";
import {
  debug,
  defaultName,
  defaultRoomId,
  defaultRoomFound,
  defaultPlayer,
  defaultPlayers,
  defaultGameRoom,
  defaultAction,
  defaultActions,
} from "../../defaults";

import styles from "./GameRoom.module.scss";

import { SocketContext } from "../../providers/Socket";

import Lobby from "../../components/Lobby/Lobby";
import PlayerSelection from "../../components/PlayerSelection/PlayerSelection";
import TruthOrDareSelection from "../../components/TruthOrDareSelection/TruthOrDareSelection";
import ActionSelection from "../../components/ActionSelection/ActionSelection";
import ActionReveal from "../../components/ActionReveal/ActionReveal";
import ActionRating from "../../components/ActionRating/ActionRating";
import EndRound from "../../components/EndRound/EndRound";
import PlayAgain from "../../components/PlayAgain/PlayAgain";
import JoinForm from "../../components/JoinForm";
import GameLobbyPage from "../GameLobbyPage";

const axiosInstance = axios.create({
  withCredentials: true,
});

const GameRoom = () => {
  const socket = useContext(SocketContext);
  const [name, setName] = useState(defaultName);
  const [avatar, setAvatar] = useState('');
  const { roomId } = useParams(defaultRoomId);
  const [roomFound, setRoomFound] = useState(defaultRoomFound);
  const [roomError, setRoomError] = useState("");
  const [players, setPlayers] = useState(defaultPlayers);
  const [player, setPlayer] = useState(defaultPlayer);
  const [timer, setTimer] = useState("");
  const [actions, setActions] = useState(defaultActions);
  const [action, setAction] = useState(defaultAction);
  const [gameRoom, setGameRoom] = useState(defaultGameRoom);

  const handleNameSubmit = (name, avatar) => {
    const myName = name;
    localStorage.setItem(`tod-name-${roomId}`, myName);
    localStorage.setItem('avatar', avatar);
    setName(myName);
    setAvatar(avatar);
  };

  useEffect(() => {
    if (debug) return;
    const checkRoomExists = () => {
      axiosInstance.get(`${SERVER_URL}/api/getRoom/${roomId}`).then((res) => {
        if (res.data) {
          setRoomFound(true);
        } else {
          setRoomError("Room does not exist!");
        }
      });
    };

    if (!roomFound) {
      console.log(localStorage.getItem(`tod-name-${roomId}`));
      setName(localStorage.getItem(`tod-name-${roomId}`));
      setAvatar(localStorage.getItem("avatar"));
      checkRoomExists();
    }
  }, [roomId, roomFound]);

  useEffect(() => {
    if (debug) return;
    if (socket && roomFound && name) {
      socket.emit("join-room", { roomId: roomId, name: name, avatar: avatar });
    }
  }, [socket, roomFound, name]);

  useEffect(() => {
    if (debug) return;
    if (socket && roomFound) {
      socket.on("room-error", (error) => {
        setRoomError(error);
      });

      // Update all players
      socket.on("players-updated", (players) => {
        setPlayer(players.find((player) => player.socketId == socket.id));
        setPlayers(players);
      });

      // Update the state of the room
      socket.on("room-updated", (room) => {
        setGameRoom({
          room: room,
          lobbyOwner: room.ownerId == player.id,
          currentPlayer: players.find(
            (player) => player.id == room.currentPlayerId
          ),
        });
      });

      // Update the timer
      socket.on("timer", (timer) => {
        console.log(timer);
        setTimer(timer);
      });

      socket.on("action-selection", (actions) => {
        setActions(actions);
      });

      socket.on("action-reveal", (winningAction) => {
        setAction(winningAction);
      });

      return () => {
        socket.off("room-error");
        socket.off("room-updated");
        socket.off("players-updated");
        socket.off("timer");
        socket.off("action-selection");
        socket.off("action-reveal");
      };
    }
  }, [socket, roomFound, roomId, name, players, player]);

  return (
    <div className={styles.gameRoom}>
      {roomError !== "" ? (
        <>
          <h1>{roomError}</h1>
        </>
      ) : name === null ? (
        <JoinForm handleNameSubmit={handleNameSubmit} />
      ) : (
        <>
          {
            gameRoom.room.lobbyStatus === LOBBY_STATUS.LOBBY &&
            <GameLobbyPage
              players={players}
              room={gameRoom.room}
              lobbyOwner={gameRoom.lobbyOwner}
              roomId={roomId}
            />
          }
          {gameRoom.room.lobbyStatus === LOBBY_STATUS.GAME && (
            <>
              {gameRoom.room.gameStatus === GAME_STATUS.CHOOSING_PLAYER && (
                <PlayerSelection
                  players={players}
                  currentPlayer={gameRoom.currentPlayer}
                />
              )}
              {gameRoom.room.gameStatus === GAME_STATUS.CHOOSING_TORD && (
                <TruthOrDareSelection currentPlayer={gameRoom.currentPlayer} />
              )}
              {gameRoom.room.gameStatus === GAME_STATUS.ACTION_VOTE && (
                <ActionSelection
                  currentPlayer={gameRoom.currentPlayer}
                  truthOrDare={gameRoom.room.truthOrDare}
                  actions={actions}
                  timer={timer}
                />
              )}
              {gameRoom.room.gameStatus === GAME_STATUS.PERFORMING_ACTION && (
                <ActionReveal
                  currentPlayer={gameRoom.currentPlayer}
                  truthOrDare={gameRoom.room.truthOrDare}
                  action={action}
                />
              )}
              {gameRoom.room.gameStatus === GAME_STATUS.RATING && (
                <ActionRating currentPlayer={gameRoom.currentPlayer} truthOrDare={gameRoom.room.truthOrDare} />
              )}
              {gameRoom.room.gameStatus === GAME_STATUS.ROUND_END && (
                <EndRound currentPlayer={gameRoom.currentPlayer} />
              )}
            </>
          )}
          {gameRoom.room.lobbyStatus === LOBBY_STATUS.END && <PlayAgain />}
        </>
      )}
    </div>
  );
};

export default GameRoom;
