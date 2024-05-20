import { Link } from "react-router-dom";

const Components = () => {
  const comp = [
    { name: "Alert" },
    { name: "Button" },
    { name: "Card" },
  ];
  const Pages = [
    { name: "Landing" },
  ];

  return (
    <div className="mx-auto mt-8 flex flex-col justify-center items-center h-screen" id="componentsSection">
      <div className="container">
        <h1 className="text-4xl font-bold mb-4 text-left text-black">Components</h1>

        <ul className="grid grid-cols-4 gap-4 h-[250px] w-[1100px]">
          {comp.map((component, index) => (
            <Link key={index} to={`/components/ui/${component.name.toLowerCase()}`} className=" ">
              <li className=" p-10 rounded-lg shadow-sm border border-sky-500 hover:shadow-lg  hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-blue-500">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-800 text-4xl font-bold text-center">{component.name}</h1>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* <div className="container">
        <h1 className="text-2xl font-bold mb-4 text-left text-black">Pages</h1>

        <ul className="grid grid-cols-4 gap-4 h-[250px] w-[1100px] text-white">
          {pages.map((component, index) => (
            <Link key={index} to={`/components/ui/${component.name.toLowerCase()}`} className="text-lg font-bold text-center text-white">
              <li className="bg-gray-800 p-10 rounded-lg shadow-sm border border-sky-500 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500">
                {component.name}
              </li>
            </Link>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Components;


// import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
// import 'react-loading-skeleton/dist/skeleton.css'

// function Components() {
//   return (
//    <div className="bg-gray-900 h-96">
//     <h1>kjbak</h1>
//     <SkeletonTheme baseColor="#202020" highlightColor="#444">
      
//       <p>
//         <Skeleton count={5} />
//       </p>
//     </SkeletonTheme>
//    </div>
//   );
// }
// export default Components