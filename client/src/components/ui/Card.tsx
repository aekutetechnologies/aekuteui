// // import React from "react";

// const Card = () => {
//   return (
//     <div className="container mx-auto grid grid-cols-2">
//       <section className="mt-20">
//         <div className="">
//         <h1 className="text-black">Flip card</h1>
//         </div>
//       </section>
//       <section className="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white">
//       <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
//         <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
//           <div className="absolute backface-hidden border-2 w-full h-full">
//             <img src="/kingsman.jpg" className="w-full h-full" />
//           </div>
//           <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
//             <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
//               <h1 className="text-3xl font-semibold">The King's Man</h1>
//               <p className="my-2">9.0 Rating</p>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
//                 itaque assumenda saepe animi maxime libero non quasi, odit natus
//                 veritatis enim culpa nam inventore doloribus quidem temporibus
//                 amet velit accusamus.
//               </p>
//               <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
//                 Watch Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     </div>
//   );
// };

// export default Card;

import Editor from "@monaco-editor/react";
import { MdPreview } from "react-icons/md";
import { FaFileCode } from "react-icons/fa";
import { useState } from "react";

import { FaUserShield } from "react-icons/fa6";
import { FaUserPen } from "react-icons/fa6";

const Cmain = () => {
  const [showPreview, setShowpreview] = useState(true);
  const [showCode, setShowCode] = useState(false);

  const togglePreview = () => {
    setShowpreview(true);
    setShowCode(false);
  };

  const toggleCode = () => {
    setShowCode(true);
    setShowpreview(false);
  };

  const defaultValueb1 = `
import React from "react";

const Card = () => {
  return (
    <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective mx-auto my-3">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden border-2 w-full h-full">
          <img src="/kingsman.jpg" className="w-full h-full" />
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <h1 className="text-3xl font-semibold">The King's Man</h1>
            <p className="my-2">9.0 Rating</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              itaque assumenda saepe animi maxime libero non quasi, odit natus
              veritatis enim culpa nam inventore doloribus quidem temporibus
              amet velit accusamus.
            </p>
            <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
  `;

  return (
    <div className="container mx-auto mt-10">
      <div
        className="mx-auto pt-20 pb-10 flex flex-col gap-10 "
        id="componentsSection"
      >
        <div className="container" id="basicbutton">
          <ul className="grid gap-2 ">
            <header className="flex justify-between">
              <section>
                <h1 className="font-bold text-4xl mb-2">Flipped 3D Card</h1>
                <p className="">
                  On hover of the card it whill flipped and display about the card
                </p>
              </section>
              <section className="grid grid-row-2  gap-3 font-extrabold">
                <span className="flex px-2 py-1 gap-2 border rounded-xl shadow-xl items-center">
                  <FaUserPen />
                  <h1>Designed by : Smruti Sahoo</h1>
                </span>
                <span className="flex px-2 py-1 gap-2 border rounded-xl shadow-xl items-center">
                  <FaUserShield />
                  <h1>Devloped by :</h1>{" "}
                </span>
              </section>
            </header>
            <main className="container h-auto mt-5 flex flex-col space-y-4 ">
              <section
                id="buttons"
                className="flex flex-cols space-x-6 h-10 text-xl font-bold "
              >
                <button
                  onClick={togglePreview}
                  style={{}}
                  className="flex items-center border rounded-xl text-center px-5 shadow-xl hover:scale-110  hover:transition hover:duration-900 hover:ease-in-out"
                >
                  <MdPreview className="mr-2" />
                  Preview
                </button>
                <button
                  onClick={toggleCode}
                  className="flex items-center border rounded-xl text-center px-5 shadow-xl hover:scale-110  hover:transition hover:duration-900 hover:ease-in-out"
                >
                  <FaFileCode className="mr-2" />
                  Code
                </button>
              </section>
              <section
                id="containers"
                className="rounded-xl shadow-lg shadow-black bg-black"
              >
                <div
                  id="preview"
                  className="flex items-center justify-center"
                  style={{ display: showPreview ? "block" : "none" }}
                >
                  <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective mx-auto my-3">
                    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                      <div className="absolute backface-hidden border-2 w-full h-full">
                        <img src="/kingsman.jpg" className="w-full h-full" />
                      </div>
                      <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                        <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                          <h1 className="text-3xl font-semibold">
                            The King's Man
                          </h1>
                          <p className="my-2">9.0 Rating</p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis itaque assumenda saepe animi maxime
                            libero non quasi, odit natus veritatis enim culpa
                            nam inventore doloribus quidem temporibus amet velit
                            accusamus.
                          </p>
                          <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                            Watch Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="code"
                  className="h-[450px] rounded-xl"
                  style={{ display: showCode ? "block" : "none" }}
                >
                  <Editor
                    defaultLanguage="javascript"
                    theme="vs-dark"
                    defaultValue={defaultValueb1}
                    options={{
                      lineNumbers: "off",
                      fontSize: 14,
                      minimap: {
                        enabled: false,
                      },
                    }}
                  />
                </div>
              </section>
            </main>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cmain;
