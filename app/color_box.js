import React from 'react';
const Box=({counts,box_color})=> {
  return (
	  <div className="box1">
      <div className="box1_col1" style={{ backgroundColor: box_color }}></div>
      <br />
      <br />
      <div className="red">
        <div>red : {counts.red}</div>
      </div>
      <div className="blue">
      	<div>blue : {counts.blue}</div>
      </div> 
      <div className="yellow">
        <div>yellow : {counts.yellow}</div>
      </div>
      <div className="green">
        <div>green : {counts.green}</div>
      </div>
    </div>
  );
};

export default Box;
