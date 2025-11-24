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

export const CurrentTime: Story = {
  args: {
    timestamp: new Date(),
  },
};

export const MorningTime: Story = {
  args: {
    timestamp: new Date("2025-01-15T09:00:00"),
  },
};

export const NightTime: Story = {
  args: {
    timestamp: new Date("2025-01-15T23:59:59"),
  },
};

export const Empty: Story = {
  args: {
    timestamp: null,
  },
};
