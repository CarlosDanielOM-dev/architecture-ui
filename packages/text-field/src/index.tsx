import React from "react";

import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

export type TextFieldProps = MuiTextFieldProps;

export function TextField(props: MuiTextFieldProps) {
  return <MuiTextField {...props} />;
}
