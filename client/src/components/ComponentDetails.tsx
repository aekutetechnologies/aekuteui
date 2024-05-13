// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Editor from "@monaco-editor/react";

// interface Component {
//   id: number;
//   heading: string;
//   code: string;
// }

// interface ComponentData {
//   id: number;
//   component_name: string;
//   components: Component[];
// }

// const ComponentDetail: React.FC = () => {
//   const { name } = useParams<{ name: string }>();
//   const [componentData, setComponentData] = useState<ComponentData | null>(
//     null
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/getDataJson");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data.json");
//         }
//         const data: ComponentData[] = await response.json();
//         const selectedComponent = data.find(
//           (data) => data.component_name === name
//         );
//         if (selectedComponent) {
//           setComponentData(selectedComponent);
//         } else {
//           throw new Error(`Component ${name} not found`);
//         }
//       } catch (error) {
//         console.error(`Error fetching component data for ${name}:`, error);
//       }
//     };

//     fetchData();
//   }, [name]); // Re-fetch data when 'name' parameter changes

//   if (!componentData) {
//     return <p>Loading component data...</p>;
//   }

//   const { component_name, components } = componentData;

//   return (
//     <div className="mt-20">
//       <div className="container mx-auto">
//         <h3 className="font-bold text-4xl">{component_name} Components</h3>
//         {components.map((component) => (
//           <div key={component.id} className="mt-5">
//             <h3 className="font-bold text-2xl">{component.heading}</h3>
//             <button className="mt-2 bg-gray-800 text-white px-5 py-2">
//               View
//             </button>
//             <div className="container h-56 mt-2 mb-2 rounded-lg border-2 shadow-2xl">
//               <Editor
//                 defaultLanguage="javascript"
//                 theme="vs-dark"
//                 defaultValue={component.code}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ComponentDetail;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";

interface Component {
  id: number;
  heading: string;
  code: string;
}

interface ComponentData {
  id: number;
  component_name: string;
  components: Component[];
}

const ComponentDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [componentData, setComponentData] = useState<ComponentData | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getDataJson");
        if (!response.ok) {
          throw new Error("Failed to fetch data.json");
        }
        const data: ComponentData[] = await response.json();
        const selectedComponent = data.find(
          (data) => data.component_name === name
        );
        if (selectedComponent) {
          setComponentData(selectedComponent);
        } else {
          throw new Error(`Component ${name} not found`);
        }
      } catch (error) {
        console.error(`Error fetching component data for ${name}:`, error);
      }
    };

    fetchData();
  }, [name]); // Re-fetch data when 'name' parameter changes

  const handleViewClick = (code: string) => {
    try {
      if (!code.trim()) {
        console.warn("Empty code string provided.");
        return;
      }
  
      console.log("Executing code:", code);
  
      const executableFunction = new Function(code);
      console.log("Created function:", executableFunction);
  
      const result = executableFunction();
      console.log("Execution result:", result);
  
      // Optionally, display the result in UI or perform other actions based on the result
    } catch (error) {
      console.error("Error executing code:", error);
      // Handle and display errors, if any
    }
  };
  
  
  
  

  if (!componentData) {
    return <p>Loading component data...</p>;
  }

  const { component_name, components } = componentData;

  return (
    <div className="mt-20">
      <div className="container mx-auto">
        <h3 className="font-bold text-4xl">{component_name} Components</h3>
        {components.map((component) => (
          <div key={component.id} className="mt-5">
            <h3 className="font-bold text-2xl">{component.heading}</h3>
            <button
              className="mt-2 bg-gray-800 text-white px-5 py-2"
              onClick={() => handleViewClick(component.code)}
            >
              View
            </button>
            <div className="container h-56 mt-2 mb-2 rounded-lg border-2 shadow-2xl">
              <Editor
                defaultLanguage="javascript"
                theme="vs-dark"
                defaultValue={component.code}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentDetail;
