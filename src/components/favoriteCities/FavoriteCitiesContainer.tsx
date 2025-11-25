"use client";

import FavoriteCities from "./FavoriteCities";

export default function FavoriteCitiesContainer() {
  const mockFavoriteCities = ["New York", "Los Angeles", "Chicago", "Miami"];
  const mockSelectedCity = "New York";

  const handleCitySelect = (city: string) => {
    console.log("Selected city:", city);
    // TODO: 選択された都市の天気情報を取得
  };

  const handleAddCity = () => {
    console.log("Add city");
    // TODO: お気に入り都市を追加
  };

  return (
    <FavoriteCities
      cities={mockFavoriteCities}
      selected={mockSelectedCity}
      onSelect={handleCitySelect}
      onAdd={handleAddCity}
    />
  );
}
