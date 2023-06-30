import { Meta, StoryObj } from "@storybook/react";

import { Slider } from "./Slider";

const meta = {
  title: "Slider",
  component: Slider,
  tags: ["autodocs"],
} as Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialPosition: 50,
    min: 0,
    max: 100,
  },
};
