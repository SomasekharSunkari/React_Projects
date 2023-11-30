import "./Quiz.css";
import "../assets/data.js";
import { useRef, useState } from "react";
import { data } from "../assets/data.js";
export const Quiz = () => {
  let [Qindex, setQindex] = useState(0);
  const [question, setQuestion] = useState(data[Qindex]);
  const [lock, setLock] = useState(false);
  const [result, setResult] = useState(0);
  const [last, setlast] = useState(false);
  const option1 = useRef(0);
  const option2 = useRef(0);
  const option3 = useRef(0);
  const option4 = useRef(0);
  const optionarray = [option1, option2, option3, option4];
  const next = () => {
    if (Qindex === data.length - 1) {
      setlast(true);

      return 0;
    }
    setQindex((prev) => prev + 1);
    setQuestion(data[Qindex]);
    console.log(Qindex);
    setLock(false);
    optionarray.map((item) => {
      item.current.classList.remove("correct");
      item.current.classList.remove("roung");
      return null;
    });
  };
  const reset = () => {
    setQindex(0);
    setLock(false);
    setlast(false);
  };
  const checkans = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setResult((prev) => prev + 1);
        setLock(true);
      } else {
        e.target.classList.add("roung");
        optionarray[question.ans - 1].current.classList.add("correct");
        setLock(true);
      }
    }
  };
  return (
    <div className="container">
      <h1 className="heading">Quiz App Using React Js</h1>
      <hr />
      {last ? (
        <>
          <button className="reset" onClick={reset}>
            Reset
          </button>
          <p className="score">
            You Scored {result} out of {data.length}
          </p>
        </>
      ) : (
        <></>
      )}
      {last ? (
        <></>
      ) : (
        <>
          <div className="question">
            <h2>
              {Qindex + 1}.{question.question}
            </h2>
            <ul>
              <li ref={option1} onClick={(e) => checkans(e, 1)}>
                {question.option1}
              </li>
              <li ref={option2} onClick={(e) => checkans(e, 2)}>
                {question.option2}
              </li>
              <li ref={option3} onClick={(e) => checkans(e, 3)}>
                {question.option3}
              </li>
              <li ref={option4} onClick={(e) => checkans(e, 4)}>
                {question.option4}
              </li>
            </ul>
          </div>
          <p>
            {Qindex + 1} out of {data.length}
          </p>
          <button className="next" onClick={next}>
            Next
          </button>

          <br />
        </>
      )}
    </div>
  );
};
