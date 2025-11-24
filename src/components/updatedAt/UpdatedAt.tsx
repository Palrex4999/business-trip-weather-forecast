import { styles } from "./UpdatedAt.styles";

interface UpdatedAtProps {
  timestamp?: Date | string | null;
}

export default function UpdatedAt({ timestamp }: UpdatedAtProps) {
  if (!timestamp) {
    return null;
  }

  const formatTime = (time: Date | string) => {
    const date = typeof time === "string" ? new Date(time) : time;
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className={styles.container}>
      <span className={styles.text}>Updated at {formatTime(timestamp)}</span>
    </div>
  );
}
