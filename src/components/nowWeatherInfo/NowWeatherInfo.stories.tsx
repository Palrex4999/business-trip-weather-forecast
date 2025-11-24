import type { Meta, StoryObj } from "@storybook/react";
import NowWeatherInfo from "./NowWeatherInfo";
import {
  SunnyIcon,
  HotIcon,
  CloudyIcon,
  RainyIcon,
  SnowyIcon,
} from "./icons";

const meta = {
  title: "Components/NowWeatherInfo",
  component: NowWeatherInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NowWeatherInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    weatherIcon: <RainyIcon />,
    temperature: 25,
    unit: "C",
    weatherCondition: "Heavy Rain",
  },
};

export const Sunny: Story = {
  args: {
    weatherIcon: <SunnyIcon />,
    temperature: 28,
    unit: "C",
    weatherCondition: "Sunny",
  },
};

export const Hot: Story = {
  args: {
    weatherIcon: <HotIcon />,
    temperature: 38,
    unit: "C",
    weatherCondition: "Very Hot",
  },
};

export const Cloudy: Story = {
  args: {
    weatherIcon: <CloudyIcon />,
    temperature: 22,
    unit: "C",
    weatherCondition: "Cloudy",
  },
};

export const Rainy: Story = {
  args: {
    weatherIcon: <RainyIcon />,
    temperature: 18,
    unit: "C",
    weatherCondition: "Rainy",
  },
};

export const Snowy: Story = {
  args: {
    weatherIcon: <SnowyIcon />,
    temperature: -2,
    unit: "C",
    weatherCondition: "Snowy",
  },
};
