"use client";

import DailyForecast from "./DailyForecast";
import { SunnyIcon, CloudyIcon, HotIcon } from "@/components/icons";

export default function DailyForecastListContainer() {
  const mockDailyForecasts = [
    { dayOfWeek: "Sun", date: 14, weatherIcon: <SunnyIcon />, temperature: 25, unit: "C" as const, minTemperature: 18 },
    { dayOfWeek: "Mon", date: 15, weatherIcon: <CloudyIcon />, temperature: 24, unit: "C" as const, minTemperature: 19 },
    { dayOfWeek: "Tue", date: 16, weatherIcon: <SunnyIcon />, temperature: 27, unit: "C" as const, minTemperature: 20 },
    { dayOfWeek: "Wed", date: 17, weatherIcon: <SunnyIcon />, temperature: 29, unit: "C" as const, minTemperature: 22 },
    { dayOfWeek: "Thu", date: 18, weatherIcon: <CloudyIcon />, temperature: 32, unit: "C" as const, minTemperature: 24 },
    { dayOfWeek: "Fri", date: 19, weatherIcon: <HotIcon />, temperature: 34, unit: "C" as const, minTemperature: 26 },
    { dayOfWeek: "Sat", date: 20, weatherIcon: <HotIcon />, temperature: 36, unit: "C" as const, minTemperature: 28 },
  ];

  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Weekly Forecast</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {mockDailyForecasts.map((forecast, index) => (
          <div key={index} className="flex-shrink-0">
            <DailyForecast
              dayOfWeek={forecast.dayOfWeek}
              date={forecast.date}
              weatherIcon={forecast.weatherIcon}
              temperature={forecast.temperature}
              unit={forecast.unit}
              minTemperature={forecast.minTemperature}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
