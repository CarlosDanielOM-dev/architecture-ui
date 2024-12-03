import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ButtonGroup } from "@osten-moove-ui/button-group";
import { Button } from "@osten-moove-ui/button";

export default {
  title: "Inputs/Button Group",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      type: "string",
      control: {
        type: "select",
      },
      options: ["text", "contained", "outlined"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
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
    fullWidth: {
      control: "boolean",
    },
    numberOfButtons: {
      control: {
        type: "number",
        max: 10,
      },
    },
    sx: {
      control: "object",
      description: "Custom styles using the sx prop.",
    },
  },
  render: ({ numberOfButtons = 3, ...args }) => {
    return (
      <ButtonGroup {...args}>
        {Array.from({ length: numberOfButtons }).map((_, number) => {
          return <Button>Botão {number + 1}</Button>;
        })}
      </ButtonGroup>
    );
  },
} as Meta<typeof ButtonGroup>;

export const Default: StoryObj<typeof ButtonGroup> = {
  args: {},
};
