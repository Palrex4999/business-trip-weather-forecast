import { styles } from "./SearchBox.styles";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function SearchBox({
  value,
  onChange,
  onSearch,
  placeholder = "都市名を入力",
  disabled = false,
}: SearchBoxProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !disabled) {
      onSearch();
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className={styles.input}
      />
      <button
        onClick={onSearch}
        disabled={disabled || !value.trim()}
        className={styles.button}
      >
        検索
      </button>
    </div>
  );
}
