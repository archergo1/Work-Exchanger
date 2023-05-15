import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import Rating from "./Rating";
import HashTags from "./HashTags";


export default function OurLastCard({
  store_name,
  post_date,
  score,
  body,
  pros,
  storeId,
  store,
  user,
}) {
  return (
    <Link to={`/stores/${storeId}`}>
      <li className="mt-6 mb-6 h-72 w-600px rounded bg-white px-6 py-4 shadow-lg">
        <div className="flex">
          <img className="mr-2 h-20 w-20" src={store?.img_url} alt="cat" />
          <div className="flex w-full justify-between">
            <div>
              <div className="mb-2 text-xl font-bold">{store_name}</div>
              <div>{user?.name}</div>
              <div>{post_date}</div>
            </div>
            <Rating score={score} />
          </div>
        </div>
        <LinesEllipsis
          className="mt-4 mb-4 text-base text-gray-700"
          text={body}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
        <HashTags pros={pros} />
      </li>
    </Link>
  );
}
