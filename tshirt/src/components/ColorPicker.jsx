import React from "react";
import { SketchPicker } from "react-color";
import {  useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          "#FF6B6B",
    "#76D7EA",
    "#DFFF00",
    "#A569BD",
    "#FFD700",
    "#F08080",
    "#32CD32",
    "#FF69B4",
    "#FFA500",
    "#40E0D0",
    "#9370DB",
    "#E6E6FA",
    "#FF4500",
    "#48D1CC",
    "#FF1493"
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker;
