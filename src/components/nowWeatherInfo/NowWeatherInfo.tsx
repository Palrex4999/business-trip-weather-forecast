import { styles } from "./NowWeatherInfo.styles";

interface NowWeatherInfoProps {
  weatherIcon: React.ReactNode;
  temperature: number;
  unit?: "C" | "F";
  weatherCondition: string;
}

export default function NowWeatherInfo({
  weatherIcon,
  temperature,
  unit = "C",
  weatherCondition,
}: NowWeatherInfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>{weatherIcon}</div>
      <div className={styles.infoContainer}>
        <div className={styles.temperature}>
          {temperature}°{unit}
        </div>
        <div className={styles.weatherCondition}>{weatherCondition}</div>
      </div>
    </div>
  );
}
