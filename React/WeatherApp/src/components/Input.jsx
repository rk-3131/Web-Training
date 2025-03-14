import styles from "./input.module.css";

export default function Input({
  setLoading,
  isLoading,
  setWeatherData,
  city,
  setCity,
}) {
  const apiKey = "aa065d23a4ec4f9c86793006241107";

  async function fetchAPIData(e) {
    if (city === "" || city === null) {
      alert("Empty city name!");
      return;
    }
    setLoading(true);
    e.preventDefault();
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
  return (
    <div className={styles.container}>
      <form className={styles.formElement}>
        <input
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className={styles.inp}
          type="text"
          value={city}
        />
        {isLoading ? (
          <button
            onClick={(e) => {
              fetchAPIData(e);
            }}
            className={styles.btn}
            type="submit"
          >
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
                stroke="black"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={(e) => {
              fetchAPIData(e);
            }}
            className={styles.btn}
            type="submit"
          >
            Search
          </button>
        )}
      </form>
    </div>
  );
}
