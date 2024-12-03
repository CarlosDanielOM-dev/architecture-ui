import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Rating } from "@osten-moove-ui/rating";

export default {
  title: "Inputs/Rating",
  component: Rating,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "number", min: 0, max: 5 },
    },
    precision: {
      control: { type: "number", min: 0.1, max: 1, step: 0.1 },
    },
    max: {
      control: "number",
    },
    readOnly: {
      control: "boolean",
    },
    disabled: {
      type: "boolean",
      control: {
        type: "boolean",
      },
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
    return <Rating {...args} />;
  },
} as Meta<typeof Rating>;

export const Default: StoryObj<typeof Rating> = {
  args: {},
};
