import type { Meta, StoryObj } from "@storybook/react";
import UpdatedAt from "./UpdatedAt";

const meta = {
  title: "Components/UpdatedAt",
  component: UpdatedAt,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UpdatedAt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    timestamp: new Date("2025-01-15T14:30:45"),
  },
};
