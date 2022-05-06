import "./style.scss";
import Navbar from "../../components/Navbar";
import HeaderText from "../../components/HeaderText";
import WhitePillButton from "../../components/WhitePillButton";
import EnatusImage from "../../images/ENACTUS LINE 1.png";

export default function CreateGamePage2() {
  return (
    <div className="createGamePage">
      <Navbar />
      <HeaderText text={"Welcome to"} />

      <div className="buttonBox">
        <form>
          <div className="form-group">
            <label>1 ENTER YOUR NAME</label>
            <input type="text" placeholder="Name here..." />
          </div>
          <div>carousel</div>
          <WhitePillButton text={"READY"} />
        </form>
      </div>
    </div>
  );
}
