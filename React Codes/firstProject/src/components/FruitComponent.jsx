export default function FruitComponent({ fruit }) {
  return (
    <div>
      {fruit.name} {fruit.price} {fruit.prop}{" "}
      {fruit.available ? "Available" : "Sold Out"}
    </div>
  );
}
