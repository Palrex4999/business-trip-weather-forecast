"use client";

import EnteredCities from "@/components/enteredCities/EnteredCities";
import UpdatedAt from "@/components/updatedAt/UpdatedAt";

export default function CityInfoContainer() {
  const mockCurrentCity = "Florida, US";
  const mockLastUpdated = "2025-11-25T12:00:00.000Z";

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white rounded-lg p-4">
      <EnteredCities city={mockCurrentCity} />
      <UpdatedAt timestamp={mockLastUpdated} />
    </div>
  );
}
