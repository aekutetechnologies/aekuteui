// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 shadow-xl fixed w-full top-0 mb-20">
//       <div className="container mx-auto p-3 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="text-white text-2xl font-bold">
//           <span>Aekuet</span> 
//           <span className="text-blue-400">UI</span>
//         </Link>

//         {/* Navigation Links */}
//         <ul className="flex space-x-4">
//           <li>
//             <Link to="/" className="text-white hover:text-gray-300">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/components" className="text-white hover:text-gray-300">
//               Components
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="text-white hover:text-gray-300">
//               About
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>

//   );
// };

// export default Navbar;


// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   return (
//     <motion.nav
//       className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur backdrop-filter bg-opacity-30"
//       initial={{ backgroundColor: "transparent" }}
//       animate={{ backgroundColor: "#020617" }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="container mx-auto flex items-center justify-between py-4">
//         <Link to="/" className="text-white text-lg font-bold">
//           AekuetUI
//         </Link>
//         <div className="flex items-center">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-gray-800 text-white rounded-md py-2 px-4 focus:outline-none"
//           />
//           {/* Replace the links with a search input */}
//           <Link to="/components" className="text-white hover:text-gray-300 ml-4">
//             Components
//           </Link>
//           <Link to="/pricing" className="text-white hover:text-gray-300 ml-4">
//             Pricing
//           </Link>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur backdrop-filter bg-opacity-30"
      initial={{ backgroundColor: "transparent" }}
      animate={{ backgroundColor: "#F9FAFB" }} // Light background color
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-gray-900 text-lg font-bold"> {/* Updated text color */}
          AekuetUI
        </Link>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 text-gray-800 rounded-md py-2 px-4 focus:outline-none" // Lighter input background and text color
          />
          <Link to="/components" className="text-gray-900 hover:text-gray-700 ml-4"> {/* Updated text color */}
            Components
          </Link>
          <Link to="/pricing" className="text-gray-900 hover:text-gray-700 ml-4"> {/* Updated text color */}
            Pricing
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;



