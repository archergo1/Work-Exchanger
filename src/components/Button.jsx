const Button = ({ text, onClick }) => {
  return (
    <button className="button2" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
// the appearance settings are in the index.css
