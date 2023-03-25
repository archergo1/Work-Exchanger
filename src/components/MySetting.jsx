const MySetting = ({ text }) => {
  return (
    <a
      className="block h-10 w-full rounded-sm pl-2 pt-2 text-left hover:bg-mySecondColor hover:text-myyFirstColorHover"
      href="#"
    >
      {text}
    </a>
  );
};

export default MySetting;
