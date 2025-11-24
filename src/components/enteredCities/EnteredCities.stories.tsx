import type { Meta, StoryObj } from "@storybook/react";
import EnteredCities from "./EnteredCities";

const meta = {
  title: "Components/EnteredCities",
  component: EnteredCities,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EnteredCities>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    city: "東京",
  },
};

export const WithCountry: Story = {
  args: {
    city: "東京、日本",
  },
};

export const EnglishCity: Story = {
  args: {
    city: "New York, USA",
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
