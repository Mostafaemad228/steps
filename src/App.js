import React, { Fragment } from "react";
function App() {
  return (
    <React.Fragment>
      <div className="steps">
        <div className="numbers">
          <div> 1 </div>
          <div> 2 </div>
          <div> 3 </div>
        </div>
        <p className="message"> `Hello man` </p>
        <div className="buttons">
          <button > Previous </button>
          <button > Next </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
