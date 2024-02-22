import React, { useEffect, useState } from "react";

function RandonColor() {
  const [color, setColor] = useState("#414141");
  const [type, setType] = useState("Hex");

  function randomColorGenerator(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHexGenerator() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorGenerator(hex.length)];
    }
    setColor(hexColor);
  }

  function handleRgbGenerator() {
    const r = randomColorGenerator(256);
    const g = randomColorGenerator(256);
    const b = randomColorGenerator(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (type === "rgb") handleRgbGenerator();
    else handleHexGenerator();
  }, [type]);

  return (
    <div style={{ backgroundColor: color, height: "100vh", width: "100vw" }}>
      <div className="bg-white  h-20 flex justify-evenly items-center drop-shadow-2xl rounded-b-xl">
        <button
          className="outline p-3 rounded-lg hover:bg-slate-700 hover:text-white"
          onClick={() => setType("Hex")}
        >
          HEX Generator
        </button>
        <button
          className="outline p-3 rounded-lg hover:bg-slate-700 hover:text-white"
          onClick={() => setType("RGB ")}
        >
          RGB Generator
        </button>
        <button
          className="outline p-3 rounded-lg hover:bg-slate-700 hover:text-white"
          onClick={type === "Hex" ? handleHexGenerator : handleRgbGenerator}
        >
          Random Generator
        </button>
      </div>
      <div className="flex flex-col justify-center items-center text-center h-full w-full text-6xl">
        {type}
        <br />
        <br />
        {color}
      </div>
    </div>
  );
}

export default RandonColor;
