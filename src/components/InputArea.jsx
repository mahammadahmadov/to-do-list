import React, { useState } from "react";

function InputArea(props) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  return (
    <div className="form">
      <input
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            props.addItem(input);
            setInput("");
          }
        }}
        onChange={handleChange}
        type="text"
        value={input}
      />
      <button
        onClick={() => {
          props.addItem(input);
          setInput("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
