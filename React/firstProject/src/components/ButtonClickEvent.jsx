export default function ButtonClickEvent() {
  function afterButtonClicked(e) {
    e.preventDefault();
    alert("The button has been clicked");
  }

  function mouseHovered() {
    alert("The mouse just got hovered over the button");
  }
  return (
    <div>
      {/* <button onClick={afterButtonClicked}>Click me to see the event</button> */}
      <button
        onClick={(e) => {
          return afterButtonClicked(e);
        }}
      >
        Click me to see the event
      </button>
    </div>
  );
}
