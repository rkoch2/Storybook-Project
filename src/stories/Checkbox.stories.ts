import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  argTypes: { isChecked: { action: "clicked" } },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    isChecked: false,
  },
};

export const Checked: Story = {
  args: {
    isChecked: true,
    text: "I am checked",
  },
};
