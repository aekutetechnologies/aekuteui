import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row h-screen justify-center items-center text-white">
        <div id="firstCard" className="w-1/2 b">
          <div id="hero" className="h-96 flex flex-col justify-center">
            <h1 className="font-bold text-6xl">
              <span>Aekute</span>
              <span className="text-blue-400">UI</span>
            </h1>
            <p className="">Build some open-source Tailwind CSS components</p>
            <div className="grid grid-cols-2 gap-4 w-3/4">
              <button className="w-auto mt-2 bg-blue-400 text-white font-lg px-5 py-2 rounded hover:bg-gray-400">
                <Link to="/Components">All Components</Link>
              </button>

              <button className="w-auto mt-2 bg-blue-400 text-white font-lg px-5 py-2 rounded hover:bg-gray-400">
                <Link to="/About">Build Components </Link>
              </button>
            </div>
          </div>
        </div>

        <div id="secondCard" className="w-1/2 bg-red-600 h-[500px] relative">
          <img src="./bg.jpg" alt="" className="absolute w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
