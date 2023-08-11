import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Common Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["filled", "outlined", "text", "elevated", "tonal"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: "filled",
    label: "Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    label: "Outlined!",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    label: "I am text",
  },
};
