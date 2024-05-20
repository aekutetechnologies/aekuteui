import Editor from "@monaco-editor/react";

const Button = () => {
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
      {/* <div className="flex flex-col h-screen justify-center text-white">
        <h1 className="font-bold text-6xl">Buttons</h1>
        <p>
          Buttons allow users to take actions and make choices with a single
          tap.
        </p>
        <button
          className="mt-2 w-40 bg-blue-400 text-white font-lg px-5 py-2 rounded hover:bg-gray-400"
          onClick={scrollToComponents}
        >
          Get Started
        </button>
      </div> */}
      <div
        className="mx-auto pt-20 pb-10 flex flex-col gap-10 "
        id="componentsSection"
      >
        <div className="container" id="basicbutton">
          <ul className="grid gap-2 text-white">
            <h1 className="font-bold text-4xl">Basic Button</h1>
            <p className="text-gray-200">
              The Button comes with three variants: text (default), contained,
              and outlined
            </p>
            <div className="container h-72 mt-5 rounded-lg border border-sky-500 shadow-2xl">
              <div className="h-1/4 bg-zinc-900 border-b-2 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-5">
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
              </div>
              <div className="h-3/4">
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
        <div className="container" id="textbutton">
          <ul className="grid gap-2 text-white">
            <h1 className="font-bold text-4xl">Text Button</h1>
            <p className="text-gray-200">
              Text buttons are typically used for less-pronounced actions,
              including those located: in dialogs, in cards. In cards, text
              buttons help maintain an emphasis on card content.
            </p>
            <div className="container h-72 mt-5 rounded-lg border border-sky-500 shadow-2xl">
              <div className="h-1/4 bg-zinc-900 border-b-2 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-5">
                  <button className="hover:bg-sky-900 rounded-lg p-3 font-bold">
                    PRIMARY
                  </button>
                  <button className="hover:bg-sky-900 rounded-lg p-3 font-bold">
                    DISABLED
                  </button>
                  <button className="hover:bg-sky-900 rounded-lg p-3 font-bold">
                    LINK
                  </button>
                </div>
              </div>
              <div className="h-3/4">
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
        <div className="container" id="containedButton">
          <ul className="grid gap-2 text-white">
            <h1 className="font-bold text-4xl">Contained Button</h1>
            <p className="text-gray-200">
              Contained buttons are high-emphasis, distinguished by their use of
              elevation and fill. They contain actions that are primary to your
              app.
            </p>
            <div className="container h-72 mt-5 rounded-lg border border-sky-500 shadow-2xl">
              <div className="h-1/4 bg-zinc-900 border-b-2 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-5">
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
              </div>
              <div className="h-3/4">
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
            <h1 className="font-bold text-4xl">Basic Button</h1>
            <p className="text-gray-200">
              The Button comes with three variants: text (default), contained,
              and outlined
            </p>
            <div className="container h-72 mt-5 rounded-lg border border-sky-500 shadow-2xl">
              <div className="h-1/4 bg-zinc-900 border-b-2 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-5">
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
              </div>
              <div className="h-3/4">
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
            <h1 className="font-bold text-4xl">Basic Button</h1>
            <p className="text-gray-200">
              The Button comes with three variants: text (default), contained,
              and outlined
            </p>
            <div className="container h-72 mt-5 rounded-lg border border-sky-500 shadow-2xl">
              <div className="h-1/4 bg-zinc-900 border-b-2 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-5">
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
              </div>
              <div className="h-3/4">
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

export default Button;
