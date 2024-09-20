export default function CarsComponent({ car }) {
  return (
    <>
      {car.color} {car.type} {car.capacity}
    </>
  );
}
