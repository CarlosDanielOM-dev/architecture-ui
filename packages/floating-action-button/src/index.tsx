import React from "react";

import { Fab as MuiFab, FabProps as MuiFabProps } from "@mui/material";

export interface FloatingActionButtonProps extends MuiFabProps {}

export function FloatingActionButton({
  children,
  ...props
}: FloatingActionButtonProps) {
  return <MuiFab {...props}>{children}</MuiFab>;
}
