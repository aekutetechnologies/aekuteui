// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Home = () => {
//   const [isMouseEnter, setIsMouseEnter] = useState(false);
//   console.log("ismouseenter", isMouseEnter);

//   return (
//     <div className="container mx-auto">
//       <div className="flex flex-row h-screen justify-center items-center text-white">
//         <div id="firstCard" className="w-1/2 b">
//           <div id="hero" className="h-96 flex flex-col justify-center">
//             <h1 className="font-bold text-6xl">
//               <span>Aekute</span>
//               <span className="text-blue-400">UI</span>
//             </h1>
//             <p className="">Build some open-source Tailwind CSS components</p>
//             <div className="grid grid-cols-2 gap-4 w-3/4">
//               <button
//                 className="w-auto mt-2 bg-blue-400 text-white font-lg px-5 py-2 rounded hover:bg-gray-400"
//                 onMouseEnter={() => setIsMouseEnter(true)}
//                 onMouseLeave={() => setIsMouseEnter(false)}
//               >
//                 <Link to="/Components">All Components</Link>
//               </button>

//               <button className="w-auto mt-2 bg-blue-400 text-white font-lg px-5 py-2 rounded hover:bg-gray-400">
//                 <Link to="/About">Build Components </Link>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div id="secondCard" className="w-1/2 bg-red-600 h-[500px] relative">
//           <img src="./bg.jpg" alt="" className="absolute w-full h-full" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import {  animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
// import { FiArrowRight } from "react-icons/fi";

// const COLORS = ['#13FFAA', '#1E67C6', '#CE84CF','#DD335C']
// const Home = () => {

//   const color = useMotionValue(COLORS[0])
//   const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%,${color} )`;
//   const border = useMotionTemplate `1px solid ${color}`
//   const boxShadow = useMotionTemplate `0px 4px 24px ${color}`

//   useEffect(() => {
//     animate(color,COLORS, {
//       ease: "easeInOut",
//       duration: 10,
//       repeat: Infinity,
//       repeatType: "mirror"
//     })
//   },[])

//   return (
//     <motion.section
//       style={{
//         backgroundImage,
//       }}
//     >
//       <div className="container mx-auto">
//         <div className="relative z-10 flex flex-col h-screen justify-center items-center text-white">
//           <h1 className="max-w-3xl text-6xl font-bold">Animate your website</h1>
//           <p className="max-w-lg my-6 text-center text-base leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt atque numquam aut accusantium voluptates fuga dolores hic mollitia tempore?</p>

//           <motion.button
//             whileHover={{
//               scale: 1.015,
//             }}
//             whileTap={{
//               scale: 0.985,
//             }}
//             style={{border,boxShadow}}
//             className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 "
//           >
//            <Link to='/pricing'> Bulid Components</Link>
//             <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"/>
//           </motion.button>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Home;

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const COLORS = ['#FFC700', '#FF6B6B', '#48CAE4', '#5E60CE']; // Light theme colors
const Home = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #FFFFFF 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    });
  }, []);

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
    >
      <div className="container mx-auto">
        <div className="relative z-10 flex flex-col h-screen justify-center items-center text-gray-900">
          <h1 className="max-w-3xl text-6xl font-bold">Animate your website</h1>
          <p className="max-w-lg my-6 text-center text-base leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt atque numquam aut accusantium voluptates fuga dolores hic mollitia tempore?</p>

          <motion.button
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            style={{ border, boxShadow }}
            className="group relative flex items-center gap-1.5 rounded-full bg-gray-200 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-300"
          >
            <Link to="/pricing" className="text-gray-900 font-bold">
              Build Components
            </Link>
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;

