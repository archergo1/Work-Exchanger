export default function Rating({ score }) {
  return (
    <>
      <div className="rating relative items-center">
        <img
          src="/static/images/whiteStar.png"
          alt="star"
          className="h-10 w-10 absolute left-2"
        />
        <span className="text-4xl absolute right-3">{score}</span>
      </div>
    </>
  );
}
