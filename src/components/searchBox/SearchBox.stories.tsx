import type { Meta, StoryObj } from "@storybook/react";
import SearchBox from "./SearchBox";
import { useState } from "react";

const meta = {
  title: "Components/SearchBox",
  component: SearchBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: () => {},
    onSearch: () => {},
  },
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "都市名を入力",
    disabled: false,
  },
};

export const WithValue: Story = {
  args: {
    value: "東京",
    placeholder: "都市名を入力",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    value: "",
    placeholder: "都市名を入力",
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  args: {
    value: "大阪",
    placeholder: "都市名を入力",
    disabled: true,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    value: "",
    placeholder: "出張先の都市名を検索...",
    disabled: false,
  },
};
