import Rating from "./Rating";
import Avatar from "./Avatar";
import HashTags from "./HashTags";
import {
  HashRouter,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

const OurLastCard = ({
  id,
  store_name,
  author,
  post_date,
  score,
  body,
  pros,
  storeId,
}) => {
  return (
    <NavLink to={`/stores/${storeId}`}>
      <li className="mt-6 mb-6 h-72 w-600px rounded bg-white px-6 py-4 shadow-lg">
        <div className="flex">
          <Avatar
          //   img={props.img}
          />
          <div className="flex w-full justify-between">
            <div>
              <div className="mb-2 text-xl font-bold">{store_name}</div>
              <div>{author}</div>
              <div>{post_date}</div>
            </div>
            <Rating score={score} />
          </div>
        </div>
        <p className="mt-4 mb-4 text-base text-gray-700">{body}</p>
        <HashTags pros={pros} />
      </li>
    </NavLink>
  );
};

export default OurLastCard;
