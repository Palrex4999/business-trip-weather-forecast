"use client";

import { useState } from "react";
import SearchBox from "./SearchBox";

export default function SearchBoxContainer() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearch = (value: string) => {
    console.log("Search for:", value);
    // TODO: API呼び出しなどの処理を実装
  };

  return (
    <SearchBox
      value={searchValue}
      onChange={handleSearchChange}
      onSearch={handleSearch}
      placeholder="Search your location"
    />
  );
}
