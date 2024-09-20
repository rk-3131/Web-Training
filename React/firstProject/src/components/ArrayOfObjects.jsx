export default function ArrayOfObjects({ cars }) {
  return (
    // <div>
    //   <ul>
    //     {cars.map((car) => (
    //       <li>
    //         {car.color} {car.type} {car.registration} {car.capacity}
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div>
      <h1>In the list form</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.color}>
            {car.color} {car.type} {car.capacity}
          </li>
        ))}
      </ul>

      <h1>In the table form</h1>
      <table>
        <thead>
          <tr>
            <th>color</th>
            <th>type</th>
            <th>capacity</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((c) => (
            <tr>
              <td>{c.color}</td>
              <td>{c.type}</td>
              <td>{c.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
