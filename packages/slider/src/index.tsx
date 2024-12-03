import React from "react";

import {
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
} from "@mui/material";

export interface SliderProps extends MuiSliderProps {}

export function Slider(props: SliderProps) {
  return <MuiSlider {...props} />;
}
