"use client"
import React, { useState } from "react";
import "./globals.css";
import Box from "./color_box.js";
import Color from "./color_count.js";

const App = () => {
  const [counts, setBut_Counts] = useState({
    red: 0,
    blue: 0,
    yellow: 0,
    green: 0,
  });
 
  const [box_color, setBox_Color_c] = useState("");

  const handleButtonClick = (color) => {
    setBut_Counts((item) => ({
      ...item,
      [color]: item[color] + 1,
    }));

     setBox_Color_c(color);
  };

  return (
    <>
      <Box counts={counts} box_color={box_color} />
      <Color handleButtonClick={handleButtonClick} />
    </>
  );
};

export default App;


