import "./style.scss";
import { useState } from "react";
import WhitePillButton from "../WhitePillButton/index.jsx";

const BottomModal = ({ onStart, handleOpenModal }) => {
  const [openModal, setOpenModal] = useState(false);
  const endGame = () => {
    setOpenModal(true);
    onStart();
  };
  const handleOpen = () => {
    setOpenModal(true);
    handleOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
    handleOpenModal(false);
  };
  return (
    <div className="bottomModalContainer">
      <WhitePillButton onStart={handleOpen} text="END GAME" />
      <div
        className={openModal ? "blackOpcityBox active" : "blackOpcityBox"}
        onClick={closeModal}
      />
      <div
        className={openModal ? "bottomModalBox active" : "bottomModalBox"}
        style={{ backgroundImage: "url(/images/other/close_popup_bg.png)" }}
      >
        <hr />
        <div className="modalHeader">
          <p>
            Are you sure you want to
            <br />
            end this game?
          </p>
        </div>
        <div className="modalBody">
          <WhitePillButton onStart={endGame} text="YES PLEASE" />
          <WhitePillButton onStart={closeModal} text="NO THANKS" />
        </div>
      </div>
    </div>
  );
};
export default BottomModal;
