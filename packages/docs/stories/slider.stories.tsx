import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "@osten-moove-ui/slider";

export default {
  title: "Inputs/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "number" },
    },
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
    step: {
      control: "number",
    },
    disabled: {
      type: "boolean",
      control: {
        type: "boolean",
      },
    },
    color: {
      type: "string",
      control: {
        type: "select",
      },
      options: [
        "error",
        "info",
        "inherit",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    marks: {
      control: "boolean",
    },
    valueLabelDisplay: {
      control: "select",
      options: ["auto", "on", "off"],
    },
    track: {
      control: "select",
      options: ["normal", "inverted"],
    },
    size: {
      type: "string",
      control: "select",
      options: ["small", "medium", "large"],
    },
    sx: {
      control: "object",
      description: "Custom styles using the sx prop.",
    },
  },
  render: (args) => {
    return <Slider {...args} />;
  },
} as Meta<typeof Slider>;

export const Default: StoryObj<typeof Slider> = {
  args: {},
};
