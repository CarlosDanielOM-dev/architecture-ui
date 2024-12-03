import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ToggleButton } from "@osten-moove-ui/toggle-button";

export default {
  title: "Inputs/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  argTypes: {
    text: {
      type: "string",
      control: {
        type: "text",
      },
    },
    selected: {
      control: "boolean",
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
    return <ToggleButton {...args}>{args.text ?? "Default"}</ToggleButton>;
  },
} as Meta<typeof ToggleButton>;

export const Default: StoryObj<typeof ToggleButton> = {
  args: {},
};
