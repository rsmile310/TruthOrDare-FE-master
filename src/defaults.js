import { GAME_STATUS, LOBBY_STATUS } from "./const";

const debug = false;
const currentPlayers = 8;

const defaultSocket = debug ? { id: "0" } : null;
const defaultName = debug ? "Player" : null;
const defaultAvatar = debug ? "Player" : null;
const defaultRoomId = debug ? "tall-jellyfish-94" : null;

const defaultRoomFound = debug ? true : false;

const defaultPlayer = debug
  ? {
      id: "0",
      socketId: "0",
      truthScore: 0,
      dareScore: 0,
      playerStatus: "READY",
      roomId: defaultRoomId,
      name: defaultName,
      hasPlayed: false,
      hasVoted: false,
      avatar: defaultAvatar,
    }
  : {};

const defaultPlayers = fillPlayerArray();

function fillPlayerArray() {
  if (debug) {
    let array = Array(currentPlayers);
    array[0] = defaultPlayer;
    for (let i = 1; i < array.length; i++) {
      array[i] = {
        id: "i",
        socketId: "i",
        truthScore: 0,
        dareScore: 0,
        playerStatus: "READY",
        roomId: defaultRoomId,
        name: defaultName + i,
        hasPlayed: false,
        hasVoted: false,
        avatar: defaultAvatar+i,
      };
    }
    return array;
  } else {
    return [];
  }
}

const defaultGameRoom = debug
  ? {
      room: {
        id: defaultRoomId,
        ownerId: "0",
        currentPlayerId: "",

        // Change to switch between lobby/game/end screens
        lobbyStatus: LOBBY_STATUS.LOBBY,
        //

        // Change to switch between game screens
        gameStatus: GAME_STATUS.CHOOSING_PLAYER,
        //

        // Change to switch between truth/dare
        truthOrDare: "truth",
        //
      },
      lobbyOwner: true,

      // Change index to update currentPlayer
      currentPlayer: defaultPlayers[0],
      //
    }
  : { room: {}, lobbyOwner: false, currentPlayer: {} };

const defaultAction = debug
  ? { id: "1", text: "This is a truth or dare action string." }
  : {};

const defaultActions = fillActionArray();

function fillActionArray() {
  if (debug) {
    let array = Array(3);
    array[0] = defaultAction;
    for (let i = 1; i < array.length; i++) {
      array[i] = { id: i, text: "This is a truth or dare action string." };
    }
    return array;
  } else {
    return [];
  }
}

export {
  debug,
  defaultSocket,
  defaultName,
  defaultAvatar,
  defaultRoomId,
  defaultRoomFound,
  defaultPlayer,
  defaultPlayers,
  defaultGameRoom,
  defaultAction,
  defaultActions,
};
