export default function CarsComponent({ car }) {
  return (
    <div>
      {car.color} {car.type} {car.capacity}
    </div>
  );
}
