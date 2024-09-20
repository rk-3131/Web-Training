import CarsComponent from "./CarsComponent";
import FruitComponent from "./FruitComponent";

export default function ArrayOfObjects3({ fruitsArray, carsArray }) {
  return (
    <div>
      <h1>Here is the list of fruits again</h1>
      {fruitsArray.map((el) => (
        <FruitComponent fruit={el} />
      ))}

      <h1>Here is the list of cars again</h1>
      {carsArray.map((car) => (
        <CarsComponent car={car} />
      ))}
    </div>
  );
}
