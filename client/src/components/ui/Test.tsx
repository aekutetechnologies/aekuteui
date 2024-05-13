const Button = () => {
  return (
    <div>
      <button className="hover:bg-sky-900 rounded-lg p-3 font-bold">
        TEXT
      </button>
      <button className="bg-blue-500 rounded-lg p-3 font-bold">
        CONTAINED
      </button>
      <button className="hover:bg-sky-900 rounded-lg p-3 font-bold outline outline-2 outline-blue-500">
        OUTLINE
      </button>
    </div>
  );
};

export default Button;
