import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@osten-moove-ui/button";

export default {
  title: "Inputs/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    text: {
      type: "string",
      control: {
        type: "text",
      },
    },
    variant: {
      type: "string",
      control: {
        type: "select",
      },
      options: ["text", "contained", "outlined"],
    },
    disabled: {
      type: "boolean",
      control: {
        type: "boolean",
      },
    },
    disableElevation: {
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
      description: "Style overrides using Material UI sx prop.",
    },
  },
  render: (args) => {
    return <Button {...args}>{args.text ?? "Default"}</Button>;
  },
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {},
};
