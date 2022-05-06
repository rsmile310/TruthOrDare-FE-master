import "./style.scss";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../const";
import axios from "axios";
import Navbar from '../../components/Navbar';
import HeaderText from "../../components/HeaderText";
import WhitePillButton from "../../components/WhitePillButton";
import AvatarSlider from "../../components/AvatarSlider";
import { useState } from "react";

const axiosInstance = axios.create({
  withCredentials: true,
});

const CreateGamePage = () => {
  const navigate = useNavigate();
  const createRoom = (name, path) => {
    var params = new URLSearchParams();

    axiosInstance
      .post(`${SERVER_URL}/api/createRoom`, params)
      .then((res) => {
        localStorage.setItem(`tod-name-${res.data}`, name);
        localStorage.setItem("avatar", path);
        navigate(`/room/${res.data}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // const joinRoom = roomId => {
  //     navigate(`/room/${roomId}`);
  // };
  const handleRoomFormSubmit = (event) => {
    event.preventDefault();
    const temp = document.querySelector(".slick-center img");
    const tempPath = temp.getAttribute("src");
    const name = event.target.elements.name.value.trim();
    if (name.length > 2) {
      createRoom(name, tempPath);
    }
  };

  // const handleJoinRoomFormSubmit = event => {
  //     event.preventDefault();
  //     const code = event.target.elements.gamecode.value.trim();
  //     joinRoom(code);
  // };

  return (
    <div
      className="createGamePage"
      style={{
        backgroundImage:
          "url(/images/other/FRA-Second-Player---Join-Game---BACKGROUND.jpg)",
      }}
    >
      <Navbar />
      <HeaderText />
      <div className="buttonBox">
        <form onSubmit={handleRoomFormSubmit}>
          <div className="formGroup">
            <label htmlFor="name">1 ENTER YOUR NAME:</label>
            <input
              type="text"
              placeholder="Name here..."
              id="name"
              name="name"
              pattern=".{2,}"
              title="Enter a name longer than 2 characters"
              required
            />
          </div>
          <div className="sliderSection">
            <label htmlFor=" ">2 PICK YOUR AVATAR:</label>
            <AvatarSlider />
          </div>
          <WhitePillButton text="READY" />
        </form>
      </div>

      {/* <form onSubmit={handleJoinRoomFormSubmit} className='joinForm'>
                <fieldset>
                    <label htmlFor="gamecode">Enter your game code</label>
                    <input
                        placeholder="XXXXXX"
                        id="gamecode"
                        name="gamecode"
                        autoCapitalize="off"
                        required
                    />
                </fieldset>
                <fieldset>
                    <button>Enter Lobby</button>
                </fieldset>
            </form> */}
    </div>
  );
};

export default CreateGamePage;
