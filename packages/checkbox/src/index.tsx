import React from "react";

import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material";

export interface CheckboxProps extends MuiCheckboxProps {}

export function Checkbox({ ...props }: CheckboxProps) {
  return <MuiCheckbox {...props} />;
}
