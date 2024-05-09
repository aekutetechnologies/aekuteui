import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


interface DataItem {
  id: number;
  title: string;
}

const Home = () => {
  const [jsonData, setJsonData] = useState<DataItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getDataJson");
        if (!response.ok) {
          throw new Error("Failed to fetch data.json");
        }
        const data: DataItem[] = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data.json:", error);
      }
    };

    fetchData();
  }, []);

  const scrollToComponents = () => {
    const componentsSection = document.getElementById("componentsSection");
    if (componentsSection) {
      componentsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" container mx-auto">
      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="Font-bold text-6xl">
          <span>Aekute</span>
          <span className="text-gray-400">UI</span>
        </h1>
        <p className="text-center">
          web bulid some opensource tailwindcss components
        </p>
        <button
          className="mt-2 bg-gray-800 text-white font-lg px-5 py-2 rounded hover:bg-gray-400"
          onClick={scrollToComponents}
        >
          Get Started
        </button>
      </div>

      <div
        className=" mx-auto mt-8 flex justify-center items-center h-screen"
        id="componentsSection"
      >
        <div className="container">
          <h1 className="text-2xl font-bold mb-4 text-left">All Components</h1>
          {/* {jsonData ? (
            <ul className="grid grid-cols-4 gap-4">
              {jsonData.map((item) => (
                <Link
                  key={item.id}
                  to={`/item/${item.id}`}
                  className="text-lg font-bold text-center text-white "
                >
                  <li className="bg-gray-800 p-10 rounded hover:bg-gray-400">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <p>Loading data.json...</p>
          )} */}

          <ul className="grid grid-cols-4 gap-4">
            <Link
              to="/component/alert"
              className="text-lg font-bold text-center text-white "
            >
              <li className="bg-gray-800 p-10 rounded hover:bg-gray-400">Alert</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
