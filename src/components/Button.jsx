export default function Button({ style, text, onClick }) {
  return (
    <button className={style} onClick={onClick}>
      {text}
    </button>
  );
}
// the appearance settings are in the index.css
