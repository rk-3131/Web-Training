export default function FruitComponent({ fruit }) {
  return (
    <>
      {fruit.name} {fruit.price} {fruit.prop}{" "}
      {fruit.available ? "Available" : "Sold Out"}
    </>
  );
}
