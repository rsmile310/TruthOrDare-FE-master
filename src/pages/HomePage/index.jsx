import "./style.scss";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import HeaderText from "../../components/HeaderText";
import WhitePillButton from "../../components/WhitePillButton";

export default function HomePage() {
  const [data, setData] = useState("");
  const defaultPlayers = [
    {
      name: "Alex",
      avatar: "/images/avatar/LYL CircleAsset 24@3x.png",
    },
    {
      name: "Alex",
      avatar: "/images/avatar/LYL CircleAsset 24@3x.png",
    },
    {
      name: "Alex",
      avatar: "/images/avatar/LYL CircleAsset 24@3x.png",
    },
    {
      name: "Alex",
      avatar: "/images/avatar/LYL CircleAsset 24@3x.png",
    },
    {
      name: "Alex",
      avatar: "/images/avatar/LYL CircleAsset 24@3x.png",
    },
    {
      name: "Alex",
      avatar: "/images/avatar/LYL CircleAsset 24@3x.png",
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
    setTimeout(() => stop(), randomFloat() * 1000);
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

  const randomFloat = (min = 4, max = 6) => {
    return Math.random() * (max - min + 1) + min;
  };
  return (
    <div
      className="homePage"
      style={{ backgroundImage: "url(/images/other/first_home_bg.jpg)" }}
    >
      <Navbar />
      <HeaderText text={"Welcome to"} />
      <div className="spinBox">
        <div>
          <ul className="circle-container">
            {defaultPlayers.map((e, index) => (
              <li key={index}>{e.name}</li>
            ))}
          </ul>
          <div className="bottleBox">
            <img
              ref={bottle}
              className={`bottle rotate ${data ? "active" : ""}`}
              src="/images/other/bottle1.png"
            />
          </div>
        </div>
      </div>
      <div className="buttonBox">
        <WhitePillButton text={"PLAY NOW"} path={"/createhomepage"} />
      </div>
    </div>
  );
}
