import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const Alert = () => {
  return (
    <div className="mt-20">
      <div className="container mx-auto">
        <h3 className="font-bold text-4xl ">Alert Components</h3>
        <h3 className="font-bold text-2xl mt-5">Alert Popup</h3>
        <button className="mt-5 bg-gray-800 text-white px-5 py-2 hover:bg-gray-400 text-black">View</button>

        <div className="container h-56 mt-5 rounded border-2 border-gray-800 shadow-2xl">
          <Editor
            defaultLanguage="javascript"
            theme="vs-dark"
            defaultValue="// some comment"
          />
          ;
        </div>
      </div>
    </div>
  );
};

export default Alert;
