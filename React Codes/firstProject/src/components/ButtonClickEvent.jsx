export default function ButtonClickEvent() {
  function afterButtonClicked() {
    alert("The button has been clicked");
  }

  function mouseHovered() {
    alert("The mouse just got hovered over the button");
  }
  return (
    <div>
      <button onClick={afterButtonClicked} onMouseOver={mouseHovered}>
        Click me to see the event
      </button>
    </div>
  );
}
