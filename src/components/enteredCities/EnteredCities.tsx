import { styles } from "./EnteredCities.styles";

interface EnteredCitiesProps {
  cities: string[];
  onRemove?: (city: string) => void;
}

export default function EnteredCities({
  cities,
  onRemove = () => {},
}: EnteredCitiesProps) {
  return (
    <div className={styles.container} role="list" aria-label="入力済み都市">
      {cities.map((city, idx) => (
        <div
          key={`${city ?? "city"}-${idx}`}
          role="listitem"
          className={styles.pill}
          data-city={city}
        >
          <span className={styles.cityName}>{city || "(未設定)"}</span>
          <button
            type="button"
            aria-label={`${city}を削除`}
            className={styles.removeButton}
            onClick={() => onRemove(city)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
