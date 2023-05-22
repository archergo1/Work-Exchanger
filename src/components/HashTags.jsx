export default function HashTags({ tags }) {
  return (
    <ul className="py-2">
      {tags.map((tag, index) => {
        return (
          <li
            key={index}
            className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
          >
            #{tag}
          </li>
        );
      })}
    </ul>
  );
}
