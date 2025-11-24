import type { Meta, StoryObj } from "@storybook/react";
import NowWeatherInfo from "./NowWeatherInfo";

const meta = {
  title: "Components/NowWeatherInfo",
  component: NowWeatherInfo,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NowWeatherInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// 雨雲アイコン
const RainyIcon = (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      {/* 雲 */}
      <path
        d="M85 45c0-11.046-8.954-20-20-20-8.285 0-15.396 5.04-18.442 12.225C44.596 37.083 42.367 37 40 37c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20h45c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
        fill="#E0E0E0"
      />
      {/* 雨粒 */}
      <path
        d="M45 85l-3 10m15-10l-3 10m15-10l-3 10m15-10l-3 10"
        stroke="#64B5F6"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const Default: Story = {
  args: {
    weatherIcon: RainyIcon,
    temperature: 25,
    unit: "C",
    weatherCondition: "Heavy Rain",
    location: "Florida, US",
  },
};
