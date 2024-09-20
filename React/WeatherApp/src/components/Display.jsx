import styles from "./display.module.css";

export default function Display({ isLoading, weatherData }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.afterLoadContainer}>
          <div className={styles.condition}>
            <p>
              <img src={weatherData.current.condition.icon} alt="" />
              <sup>{weatherData.current.condition.text}</sup>
            </p>
          </div>
          <div className={styles.temprature}>
            Temprature : {weatherData.current.temp_c} &#176;C
          </div>
          <div className={styles.windHumidity}>
            <div className={styles.wind}>
              Wind : {weatherData.current.wind_kph} kph
            </div>
            <div className={styles.humidity}>
              Humidity : {weatherData.current.humidity}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
