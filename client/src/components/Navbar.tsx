import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-xl fixed w-full top-0 mb-20">
      <div className="container mx-auto p-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          <span>Aekuet</span> 
          <span className="text-blue-400">UI</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/components" className="text-white hover:text-gray-300">
              Components
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;

