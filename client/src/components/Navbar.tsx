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
        <Link to="/" className="text-gray-900 text-4xl font-extrabold"> {/* Updated text color */}
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



