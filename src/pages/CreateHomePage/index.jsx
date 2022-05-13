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
      {/* <div className="spinBox">
        <div>
          <ul className="circle-container">
            {players.map((e, index) => (
              <li
                key={index}
                style={{
                  transform: `rotate(${e.rot + "deg"}) translate(100px)`,
                }}
              >
                <div>
                  <p className="my-0">{e.name}</p>
                  <img width="51px" height="51px" src={e.avatar} />
                </div>
              </li>
            ))}
          </ul>
          <div className="bottleBox">
            <div style={{ transform: `rotate(${randomVal + "deg"})` }}>
              <img
                ref={bottle}
                className="bottle"
                src="/images/other/bottle1.png"
                style={style}
              />
            </div>
          </div>
          <div className="spinCircle">
            <Pie
              data={state}
              options={{
                legend: {
                  display: true,
                  position: "right",
                },
                animation: false,
                borderWidth: [0],
                rotation: `${segment_width / 2}`,
              }}
            />
          </div>
        </div>
      </div> */}
      <div>
        <div className="buttonBox">
          <WhitePillButton text={"CREATE GAME"} path={"/creategame"} />
          <img src="/images/ENACTUS LINE 1.png" alt="" />
        </div>
      </div>
    </div>
  );
}
