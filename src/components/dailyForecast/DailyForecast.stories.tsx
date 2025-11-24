import type { Meta, StoryObj } from "@storybook/react";
import DailyForecast from "./DailyForecast";
import {
  SunnyIcon,
  HotIcon,
  CloudyIcon,
  RainyIcon,
  SnowyIcon,
} from "../icons";

const meta = {
  title: "Components/DailyForecast",
  component: DailyForecast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DailyForecast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dayOfWeek: "Sun",
    date: 14,
    weatherIcon: <SunnyIcon />,
    temperature: 25,
    unit: "C",
  },
};

export const Sunny: Story = {
  args: {
    dayOfWeek: "Mon",
    date: 15,
    weatherIcon: <SunnyIcon />,
    temperature: 28,
    unit: "C",
  },
};

export const Hot: Story = {
  args: {
    dayOfWeek: "Tue",
    date: 16,
    weatherIcon: <HotIcon />,
    temperature: 38,
    unit: "C",
  },
};

export const Cloudy: Story = {
  args: {
    dayOfWeek: "Wed",
    date: 17,
    weatherIcon: <CloudyIcon />,
    temperature: 22,
    unit: "C",
  },
};

export const Rainy: Story = {
  args: {
    dayOfWeek: "Thu",
    date: 18,
    weatherIcon: <RainyIcon />,
    temperature: 18,
    unit: "C",
  },
};

export const Snowy: Story = {
  args: {
    dayOfWeek: "Fri",
    date: 19,
    weatherIcon: <SnowyIcon />,
    temperature: -2,
    unit: "C",
  },
};

export const WithMinTemperature: Story = {
  args: {
    dayOfWeek: "Sat",
    date: 20,
    weatherIcon: <SunnyIcon />,
    temperature: 30,
    minTemperature: 22,
    unit: "C",
  },
};
