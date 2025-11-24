import type { Meta, StoryObj } from "@storybook/react";
import NowWeatherInfo from "./NowWeatherInfo";

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

// 晴れアイコン
const SunnyIcon = (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="60" cy="60" r="20" fill="#FDB813" />
    <g stroke="#FDB813" strokeWidth="4" strokeLinecap="round">
      <line x1="60" y1="20" x2="60" y2="30" />
      <line x1="60" y1="90" x2="60" y2="100" />
      <line x1="20" y1="60" x2="30" y2="60" />
      <line x1="90" y1="60" x2="100" y2="60" />
      <line x1="35" y1="35" x2="42" y2="42" />
      <line x1="78" y1="78" x2="85" y2="85" />
      <line x1="85" y1="35" x2="78" y2="42" />
      <line x1="42" y1="78" x2="35" y2="85" />
    </g>
  </svg>
);

// 猛暑アイコン
const HotIcon = (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="60" cy="60" r="20" fill="#FF5722" />
    <g stroke="#FF5722" strokeWidth="4" strokeLinecap="round">
      <line x1="60" y1="20" x2="60" y2="30" />
      <line x1="60" y1="90" x2="60" y2="100" />
      <line x1="20" y1="60" x2="30" y2="60" />
      <line x1="90" y1="60" x2="100" y2="60" />
      <line x1="35" y1="35" x2="42" y2="42" />
      <line x1="78" y1="78" x2="85" y2="85" />
      <line x1="85" y1="35" x2="78" y2="42" />
      <line x1="42" y1="78" x2="35" y2="85" />
    </g>
  </svg>
);

// くもりアイコン
const CloudyIcon = (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M85 50c0-11.046-8.954-20-20-20-8.285 0-15.396 5.04-18.442 12.225C44.596 42.083 42.367 42 40 42c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20h45c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
      fill="#B0BEC5"
    />
  </svg>
);

// 雨アイコン
const RainyIcon = (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M85 45c0-11.046-8.954-20-20-20-8.285 0-15.396 5.04-18.442 12.225C44.596 37.083 42.367 37 40 37c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20h45c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
        fill="#B0BEC5"
      />
      <path
        d="M45 85l-3 10m15-10l-3 10m15-10l-3 10m15-10l-3 10"
        stroke="#64B5F6"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

// 雪アイコン
const SnowyIcon = (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M85 45c0-11.046-8.954-20-20-20-8.285 0-15.396 5.04-18.442 12.225C44.596 37.083 42.367 37 40 37c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20h45c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
        fill="#B0BEC5"
      />
      <g fill="#E3F2FD">
        <circle cx="45" cy="85" r="3" />
        <circle cx="60" cy="85" r="3" />
        <circle cx="75" cy="85" r="3" />
        <circle cx="45" cy="95" r="3" />
        <circle cx="60" cy="95" r="3" />
        <circle cx="75" cy="95" r="3" />
      </g>
    </g>
  </svg>
);

export const Default: Story = {
  args: {
    weatherIcon: RainyIcon,
    temperature: 25,
    unit: "C",
    weatherCondition: "Heavy Rain",
  },
};

export const Sunny: Story = {
  args: {
    weatherIcon: SunnyIcon,
    temperature: 28,
    unit: "C",
    weatherCondition: "Sunny",
  },
};

export const Hot: Story = {
  args: {
    weatherIcon: HotIcon,
    temperature: 38,
    unit: "C",
    weatherCondition: "Very Hot",
  },
};

export const Cloudy: Story = {
  args: {
    weatherIcon: CloudyIcon,
    temperature: 22,
    unit: "C",
    weatherCondition: "Cloudy",
  },
};

export const Rainy: Story = {
  args: {
    weatherIcon: RainyIcon,
    temperature: 18,
    unit: "C",
    weatherCondition: "Rainy",
  },
};

export const Snowy: Story = {
  args: {
    weatherIcon: SnowyIcon,
    temperature: -2,
    unit: "C",
    weatherCondition: "Snowy",
  },
};
