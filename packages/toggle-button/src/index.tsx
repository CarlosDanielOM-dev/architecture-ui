import React from "react";

import {
  ToggleButton as MuiToggleButton,
  ToggleButtonProps as MuiToggleButtonProps,
} from "@mui/material";

export interface ToggleButtonProps extends MuiToggleButtonProps {}

export function ToggleButton({ children, ...props }: MuiToggleButtonProps) {
  return <MuiToggleButton {...props}>{children}</MuiToggleButton>;
}
