export default function ArrayAsProps({ marksArray }) {
  return (
    <div>
      <h1>The array in single line</h1>
      <h2>{marksArray}</h2>

      <h1>The array in new line using list</h1>
      <ul>
        {marksArray.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
    // so this is how we can print the elements of the array in the list and we can take them as parameter
  );
}
