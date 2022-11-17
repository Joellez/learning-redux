import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColour } from "../features/theme";

function ChangeColour() {
  const [colour, setColour] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(changeColour(colour));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Choose a colour"
          onChange={(event) => {
            setColour(event.target.value);
          }}
        />
        <button type="submit"> Change colour</button>
      </form>
    </div>
  );
}

export default ChangeColour;
