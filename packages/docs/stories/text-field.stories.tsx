import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "@osten-moove-ui/text-field";

export default {
  title: "Inputs/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    variant: {
      type: "string",
      control: {
        type: "select",
      },
      options: ["outlined", "filled", "standard"],
    },
    disabled: {
      type: "boolean",
      control: {
        type: "boolean",
      },
    },
    error: {
      control: "boolean",
    },
    helperText: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    type: {
      control: {
        type: "select",
      },
      options: [
        "text",
        "password",
        "email",
        "number",
        "tel",
        "url",
        "search",
        "date",
        "datetime-local",
        "month",
        "week",
        "time",
        "color",
      ],
    },
    multiline: {
      control: "boolean",
    },
    rows: {
      control: "number",
    },
    fullWidth: {
      control: "boolean",
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
    return <TextField {...args} />;
  },
} as Meta<typeof TextField>;

export const Default: StoryObj<typeof TextField> = {
  args: {},
};
