import Editor from "@monaco-editor/react";

const Alert = () => {
  const scrollToComponents = () => {
    const componentsSection = document.getElementById("componentsSection");
    if (componentsSection) {
      componentsSection.scrollIntoView({ behavior: "smooth" });
    }
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
    <div className="container mx-auto">
      <div className="flex flex-col h-screen justify-center text-white">
        <h1 className="font-bold text-6xl">Alerts</h1>
        <p>
        Alerts display brief messages for the user without interrupting their use of the app.
        </p>
        <button
          className="mt-2 w-40 bg-blue-400 text-white font-lg px-5 py-2 rounded hover:bg-gray-400"
          onClick={scrollToComponents}
        >
          Get Started
        </button>
      </div>
      <div
        className="mx-auto pt-20 pb-10 flex flex-col gap-10 "
        id="componentsSection"
      >
        <div className="container" id="basicbutton">
          <ul className="grid gap-2 text-white">
            <h1 className="font-bold text-4xl">Basic Alert (Filled)</h1>
            <p className="text-gray-200">
              The Button comes with three variants: text (default), contained,
              and outlined
            </p>
            <div className="container h-auto mt-5 rounded-lg border border-sky-500 shadow-2xl">
              <div className=" bg-zinc-900 border-b-2 flex items-center justify-center">
                <div className="grid grid-rows-3 gap-5 w-3/4  my-5">
                  <div className="container bg-sky-600 p-3">Sucess</div>
                  <div className="container bg-emerald-500 p-3">Info</div>
                  <div className="container bg-orange-300 p-3">Warning</div>
                  <div className="container bg-red-600 p-3">Error</div>
                </div>
              </div>
              <div className="h-60">
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
            </div>
          </ul>
        </div>
        <div className="container" id="basicbutton">
          <ul className="grid gap-2 text-white">
            <h1 className="font-bold text-4xl">Basic Alert (Outlined)</h1>
            <p className="text-gray-200">
              The Button comes with three variants: text (default), contained,
              and outlined
            </p>
            <div className="container h-auto mt-5 rounded-lg border border-sky-500 shadow-2xl">
              <div className=" bg-zinc-900 border-b-2 flex items-center justify-center">
                <div className="grid grid-rows-3 gap-5 w-3/4  my-5">
                  <div className="container bg-sky-600 p-3">Sucess</div>
                  <div className="container bg-emerald-500 p-3">Info</div>
                  <div className="container bg-orange-300 p-3">Warning</div>
                  <div className="container bg-red-600 p-3">Error</div>
                </div>
              </div>
              <div className="h-60">
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
            </div>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Alert;
