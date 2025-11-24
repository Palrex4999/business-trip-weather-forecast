import type { Meta, StoryObj } from "@storybook/react";
import FavoriteCities from "./FavoriteCities";
import { useState } from "react";

const meta = {
  title: "Components/FavoriteCities",
  component: FavoriteCities,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onSelect: () => {},
    onAdd: () => {},
  },
} satisfies Meta<typeof FavoriteCities>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCities = ["東京", "大阪", "名古屋", "福岡"];

export const Default: Story = {
  args: {
    cities: sampleCities,
    selected: null,
  },
};

export const WithSelected: Story = {
  args: {
    cities: sampleCities,
    selected: "東京",
  },
};