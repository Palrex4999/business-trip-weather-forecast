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
          <svg
            className={styles.locationIcon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              fill="currentColor"
            />
          </svg>
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
