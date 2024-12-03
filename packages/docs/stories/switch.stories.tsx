import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "@osten-moove-ui/switch";

export default {
  title: "Inputs/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    checked: {
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
      options: ["small", "medium"],
    },
    sx: {
      control: "object",
      description: "Custom styles using the sx prop.",
    },
  },
  render: (args) => {
    return <Switch {...args}>{args.text ?? "Default"}</Switch>;
  },
} as Meta<typeof Switch>;

export const Default: StoryObj<typeof Switch> = {
  args: {},
};
