export default function Button({ text, onClick}) {
  return (
    <button className="button2" onClick={onClick}>
      {text}
    </button>
  );
}
// the appearance settings are in the index.css
