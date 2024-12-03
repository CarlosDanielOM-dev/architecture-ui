import React from "react";

import {
  Rating as MuiRating,
  RatingProps as MuiRatingProps,
} from "@mui/material";

export interface RatingProps extends MuiRatingProps {}

export function Rating(props: RatingProps) {
  return <MuiRating {...props} />;
}
