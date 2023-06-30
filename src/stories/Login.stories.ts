import type { Meta, StoryObj } from "@storybook/react";
import { Login } from "./Login";

const meta = {
  title: "Login Page",
  component: Login,
  tags: ["autodocs"],
} as Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
