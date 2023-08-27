
"changecolor.js"
// src/ColorChanger.js
/**import React, { useState } from 'react';

function ColorChanger() {
  const [boxColor, setBoxColor] = useState("");
  const [count, setCount] = useState({
  	red:0,
  	blue:0,
  	green:0,
  	brown:0
  });

	
	const color_count=(c)=>{
		setCount((i)=>({
			...i,
			[c]:i[c]+1
		}));
		setBoxColor(c)
	} ;
	
  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <div className="color-box" style={{ backgroundColor: boxColor }}></div>
    </div>
  );
}

export default ColorChanger;**/


"use client"
import React, { useState } from 'react';
import Box from "./color_box.js";
import "./globals.css";
import Color from "./color_count.js"

const App = () => {

  	const [count, setCount] = useState({
  	red:0,
  	blue:0,
  	green:0,
  	brown:0
  	});
  	
  	const [boxColor, setBoxColor] = useState("");

	
	const handleButtonClick = (c) => {
		setCount((i)=>({
			...i,
			[c]:i[c]+1,
		}));
		setBoxColor(c);
	};
return (
  	<div>
    	<Box handleButtonClick={handleButtonClick}/>
    	<Color boxColor={boxColor} count={count}/>
 
  	</div>
  );
   
};


export default App;



"use client"
import React, { useState } from 'react';
import Box from "./color_box.js";
import "./globals.css";
import Color from "./color_count.js"

const App = () => {


  	const BoxColorChanger = () => {
  	const colors = ['red', 'blue', 'green', 'yellow']; // List of colors
  	const [currentColorIndex, setCurrentColorIndex] = useState(0);
  	const [colorCount, setColorCount] = useState(0);
  	
  	
	const changeColor = () => {
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
    setColorCount(colorCount + 1);
  };
	
	const currentColor = colors[currentColorIndex];
	
return (
  	<div>
  		<div
        	style={{
          		width: '100px',
          		height: '100px',
          		backgroundColor: currentColor,
        	}}
      	/>
      	<p>Color Count: {colorCount}</p>
      	<button onClick={changeColor}>Change Color</button>
 
  	</div>
  );
   
};
};

export default App;
