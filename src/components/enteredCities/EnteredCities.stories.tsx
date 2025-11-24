import type { Meta, StoryObj } from "@storybook/react";
import EnteredCities from "./EnteredCities";
import { useState } from "react";

const meta = {
  title: "Components/EnteredCities",
  component: EnteredCities,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onRemove: () => {},
  },
} satisfies Meta<typeof EnteredCities>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    city: "New York, USA",
  },
};

export const JapaneseCity: Story = {
  args: {
    city: "東京",
  },
};

export const LongCityName: Story = {
  args: {
    city: "San Francisco, California, USA",
  },
};

export const Empty: Story = {
  args: {
    city: null,
  },
};

export const Interactive: Story = {
  render: () => {
    const [city, setCity] = useState<string | null>("Tokyo, Japan");

    return (
      <div className="space-y-4">
        <EnteredCities city={city} onRemove={() => setCity(null)} />
        <div className="flex gap-2">
          <button
            onClick={() => setCity("New York, USA")}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
          >
            New York
          </button>
          <button
            onClick={() => setCity("Tokyo, Japan")}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
          >
            Tokyo
          </button>
          <button
            onClick={() => setCity(null)}
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm"
          >
            Clear
          </button>
        </div>
        <div className="text-sm text-gray-600">
          現在の都市: <span className="font-semibold">{city || "(なし)"}</span>
        </div>
      </div>
    );
  },
};
