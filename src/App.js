import React, { Fragment, useState } from "react";

const Advices = [
  "Study Hard",
  "Applay For job",
  "Enjoy your money",
]

function App() {
  const [steps , setSteps] = useState(1)

  function handllerPrevious() {
    if (steps > 1)  setSteps(steps - 1)
  }

  function handllerNext() {
    if (steps < 3) setSteps(steps + 1)
  }

  return (
    <React.Fragment>
      <div className="steps">
        <div className="numbers">
          <div className={`${steps >= 1 ? "active": ""}`} > 1 </div>
          <div className={`${steps >= 2 ? "active": ""}`} > 2 </div>
          <div className={`${steps >= 3 ? "active": ""}`} > 3 </div>
        </div>
        <p className="message"> Step{steps} : {Advices[steps - 1]} </p>
        <div className="buttons">
          <button onClick={handllerPrevious} > Previous </button>
          <button onClick={handllerNext} > Next </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
