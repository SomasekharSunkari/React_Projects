import { useRef, useState } from "react";
import "./Tic-Toc-Toe.css";
import cross_icon from "../Assets/cross_icon-removebg-preview.png";
import circle_img from "../Assets/Circle_img-removebg-preview.png";
let data = ["", "", "", "", "", "", "", "", ""];

export const TicTocToe = () => {
  const [lock, setlock] = useState(false);
  const box1 = useRef(0);
  const box2 = useRef(0);
  const box3 = useRef(0);
  const box4 = useRef(0);
  const box5 = useRef(0);
  const box6 = useRef(0);
  const box7 = useRef(0);
  const box8 = useRef(0);
  const box9 = useRef(0);
  const titleRef = useRef(0);
  const [count, setCount] = useState(0);
  const checkwin = () => {
    console.log(data);
    if (data[0] === data[1] && data[1] === data[2] && data[2] != "") {
      won(data[0]);
    } else if (data[2] === data[5] && data[5] && data[6] && data[6] != "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] != "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] != "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] && data[6] && data[6] != "") {
      won(data[2]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] != "") {
      won(data[4]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] != "") {
      won(data[6]);
    } else if (data[3] === data[5] && data[5] === data[8] && data[8] != "") {
      won(data[3]);
    }
  };
  const won = (winner) => {
    if (winner === "X") {
      setlock(true);

      titleRef.current.innerHTML = `Congratulations <img src='${cross_icon}'> Won `;
      console.log("Won1 ");
    }
    if (winner === "O") {
      setlock(true);
      titleRef.current.innerHTML = `Congratulations <img src='${circle_img}'> Won `;
      console.log("Won2 ");
    }
  };
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }

    if (count % 2 === 0) {
      data[num] = "X";
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      console.log(data);
      setCount((count) => count + 1);
    } else {
      data[num] = "O";
      e.target.innerHTML = `<img src='${circle_img}'>`;
      console.log(data);

      setCount((count) => count + 1);
    }
    checkwin();
  };
  const reset = () => {
    setlock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    console.log(data);
    titleRef.current.innerHTML = `Tic-Toc-Toe Game in <span>React</span> `;

    refer.map((e) => (e.current.innerHTML = ""));
  };

  const refer = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
  return (
    <div className="game-app overflow-x-hidden d-flex flex-column justify-content-center vh-100 align-items-center">
      <div className="heading">
        <h1 ref={titleRef}>
          Tic-Toc-Toe Game in <span>React</span>
        </h1>
      </div>
      <div className="main vw-100  d-flex justify-content-center mt-3 ">
        <div className="gameboard d-flex flex-column  ">
          <div className="row d-flex gap-1 mb-1">
            <div
              className="box cursor-pointer"
              onClick={(e) => toggle(e, 0)}
              ref={box1}
            ></div>
            <div
              className="box cursor-pointer"
              onClick={(e) => toggle(e, 1)}
              ref={box2}
            ></div>
            <div
              className="box cursor-pointer"
              onClick={(e) => toggle(e, 2)}
              ref={box3}
            ></div>
          </div>
          <div className="row d-flex gap-1 mb-1">
            <div
              className="box cursor-pointer"
              onClick={(e) => toggle(e, 4)}
              ref={box4}
            ></div>
            <div
              className="box cursor-pointer"
              onClick={(e) => toggle(e, 5)}
              ref={box5}
            ></div>
            <div
              className="box cursor-pointer"
              onClick={(e) => toggle(e, 6)}
              ref={box6}
            ></div>
          </div>
          <div className="row d-flex gap-1 mb-1">
            <div
              className="box cursor-pointer"
              onClick={(e) => toggle(e, 7)}
              ref={box7}
            ></div>
            <div
              className="box cursor-pointer"
              onClick={(e) => toggle(e, 8)}
              ref={box8}
            ></div>
            <div
              className="box cursor-pointer"
              onClick={(e) => toggle(e, 9)}
              ref={box9}
            ></div>
          </div>
        </div>
      </div>
      <button
        className="reset mt-4 px-5 py-2 border-0 bg-info rounded-3 text-white"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};
