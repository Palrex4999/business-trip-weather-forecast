"use client";

import SearchBox from "@/components/searchBox/SearchBox";
import FavoriteCities from "@/components/favoriteCities/FavoriteCities";
import EnteredCities from "@/components/enteredCities/EnteredCities";
import UpdatedAt from "@/components/updatedAt/UpdatedAt";
import NowWeatherInfo from "@/components/nowWeatherInfo/NowWeatherInfo";
import WeatherMetric from "@/components/weatherMetric/WeatherMetric";
import DailyForecast from "@/components/dailyForecast/DailyForecast";
import { RainyIcon, SunnyIcon, CloudyIcon, HotIcon } from "@/components/icons";
import WindIcon from "@/components/weatherMetric/icons/WindIcon";
import HumidityIcon from "@/components/weatherMetric/icons/HumidityIcon";

export default function Home() {
  // モックデータ
  const mockFavoriteCities = ["New York", "Los Angeles", "Chicago", "Miami"];
  const mockSelectedCity = "New York";
  const mockCurrentCity = "Florida, US";
  const mockLastUpdated = new Date().toISOString();

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
    <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: 'rgb(240, 244, 250)' }}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ヘッダーセクション: 検索窓とお気に入り都市 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <SearchBox
              value=""
              onChange={() => {}}
              onSearch={() => {}}
              placeholder="Search your location"
            />
          </div>
          <div>
            <FavoriteCities
              cities={mockFavoriteCities}
              selected={mockSelectedCity}
              onSelect={() => {}}
              onAdd={() => {}}
            />
          </div>
        </div>

        {/* 都市名と最終更新時刻 */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white rounded-lg p-4">
          <EnteredCities city={mockCurrentCity} />
          <UpdatedAt timestamp={mockLastUpdated} />
        </div>

        {/* メイン天気情報セクション */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 左側: 天気アイコンと気温 */}
            <div className="flex justify-center items-center">
              <NowWeatherInfo
                weatherIcon={<RainyIcon />}
                temperature={25}
                unit="C"
                weatherCondition="Heavy Rain"
              />
            </div>

            {/* 右側: 天気メトリック */}
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
          </div>
        </div>

        {/* 週間予報セクション */}
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
      </div>
    </div>
  );
}
