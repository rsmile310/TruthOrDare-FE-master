/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../const";
import socketIOClient from "socket.io-client";
import axios from "axios";
import { useParams } from "react-router-dom";
import { debug, defaultSocket } from "../defaults";

const axiosInstance = axios.create({
  withCredentials: true,
});

const SocketContext = React.createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(defaultSocket);
  const { roomId } = useParams(null);

  useEffect(() => {
    if (debug) return;

    if (!socket) {
      // dont like this but only way to get session to work first time
      const checkRoomExists = () => {
        axiosInstance.get(`${SERVER_URL}/api/getRoom/${roomId}`).then((res) => {
          if (res.data) {
            setSocket(
              socketIOClient(SERVER_URL, {
                withCredentials: true,
              })
            );
            console.log("connected");
          }
        });
      };

      checkRoomExists();
    } else {
      return () => {
        console.log("disconnected");
        socket.disconnect();
      };
    }
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
