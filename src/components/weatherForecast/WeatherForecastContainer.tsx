"use client";

import { useState } from "react";
import WeatherForecast from "./WeatherForecast";
import { RainyIcon, SunnyIcon, CloudyIcon, HotIcon } from "@/components/icons";
import WindIcon from "@/components/weatherMetric/icons/WindIcon";
import HumidityIcon from "@/components/weatherMetric/icons/HumidityIcon";

export default function WeatherForecastContainer() {
  // 状態管理
  const [searchValue, setSearchValue] = useState("");

  // モックデータ
  const mockFavoriteCities = ["New York", "Los Angeles", "Chicago", "Miami"];
  const mockSelectedCity = "New York";
  const mockCurrentCity = "Florida, US";
  const mockLastUpdated = "2025-11-25T12:00:00.000Z";

  const mockDailyForecasts = [
    { dayOfWeek: "Sun", date: 14, weatherIcon: <SunnyIcon />, temperature: 25, unit: "C" as const, minTemperature: 18 },
    { dayOfWeek: "Mon", date: 15, weatherIcon: <CloudyIcon />, temperature: 24, unit: "C" as const, minTemperature: 19 },
    { dayOfWeek: "Tue", date: 16, weatherIcon: <SunnyIcon />, temperature: 27, unit: "C" as const, minTemperature: 20 },
    { dayOfWeek: "Wed", date: 17, weatherIcon: <SunnyIcon />, temperature: 29, unit: "C" as const, minTemperature: 22 },
    { dayOfWeek: "Thu", date: 18, weatherIcon: <CloudyIcon />, temperature: 32, unit: "C" as const, minTemperature: 24 },
    { dayOfWeek: "Fri", date: 19, weatherIcon: <HotIcon />, temperature: 34, unit: "C" as const, minTemperature: 26 },
    { dayOfWeek: "Sat", date: 20, weatherIcon: <HotIcon />, temperature: 36, unit: "C" as const, minTemperature: 28 },
  ];

  // イベントハンドラー
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearch = (value: string) => {
    console.log("Search for:", value);
    // TODO: API呼び出しなどの処理を実装
  };

  const handleCitySelect = (city: string) => {
    console.log("Selected city:", city);
    // TODO: 選択された都市の天気情報を取得
  };

  const handleAddCity = () => {
    console.log("Add city");
    // TODO: お気に入り都市を追加
  };

  return (
    <WeatherForecast
      searchConfig={{
        value: searchValue,
        onChange: handleSearchChange,
        onSearch: handleSearch,
        placeholder: "Search your location",
      }}
      favoriteCitiesConfig={{
        cities: mockFavoriteCities,
        selected: mockSelectedCity,
        onSelect: handleCitySelect,
        onAdd: handleAddCity,
      }}
      currentCity={mockCurrentCity}
      lastUpdated={mockLastUpdated}
      currentWeather={{
        icon: <RainyIcon />,
        temperature: 25,
        unit: "C",
        condition: "Heavy Rain",
      }}
      windMetric={{
        icon: <WindIcon />,
        value: 7.9,
        unit: "km/h",
        description: "9:00 AM",
      }}
      humidityMetric={{
        icon: <HumidityIcon />,
        value: 85,
        unit: "%",
        description: "Humidity is good",
      }}
      dailyForecasts={mockDailyForecasts}
    />
  );
}
