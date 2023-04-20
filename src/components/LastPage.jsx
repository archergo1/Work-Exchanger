import { useNavigate } from "react-router-dom";

export default function LastPage() {
  const navigate = useNavigate();

  return (
    <button
      className="my-4 ml-6 block pl-5 text-base font-bold text-myFirstColor"
      onClick={() => {
        navigate(-1);
      }}
    >
      {`<上一頁`}
    </button>
  );
}
