export default function ArrayOfObjects2({ arr }) {
  return (
    <div>
      <ul>
        {arr.map((el) => (
          <li key={el.name}>
            {el.name} {el.price} {el.prop}{" "}
            {el.available ? "Available" : "Not Available"}
          </li>
        ))}
      </ul>
    </div>
  );
}
