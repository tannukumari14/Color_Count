import React from "react";
const Color= ({ handleButtonClick }) => {
  return (
    <div className="box2">
      <div className="box2_col1">
        <div className="box2_col1_col">This is red area
          <button className="button_red" onClick={() => handleButtonClick("red")}> red </button>
        </div>
        <div className="box2_col1_col">This is yellow area
          <button className="button_yellow" onClick={() => handleButtonClick("yellow")}> yellow </button>
        </div>
      </div>
      <div className="box2_col2">
        <div className="box2_col1_col2">This is blue area
          <button className="button_blue" onClick={() => handleButtonClick("blue")}>blue </button>
        </div>
        <div className="box2_col1_col2">This is green area
          <button className="button_green" onClick={() => handleButtonClick("green")}>green</button>
        </div>
      </div>
    </div>
  );
};
export default Color;

