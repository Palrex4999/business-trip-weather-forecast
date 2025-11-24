import { styles } from "./WeatherMetric.styles";

interface WeatherMetricProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  unit: string;
  description?: string;
}

export default function WeatherMetric({
  icon,
  label,
  value,
  unit,
  description,
}: WeatherMetricProps) {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.infoContainer}>
        <div className={styles.label}>{label}</div>
        <div className={styles.valueContainer}>
          <span className={styles.value}>{value}</span>
          <span className={styles.unit}>{unit}</span>
        </div>
        {description && <div className={styles.description}>{description}</div>}
      </div>
    </div>
  );
}
