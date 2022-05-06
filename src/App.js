import "./styles/global.scss";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
// Page imports
import CreateGamePage from "./pages/CreateGamePage";
import GameRoom from "./pages/game-room/GameRoom";

import { SocketProvider } from "./providers/Socket";
import HomePage from "./pages/HomePage";
import CreateHomePgae from "./pages/CreateHomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/createhomepage" element={<CreateHomePgae />} />
        <Route exact path="/creategame" element={<CreateGamePage />} />
        <Route
          exact
          path="/room/:roomId"
          element={
            <SocketProvider>
              <GameRoom />
            </SocketProvider>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
