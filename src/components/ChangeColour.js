import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { changeColour } from "../features/theme";

function ChangeColour() {
    const [colour, setColour] = useState("");
    const dispatch = useDispatch();
    return (
        <div>
            <input 
            type="text" placeholder="Choose a colour"
            onChange={(event) => {
                setColour(event.target.value)
            }}
             />
          <button
          onClick={() => {
            dispatch(changeColour(colour));
          }}
          > Change colour</button>  
        </div>
    );
}

export default ChangeColour;