import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
// import { Textfit } from "react-textfit";

const WhitePillButton = (props) => {
  const { text, path, onStart } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    if (path) navigate(path);
    else if (onStart) onStart();
  };
  return (
    <>
      <div className="white-pill-button-container">
        <button className="white-pill-button" onClick={handleClick}>
          <p dangerouslySetInnerHTML={{__html: text}} />
        </button>
      </div>
    </>
  );
};

export default WhitePillButton;
