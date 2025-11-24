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

const sampleCities = ["東京", "大阪", "名古屋", "福岡"];

export const Default: Story = {
  args: {
    cities: sampleCities,
  },
};

export const SingleCity: Story = {
  args: {
    cities: ["東京"],
  },
};

export const ManyCities: Story = {
  args: {
    cities: ["東京", "大阪", "名古屋", "福岡", "札幌", "仙台", "広島", "神戸"],
  },
};

export const Empty: Story = {
  args: {
    cities: [],
  },
};

export const Interactive: Story = {
  render: () => {
    const [cities, setCities] = useState(["東京", "大阪", "名古屋", "福岡"]);

    return (
      <div className="space-y-4">
        <EnteredCities
          cities={cities}
          onRemove={(city) => {
            setCities(cities.filter((c) => c !== city));
          }}
        />
        <div className="text-sm text-gray-600">
          都市数: <span className="font-semibold">{cities.length}</span>
        </div>
      </div>
    );
  },
};
