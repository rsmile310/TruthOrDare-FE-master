import "./style.scss";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import AvatarConfig from "./AvatarConfig";
// import Avatar from '../../images/avatar/LYLCircleAsset 22@3x.png'

export default function AvatarSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 500,
  };
  return (
    <div className="sliderBox">
      <Slider {...settings}>
        {AvatarConfig.map((item, index) => (
          <div key={index}>
            <img src={item.path} className="avatarImage" alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
