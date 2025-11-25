import SearchBoxContainer from "@/components/searchBox/SearchBoxContainer";
import FavoriteCitiesContainer from "@/components/favoriteCities/FavoriteCitiesContainer";
import CityInfoContainer from "@/components/cityInfo/CityInfoContainer";
import CurrentWeatherContainer from "@/components/nowWeatherInfo/CurrentWeatherContainer";
import WeatherMetricsContainer from "@/components/weatherMetric/WeatherMetricsContainer";
import DailyForecastListContainer from "@/components/dailyForecast/DailyForecastListContainer";

export default function WeatherForecast() {
  return (
    <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: 'rgb(240, 244, 250)' }}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ヘッダーセクション: 検索窓とお気に入り都市 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <SearchBoxContainer />
          </div>
          <div>
            <FavoriteCitiesContainer />
          </div>
        </div>

        {/* 都市名と最終更新時刻 */}
        <CityInfoContainer />

        {/* メイン天気情報セクション */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 左側: 天気アイコンと気温 */}
            <CurrentWeatherContainer />

            {/* 右側: 天気メトリック */}
            <WeatherMetricsContainer />
          </div>
        </div>

        {/* 週間予報セクション */}
        <DailyForecastListContainer />
      </div>
    </div>
  );
}
