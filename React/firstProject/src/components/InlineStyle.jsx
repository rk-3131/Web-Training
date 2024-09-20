export default function InlineStyle() {
  const m2 = {
    color: "blue",
    backgroundColor: "pink",
    fontSize: "60px",
  };
  return (
    <div>
      <h1
        style={{
          color: "blue",
          backgroundColor: "pink",
          fontSize: "60px",
        }}
      >
        This is the first way
      </h1>
      <h1 style={m2}>This is the second way</h1>
    </div>
  );
}
