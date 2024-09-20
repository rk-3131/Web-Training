import CarsComponent from "./CarsComponent";
import FruitComponent from "./FruitComponent";

export default function ArrayOfObjects3({ fruitsArray, carsArray }) {
  return (
    <div>
      <h1>Here is the list of fruits again</h1>
      <ul>
      {fruitsArray.map((el) => (
        <li>
        <FruitComponent fruit={el} /></li>
      ))}
      </ul>
      {/* <h1>Using forEach loop</h1>
      {fruitsArray.array.forEach(element => (
        <FruitComponent fruit={element}
      ))} */}
      <h1>Here is the list of cars again</h1>
      <ol>
        {carsArray.map((car) => (
          <li>
            <CarsComponent car={car}/>
          </li>
        ))}
      </ol>
    </div>
  );
}
