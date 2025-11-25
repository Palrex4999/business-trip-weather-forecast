import SearchBox from "@/components/searchBox/SearchBox";
import FavoriteCities from "@/components/favoriteCities/FavoriteCities";
import EnteredCities from "@/components/enteredCities/EnteredCities";
import UpdatedAt from "@/components/updatedAt/UpdatedAt";
import NowWeatherInfo from "@/components/nowWeatherInfo/NowWeatherInfo";
import WeatherMetric from "@/components/weatherMetric/WeatherMetric";
import DailyForecast from "@/components/dailyForecast/DailyForecast";

export interface SearchConfig {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  placeholder: string;
}

export interface FavoriteCitiesConfig {
  cities: string[];
  selected: string;
  onSelect: (city: string) => void;
  onAdd: () => void;
}

export interface CurrentWeather {
  icon: React.ReactNode;
  temperature: number;
  unit: "C" | "F";
  condition: string;
}

export interface WeatherMetricData {
  icon: React.ReactNode;
  value: number;
  unit: string;
  description: string;
}

export interface DailyForecastData {
  dayOfWeek: string;
  date: number;
  weatherIcon: React.ReactNode;
  temperature: number;
  unit: "C" | "F";
  minTemperature?: number;
}

export interface WeatherForecastProps {
  searchConfig: SearchConfig;
  favoriteCitiesConfig: FavoriteCitiesConfig;
  currentCity: string;
  lastUpdated: string;
  currentWeather: CurrentWeather;
  windMetric: WeatherMetricData;
  humidityMetric: WeatherMetricData;
  dailyForecasts: DailyForecastData[];
}

export default function WeatherForecast({
  searchConfig,
  favoriteCitiesConfig,
  currentCity,
  lastUpdated,
  currentWeather,
  windMetric,
  humidityMetric,
  dailyForecasts,
}: WeatherForecastProps) {
  return (
    <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: 'rgb(240, 244, 250)' }}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ヘッダーセクション: 検索窓とお気に入り都市 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <SearchBox
              value={searchConfig.value}
              onChange={searchConfig.onChange}
              onSearch={searchConfig.onSearch}
              placeholder={searchConfig.placeholder}
            />
          </div>
          <div>
            <FavoriteCities
              cities={favoriteCitiesConfig.cities}
              selected={favoriteCitiesConfig.selected}
              onSelect={favoriteCitiesConfig.onSelect}
              onAdd={favoriteCitiesConfig.onAdd}
            />
          </div>
        </div>

        {/* 都市名と最終更新時刻 */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white rounded-lg p-4">
          <EnteredCities city={currentCity} />
          <UpdatedAt timestamp={lastUpdated} />
        </div>

        {/* メイン天気情報セクション */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 左側: 天気アイコンと気温 */}
            <div className="flex justify-center items-center">
              <NowWeatherInfo
                weatherIcon={currentWeather.icon}
                temperature={currentWeather.temperature}
                unit={currentWeather.unit}
                weatherCondition={currentWeather.condition}
              />
            </div>

            {/* 右側: 天気メトリック */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <WeatherMetric
                icon={windMetric.icon}
                label="Wind Status"
                value={windMetric.value}
                unit={windMetric.unit}
                description={windMetric.description}
              />
              <WeatherMetric
                icon={humidityMetric.icon}
                label="Humidity"
                value={humidityMetric.value}
                unit={humidityMetric.unit}
                description={humidityMetric.description}
              />
            </div>
          </div>
        </div>

        {/* 週間予報セクション */}
        <div className="bg-white rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Weekly Forecast</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            {dailyForecasts.map((forecast, index) => (
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
