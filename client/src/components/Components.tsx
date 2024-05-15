import { Link } from "react-router-dom";
const Components = () => {
  return (
    <div
      className="mx-auto mt-8 flex justify-center items-center h-screen"
      id="componentsSection"
    >
      <div className="container">
        <h1 className="text-2xl font-bold mb-4 text-left text-white">
          All Components
        </h1>

        <ul className="grid grid-cols-4 gap-4">
          <Link
            to="/ui/alert"
            className="text-lg font-bold text-center text-white"
          >
            <li className="bg-gray-800 p-10 rounded-lg shadow-sm border border-sky-500 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500 ">
              Alert
            </li>
          </Link>

          <Link
            to="ui/button"
            className="text-lg font-bold text-center text-white"
          >
            <li className="bg-gray-800 p-10 rounded-lg shadow-sm border border-sky-500 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500 ">
              Button
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Components;
