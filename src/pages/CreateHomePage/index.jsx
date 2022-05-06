import "./style.scss";
import Navbar from "../../components/Navbar";
import HeaderText from "../../components/HeaderText";
import WhitePillButton from "../../components/WhitePillButton";

export default function CreateHomePgae() {
  return (
    <div
      className="createHomePage"
      style={{
        backgroundImage:
          "url(/images/other/FRA-First-Player-Splash-Animation-B-BACKGROUND.jpg)",
      }}
    >
      <Navbar />
      <HeaderText text={"Welcome to"} />
      <div>
        <div className="buttonBox">
          <WhitePillButton text={"CREATE GAME"} path={"/creategame"} />
          <img src='/images/ENACTUS LINE 1.png' alt="" />
        </div>
      </div>
    </div>
  );
}
