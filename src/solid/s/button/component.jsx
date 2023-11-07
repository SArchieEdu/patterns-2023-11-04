export function Button({ text, onClick, onHover }) {
  return (
    <button onClick={onClick} onMouseEnter={onHover}>
      {text}
    </button>
  );
}
