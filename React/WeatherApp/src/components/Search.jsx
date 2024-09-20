import Input from "./Input";
import styles from "./search.module.css";
export default function Search({
  isLoading,
  setLoading,
  setWeatherData,
  city,
  setCity,
}) {
  return (
    <div className={styles.container}>
      <Input
        isLoading={isLoading}
        setLoading={setLoading}
        setWeatherData={setWeatherData}
        city={city}
        setCity={setCity}
      />
    </div>
  );
}
