import WeatherForecast from "./WeatherForecast";
import { fetchWeatherByCity } from "@/api/weather";

export default async function WeatherForecastContainer() {
  return <WeatherForecast />;
}
