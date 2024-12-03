import React from "react";

import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from "@mui/material";

export interface SwitchProps extends MuiSwitchProps {}

export function Switch(props: SwitchProps) {
  return <MuiSwitch {...props} />;
}
