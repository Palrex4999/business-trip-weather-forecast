import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchWeatherByCity } from './weather';

describe('fetchWeatherByCity', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.restoreAllMocks();
  });

  it('APIキーが設定されていない場合、nullを返す', async () => {
    delete process.env.OPENWEATHER_API_KEY;
    const result = await fetchWeatherByCity('Tokyo');
    expect(result).toBeNull();
  });

  it('APIから正常に天気データを取得できる', async () => {
    process.env.OPENWEATHER_API_KEY = 'test-api-key';

    const mockWeatherData = {
      coord: { lon: 139.6917, lat: 35.6895 },
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
      base: 'stations',
      main: {
        temp: 20.5,
        feels_like: 19.8,
        temp_min: 18.0,
        temp_max: 22.0,
        pressure: 1013,
        humidity: 60,
      },
      visibility: 10000,
      wind: { speed: 3.5, deg: 180 },
      clouds: { all: 0 },
      dt: 1234567890,
      sys: {
        type: 1,
        id: 1234,
        country: 'JP',
        sunrise: 1234567800,
        sunset: 1234567900,
      },
      timezone: 32400,
      id: 1850144,
      name: 'Tokyo',
      cod: 200,
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockWeatherData,
    });

    const result = await fetchWeatherByCity('Tokyo');

    expect(result).toEqual(mockWeatherData);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=test-api-key&units=metric'
    );
  });

  it('API呼び出しが失敗した場合、nullを返す', async () => {
    process.env.OPENWEATHER_API_KEY = 'test-api-key';

    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    const result = await fetchWeatherByCity('InvalidCity');

    expect(result).toBeNull();
  });

  it('ネットワークエラーが発生した場合、nullを返す', async () => {
    process.env.OPENWEATHER_API_KEY = 'test-api-key';

    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    const result = await fetchWeatherByCity('Tokyo');

    expect(result).toBeNull();
  });

  it('units=metricパラメータが含まれている', async () => {
    process.env.OPENWEATHER_API_KEY = 'test-api-key';

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({}),
    });

    await fetchWeatherByCity('Tokyo');

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('units=metric')
    );
  });
});
