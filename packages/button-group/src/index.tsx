import React from "react";

import {
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps,
} from "@mui/material";

export interface ButtonGroupProps extends MuiButtonGroupProps {}

export function ButtonGroup({ children, ...props }: ButtonGroupProps) {
  return <MuiButtonGroup {...props}>{children}</MuiButtonGroup>;
}
