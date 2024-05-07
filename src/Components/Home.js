// import React, { useState, useEffect } from 'react';

// const Home = () => {
//   const [titles, setTitles] = useState([])

//   useEffect(() => {
//     const formDataString = localStorage.getItem('formData');

//     if (formDataString) {
//       try {
//         const formData = JSON.parse(formDataString);
//         const extractedTitles = formData.map(data => data.title);
//         setTitles(extractedTitles);
//       } catch (error) {

//         console.error('Error parsing form data:', error);
//       }
//     }
//   }, []);

//   return (
//     <div className='mt-20 '>
//       <h1 className='font-bold text-5xl'>AkeuteUi</h1>
//       <p>web bulid some opensource tailwindcss components</p>
//       <div className='flex justify-center '>
//         <div className='w-[600px]'>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat iusto laboriosam perspiciatis commodi beatae deleniti, maxime architecto explicabo, cumque ducimus doloribus libero nihil assumenda quasi nulla voluptatum a nobis! Odio omnis nobis eum </p>
//         </div>
//       </div>
//       <div className="container mx-auto mt-8">
//         <h1 className="text-2xl font-bold mb-4 text-left">All Components</h1>
//         <div className="grid grid-cols-4 gap-4">
//           {titles.map((title, index) => (
//             <div key={index} className="bg-gray-200 p-4 rounded shadow">
//               <p className="text-lg font-bold">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const formDataString = localStorage.getItem('formData');

    if (formDataString) {
      try {
        const formData = JSON.parse(formDataString);
        const extractedTitles = formData.map(data => data.title);
        setTitles(extractedTitles);
      } catch (error) {
        console.error('Error parsing form data:', error);
      }
    }
  }, []);

  return (
    <div className='mt-20'>
      <h1 className='font-bold text-5xl'>AkeuteUi</h1>
      <p>web build some open-source Tailwind CSS components</p>
      <div className='flex justify-center'>
        <div className='w-[600px]'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat iusto laboriosam
            perspiciatis commodi beatae deleniti, maxime architecto explicabo, cumque ducimus
            doloribus libero nihil assumenda quasi nulla voluptatum a nobis! Odio omnis nobis eum
          </p>
        </div>
      </div>
      <div className='container mx-auto mt-8'>
        <h1 className='text-2xl font-bold mb-4 text-left'>All Components</h1>
        <div className='grid grid-cols-4 gap-4'>
          {titles.map((title, index) => (
            <Link key={index} to={`/component/${encodeURIComponent(title)}`}>
              {/* Use Link to navigate to a new route */}
              <div className='bg-gray-200 p-4 rounded shadow cursor-pointer'>
                <p className='text-lg font-bold'>{title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
