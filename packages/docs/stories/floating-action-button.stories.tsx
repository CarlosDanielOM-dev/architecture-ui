import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { FloatingActionButton } from "@osten-moove-ui/floating-action-button";

export default {
  title: "Inputs/Floating Action Button",
  component: FloatingActionButton,
  tags: ["autodocs"],
  argTypes: {
    text: {
      type: "string",
      control: {
        type: "text",
      },
    },
    variant: {
      control: "select",
      options: ["circular", "extended"],
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
    return (
      <FloatingActionButton {...args}>
        {args.text ?? "Default"}
      </FloatingActionButton>
    );
  },
} as Meta<typeof FloatingActionButton>;

export const Default: StoryObj<typeof FloatingActionButton> = {
  args: {},
};
