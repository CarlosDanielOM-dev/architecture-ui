import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@osten-moove-ui/checkbox";

export default {
  title: "Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
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
    indeterminate: {
      control: "boolean",
    },
    sx: {
      control: "object",
      description: "Custom styles using the sx prop.",
    },
  },
  render: (args) => {
    return <Checkbox {...args} />;
  },
} as Meta<typeof Checkbox>;

export const Default: StoryObj<typeof Checkbox> = {
  args: {},
};
