import FruitComponent from "./FruitComponent";

export default function ConditionalComponentFruits({ arr }) {
  const SortedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price > 50) {
      SortedArray.push(arr[i]);
    }
  }
  return (
    <div>
      {SortedArray.map((el) => (
        <FruitComponent fruit={el} />
      ))}
    </div>
  );
}
