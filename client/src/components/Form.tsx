// // src/Form.tsx
// import { useState, ChangeEvent, FormEvent } from 'react';

// interface FormData {
//     title: string;
//     heading: string;
//     code: string;
// }

// const Form = () => {
//     const [formData, setFormData] = useState<FormData>({
//         title: '',
//         heading: '',
//         code: '',
//     });

//     const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://localhost:5000/api/saveFormData', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 alert('Form data saved successfully!');
//                 setFormData({ title: '', heading: '', code: '' });
//             } else {
//                 throw new Error('Failed to save form data!');
//             }
//         } catch (error) {
//             console.error('Error saving form data:', error);
//             alert('Failed to save form data!');
//         }
//     };

//     return (
//         <div className="flex h-screen justify-center items-center">
//             <div className="flex flex-col gap-2 border-solid border-2 border-black">
//                 <h1>Create Component</h1>
//                 <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center items-center">
//                     <div className="flex flex-col text-left px-5">
//                         <label>Title:</label>
//                         <input
//                             type="text"
//                             name="title"
//                             value={formData.title}
//                             onChange={handleChange}
//                             className="w-[350px] outline-none bg-indigo-100"
//                         />
//                     </div>
//                     <div className="flex flex-col text-left px-5">
//                         <label>Heading:</label>
//                         <input
//                             type="text"
//                             name="heading"
//                             value={formData.heading}
//                             onChange={handleChange}
//                             className="w-[350px] outline-none bg-indigo-100"
//                         />
//                     </div>
//                     <div className="flex flex-col text-left px-5">
//                         <label>Code:</label>
//                         <textarea
//                             name="code"
//                             value={formData.code}
//                             onChange={handleChange}
//                             className="w-[350px] h-[150px] outline-none bg-indigo-100"
//                         ></textarea>
//                     </div>
//                     <button type="submit" className="w-[120px] flex justify-center items-center bg-blue-500">
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Form;

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  title: string;
  heading: string;
  code: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    heading: "",
    code: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/saveFormData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Form data save Sucessfully!!!");
        setFormData({ title: "", heading: "", code: "" });
      } else {
        throw new Error("Failed to Save data");
      }
    } catch (error) {
      console.error("Error saving form data", error);
      alert("Failed to save frorm data");
    }
  };

  return (
    <div className="mt-20">
      <div className="container mx-auto">
        <div className="w-8/12  rounded-xl mx-auto shodow-lg overfloe-hidden">
          <div className="py-10">
            <h1 className="text-center font-bold text-3xl">Build Component</h1>
            <p className="text-center text-lg">Make your own component</p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-5">
              {/* <label htmlFor="">Tittle</label> */}
              <input
                className="outline-none border border-gray-400 py-1 px-1 rounded-lg h-10"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                id=""
                placeholder="Tittle"
              />
              <input
                className="outline-none border border-gray-400 py-1 px-1 rounded-lg h-10"
                type="text"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
                id=""
                placeholder="Heading"
              />
            </div>

            <div className="flex flex-col mt-8">
              <textarea
                name="code"
                value={formData.code}
                onChange={handleChange}
                className="outline-none border border-gray-400 py-1 px-1 rounded-lg h-40"
                placeholder="Code...."
              ></textarea>
            </div>

            <div className="flex flex-col mt-8">
              <button type="submit" className="bg-blue-400 mx-auto px-10 py-2 rounded-lg">
                Build
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
