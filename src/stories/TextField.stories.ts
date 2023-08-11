import { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

const meta = {
  title: "Text Field",
  component: TextField,
  tags: ["autodocs"],
} as Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Type here...",
    supportingText: "Supporting text",
  },
};

export const FirstName: Story = {
  args: {
    label: "First name",
    placeholder: "",
    supportingText: "Please type your first or given name",
  },
};
