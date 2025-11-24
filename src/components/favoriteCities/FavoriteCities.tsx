import { styles } from "./FavoriteCities.styles";

interface FavoriteCitiesProps {
  cities: string[];
  selected?: string | null;
  onSelect?: (city: string) => void;
  onAdd?: () => void;
}

export default function FavoriteCities({
  cities,
  selected = null,
  onSelect = () => {},
  onAdd = () => {},
}: FavoriteCitiesProps) {
  return (
    <div className={styles.container} role="list" aria-label="お気に入り都市">
      {cities.map((city, idx) => {
        const isActive = city === selected;
        return (
          <button
            key={`${city ?? "city"}-${idx}`}
            type="button"
            role="listitem"
            aria-pressed={isActive}
            className={isActive ? styles.pillActive : styles.pill}
            onClick={() => onSelect(city)}
            data-city={city}
          >
            {city || "(未設定)"}
          </button>
        );
      })}

      <button
        type="button"
        aria-label="都市を追加"
        className={styles.addButton}
        onClick={onAdd}
      >
        +
      </button>
    </div>
  );
}