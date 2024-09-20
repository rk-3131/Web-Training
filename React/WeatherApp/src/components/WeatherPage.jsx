import { useEffect, useState } from "react";
import Display from "./Display";
import Search from "./Search";
import styles from "./weatherPage.module.css";

const apiKey = "aa065d23a4ec4f9c86793006241107";

export default function WeatherPage() {
  const [city, setCity] = useState("Nagpur");
  const [isLoading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    async function fetchAPIData() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        );
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Search
          setWeatherData={setWeatherData}
          isLoading={isLoading}
          setLoading={setLoading}
          city={city}
          setCity={setCity}
        />
        <Display isLoading={isLoading} weatherData={weatherData} />
      </div>
    </div>
  );
}
