import Editor from "@monaco-editor/react";
import { MdPreview } from "react-icons/md";
import { FaFileCode } from "react-icons/fa";
import { useState } from "react";

import { FaUserShield } from "react-icons/fa6";
import { FaUserPen } from "react-icons/fa6";

const Alert = () => {
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
                <h1 className="font-bold text-4xl">Basic Alert (Filled)</h1>
                <p className="">
                  The Button comes with three variants: text (default),
                  contained, and outlined
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
            <div className="container h-auto mt-5 flex flex-col space-y-4 ">
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
                  className="flex items-center justify-center p-5"
                  style={{ display: showPreview ? "block" : "none" }}
                >
                  <div className="flex flex-col justify-center items-center gap-5 w-[800px]">
                    <div className="container bg-sky-600 p-3">Sucess</div>
                    <div className="container bg-emerald-500 p-3">Info</div>
                    <div className="container bg-orange-300 p-3">Warning</div>
                    <div className="container bg-red-600 p-3">Error</div>
                    <div>
                      <h1 className="text-white">onclick to alert</h1>
                    </div>
                  </div>
                </div>
                <div
                  id="code"
                  className="h-72 rounded-xl"
                  style={{ display: showCode ? "block " : "none" }}
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
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Alert;
