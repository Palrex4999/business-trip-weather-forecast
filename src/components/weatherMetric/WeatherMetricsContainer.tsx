"use client";

import WeatherMetric from "./WeatherMetric";
import WindIcon from "./icons/WindIcon";
import HumidityIcon from "./icons/HumidityIcon";

export default function WeatherMetricsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <WeatherMetric
        icon={<WindIcon />}
        label="Wind Status"
        value={7.9}
        unit="km/h"
        description="9:00 AM"
      />
      <WeatherMetric
        icon={<HumidityIcon />}
        label="Humidity"
        value={85}
        unit="%"
        description="Humidity is good"
      />
    </div>
  );
}
