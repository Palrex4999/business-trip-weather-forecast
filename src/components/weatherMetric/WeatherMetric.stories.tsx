import type { Meta, StoryObj } from "@storybook/react";
import WeatherMetric from "./WeatherMetric";
import { WindIcon, HumidityIcon } from "./icons";

const meta = {
  title: "Components/WeatherMetric",
  component: WeatherMetric,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WeatherMetric>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WindStatus: Story = {
  args: {
    icon: <WindIcon />,
    label: "Wind Status",
    value: 7.9,
    unit: "km/h",
    description: "9:00 AM",
  },
};

export const Humidity: Story = {
  args: {
    icon: <HumidityIcon />,
    label: "Humidity",
    value: 85,
    unit: "%",
    description: "Humidity is good",
  },
};

export const WithoutDescription: Story = {
  args: {
    icon: <WindIcon />,
    label: "Wind Status",
    value: 12.5,
    unit: "km/h",
  },
};
