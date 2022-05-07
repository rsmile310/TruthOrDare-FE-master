import "./style.scss";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import HeaderText from "../../components/HeaderText";
import WhitePillButton from "../../components/WhitePillButton";

export default function HomePage() {
  return (
    <div
      className="homePage"
      style={{ backgroundImage: "url(/images/other/first_home_bg.jpg)" }}
    >
      <Navbar />
      <HeaderText text={"Welcome to"} />
      <div className="buttonBox">
        <WhitePillButton text={"PLAY NOW"} path={"/createhomepage"} />
      </div>
    </div>
  );
}
