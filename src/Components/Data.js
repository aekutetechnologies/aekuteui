// import React, { useEffect, useState } from 'react';

// const Data = () => {
//     const [formDataList, setFormDataList] = useState([]);
//     const [outputData, setOutputData] = useState({});
//     const [selectedId, setSelectedId] = useState(null);

//     useEffect(() => {

//         const existingFormDataString = localStorage.getItem('formData');

//         if (existingFormDataString) {
//             try {
//                 const existingFormData = JSON.parse(existingFormDataString);
//                 setFormDataList(existingFormData);
//             } catch (error) {
//                 console.error('Error parsing existing form data:', error);
//             }
//         }
//     }, []);

//     const compileAndExecute = async (code) => {
//         try {
//             const result = await eval(code);
//             return result;
//         } catch (error) {
//             console.error('Error compiling/executing code:', error);
//             return null;
//         }
//     };

//     const onViewClick = async (id, code) => {
//         const result = await compileAndExecute(code);
//         setOutputData({ ...outputData, [id]: result });
//         setSelectedId(id);
//     };

//     const onCloseOutput = () => {
//         setOutputData({});
//         setSelectedId(null);
//     };

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold mb-4">All Components</h1>

//             {formDataList.map((formData) => (
//                 <div key={formData.id} className="mb-6">
//                     {selectedId === formData.id ? (
//                         <div className="mt-4 border border-gray-300 rounded-lg p-4">
//                             <div className="flex justify-between items-center mb-2">
//                                 <h3 className="text-lg font-semibold">Output</h3>
//                                 <button className="text-red-500" onClick={onCloseOutput}>
//                                     Close
//                                 </button>
//                             </div>
//                             <div className="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
//                                 {outputData[formData.id]}
//                             </div>
//                         </div>
//                     ) : (
//                         <>
//                             <h2 className="text-xl font-semibold mb-2">{formData.heading}</h2>
//                             <h3 className="text-xl font-semibold mb-2">{formData.title}</h3>

//                             <button
//                                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                                 onClick={() => onViewClick(formData.id, formData.code)}
//                             >
//                                 View
//                             </button>

//                             <pre
//                                 id={`code-container-${formData.id}`}
//                                 className="w-full h-[400px] mt-4 p-4 border border-gray-300 rounded-lg overflow-auto"
//                                 style={{
//                                     fontFamily: 'monospace',
//                                     fontSize: '14px',
//                                     lineHeight: '1.5',
//                                     whiteSpace: 'pre-wrap',
//                                 }}
//                             >
//                                 {formData.code}
//                             </pre>
//                         </>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Data;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Data = () => {
  const { id } = useParams();
  const [componentData, setComponentData] = useState(null);

  useEffect(() => {
    const formDataString = localStorage.getItem('formData');

    if (formDataString) {
      try {
        const formData = JSON.parse(formDataString);
        const selectedComponent = formData.find(data => data.title === parseInt(title));
        setComponentData(selectedComponent);
      } catch (error) {
        console.error('Error parsing form data:', error);
      }
    }
  }, [id]);

  if (!componentData) {
    return <div className='mt-20'>Loading...</div>;
  }

  const { title, heading, code } = componentData;

  return (
    <div className='mt-30'>
      <h1 className='mt-30'>Details of {title}</h1>
      <h2>{heading}</h2>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default Data;

