export default function Rating({ score }) {
  return (
    <div className="rating relative items-center">
      <img
        src="/static/images/whiteStar.png"
        alt="star"
        className="absolute left-2 h-10 w-10"
      />
      <span className="absolute right-3 text-4xl">{score}</span>
    </div>
  );
}
