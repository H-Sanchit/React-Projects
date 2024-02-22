import React, { useState } from "react";
import data from "./data";

function Index() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  function handleSingleSelection(itemId) {
    setSelected(itemId === selected ? null : itemId);
  }

  function handleMultiSelection(itemId) {
    let cpyMulti = [...multiSelect];
    const indexOfCurrentId = cpyMulti.indexOf(itemId);
    console.log(indexOfCurrentId);
    if (indexOfCurrentId === -1) cpyMulti.push(itemId);
    else cpyMulti.splice(indexOfCurrentId, 1);
    setMultiSelect(cpyMulti);
  }

  return (
    <div className="h-screen w-full flex justify-center flex-col items-center">
      <button
        className="border-4 border-white p-3 text-xl rounded-xl"
        onClick={() => setEnableMultiSelect(!enableMultiSelect)}
      >
        Enable Multi-Select
      </button>
      <div className="text-2xl w-1/2 flex flex-col text-center ">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div>
              <div className="border-4 w-full text-center m-4  p-3 rounded-3xl">
                <h1 className="flex justify-between">{dataItem.question}</h1>
                <span
                  onClick={
                    enableMultiSelect
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className=" cursor-pointer"
                >
                  +
                </span>
                {enableMultiSelect
                  ? multiSelect.indexOf(dataItem.id) !== -1 && (
                      <div className="acc-content ">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="acc-content ">{dataItem.answer}</div>
                    )}
              </div>
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
}

export default Index;
