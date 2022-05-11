import "./style.scss";
import Navbar from "../../components/Navbar";
import HeaderText from "../../components/HeaderText";
import WhitePillButton from "../../components/WhitePillButton";
// import { useEffect, useRef, useState } from "react";
// import { Pie, Doughnut } from "react-chartjs-2";
// import { Chart, ArcElement } from "chart.js";
// Chart.register(ArcElement);

export default function CreateHomePgae() {
//   const [randomVal, setRandomVal] = useState("");
//   const [players, setPlayers] = useState([]);
//   const [style, setStyle] = useState({});
// //dynamic background color
//   const background = [
//     "#9D0A89",
//     "#B21F00",
//     "#E9DE00",
//     "#2FDE00",
//     "#00A6B4",
//     "#6800B4",
//     "#1B2A3E",
//     "#EF6C00",
//   ];
//   // I used default data for now, but this data will be from backend 
//   const defaultPlayers = [
//     {
//       name: "Alex",
//       avatar: "/images/avatar/Face 1.png",
//     },
//     {
//       name: "Simon",
//       avatar: "/images/avatar/Face 2.png",
//     },
//     {
//       name: "Sten",
//       avatar: "/images/avatar/Face 3.png",
//     },
//     {
//       name: "Erika",
//       avatar: "/images/avatar/Face 4.png",
//     },
//     {
//       name: "Valentyna",
//       avatar: "/images/avatar/Face 4.png",
//     },
//     {
//       name: "James",
//       avatar: "/images/avatar/Face 4.png",
//     },
//     {
//       name: "James",
//       avatar: "/images/avatar/Face 4.png",
//     },
//     {
//       name: "James",
//       avatar: "/images/avatar/Face 4.png",
//     },
//   ];

//   const defaultdata = {
//     datasets: [
//       {
//         backgroundColor: [],
//         data: [],
//       },
//     ],
//   };
//   const [state, setState] = useState(defaultdata);

//   let bottle = useRef(null);
//   let AMOUNT_OF_ITEMS = defaultPlayers.length; // change this if there is a different amount of items
//   let segment_width = 360 / AMOUNT_OF_ITEMS;
//   let random;
//   useEffect(() => {
//     random = Math.random() * 360;
//     setRandomVal(random);

//     let temp_state = [...defaultPlayers];
//     let temp_state_chart = defaultdata;
//     let rot = -90;
//     temp_state.map((e, index) => {
//       temp_state[index] = { ...temp_state[index], rot: `${rot}` };
//       rot = rot + segment_width;
//       temp_state_chart.datasets[0].backgroundColor[index] = background[index];
//       temp_state_chart.datasets[0].data[index] = 1;
//     });
//     setPlayers(temp_state);
//     setState(temp_state_chart);
//     setTimeout(() => spin(), 3000);
//   }, []);

//   const spin = () => {
//     const randomAngle = Math.random() * 360 + 3600 + "deg";
//     setStyle({transform:`rotate(${randomAngle})`})
//     setTimeout(() => stop(), 5000);
//   };
//   const stop = () => {
//     let matrix = getComputedStyle(bottle.current).transform;
//     let values = matrix.split("(")[1];
//     values = values.split(")")[0];
//     values = values.split(",");
//     let angle =
//       Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI)) + random;
//     console.log(random);
//     if (angle > 360) {
//       angle = angle - 360;
//     }
//     console.log(angle);
//     if (angle < 0) {
//       angle = 360 + angle;
//     }
//     let winner = Math.ceil((angle + segment_width / 2) / segment_width);
//     if (winner === AMOUNT_OF_ITEMS+1) winner = 1;
//     console.log(defaultPlayers[Number(winner - 1)]);
//   };
  // const randomFloat = (min = 0, max = 360) => {
  //   setRandomVal(Math.random() * (max - min + 1) + min);
  //   return(Math.random() * (max - min + 1) + min)
  // };

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
