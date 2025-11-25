export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export async function fetchWeatherByCity(city: string): Promise<WeatherData | null> {
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    console.error('OPENWEATHER_API_KEY is not set');
    return null;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status} ${response.statusText}`);
    }

    const weatherData: WeatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    return null;
  }
}
