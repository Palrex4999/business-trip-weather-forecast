import { styles } from "./DailyForecast.styles";

interface DailyForecastProps {
  dayOfWeek: string;
  date: number;
  weatherIcon: React.ReactNode;
  temperature: number;
  unit?: "C" | "F";
  minTemperature?: number;
}

export default function DailyForecast({
  dayOfWeek,
  date,
  weatherIcon,
  temperature,
  unit = "C",
  minTemperature,
}: DailyForecastProps) {
  return (
    <div className={styles.container}>
      <div className={styles.dateContainer}>
        <div className={styles.dayOfWeek}>{dayOfWeek}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.iconContainer}>{weatherIcon}</div>
      <div className={styles.temperatureContainer}>
        {minTemperature !== undefined ? (
          <>
            <span className={styles.maxTemperature}>
              {temperature}°{unit}
            </span>
            <span className={styles.minTemperature}>
              {minTemperature}°{unit}
            </span>
          </>
        ) : (
          <span className={styles.temperature}>
            {temperature}°{unit}
          </span>
        )}
      </div>
    </div>
  );
}
